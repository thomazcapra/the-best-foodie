import { communityImages } from 'assets/images/community';
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
    const sub$ = documentScroll$.subscribe(({ scrollTop }): void => {
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
    });

    return () => sub$.unsubscribe();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        opacity,
        height: '260px',
        alignItems: 'center',
        width: '1092px',
        position: 'relative',
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
      <React.Fragment>
        <img
          style={{
            position: 'absolute',
            bottom: '-16px'
          }}
          src={communityImages.detail1}
          alt={communityImages.detail1}
        />
        <img
          style={{
            position: 'absolute',
            bottom: '-30px',
            right: '222px'
          }}
          src={communityImages.detail2}
          alt={communityImages.detail2}
        />
        <CommunityCard {...Communities[0]} />
      </React.Fragment>
    </CommunityLine>
    <CommunityLine reversed>
      <React.Fragment>
        <img
          style={{
            position: 'absolute',
            bottom: '-30px',
            left: '65px'
          }}
          src={communityImages.detail3}
          alt={communityImages.detail3}
        />
        <CommunityCard {...Communities[1]} />
        <div
          style={{
            flexGrow: 1,
            padding: '15px'
          }}
        >
          <div
            style={{
              fontFamily: 'GillSans',
              letterSpacing: '0.15px',
              color: '#333333',
              width: '202px'
            }}
          >
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore
          </div>
        </div>
      </React.Fragment>
    </CommunityLine>
    <CommunityLine>
      <React.Fragment>
        <div
          style={{
            flexGrow: 1,
            padding: '15px'
          }}
        >
          <div
            style={{
              fontFamily: 'GillSans',
              letterSpacing: '0.15px',
              color: '#333333',
              width: '192px'
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
            aute irure.
          </div>
        </div>
        <CommunityCard {...Communities[2]} />
      </React.Fragment>
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
