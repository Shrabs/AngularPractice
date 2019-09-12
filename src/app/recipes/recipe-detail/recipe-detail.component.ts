import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
// removed input from above
import { Recipe } from '../recipe.model';
import { Recipeservice } from '../recipe.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe : Recipe;  //removed @Input() here as well
  id: number;

  constructor(private recipeService: Recipeservice,
              private route: ActivatedRoute,
              private router: Router
    ) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params : Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
    //this.router.navigate(['../',this.id,'edit'],{relativeTo: this.route});//alternate way
  }

}
