import React from 'react';
import goButton from './go-btn.svg';
import recipe1 from './recipe_1.svg';
import recipe2 from './recipe_2.svg';
import recipe4 from './recipe_4.svg';
import recipe5 from './recipe_5.svg';
import stamp from './stamp.svg';

const NextIcon = (color: string, opacity: string): JSX.Element => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='48.639'
    height='20.485'
    viewBox='0 0 48.639 20.485'
  >
    <path
      fill={color}
      opacity={opacity}
      d='M31.029,14.07a1.163,1.163,0,0,0,0-1.684L21.882,3.359C20.8,2.276,19,3.96,20.2,5.043l6.14,6.14c.481.481.361.842-.361.842H-16.046a1.218,1.218,0,0,0-1.082.722.909.909,0,0,0-.12.481,1.136,1.136,0,0,0,1.2,1.2H25.978c.722,0,.842.361.361.842l-6.14,6.14c-1.082,1.082.6,2.886,1.684,1.684Z'
      transform='translate(17.249 -3.01)'
    />
  </svg>
);

const BackIcon = (color: string, opacity: string): JSX.Element => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='48.639'
    height='20.485'
    viewBox='0 0 48.639 20.485'
  >
    <path
      fill={color}
      opacity={opacity}
      d='M31.029,14.07a1.163,1.163,0,0,0,0-1.684L21.882,3.359C20.8,2.276,19,3.96,20.2,5.043l6.14,6.14c.481.481.361.842-.361.842H-16.046a1.218,1.218,0,0,0-1.082.722.909.909,0,0,0-.12.481,1.136,1.136,0,0,0,1.2,1.2H25.978c.722,0,.842.361.361.842l-6.14,6.14c-1.082,1.082.6,2.886,1.684,1.684Z'
      transform='translate(31.39 23.495) rotate(180)'
    />
  </svg>
);

export const recipesImages = {
  recipe1,
  recipe2,
  recipe4,
  recipe5,
  stamp,
  goButton,
  nextArrow: (disabled?: boolean) =>
    NextIcon(disabled ? '#767676' : '#333', disabled ? '0.271' : '1.0'),
  backArrow: (disabled: boolean) =>
    BackIcon(disabled ? '#767676' : '#333', disabled ? '0.271' : '1.0')
};
