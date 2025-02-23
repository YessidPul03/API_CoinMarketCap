import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CryptoDetailsPageRoutingModule } from './crypto-details-routing.module';

import { CryptoDetailsPage } from './crypto-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CryptoDetailsPageRoutingModule
  ],
  declarations: [CryptoDetailsPage],
  // exports: [CryptoDetailsPage],
})
export class CryptoDetailsPageModule {}
