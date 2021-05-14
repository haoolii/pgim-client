import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './button/button.module';
import { ModalModule } from './modal/modal.module';
import { RadioModule } from './radio/radio.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { IconModule } from './icon/icon.module';
import { ProgressModule } from './progress/progress.module';
import { PageHeaderModule } from './page-header/page-header.module';
import { PageFooterModule } from './page-footer/page-footer.module';
import { I18nModule } from './i18n/i18n.module';
import { DountChartModule } from './dount-chart/dount-chart.module';

@NgModule({
  imports: [CommonModule, ButtonModule, ModalModule, RadioModule, CheckboxModule, IconModule, ProgressModule, PageHeaderModule, PageFooterModule, I18nModule, DountChartModule],
  declarations: [],
  exports: []
})
export class ClientUiModule {}
