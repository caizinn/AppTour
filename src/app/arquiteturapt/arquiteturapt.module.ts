import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ArquiteturaptPage } from './arquiteturapt.page';

const routes: Routes = [
  {
    path: '',
    component: ArquiteturaptPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ArquiteturaptPage]
})
export class ArquiteturaptPageModule {}
