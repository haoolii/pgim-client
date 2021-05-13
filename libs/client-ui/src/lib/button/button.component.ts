import { Component, Input, OnInit } from '@angular/core';

export type NpButtonType = 'stroked' | 'flat' | 'spec' | null;

@Component({
  selector: 'button[np-button], a[np-button]',
  exportAs: 'npButton',
  template: `
    <span>
      <ng-content></ng-content>
    </span>
  `,
  host: {
    '[class.np-btn]': 'true',
    '[class.np-btn-flat]': `npType === 'flat'`,
    '[class.np-btn-stroked]': `npType === 'stroked'`,
    '[class.np-btn-spec]': `npType === 'spec'`
  }
})
export class ButtonComponent implements OnInit {

  @Input() npType: NpButtonType = null;

  constructor() { }

  ngOnInit(): void {
  }

}
