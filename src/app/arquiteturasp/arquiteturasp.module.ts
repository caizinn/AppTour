import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ArquiteturaspPage } from './arquiteturasp.page';

const routes: Routes = [
  {
    path: '',
    component: ArquiteturaspPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ArquiteturaspPage]
})
export class ArquiteturaspPageModule {}
