import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ArquiteturafrPage } from './arquiteturafr.page';

const routes: Routes = [
  {
    path: '',
    component: ArquiteturafrPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ArquiteturafrPage]
})
export class ArquiteturafrPageModule {}
