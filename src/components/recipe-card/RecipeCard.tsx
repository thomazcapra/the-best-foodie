import React from 'react';
import { Recipe } from 'shared/models';
import { recipesImages } from 'assets/images/recipes';

export const RecipeCard = ({
  logo,
  title,
  subtitle,
  stamp,
  isBigSize,
  servings,
  marginTop
}: Recipe): JSX.Element => {
  return (
    <div
      style={{
        width: isBigSize ? '370px' : '240px',
        marginRight: '25px',
        marginTop: marginTop ?? 0
      }}
    >
      <div
        style={{
          boxShadow: '0px 20px 30px #0000000A'
        }}
      >
        <div
          style={{
            position: 'relative'
          }}
        >
          <div
            style={{
              position: 'absolute',
              color: 'white',
              width: isBigSize ? '110px' : '72px',
              height: isBigSize ? '110px' : '72px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backdropFilter: 'blur(5px) contrast(.8)'
            }}
          >
            <div
              style={{
                fontSize: isBigSize ? '50px' : '35px',
                letterSpacing: '0.5px'
              }}
            >
              {servings}
            </div>
            <div
              style={{
                fontSize: isBigSize ? '22px' : '14px',
                lineHeight: '25px',
                letterSpacing: '0.44px'
              }}
            >
              SERVINGS
            </div>
          </div>

          <img
            style={{
              position: 'absolute',
              bottom: '3px',
              right: 0,
              cursor: 'pointer',
              width: '60px',
              height: '60px'
            }}
            alt={'button' + logo}
            src={recipesImages.goButton}
          />

          {stamp && (
            <div
              style={{
                position: 'absolute',
                top: '-53px',
                right: '10px'
              }}
            >
              <img src={recipesImages.stamp} alt={'stamp' + logo} />
            </div>
          )}

          <img src={logo} alt={logo} />
        </div>

        <div
          style={{
            padding: '18px 24px'
          }}
        >
          <div
            style={{
              color: '#767676',
              fontSize: '14px',
              marginBottom: '14px'
            }}
          >
            DIFFICULTY
          </div>

          <div
            style={{
              color: '#333333',
              fontSize: '22px',
              lineHeight: '25px',
              marginBottom: '14px'
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontFamily: 'GillSans',
              letterSpacing: '0.15px',
              lineHeight: '20px',
              color: '#767676',
              fontSize: '15px'
            }}
          >
            {subtitle}
          </div>
        </div>
      </div>
      <div
        style={{
          fontSize: '14px',
          letterSpacing: '0.14px',
          color: '#333333',
          marginTop: '16px',
          textAlign: 'right'
        }}
      >
        USER FULL NAME
      </div>
    </div>
  );
};

export default RecipeCard;
