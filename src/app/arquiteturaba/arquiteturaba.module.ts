import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ArquiteturabaPage } from './arquiteturaba.page';

const routes: Routes = [
  {
    path: '',
    component: ArquiteturabaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ArquiteturabaPage]
})
export class ArquiteturabaPageModule {}
