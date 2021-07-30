import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtomComponent } from './buttom/buttom.component';

@NgModule({
  declarations: [NavbarComponent, ButtomComponent],
  imports: [CommonModule],
  exports: [ButtomComponent, NavbarComponent],
})
export class ComponentsModule {}
