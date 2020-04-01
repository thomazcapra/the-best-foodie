import React from 'react';

import community1 from './community_1.svg';
import community2 from './community_2.svg';
import community3 from './community_3.svg';
import instagramBtn from './instagram-btn.svg';

const commentIcon = (): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12.492"
    height="13.022"
    viewBox="0 0 12.492 13.022"
  >
    <path
      fill="#333"
      d="M10.137,0H2.314A2.347,2.347,0,0,0,0,2.355V8.048a2.383,2.383,0,0,0,2.314,2.4H5.57a15.988,15.988,0,0,0,2.7,2.539c.246.143.553-.143.553-.43V10.444h1.393a2.376,2.376,0,0,0,2.273-2.4V2.355A2.369,2.369,0,0,0,10.137,0Z"
    />
  </svg>
);

const heartIcon = (): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13.354"
    height="11.714"
    viewBox="0 0 13.354 11.714"
  >
    <path
      fill="#333"
      d="M1.157,6.664,6.371,11.58a.469.469,0,0,0,.657,0l5.215-4.916A3.889,3.889,0,0,0,13.379,3.9a3.874,3.874,0,0,0-1.121-2.764A3.383,3.383,0,0,0,9.808.149,4.455,4.455,0,0,0,6.745,1.434c-.015,0-.015.015-.03.015s-.015,0-.03-.015A4.431,4.431,0,0,0,3.936,0,3.949,3.949,0,0,0,1.157,1.136,3.941,3.941,0,0,0,1.157,6.664Z"
      transform="translate(0)"
    />
  </svg>
);

export const communityImages = {
  community1,
  community2,
  community3,
  commentIcon,
  heartIcon,
  instagramBtn
};
