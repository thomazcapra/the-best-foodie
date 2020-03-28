import React from 'react';
import { Section } from 'components';
import { SectionsData } from 'sections/sections.models';

export const Recipes = (): JSX.Element => (
  <Section
    title={SectionsData.recipes.title}
    subtitle={'CONTENT'}
    id={SectionsData.recipes.id}
  />
);
