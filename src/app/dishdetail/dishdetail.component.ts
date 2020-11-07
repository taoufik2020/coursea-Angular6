import { Dish } from './../Shared/Dish';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  constructor() { }
   @Input('gg')  dish: Dish;

  

  ngOnInit() {
    
  }

}
