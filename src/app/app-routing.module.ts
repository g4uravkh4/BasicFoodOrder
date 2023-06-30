import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { CardPageComponent } from './card-page/card-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'search/:searchItem', component: HomeComponent},
  {path: 'tag/:tag', component: HomeComponent},
  {path: 'food/:id', component:FoodpageComponent},
  {path: 'cart-page', component: CardPageComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
