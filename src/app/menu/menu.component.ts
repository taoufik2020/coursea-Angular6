import { DishService } from './../service/dish.service';
import { Dish } from './../Shared/Dish';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private dishservice: DishService) { }
  
  dishes : Dish[]
  selectedDish : Dish;

  
  ngOnInit() {
    this.dishes = this.dishservice.getDishes()
  }
  selected(dish: Dish){
    this.selectedDish = dish
    console.log("object");

  }

}
