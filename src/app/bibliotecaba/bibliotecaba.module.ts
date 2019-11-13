import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BibliotecabaPage } from './bibliotecaba.page';

const routes: Routes = [
  {
    path: '',
    component: BibliotecabaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BibliotecabaPage]
})
export class BibliotecabaPageModule {}
