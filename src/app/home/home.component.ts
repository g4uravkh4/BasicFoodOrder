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
  @Input() SelectedStar = 0;
  maxRatingArr: any = [];
  foods: Foods[] = [];
  previousSelection = 0;

  HandleMouseEnter(index: number) {
    this.SelectedStar = index + 1;
  }

  HandleMouseLeave() {
    if (this.previousSelection !== 0) {
      this.SelectedStar = this.previousSelection;
    } else {
      this.SelectedStar = 0;
    }
  }

  constructor(private fs: FoodService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.maxRatingArr = Array(this.maxRating).fill(0);

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
