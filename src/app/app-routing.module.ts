import { BoardOneComponent } from 'src/app/layout/board-one/board-one.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './layout/cards/cards.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [{
    path: '',
    component: BoardOneComponent,
  }, {
    path: 'cards',
    component: CardsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
