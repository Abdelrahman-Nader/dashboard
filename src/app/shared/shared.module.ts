import { FooterComponent } from './components/footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';



@NgModule({
  declarations: [
    FooterComponent,
    TopNavComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    TopNavComponent,
    SideNavComponent
  ]
})
export class SharedModule { }
