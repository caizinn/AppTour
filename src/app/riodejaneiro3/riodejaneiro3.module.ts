import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Riodejaneiro3Page } from './riodejaneiro3.page';

const routes: Routes = [
  {
    path: '',
    component: Riodejaneiro3Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Riodejaneiro3Page]
})
export class Riodejaneiro3PageModule {}
