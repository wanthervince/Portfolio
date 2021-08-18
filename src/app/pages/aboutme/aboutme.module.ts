import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutmeRoutingModule } from './aboutme-routing.module';
import { AboutmeComponent } from './aboutme.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { ItemskillsComponent } from './itemskills/itemskills.component';

@NgModule({
  declarations: [AboutmeComponent, ItemskillsComponent],
  imports: [CommonModule, AboutmeRoutingModule, ComponentsModule],
})
export class AboutmeModule {}
