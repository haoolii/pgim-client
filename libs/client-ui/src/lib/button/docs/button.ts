import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'np-demo-button-basic',
  template: `
    <div class="w-full min-h-screen flex items-center justify-center">
      <div class="grid grid-cols-4 gap-4">
        <div class="flex items-center">
        </div>
        <div class="flex items-center">
          low priority stroked
        </div>
        <div class="flex items-center">
          High priority flat
        </div>
        <div class="flex items-center">
          預設金色Btn為特定頁面專用 spec
        </div>

        <div class="flex items-center">
          Primary
        </div>
        <div class="flex items-center">
          <button np-button npType="stroked">主要按鈕</button>
        </div>
        <div class="flex items-center">
          <button np-button npType="flat">主要按鈕</button>
        </div>
        <div class="flex items-center">
          <button np-button npType="spec">主要按鈕</button>
        </div>
        <div class="flex items-center">
          Hover/Click
        </div>
        <div class="flex items-center">
          <button np-button npType="stroked">主要按鈕</button>
        </div>
        <div class="flex items-center">
          <button np-button npType="flat">主要按鈕</button>
        </div>
        <div class="flex items-center">
          <button np-button npType="spec">主要按鈕</button>
        </div>
        <div class="flex items-center">
          Disabled
        </div>
        <div class="flex items-center">
          <button np-button npType="stroked" disabled>主要按鈕</button>
        </div>
        <div class="flex items-center">
          <button np-button npType="flat" disabled>主要按鈕</button>
        </div>
        <div class="flex items-center">
          <button np-button npType="spec" disabled>主要按鈕</button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      [np-button] {
        margin-right: 8px;
        margin-bottom: 12px;
      }
    `
  ],
  styleUrls: ['../../../styles.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NpDemoButtonBasic { }
