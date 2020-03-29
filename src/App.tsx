import { Footer, Navbar } from 'components';
import React, { Component } from 'react';
import { About, Community, Location, OurMenu, Recipes } from 'sections';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app-root'>
        <Navbar />

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
