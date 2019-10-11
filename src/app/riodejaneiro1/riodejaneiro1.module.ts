import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Riodejaneiro1Page } from './riodejaneiro1.page';

const routes: Routes = [
  {
    path: '',
    component: Riodejaneiro1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Riodejaneiro1Page]
})
export class Riodejaneiro1PageModule {}
