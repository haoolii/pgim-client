import { text, number } from '@storybook/addon-knobs';
import { ButtonComponent } from './button.component';

export default {
  title: 'Button Component',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [],
  },
  component: ButtonComponent,
  props: {
    text: text('text', 'Click me!'),
    padding: number('padding', 0),
    style: text('style', 'default'),
  },
});
