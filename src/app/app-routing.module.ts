import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},  { path: 'brasil', loadChildren: './brasil/brasil.module#BrasilPageModule' },
  { path: 'saopaulo1', loadChildren: './saopaulo1/saopaulo1.module#Saopaulo1PageModule' },
  { path: 'riodejaneiro1', loadChildren: './riodejaneiro1/riodejaneiro1.module#Riodejaneiro1PageModule' },
  { path: 'usa', loadChildren: './usa/usa.module#UsaPageModule' },
  { path: 'argentina', loadChildren: './argentina/argentina.module#ArgentinaPageModule' },
  { path: 'portugual', loadChildren: './portugual/portugual.module#PortugualPageModule' },
  { path: 'saopaulo2', loadChildren: './saopaulo2/saopaulo2.module#Saopaulo2PageModule' },
  { path: 'riodejaneiro2', loadChildren: './riodejaneiro2/riodejaneiro2.module#Riodejaneiro2PageModule' },
  { path: 'saopaulo3', loadChildren: './saopaulo3/saopaulo3.module#Saopaulo3PageModule' },
  { path: 'riodejaneiro3', loadChildren: './riodejaneiro3/riodejaneiro3.module#Riodejaneiro3PageModule' },
  { path: 'saopaulo4', loadChildren: './saopaulo4/saopaulo4.module#Saopaulo4PageModule' },
  { path: 'riodejaneiro4', loadChildren: './riodejaneiro4/riodejaneiro4.module#Riodejaneiro4PageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
