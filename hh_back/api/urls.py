from django.urls import path
from . import views #for function
from .views import * #for class

urlpatterns = [
    #function based views:
    path('companies/', views.company_list, name='company_list'),
    path('companieslist/', views.companieslist, name='companieslist'),
    path('companiesdetails', views.companiesdetail, name='companiesdetail'),
    path('company/<int:pk>/', views.company_detail, name='company_detail'),
    path('company/create/', views.company_create, name='company_create'),
    path('company/update/<int:pk>/', views.company_update, name='company_update'),
    path('company/delete/<int:pk>/', views.company_delete, name='company_delete'),
    path('vacancies/', views.vacancy_list, name='vacancy_list'),
    path('vacancieslist', views.vacancieslist, name='vacancieslist'),
    path('vacanciesdetails', views.vacanciesdetail, name='vacanciesdetail'),
    path('vacancy/<int:pk>/', views.vacancy_detail, name='vacancy_detail'),
    path('vacancy/create/', views.vacancy_create, name='vacancy_create'),
    path('vacancy/update/<int:pk>/', views.vacancy_update, name='vacancy_update'),
    path('vacancy/delete/<int:pk>/', views.vacancy_delete, name='vacancy_delete'),
    path('companies/<int:id>/vacancies/', views.company_vacancies),
    #class based views:
    path('companylists/', CompanyListView.as_view(), name='company_list'),
    path('companylists/<int:pk>/', CompanyDetailView.as_view(), name='company_detail'),
    path('companylist/create/', CompanyCreateView.as_view(), name='company_create'),
    path('companylist/update/<int:pk>/', CompanyUpdateView.as_view(), name='company_update'),
    path('companylist/delete/<int:pk>/', CompanyDeleteView.as_view(), name='company_delete'),
    path('vacancylists/', VacancyListView.as_view(), name='vacancy_list'),
    path('vacancylists/<int:pk>/', VacancyDetailView.as_view(), name='vacancy_detail'),
    path('vacancylist/create/', VacancyCreateView.as_view(), name='vacancy_create'),
    path('vacancylist/update/<int:pk>/', VacancyUpdateView.as_view(), name='vacancy_update'),
    path('vacancylist/delete/<int:pk>/', VacancyDeleteView.as_view(), name='vacancy_delete'),
]
