import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SipRoutingModule } from './sip-routing.module';
import { SipComponent } from './sip.component';


@NgModule({
  declarations: [
    SipComponent
  ],
  imports: [
    CommonModule,
    SipRoutingModule
  ]
})
export class SipModule { }
