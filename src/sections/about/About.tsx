import React from 'react';
import { Section } from 'components';
import { SectionsData } from 'sections/sections.models';
import backgroundImage from 'assets/images/background.png';

import logo from 'assets/images/stamp.png';

export const About = (): JSX.Element => (
  <Section
    backgroundColor={'#FFDAC9'}
    id={SectionsData.about.id}
    content={
      <React.Fragment>
        <div
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top',
            height: '100%'
          }}
        />
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center'
            // alignItems: 'center'
          }}
        >
          <div
            style={{
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '320px',
              position: 'relative'
            }}
          >
            <img
              style={{
                position: 'absolute',
                left: '-200px',
                top: '-220px'
              }}
              src={logo}
              alt={logo}
            />
            <div
              style={{
                fontSize: '82px',
                lineHeight: '95px'
              }}
            >
              THE BEST FOODIE
            </div>
            <div
              style={{
                fontSize: '115px',
                lineHeight: '95px'
              }}
            >
              EXPERIENCE
            </div>
            <div
              style={{
                fontSize: '35px',
                lineHeight: '52px'
              }}
            >
              NOW IN LONDON
            </div>
          </div>
        </div>
      </React.Fragment>
    }
  />
);
