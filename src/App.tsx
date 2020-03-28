import { Navbar } from 'components';
import React, { Component } from 'react';
import { About, Community, Location, OurMenu, Recipes } from 'sections';
import './App.css';

class App extends Component {
  dummyText = 'TEXT';
  render() {
    return (
      <div className='App'>
        <Navbar />

        <About />
        <Community />
        <Location />
        <OurMenu />
        <Recipes />
      </div>
    );
  }
}

export default App;
