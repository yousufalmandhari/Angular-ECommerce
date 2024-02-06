// create.component.ts

import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './Create.html'
})
export class CreateComponent {
  productName: string = '';
  productPrice: number = 0;
  productImage: File | null = null;

  addProduct() {
    if (this.productName && this.productPrice && this.productImage) {
      // Perform further processing (e.g., add to an array or send to server)
      console.log('Product Name:', this.productName);
      console.log('Product Price:', this.productPrice);
      console.log('Product Image:', this.productImage);

      // Reset form fields
      this.productName = '';
      this.productPrice = 0;
      this.productImage = null;
    } else {
      alert('Please fill in all the required fields.');
    }
  }

  handleImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.productImage = file;
    }
  }
}
