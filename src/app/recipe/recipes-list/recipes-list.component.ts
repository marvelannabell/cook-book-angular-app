import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Recipe } from 'src/app/types/recipe';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  recipeList: Recipe[] = [];
  isLoading: boolean = true;
  noRecipesInTheList: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getRecipes().subscribe(
      {
        next: (recipes) => {

          this.recipeList = recipes;

          if (this.recipeList.length === 0) {
            this.noRecipesInTheList = true;
          }
          
          this.isLoading = false
          console.log(recipes)
        },
        error: (err) => {
          this.isLoading = false
          console.log(`Error ${err}`);

        }
      }
    );

  }
}