import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Recipeservice } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

 recipes : Recipe[];
  
  constructor(private recipeService:Recipeservice,
              private router:Router,
              private route:ActivatedRoute
    ) { }

  ngOnInit() {
    //debugger;
    this.recipes = this.recipeService.getRecipes();
  }
  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
