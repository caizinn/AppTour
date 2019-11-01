import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Riodejaneiro2Page } from './riodejaneiro2.page';

const routes: Routes = [
  {
    path: '',
    component: Riodejaneiro2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Riodejaneiro2Page]
})
export class Riodejaneiro2PageModule {}
