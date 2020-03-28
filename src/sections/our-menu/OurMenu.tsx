import React from 'react';
import { Section } from 'components';
import { SectionsData } from 'sections/sections.models';

export const OurMenu = (): JSX.Element => (
  <Section
    title={SectionsData.ourMenu.title}
    subtitle={'CONTENT'}
    id={SectionsData.ourMenu.id}
  />
);
