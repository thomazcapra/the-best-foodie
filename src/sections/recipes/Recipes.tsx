import React from 'react';
import { Section, RecipeCard } from 'components';
import { SectionsData } from 'sections/sections.models';
import { recipes } from './Recipes.data';
import { Recipe } from 'shared/models';
import { recipesImages } from 'assets/images/recipes';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

const horizontalMargin = 145;

const RecipesTitle = (): JSX.Element => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
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
          cursor: 'pointer',
          textAlign: 'center'
        }}
      >
        SEE ALL
      </div>
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginRight: `${horizontalMargin}px`
      }}
    >
      <div
        style={{
          fontSize: '35px',
          color: '#333333',
          lineHeight: '52px',
          textAlign: 'center'
        }}
      >
        DO YOU WANT TO SHARE YOUR OWN RECIPE?
      </div>
      <div
        style={{
          fontSize: '18px',
          backgroundColor: '#FFDAC9',
          cursor: 'pointer',
          padding: '9px',
          width: '101px',
          textAlign: 'center'
        }}
      >
        SEND IT NOW
      </div>
    </div>
  </div>
);

const RecipesArrows = ({
  scrollableArea
}: {
  scrollableArea: HTMLDivElement;
}): JSX.Element => {
  const [constrols, setConstrols] = React.useState<{
    nextDisabled: boolean;
    backDisabled: boolean;
  }>({
    nextDisabled: false,
    backDisabled: true
  });

  React.useEffect(() => {
    const subs$ = fromEvent(scrollableArea, 'scroll')
      .pipe(
        debounceTime(100),
        map((e: Event) => e.target as HTMLDivElement)
      )
      .subscribe(
        ({
          scrollLeft,
          scrollWidth,
          offsetLeft,
          offsetWidth
        }: HTMLDivElement) => {
          setConstrols(state => {
            return {
              ...state,
              backDisabled: !scrollLeft,
              nextDisabled: scrollLeft + offsetWidth === scrollWidth
            };
          });
        }
      );

    return () => subs$.unsubscribe();
  }, [scrollableArea]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        marginRight: '145px'
      }}
    >
      <div
        style={{
          marginRight: '15px',
          cursor: 'pointer'
        }}
        onClick={() => {
          scrollableArea.scroll({
            behavior: 'smooth',
            left: 0,
            top: 0
          });
        }}
      >
        {recipesImages.backArrow(constrols.backDisabled)}
      </div>
      <div
        style={{
          cursor: 'pointer'
        }}
        onClick={() => {
          scrollableArea.scroll({
            behavior: 'smooth',
            left: scrollableArea.scrollWidth,
            top: 0
          });
        }}
      >
        {recipesImages.nextArrow(constrols.nextDisabled)}
      </div>
    </div>
  );
};

export const Recipes = (): JSX.Element => {
  const scrollableAreaRef = React.useRef<HTMLDivElement>(null);
  const [element, setElement] = React.useState<HTMLDivElement>();

  React.useEffect(() => {
    setElement(scrollableAreaRef.current!);
  }, [scrollableAreaRef]);

  return (
    <Section
      id={SectionsData.recipes.id}
      height={'unset'}
      content={
        <React.Fragment>
          <div
            style={{
              margin: `91px 0 37px ${horizontalMargin}px`
            }}
          >
            <RecipesTitle />

            <div
              ref={scrollableAreaRef}
              style={{
                display: 'flex',
                paddingTop: '68px',
                paddingBottom: '37px',
                flexDirection: 'row',
                overflowY: 'hidden',
                overflowX: 'scroll',
                maxWidth: `calc(100vw - ${horizontalMargin}px)`
              }}
            >
              {recipes.map(
                (props: Recipe, index: number): JSX.Element => (
                  <RecipeCard {...props} key={index} />
                )
              )}
            </div>

            {element && (
              <RecipesArrows
                scrollableArea={element || ({} as HTMLDivElement)}
              />
            )}
          </div>
        </React.Fragment>
      }
    />
  );
};
