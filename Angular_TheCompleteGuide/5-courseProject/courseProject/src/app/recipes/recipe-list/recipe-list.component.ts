import { Component } from '@angular/core';
import { Recipe } from '../recipe.model'; //++++++++++++ Import recipe model

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [ //recipes is an array of recipe objects
    new Recipe("a", "b", "c")
  ]; 

}
