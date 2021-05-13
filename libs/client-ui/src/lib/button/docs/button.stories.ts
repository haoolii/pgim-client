import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { NpDemoButtonBasic } from './button';
import { ButtonComponent } from '../button.component';

export default {
  // component: NpDemoButtonBasic,
  decorators: [
    moduleMetadata({
      declarations: [NpDemoButtonBasic, ButtonComponent],
      imports: [CommonModule],
    }),
  ],
  excludeStories: /.*Data$/,
  title: 'Button Component',
} as Meta;


export const Basic: Story<NpDemoButtonBasic> = args => ({
  component: NpDemoButtonBasic
});
