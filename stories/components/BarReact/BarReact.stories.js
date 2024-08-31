import { fn } from '@storybook/test';
import { BarReact } from './BarReact';

export default {
  title: 'Example/BarReact',
  component: BarReact,
  data: [120, 200, 150, 80, 70, 110, 130],
  xData: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
};

export const Primary = {
  args: {
    primary: true,
    label: 'BarReact',
    data: [120, 200, 150, 80, 70, 110, 2000],
    xData: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
  },
};