import { Component } from '@angular/core';

@Component({
  selector: 'np-demo-button-basic',
  template: `
    <div class="w-full min-h-screen flex items-center justify-center">
      <div class="grid grid-cols-4 gap-2">
        <div class="flex items-center">
        </div>
        <div class="flex items-center">
          low priority
        </div>
        <div class="flex items-center">
          High priority
        </div>
        <div class="flex items-center">
          預設金色Btn為特定頁面專用
        </div>

        <div class="flex items-center">
          Primary
        </div>
        <div class="flex items-center">
          <button np-button npType="primary">Primary Button</button>
        </div>
        <div class="flex items-center">
          <button np-button npType="primary">Primary Button</button>
        </div>
        <div class="flex items-center">
          <button np-button npType="primary">Primary Button</button>
        </div>
        <div class="flex items-center">
          Hover/Click
        </div>
        <div class="flex items-center">
          <button np-button npType="primary">Primary Button</button>
        </div>
        <div class="flex items-center">
          <button np-button npType="primary">Primary Button</button>
        </div>
        <div class="flex items-center">
          <button np-button npType="primary">Primary Button</button>
        </div>
        <div class="flex items-center">
          Disabled
        </div>
        <div class="flex items-center">
          <button np-button npType="primary">Primary Button</button>
        </div>
        <div class="flex items-center">
          <button np-button npType="primary">Primary Button</button>
        </div>
        <div class="flex items-center">
          <button np-button npType="primary">Primary Button</button>
        </div>
      </div>
    </div>
    <!-- <div>
      Default
      <button np-button npType="primary">Primary Button</button>
      <button np-button npType="primary">Primary Button</button>
      <button np-button npType="primary">Primary Button</button>
      <button np-button npType="primary">Primary Button</button>
    </div>
    <div>
      Hover
      <button np-button npType="default">Primary Button</button>
      <button np-button npType="default">Primary Button</button>
      <button np-button npType="default">Primary Button</button>
      <button np-button npType="default">Primary Button</button>
    </div>
    <div>
      Default
      <button np-button npType="primary">Primary Button</button>
      <button np-button npType="primary">Primary Button</button>
      <button np-button npType="primary">Primary Button</button>
      <button np-button npType="primary">Primary Button</button>
    </div>
    <div>
      Default
      <button np-button npType="primary">Primary Button</button>
      <button np-button npType="primary">Primary Button</button>
      <button np-button npType="primary">Primary Button</button>
      <button np-button npType="primary">Primary Button</button>
    </div> -->
    <!-- <button np-button npType="default">Default Button</button>
    <button np-button npType="dashed">Dashed Button</button>
    <button np-button npType="text">Text Button</button>
    <a np-button npType="link">Link Button</a> -->
  `,
  styles: [
    `
      [np-button] {
        margin-right: 8px;
        margin-bottom: 12px;
      }
    `
  ],
  styleUrls: ['../style/index.scss']
})
export class NpDemoButtonBasic { }
