import React from 'react';
import { Section, Map } from 'components';
import { SectionsData } from 'sections/sections.models';

const LocationTitle = (): JSX.Element => {
  return (
    <React.Fragment>
      <div
        style={{
          position: 'absolute',
          left: '128px',
          top: '70px',
          width: '220px'
        }}
      >
        <div
          style={{
            fontFamily: 'DIN Condensed',
            fontSize: '62px',
            letterSpacing: 0,
            position: 'absolute',
            top: '-25px',
            left: '19px'
          }}
        >
          {SectionsData.location.title}
        </div>
        <div
          style={{
            backgroundColor: 'white',
            maxHeight: '115.7px',
            maxWidth: '100%',
            display: 'flex',
            alignItems: 'flex-end',
            padding: '44.9px 30px 20px 18px'
          }}
        >
          <div
            style={{
              fontFamily: 'GillSans',
              letterSpacing: '0.15px',
              fontSize: '15px',
              lineHeight: '20px',
              color: '#333333'
            }}
          >
            12 Upper St. Martin’s Lane WC2H 9FB, London
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export const Location = (): JSX.Element => (
  <Section
    id={SectionsData.location.id}
    height={'500px'}
    content={
      <React.Fragment>
        <Map />
        <LocationTitle />
      </React.Fragment>
    }
  />
);
