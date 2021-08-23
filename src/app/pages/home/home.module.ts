import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { ComponentsModule } from '../../shared/components/components.module';
import { SocialComponent } from './social/social.component';

@NgModule({
  declarations: [HomeComponent, SocialComponent],
  imports: [CommonModule, HomeRoutingModule, ComponentsModule],
})
export class HomeModule {}
