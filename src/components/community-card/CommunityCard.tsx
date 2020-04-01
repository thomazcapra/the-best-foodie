import { communityImages } from 'assets/images/community';
import React from 'react';
import { CommunityProps } from 'shared/models';

export const CommunityCard = ({
  image,
  title,
  message,
  comments,
  hearts,
  reversed
}: CommunityProps): JSX.Element => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: reversed ? 'row-reverse' : 'row'
      }}
    >
      <div
        style={{
          width: '250px',
          height: '250px',
          margin: '0 12.5px',
          boxShadow: '0px 15px 50px #0000000F',
          backgroundColor: 'white',
          justifyContent: 'center',
          display: 'flex',
          position: 'relative'
        }}
      >
        <img
          style={{
            position: 'absolute',
            cursor: 'pointer',
            right: 0
          }}
          src={communityImages.instagramBtn}
          alt={communityImages.instagramBtn}
        />
        <img style={{ width: '222px' }} src={image} alt={image} />
      </div>

      <div
        style={{
          width: '250px',
          height: '250px',
          boxShadow: '0px 15px 50px #0000000F',
          position: 'relative',
          backgroundColor: 'white',
          margin: '0 12.5px'
        }}
      >
        <div
          style={{
            padding: '39px 30px 13.8px 30px'
          }}
        >
          <div
            style={{
              color: '#333333',
              fontSize: '22px',
              marginBottom: '16px',
              letterSpacing: '0.44px'
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontFamily: 'GillSans',
              color: '#333333',
              fontSize: '15px',
              lineHeight: '20px',
              letterSpacing: '0.15px'
            }}
          >
            {message}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              height: '35px',
              position: 'absolute',
              right: '30.2px',
              bottom: '15.8px'
            }}
          >
            <div
              style={{
                display: 'flex',
                fontSize: '14px',
                justifyContent: 'space-around'
              }}
            >
              <div
                style={{
                  cursor: 'pointer'
                }}
              >
                <communityImages.commentIcon />
              </div>
              <div
                style={{
                  marginLeft: '5px'
                }}
              >
                {comments}
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: '14px',
                marginLeft: '10px',
                justifyContent: 'space-around'
              }}
            >
              <div
                style={{
                  cursor: 'pointer'
                }}
              >
                <communityImages.heartIcon />
              </div>
              <div
                style={{
                  marginLeft: '5px'
                }}
              >{`${hearts}K`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
