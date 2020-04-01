import React from 'react';
import { Section } from 'components';
import { SectionsData } from 'sections/sections.models';

export const OurMenu = (): JSX.Element => (
  <Section
    id={SectionsData.ourMenu.id}
    content={
      <React.Fragment>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}
        >
          <div
            style={{
              marginTop: '50px',
              position: 'relative'
            }}
          >
            <div
              style={{
                height: '6px',
                width: '236px',
                position: 'absolute',
                left: '-17px',
                top: '27px',
                backgroundColor: '#FFDAC9'
              }}
            />
            <div
              style={{
                color: '#333333',
                fontSize: '62px',
                position: 'relative'
              }}
            >
              OUR MENU
            </div>
          </div>

          <div
            style={{
              width: '101px',
              height: '30px',
              marginTop: '14px',
              fontSize: '18px',
              cursor: 'pointer',
              backgroundColor: '#FFDAC9',
              letterSpacing: '0.18px',
              color: '#333333',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            KNOW MORE
          </div>
        </div>
      </React.Fragment>
    }
  />
);
