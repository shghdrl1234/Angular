import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    // 더미 레시피를 만든다.
    new Recipe('A Test Recipe', 'This is sipmply a test', 'https://i.ytimg.com/vi/bPsyyCn1Fto/maxresdefault.jpg' ), 
    new Recipe('A Test Recipe2', 'This is sipmply a test2', 'https://i.ytimg.com/vi/bPsyyCn1Fto/maxresdefault.jpg' ) 

  ];
  constructor() {

  }

  ngOnInit(): void {
      
  }

}
