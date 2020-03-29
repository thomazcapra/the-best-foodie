import React from 'react';
import { Section } from 'components';
import { SectionsData } from 'sections/sections.models';

const RecipesTitle = (): JSX.Element => (
  <div
    style={{
      margin: '91px 0 37px 145px'
    }}
  >
    <div>
      <div
        style={{
          fontSize: '35px'
        }}
      >
        POPULAR
      </div>
      <div
        style={{
          fontSize: '62px',
          position: 'relative'
        }}
      >
        <div
          style={{
            position: 'relative',
            zIndex: 2
          }}
        >
          RECIPES
        </div>
        <div
          style={{
            position: 'absolute',
            backgroundColor: '#FFDAC9',
            width: '196px',
            height: '6px',
            top: '27px',
            left: '-19px'
          }}
        />
      </div>
      <div
        style={{
          fontSize: '18px',
          backgroundColor: '#FFDAC9',
          padding: '9px',
          width: '64px',
          textAlign: 'center'
        }}
      >
        SEE ALL
      </div>
    </div>
  </div>
);

export const Recipes = (): JSX.Element => (
  <Section
    id={SectionsData.recipes.id}
    content={
      <React.Fragment>
        <RecipesTitle />
      </React.Fragment>
    }
  />
);
