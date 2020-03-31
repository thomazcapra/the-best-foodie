import { Footer, Navbar } from 'components';
import React, { Component } from 'react';
import { fromEvent, asyncScheduler } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';
import {
  About,
  Community,
  Location,
  OurMenu,
  Recipes,
  SectionsData
} from 'sections';
import './App.css';

const RequestInfo = (): JSX.Element => {
  return (
    <div
      style={{
        position: 'fixed',
        backgroundColor: 'white',
        color: '#333333',
        fontSize: '18px',
        right: '-20px',
        zIndex: 2,
        width: '100px',
        height: '30px',
        top: 'calc(50% - 50px)',
        cursor: 'pointer',
        transform: 'rotate(270deg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      REQUEST INFO
    </div>
  );
};

interface EventTarget {
  scrollingElement: HTMLElement;
}

const getSectionCheckpoint = (id: string): number => {
  return document.getElementById(id)!.offsetTop;
};

const getSectionIndex = (scrollTop: number, scrollHeight: number): number => {
  if (scrollTop < getSectionCheckpoint(SectionsData.community.id)) {
    return 0;
  } else if (scrollTop < getSectionCheckpoint(SectionsData.location.id)) {
    return 1;
  } else if (scrollTop < getSectionCheckpoint(SectionsData.ourMenu.id)) {
    return 2;
  } else if (
    scrollTop < getSectionCheckpoint(SectionsData.recipes.id) &&
    scrollHeight !== scrollTop + window.innerHeight
  ) {
    return 3;
  }

  return 4;
};

const SectionNumbers = (): JSX.Element => {
  const [currentSection, setCurrentSection] = React.useState<number>(0);

  React.useEffect(() => {
    const sub$ = fromEvent(document, 'scroll')
      .pipe(
        throttleTime(50, asyncScheduler, { leading: false, trailing: true }),
        map((e: any) => e.target.scrollingElement as HTMLElement)
      )
      .subscribe(({ scrollTop, scrollHeight }): void => {
        setCurrentSection(getSectionIndex(scrollTop, scrollHeight));
      });

    return () => sub$.unsubscribe();
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        left: '27px',
        zIndex: 2,
        height: '110px',
        width: '30px',
        top: 'calc(50% - 60px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: `${18 * currentSection}px`,
          left: 0,
          fontSize: '18px'
        }}
      >
        {`0${currentSection + 1}`}
      </div>
      {new Array(6).fill(null).map((e, index: number) => (
        <div
          className={index === currentSection ? 'seleted-section' : ''}
          style={{
            backgroundColor: '#333333',
            width: index === currentSection ? 'unset' : '15px',
            height: '2px'
          }}
          key={index}
        />
      ))}
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className='app-root' id='container-root'>
        <Navbar />

        <RequestInfo />

        <SectionNumbers />

        <About />
        <Community />
        <Location />
        <OurMenu />
        <Recipes />
        <Footer />
      </div>
    );
  }
}

export default App;
