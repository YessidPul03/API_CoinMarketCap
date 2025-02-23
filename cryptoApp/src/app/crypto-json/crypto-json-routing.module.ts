import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CryptoJsonPage } from './crypto-json.page';

const routes: Routes = [
  {
    path: '',
    component: CryptoJsonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptoJsonPageRoutingModule {}
