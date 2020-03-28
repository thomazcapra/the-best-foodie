import React from 'react';
import { Section } from 'components';
import { SectionsData } from 'sections/sections.models';

export const Location = (): JSX.Element => (
  <Section
    title={SectionsData.location.title}
    subtitle={'CONTENT'}
    id={SectionsData.location.id}
  />
);
