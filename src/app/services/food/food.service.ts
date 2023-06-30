import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAllFoodByTag(tag:string) : Foods[]{
    if (tag== 'All')
    return this.getAll()
    else
    return this.getAll().filter(food => food.tags?.includes(tag));
  }
getAllTag(): Tag[]{
  return[
    {name: 'All', count: 14 },
    {name: 'Fast Food', count: 1 },
    {name: 'Italian', count: 1 },
    {name: 'Cheese', count: 1 },
    {name: 'American', count: 1 },
    {name: 'Beef', count: 1 },
    {name: 'Seafood', count: 1 },
    {name: 'Raw', count: 1 },
  ]
}

  getAll(): Foods[]{
    return [
        {
          id: 1,
          price: 100,
          name: "Pizza",
          favorite: true,
          star: 4,
          imageUrl: "/assets/food-1.jpg",
          cookTime: "30 minutes",
          origins: ["Italy"],
          tags: ["Italian", "Fast Food", "Cheese"],
        },
        {
          id: 2,
          price: 500,
          name: "Burger",
          favorite: false,
          star: 3,
          imageUrl: "/assets/food-2.jpg",
          cookTime: "15 minutes",
          origins: ["United States"],
          tags: ["American", "Fast Food", "Beef"],
        },
        {
          id: 3,
          price: 800,
          name: "Sushi",
          favorite: true,
          star: 5,
          imageUrl: "/assets/food-3.jpg",
          cookTime: "45 minutes",
          origins: ["Japan"],
          tags: ["Japanese", "Seafood", "Raw"],
        },
        {
          id: 4,
          price: 120,
          name: "Pasta",
          favorite: false,
          star: 4,
          imageUrl: "/assets/food-4.jpg",
          cookTime: "20 minutes",
          origins: ["Italy"],
          tags: ["Italian", "Pasta", "Tomato Sauce"],
        },
        {
          id: 5,
          price: 600,
          name: "Tacos",
          favorite: true,
          star: 3,
          imageUrl: "/assets/food-5.jpg",
          cookTime: "25 minutes",
          origins: ["Mexico"],
          tags: ["Mexican", "Street Food", "Tortilla"],
        },
        {
          id: 600,
          price: 15,
          name: "Steak",
          favorite: false,
          star: 5,
          imageUrl: "/assets/food-6.jpg",
          cookTime: "35 minutes",
          origins: ["Argentina"],
          tags: ["American", "Argentinian", "Beef"],
        },
        {
          id: 7,
          price: 90,
          name: "Curry",
          favorite: true,
          star: 4,
          imageUrl: "/assets/food-7.jpg",
          cookTime: "40 minutes",
          origins: ["India"],
          tags: ["Indian", "Spicy", "Curry Powder"],
        },
        {
          id: 8,
          price: 70,
          name: "Sushi Bowl",
          favorite: true,
          star: 4,
          imageUrl: "/assets/food-8.jpg",
          cookTime: "15 minutes",
          origins: ["Japan", "Hawaii"],
          tags: ["Japanese", "Hawaiian", "Rice Bowl"],
        },
      ];
  }
}
