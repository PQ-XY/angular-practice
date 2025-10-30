import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  items = [
    new WishItem('Learn Angular', true),
    new WishItem('Build an app'),
    new WishItem('Deploy to production')
  ];
  title = 'wishlist';

  toggleItem() {
    this.items[0].isComplete = !this.items[0].isComplete;
  }
}
