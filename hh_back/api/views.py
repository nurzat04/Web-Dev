from django.shortcuts import render, redirect, get_object_or_404
from .models import Company, Vacancy
from .forms import CompanyForm, VacancyForm
from .serializers import CompanySerializer, VacancySerializer
from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView #for class
from django.urls import reverse_lazy#for class

#function based views:
def companieslist(request):
    companies = Company.objects.all()
    serializer = CompanySerializer(companies, many=True)
    return JsonResponse(serializer.data, safe=False)

def companiesdetail(request, pk):
    company = get_object_or_404(Company, pk=pk)
    serializer = CompanySerializer(company)
    return JsonResponse(serializer.data)

def company_list(request):
    companies = Company.objects.all()
    return render(request, 'company_list.html', {'companies': companies})

def company_detail(request, pk):
    company = get_object_or_404(Company, pk=pk)
    return render(request, 'company_detail.html', {'company': company})
def company_create(request):
    if request.method == 'POST':
        serializer = CompanyForm(request.POST)
        if serializer.is_valid():
            serializer.save()
            return redirect('company_list')
    else:
        serializer = CompanyForm()
    return render(request, 'company_form.html', {'form': serializer})

def company_update(request, pk):
    company = get_object_or_404(Company, pk=pk)
    if request.method == 'POST':
        serializer = CompanyForm(request.POST, instance=company)
        if serializer.is_valid():
            serializer.save()
            return redirect('company_list')
    else:
        serializer = CompanyForm(instance=company)
    return render(request, 'company_form.html', {'form': serializer})

def company_delete(request, pk):
    company = get_object_or_404(Company, pk=pk)
    if request.method == 'POST':
        company.delete()
        return redirect('company_list')
    return render(request, 'company_confirm_delete.html', {'company': company})

def vacancieslist(request):
    vacancies = Vacancy.objects.all()
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)

def vacanciesdetail(request, pk):
    vacancy = get_object_or_404(Vacancy, pk=pk)
    serializer = VacancySerializer(vacancy)
    return JsonResponse(serializer.data)

def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    return render(request, 'vacancy_list.html', {'vacancies': vacancies})

def vacancy_detail(request, pk):
    vacancy = get_object_or_404(Vacancy, pk=pk)
    return render(request, 'vacancy_detail.html', {'vacancy': vacancy})

def vacancy_create(request):
    if request.method == 'POST':
        serializer = VacancyForm(request.POST)
        if serializer.is_valid():
            serializer.save()
            return redirect('vacancy_list')
    else:
        serializer = VacancyForm()
    return render(request, 'vacancy_form.html', {'form': serializer})

def vacancy_update(request, pk):
    vacancy = get_object_or_404(Vacancy, pk=pk)
    if request.method == 'POST':
        serializer = VacancyForm(request.POST, instance=vacancy)
        if serializer.is_valid():
            serializer.save()
            return redirect('vacancy_list')
    else:
        serializer = VacancyForm(instance=vacancy)
    return render(request, 'vacancy_form.html', {'form': serializer})

def vacancy_delete(request, pk):
    vacancy = get_object_or_404(Vacancy, pk=pk)
    if request.method == 'POST':
        vacancy.delete()
        return redirect('vacancy_list')
    return render(request, 'vacancy_confirm_delete.html', {'vacancy': vacancy})
def company_vacancies(request, id):
    company = get_object_or_404(Company, pk=id)
    vacancys = Vacancy.objects.filter(company=company)
    data = [{'id': v.id, 'name': v.name, 'description': v.description, 'salary': v.salary, 'company': v.company.name}for v in vacancys]
    return JsonResponse(data, safe=False)

#class based views:
class CompanyListView(ListView):
    model = Company
    template_name = 'company_list.html'
    context_object_name = 'companies'

class CompanyDetailView(DetailView):
    model = Company
    template_name = 'company_detail.html'
    context_object_name = 'company'

class CompanyCreateView(CreateView):
    model = Company
    template_name = 'company_form.html'
    fields = ['name', 'description', 'city', 'address']
    success_url = reverse_lazy('company_list')

class CompanyUpdateView(UpdateView):
    model = Company
    template_name = 'company_form.html'
    fields = ['name', 'description', 'city', 'address']
    success_url = reverse_lazy('company_list')

class CompanyDeleteView(DeleteView):
    model = Company
    template_name = 'company_confirm_delete.html'
    success_url = reverse_lazy('company_list')

class VacancyListView(ListView):
    model = Vacancy
    template_name = 'vacancy_list.html'
    context_object_name = 'vacancies'

class VacancyDetailView(DetailView):
    model = Vacancy
    template_name = 'vacancy_detail.html'
    context_object_name = 'vacancy'

class VacancyCreateView(CreateView):
    model = Vacancy
    template_name = 'vacancy_form.html'
    fields = ['name', 'description', 'salary', 'company']
    success_url = reverse_lazy('vacancy_list')

class VacancyUpdateView(UpdateView):
    model = Vacancy
    template_name = 'vacancy_form.html'
    fields = ['name', 'description', 'salary', 'company']
    success_url = reverse_lazy('vacancy_list')

class VacancyDeleteView(DeleteView):
    model = Vacancy
    template_name = 'vacancy_confirm_delete.html'
    success_url = reverse_lazy('vacancy_list')