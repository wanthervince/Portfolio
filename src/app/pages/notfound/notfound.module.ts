import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotfoundRoutingModule } from './notfound-routing.module';
import { NotfoundComponent } from './notfound.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  declarations: [NotfoundComponent],
  imports: [CommonModule, NotfoundRoutingModule, ComponentsModule],
})
export class NotfoundModule {}
