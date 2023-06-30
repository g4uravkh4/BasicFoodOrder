import { Component } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  max = 5;
  rate = 2;
  isReadonly = false;
  title = 'foodorder';
  rating = 3.5; // Initial star rating value
  starRating = 0; 
  selectionMode: string = 'StarRating';
  }
