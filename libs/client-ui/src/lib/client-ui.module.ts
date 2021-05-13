import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './button/button.module';

@NgModule({
  imports: [CommonModule, ButtonModule],
  declarations: [],
  exports: [ButtonModule]
})
export class ClientUiModule {}
