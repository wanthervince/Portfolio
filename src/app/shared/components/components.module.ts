import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtomComponent } from './buttom/buttom.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent, ButtomComponent],
  imports: [CommonModule, RouterModule],
  exports: [ButtomComponent, NavbarComponent],
})
export class ComponentsModule {}
