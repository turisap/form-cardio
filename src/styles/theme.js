import { darken, lighten } from 'polished';

export const theme = {
  // BORDERS
  grey_border: '1px solid #E2E2E2',
  black_border: '1px solid #111',
  border_sound: '1px solid #D8D8D8',

  // COLORS
  offwhite_background: '#ffffff',
  orange_background: '#ff5500',
  grey_background: '#ececec',
  green_background: 'rgb(21, 189, 118)',
  green_background_hover: darken(0.05, 'rgb(21, 189, 118)'),
  dark_background: '#333',
  text_on_dark: '#999',
  text_on_dark_hover: lighten(0.15, '#999')
};
