import { Component } from '@angular/core';
import { products, Product } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = [...products];

  share(product: Product): void {
    const sharingLink = `Check out ${product.name} at ${product.url}`;

    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(
      sharingLink
    )}`;
    const telegramLink = `https://t.me/share/url?url=${encodeURIComponent(
      product.url
    )}&text=${encodeURIComponent(sharingLink)}`;

    const choice = window.prompt(
      'Choose how you want to share:\n1. WhatsApp\n2. Telegram'
    );

    if (choice === '1') {
      window.open(whatsappLink, '_blank');
    } else if (choice === '2') {
      window.open(telegramLink, '_blank');
    } else {
      console.warn('Invalid choice or sharing not performed.');
    }
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
