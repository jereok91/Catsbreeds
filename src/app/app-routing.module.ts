import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'viw-cats',
    pathMatch: 'full'
  },
  {
    path: 'viw-cats',
    loadChildren: () => import('./viw-cats/viw-cats.module').then( m => m.ViwCatsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
