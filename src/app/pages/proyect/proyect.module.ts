import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectRoutingModule } from './proyect-routing.module';
import { ProyectComponent } from './proyect.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  declarations: [ProyectComponent],
  imports: [CommonModule, ProyectRoutingModule, ComponentsModule],
})
export class ProyectModule {}
