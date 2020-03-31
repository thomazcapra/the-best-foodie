import React from 'react';
import { CommunityProps } from 'shared/models';

export const CommunityCard = ({
  image,
  title,
  message,
  comments,
  hearts
}: CommunityProps): JSX.Element => {
  return (
    <div>
      <div
        style={{
          display: 'flex'
        }}
      >
        <div
          style={{
            width: '250px',
            height: '250px',
            margin: '0 12.5px'
          }}
        >
          <img src={image} alt={image} />
        </div>

        <div
          style={{
            width: '250px',
            height: '250px',
            margin: '0 12.5px'
          }}
        >
          <div>{title}</div>
          <div>{message}</div>
          <div>{comments}</div>
          <div>{hearts}</div>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
