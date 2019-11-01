import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Saopaulo2Page } from './saopaulo2.page';

const routes: Routes = [
  {
    path: '',
    component: Saopaulo2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Saopaulo2Page]
})
export class Saopaulo2PageModule {}
