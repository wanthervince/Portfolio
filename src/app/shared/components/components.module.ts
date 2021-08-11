import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtomComponent } from './buttom/buttom.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { LinksComponent } from './navbar/links/links.component';

@NgModule({
  declarations: [NavbarComponent, ButtomComponent, FooterComponent, LinksComponent],
  imports: [CommonModule, RouterModule],
  exports: [ButtomComponent, NavbarComponent, FooterComponent],
})
export class ComponentsModule {}
