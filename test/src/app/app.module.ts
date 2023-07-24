import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    // 9. 만든 Component들은 이 부분에 추가해줘야한다.
    // 이 때, export class를 명시해주면 자동으로 경로를 찾아준다.
    HeaderComponent,
    // 10. 이후 CLI를 통하여 ng g c recipes --skip-tests 명령어로 spec 파일을 제외하고
    // component를 만들면 자동으로 recipesComponent가 추가 된다. 
    // 11. 이후 폴더 구조따라서 만들어 준다.
    RecipesComponent,
    RecipeListComponent, // recipes/recipe-list
    RecipeDetailComponent, // recipes/recipe-detail
    RecipeItemComponent, // recipes/recipe-detail/recipe-item
    ShoppingListComponent, 
    ShoppingEditComponent // shopping-list/shopping-edit
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

