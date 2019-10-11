import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Saopaulo1Page } from './saopaulo1.page';

const routes: Routes = [
  {
    path: '',
    component: Saopaulo1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Saopaulo1Page]
})
export class Saopaulo1PageModule {}
