import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViwCatsPageRoutingModule } from './viw-cats-routing.module';

import { ViwCatsPage } from './viw-cats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViwCatsPageRoutingModule
  ],
  declarations: [ViwCatsPage]
})
export class ViwCatsPageModule {}
