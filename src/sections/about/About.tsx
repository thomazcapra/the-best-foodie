import React from 'react';
import { Section } from 'components';
import { SectionsData } from 'sections/sections.models';
import backgroundImage from 'assets/images/background.png';

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
      </React.Fragment>
    }
  />
);
