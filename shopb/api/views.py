from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt

from .models import Product, Category

# List of all Products
def all_products(request):
    products = Product.objects.all()
    data = [{'id': product.id, 'name': product.name, 'price': product.price, 'description': product.description,
             'image': product.image, 'url': product.url, 'rating': product.rating, 'likes': product.likes,
             'liked': product.liked, 'count': product.count, 'is_active': product.is_active,
             'category': product.category.name} for product in products]
    return JsonResponse(data, safe=False)

# Get one Product
def get_product(request, id):
    product = get_object_or_404(Product, pk=id)
    data = {'id': product.id, 'name': product.name, 'price': product.price, 'description': product.description,
            'image': product.image, 'url': product.url, 'rating': product.rating, 'likes': product.likes,
            'liked': product.liked, 'count': product.count, 'is_active': product.is_active,
            'category': product.category.name}
    return JsonResponse(data)

# List of all Categories
def all_categories(request):
    categories = Category.objects.all()
    data = [{'id': category.id, 'name': category.name} for category in categories]
    return JsonResponse(data, safe=False)

# Get one Category
def get_category(request, id):
    category = get_object_or_404(Category, pk=id)
    data = {'id': category.id, 'name': category.name}
    return JsonResponse(data)

# List of Products by Category
def products_by_category(request, id):
    category = get_object_or_404(Category, pk=id)
    products = Product.objects.filter(category=category)
    data = [{'id': product.id, 'name': product.name, 'price': product.price, 'description': product.description,
             'image': product.image, 'url': product.url, 'rating': product.rating, 'likes': product.likes,
             'liked': product.liked, 'count': product.count, 'is_active': product.is_active,
             'category': product.category.name} for product in products]
    return JsonResponse(data, safe=False)

