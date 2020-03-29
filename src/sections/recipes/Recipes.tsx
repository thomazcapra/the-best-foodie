import React from 'react';
import { Section, RecipeCard } from 'components';
import { SectionsData } from 'sections/sections.models';
import { recipes } from './Recipes.data';
import { Recipe } from 'shared/models';

const RecipesTitle = (): JSX.Element => (
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
);

const marginLeft = 145;

export const Recipes = (): JSX.Element => (
  <Section
    id={SectionsData.recipes.id}
    content={
      <React.Fragment>
        <div
          style={{
            margin: `91px 0 37px ${marginLeft}px`
          }}
        >
          <RecipesTitle />

          <div
            style={{
              display: 'flex',
              paddingTop: '68px',
              paddingBottom: '37px',
              flexDirection: 'row',
              overflowY: 'hidden',
              overflowX: 'scroll',
              maxWidth: `calc(100vw - ${marginLeft}px)`
            }}
          >
            {recipes.map(
              (props: Recipe, index: number): JSX.Element => (
                <RecipeCard {...props} key={index} />
              )
            )}
          </div>
        </div>
      </React.Fragment>
    }
  />
);
