import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about-me',
    loadChildren: () =>
      import('./pages/aboutme/aboutme.module').then((m) => m.AboutmeModule),
  },
  {
    path: 'proyect',
    loadChildren: () =>
      import('./pages/proyect/proyect.module').then((m) => m.ProyectModule),
  },
  {
    path: 'more',
    loadChildren: () =>
      import('./pages/more/more.module').then((m) => m.MoreModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/notfound/notfound.module').then((m) => m.NotfoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
