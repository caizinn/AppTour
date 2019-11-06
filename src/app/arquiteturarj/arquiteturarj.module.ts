import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ArquiteturarjPage } from './arquiteturarj.page';

const routes: Routes = [
  {
    path: '',
    component: ArquiteturarjPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ArquiteturarjPage]
})
export class ArquiteturarjPageModule {}
