import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CryptoJsonPageRoutingModule } from './crypto-json-routing.module';

import { CryptoJsonPage } from './crypto-json.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CryptoJsonPageRoutingModule
  ],
  declarations: [CryptoJsonPage]
})
export class CryptoJsonPageModule {}
