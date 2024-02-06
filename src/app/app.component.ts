import {Component, NgModule} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgOptimizedImage, NgIf, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'untitled2';

  isLoggedIn:boolean = true;

  // Simulate login functionality
  login() {
    this.isLoggedIn = true;
  }

  products = [
    {
      name: 'Ring',
      price: 200,
      image: 'p7.png',
    },
    {
      name: 'Necklace',
      price: 150,
      image: 'p7.png',
    },
  ];

  addToCart(product: { image: string; price: number; name: string } | { image: string; price: number; name: string }) {

  }

  constructor(private router: Router) {}

  goToPage(param: string) {
    this.router.navigate(['/create']);
  }
}

