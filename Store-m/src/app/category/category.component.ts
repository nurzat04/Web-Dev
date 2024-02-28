import { Component } from '@angular/core';
import { categories, Category } from '../categories';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent extends ProductListComponent {
  categories: Category[] = categories;
  selectedCategory: Category | null = null; // Initialize selectedCategory to null

  selectCategory(category: Category): void {
    this.selectedCategory = category; // Update selectedCategory when a button is clicked
  }
}
