import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViwCatsPage } from './viw-cats.page';

const routes: Routes = [
  {
    path: '',
    component: ViwCatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViwCatsPageRoutingModule {}
