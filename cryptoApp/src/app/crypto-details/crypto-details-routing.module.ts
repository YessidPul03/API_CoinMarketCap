import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CryptoDetailsPage } from './crypto-details.page';

const routes: Routes = [
  {
    path: '',
    component: CryptoDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptoDetailsPageRoutingModule {}
