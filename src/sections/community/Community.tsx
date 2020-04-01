import { CommunityCard, Section } from 'components';
import React from 'react';
import { SectionsData } from 'sections/sections.models';
import { documentScroll$ } from 'utils';
import { Communities } from './Community.data';

const CommunityTitle = (): JSX.Element => (
  <div
    style={{
      marginLeft: '418px',
      marginTop: '79px',
      width: '266px',
      position: 'absolute'
    }}
  >
    <div
      style={{
        fontSize: '62px',
        lineHeight: '52px',
        color: '#333333'
      }}
    >
      MEET OUR
    </div>
    <div
      style={{
        position: 'relative'
      }}
    >
      <div
        style={{
          width: '266px',
          position: 'absolute',
          height: '6px',
          top: '22px',
          left: '-19px',
          backgroundColor: '#FFDAC9'
        }}
      />
      <div
        style={{
          fontSize: '62px',
          lineHeight: '52px',
          color: '#333333',
          position: 'relative'
        }}
      >
        COMMUNITY
      </div>
    </div>
    <div>
      <div
        style={{
          backgroundColor: '#FFDAC9',
          marginTop: '10px',
          color: '#333333',
          fontSize: '18px',
          height: '30px',
          width: '91px',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        KNOW MORE
      </div>

      <div
        style={{
          fontSize: '22px',
          lineHeight: '25px',
          letterSpacing: '0.44px',
          width: '199px',
          marginTop: '36px'
        }}
      >
        LOREM IPSUM DOLOR SIT AMET ERNUT TEMPARTERO SERTU PER NABORE EN TORNA
        ENTALTO
      </div>
    </div>
  </div>
);

const CommunityLine = ({
  children,
  reversed
}: {
  reversed?: boolean;
  children: JSX.Element;
}): JSX.Element => {
  const ref = React.useRef<HTMLDivElement>(null);

  const [opacity, setOpacity] = React.useState<number>(0);

  React.useLayoutEffect(() => {
    const sub$ = documentScroll$.subscribe(
      ({ scrollTop, scrollHeight }): void => {
        const bounding = ref.current?.getBoundingClientRect();

        if (
          bounding &&
          bounding.top <= scrollTop &&
          bounding.bottom <= window.innerHeight + scrollTop
        ) {
          ref.current?.classList.add('card-appear');
          setOpacity(1);
          sub$.unsubscribe();
        }
      }
    );

    return () => sub$.unsubscribe();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        height: '260px',
        alignItems: 'center',
        opacity: opacity,
        width: '1092px',
        marginTop: '16px',
        justifyContent: reversed ? 'unset' : 'flex-end'
      }}
    >
      {children}
    </div>
  );
};

const CommunityCards = (): JSX.Element => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      padding: '130px 130px'
    }}
  >
    <CommunityLine>
      <CommunityCard {...Communities[0]} />
    </CommunityLine>
    <CommunityLine reversed>
      <CommunityCard {...Communities[1]} />
    </CommunityLine>
    <CommunityLine>
      <CommunityCard {...Communities[2]} />
    </CommunityLine>
  </div>
);

export const Community = (): JSX.Element => (
  <Section
    id={SectionsData.community.id}
    height={'unset'}
    content={
      <React.Fragment>
        <CommunityTitle />
        <CommunityCards />
      </React.Fragment>
    }
  />
);
