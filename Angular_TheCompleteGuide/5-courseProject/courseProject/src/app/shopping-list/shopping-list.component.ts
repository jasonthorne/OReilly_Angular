import { Component } from '@angular/core';
import { Ingredient } from './shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  //ingredients array, made of type Ingredient array ++++++++
  ingredients: Ingredient[] = [
    new Ingredient("Cat food", 6),
    new Ingredient("Belly button fluff", 3)
  ]; 

}
  
