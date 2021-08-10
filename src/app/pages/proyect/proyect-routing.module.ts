import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectComponent } from './proyect.component';

const routes: Routes = [{ path: '', component: ProyectComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectRoutingModule { }
