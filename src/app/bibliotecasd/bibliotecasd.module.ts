import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BibliotecasdPage } from './bibliotecasd.page';

const routes: Routes = [
  {
    path: '',
    component: BibliotecasdPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BibliotecasdPage]
})
export class BibliotecasdPageModule {}
