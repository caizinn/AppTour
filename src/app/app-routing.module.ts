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

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
