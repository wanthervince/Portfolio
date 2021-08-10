import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoreRoutingModule } from './more-routing.module';
import { MoreComponent } from './more.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  declarations: [MoreComponent],
  imports: [CommonModule, MoreRoutingModule, ComponentsModule],
})
export class MoreModule {}
