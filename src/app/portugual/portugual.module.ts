import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PortugualPage } from './portugual.page';

import { ExpandableComponent } from "../components/expandable/expandable.component";

const routes: Routes = [
  {
    path: '',
    component: PortugualPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PortugualPage, ExpandableComponent]
})
export class PortugualPageModule {}
