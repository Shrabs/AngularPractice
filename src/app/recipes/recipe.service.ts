import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class Recipeservice{
  // recipeSelected = new Subject<Recipe>(); 

   private recipes: Recipe[] = [
        new Recipe(
          'Tasty Schnitzel',
          'A super-tasty Schnitzel - just awesome',
          'https://media.defense.gov/2018/Jul/23/2001945968/-1/-1/0/180717-F-YE685-1062.JPG',
          [
            new Ingredient('Meat',1),
            new Ingredient('French Fries',20)
          ]
          ),
        new Recipe(
          'Big Fat Burger',
          'What else you need to say?',
          'https://media.defense.gov/2018/Jul/23/2001945968/-1/-1/0/180717-F-YE685-1062.JPG',
          [
            new Ingredient('Buns',2),
            new Ingredient('Meats',1)
          ]
          )
      ];
constructor(private slService:ShoppingListService){

}

getRecipes(){
  return this.recipes.slice();
}

getRecipe(index: number){
    return this.recipes[index];
}

addIngredientsToShoppingList(ingredients: Ingredient[]){
  this.slService.addNewIngredients(ingredients);
}

}