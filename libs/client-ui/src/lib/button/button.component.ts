import { Component, Input, OnInit } from '@angular/core';

export type NpButtonType = 'primary' | 'default' | 'spec' | null;

@Component({
  selector: 'button[np-button], a[np-button]',
  exportAs: 'npButton',
  template: `
    <ng-content></ng-content>
  `,
  host: {
    '[class.np-btn-primary]': `npType === 'primary'`,
    '[class.np-btn-default]': `npType === 'default'`,
    '[class.np-btn-spec]': `npType === 'spec'`
  }
})
export class ButtonComponent implements OnInit {

  @Input() npType: NpButtonType = null;

  constructor() { }

  ngOnInit(): void {
  }

}
