import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'argentina', loadChildren: './argentina/argentina.module#ArgentinaPageModule' },
  { path: 'portugal', loadChildren: './portugal/portugal.module#PortugalPageModule' },
  { path: 'usa', loadChildren: './usa/usa.module#UsaPageModule' },
  { path: 'brasil', loadChildren: './brasil/brasil.module#BrasilPageModule' },
  { path: 'arquiteturasp', loadChildren: './arquiteturasp/arquiteturasp.module#ArquiteturaspPageModule' },
  { path: 'arquiteturarj', loadChildren: './arquiteturarj/arquiteturarj.module#ArquiteturarjPageModule' },
  { path: 'bibliotecasp', loadChildren: './bibliotecasp/bibliotecasp.module#BibliotecaspPageModule' },
  { path: 'bibliotecarj', loadChildren: './bibliotecarj/bibliotecarj.module#BibliotecarjPageModule' },
  { path: 'diversossp', loadChildren: './diversossp/diversossp.module#DiversosspPageModule' },
  { path: 'diversosrj', loadChildren: './diversosrj/diversosrj.module#DiversosrjPageModule' },
  { path: 'templossp', loadChildren: './templossp/templossp.module#TemplosspPageModule' },
  { path: 'templosrj', loadChildren: './templosrj/templosrj.module#TemplosrjPageModule' },
  { path: 'arquiteturasd', loadChildren: './arquiteturasd/arquiteturasd.module#ArquiteturasdPageModule' },
  { path: 'arquiteturafr', loadChildren: './arquiteturafr/arquiteturafr.module#ArquiteturafrPageModule' },
  { path: 'bibliotecasd', loadChildren: './bibliotecasd/bibliotecasd.module#BibliotecasdPageModule' },
  { path: 'bibliotecafr', loadChildren: './bibliotecafr/bibliotecafr.module#BibliotecafrPageModule' },
  { path: 'diversossd', loadChildren: './diversossd/diversossd.module#DiversossdPageModule' },
  { path: 'diversosfr', loadChildren: './diversosfr/diversosfr.module#DiversosfrPageModule' },
  { path: 'templossd', loadChildren: './templossd/templossd.module#TemplossdPageModule' },
  { path: 'templosfr', loadChildren: './templosfr/templosfr.module#TemplosfrPageModule' },
  { path: 'arquiteturaba', loadChildren: './arquiteturaba/arquiteturaba.module#ArquiteturabaPageModule' },
  { path: 'arquiteturasm', loadChildren: './arquiteturasm/arquiteturasm.module#ArquiteturasmPageModule' },
  { path: 'bibliotecaba', loadChildren: './bibliotecaba/bibliotecaba.module#BibliotecabaPageModule' },
  { path: 'bibliotecasm', loadChildren: './bibliotecasm/bibliotecasm.module#BibliotecasmPageModule' },
  { path: 'diversosba', loadChildren: './diversosba/diversosba.module#DiversosbaPageModule' },
  { path: 'diversossm', loadChildren: './diversossm/diversossm.module#DiversossmPageModule' },
  { path: 'templosba', loadChildren: './templosba/templosba.module#TemplosbaPageModule' },
  { path: 'templossm', loadChildren: './templossm/templossm.module#TemplossmPageModule' },  { path: 'arquiteturapt', loadChildren: './arquiteturapt/arquiteturapt.module#ArquiteturaptPageModule' },
  { path: 'arquiteturacb', loadChildren: './arquiteturacb/arquiteturacb.module#ArquiteturacbPageModule' },
  { path: 'bibliotecapt', loadChildren: './bibliotecapt/bibliotecapt.module#BibliotecaptPageModule' },
  { path: 'bibliotecacb', loadChildren: './bibliotecacb/bibliotecacb.module#BibliotecacbPageModule' },
  { path: 'diversospt', loadChildren: './diversospt/diversospt.module#DiversosptPageModule' },
  { path: 'diversoscb', loadChildren: './diversoscb/diversoscb.module#DiversoscbPageModule' },
  { path: 'templospt', loadChildren: './templospt/templospt.module#TemplosptPageModule' },
  { path: 'temploscb', loadChildren: './temploscb/temploscb.module#TemploscbPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
