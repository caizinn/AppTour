import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Riodejaneiro4Page } from './riodejaneiro4.page';

const routes: Routes = [
  {
    path: '',
    component: Riodejaneiro4Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Riodejaneiro4Page]
})
export class Riodejaneiro4PageModule {}
