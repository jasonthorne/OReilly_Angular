import { Component } from '@angular/core';
import { Recipe } from '../recipe.model'; //++++++++++++ Import recipe model

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [ //recipes is an array of Recipe (model) objects ++++++++
    new Recipe("name1", "description1", "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/british_shakshuka_26737_16x9.jpg"),
    new Recipe("name2", "description2", "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/british_shakshuka_26737_16x9.jpg")
  ];

}
