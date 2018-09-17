import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'



import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className='main-container'>
          <Nav />
          <Main />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
library.add(faStroopwafel)