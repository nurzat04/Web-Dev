from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.all_products, name='all_products'),
    path('products/<int:id>/', views.get_product, name='get_product'),
    path('categories/', views.all_categories, name='all_categories'),
    path('categories/<int:id>/', views.get_category, name='get_category'),
    path('categories/<int:id>/products/', views.products_by_category, name='products_by_category'),
]
