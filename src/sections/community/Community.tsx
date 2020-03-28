import React from 'react';
import { Section } from 'components';
import { SectionsData } from 'sections/sections.models';

export const Community = (): JSX.Element => (
  <Section
    title={SectionsData.community.title}
    subtitle={'CONTENT'}
    id={SectionsData.community.id}
  />
);
