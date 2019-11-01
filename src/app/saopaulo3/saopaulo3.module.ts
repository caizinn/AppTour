import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Saopaulo3Page } from './saopaulo3.page';

const routes: Routes = [
  {
    path: '',
    component: Saopaulo3Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Saopaulo3Page]
})
export class Saopaulo3PageModule {}
