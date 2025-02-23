import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CryptoJsonPage } from './crypto-json/crypto-json.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'crypto-details',
    loadChildren: () => import('./crypto-details/crypto-details.module').then( m => m.CryptoDetailsPageModule)
  },
  {
    path: 'crypto-json',
    loadChildren: () => import('./crypto-json/crypto-json.module').then( m => m.CryptoJsonPageModule)
  },
  {
    path: 'crypto/:id',
    component: CryptoJsonPage
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
