import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../../recipe.model';
//import { Recipeservice } from '../../recipe.service'; removed this
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  //@Output() recipeSelected = new EventEmitter<void>();  //2nd step remove this emit event 
  //constructor(private recipeService : Recipeservice) { }  //4th step inject the Recipeservice.. removed this
  @Input() index: number;

  ngOnInit() {
  }

  // onSelected(){    removed this
  //  // this.recipeSelected.emit(); 2nd step and this also

  //  this.recipeService.recipeSelected.emit(this.recipe); // 4th step
  // }

}
