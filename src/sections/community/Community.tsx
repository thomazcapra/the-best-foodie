import React from 'react';
import { Section } from 'components';
import { SectionsData } from 'sections/sections.models';

const CommunityTitle = (): JSX.Element => (
  <div
    style={{
      marginLeft: '418px',
      marginTop: '79px',
      width: '266px'
    }}
  >
    <div
      style={{
        fontSize: '62px',
        lineHeight: '52px',
        color: '#333333'
      }}
    >
      MEET OUR
    </div>
    <div
      style={{
        position: 'relative'
      }}
    >
      <div
        style={{
          width: '266px',
          position: 'absolute',
          height: '6px',
          top: '22px',
          left: '-19px',
          backgroundColor: '#FFDAC9'
        }}
      />
      <div
        style={{
          fontSize: '62px',
          lineHeight: '52px',
          color: '#333333',
          position: 'relative'
        }}
      >
        COMMUNITY
      </div>
    </div>
    <div>
      <div
        style={{
          backgroundColor: '#FFDAC9',
          marginTop: '10px',
          color: '#333333',
          fontSize: '18px',
          height: '30px',
          width: '91px',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        KNOW MORE
      </div>

      <div
        style={{
          fontSize: '22px',
          lineHeight: '25px',
          letterSpacing: '0.44px',
          marginTop: '36px'
        }}
      >
        LOREM IPSUM DOLOR SIT AMET ERNUT TEMPARTERO SERTU PER NABORE EN TORNA
        ENTALTO
      </div>
    </div>
  </div>
);

export const Community = (): JSX.Element => (
  <Section
    id={SectionsData.community.id}
    content={
      <React.Fragment>
        <div>
          <CommunityTitle />
        </div>
      </React.Fragment>
    }
  />
);
