import { Component, OnInit } from '@angular/core';
import { Recipeservice } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [Recipeservice]
})
export class RecipesComponent implements OnInit {
  // selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
    // this.recipeService.recipeSelected     //step 6 this also
    // .subscribe(
    //   (recipe: Recipe)=>{
    //     this.selectedRecipe = recipe;
    //   }
    // );
  }

}
