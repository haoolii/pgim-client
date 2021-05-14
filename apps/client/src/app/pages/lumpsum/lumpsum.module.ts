import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LumpsumRoutingModule } from './lumpsum-routing.module';
import { LumpsumComponent } from './lumpsum.component';


@NgModule({
  declarations: [
    LumpsumComponent
  ],
  imports: [
    CommonModule,
    LumpsumRoutingModule
  ]
})
export class LumpsumModule { }
