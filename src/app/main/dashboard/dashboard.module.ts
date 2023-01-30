import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardOneComponent } from 'src/app/layout/board-one/board-one.component';
import { DashboardComponent } from './dashboard.component';
import { CardsComponent } from 'src/app/layout/cards/cards.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    DashboardComponent,
    BoardOneComponent,
    CardsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class DashboardModule { }
