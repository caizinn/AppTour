import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Saopaulo4Page } from './saopaulo4.page';

const routes: Routes = [
  {
    path: '',
    component: Saopaulo4Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Saopaulo4Page]
})
export class Saopaulo4PageModule {}
