import { DISHES } from './../Shared/dishes';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  getDishes(){
    return DISHES
  }
}
