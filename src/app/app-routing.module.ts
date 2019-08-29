import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './cards-list/cards.component';
import { CardsAddComponent } from './cards-add/cards-add.component';

const routes: Routes = [
  {path: 'cards', component: CardsComponent},
  {path: 'cards-add', component: CardsAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
