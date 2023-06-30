import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Input() maxRating = 5;
  manRatingArr: any = [];
  foods: Foods[] = [];

  constructor(private fs: FoodService, private router: ActivatedRoute) {}

  ngOnInit(): void {

    this.manRatingArr = Array(this.maxRating).fill(0);
    this.router.params.subscribe((params) => {
      if (params['searchItem'])
        this.foods = this.fs
          .getAll()
          .filter((food) =>
            food.name.toLowerCase().includes(params['searchItem'].toLowerCase())
          );
      else if (params['tag'])
        this.foods = this.fs.getAllFoodByTag(params['tag']);
      else this.foods = this.fs.getAll();
    });
  }
}
