import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BrasilPage } from './brasil.page';
import { ExpandableComponent } from "../components/expandable/expandable.component";
const routes: Routes = [
  {
    path: '',
    component: BrasilPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BrasilPage, ExpandableComponent]
})
export class BrasilPageModule {}
