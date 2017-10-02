import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';


import Header from './Header';
import HomePage from './HomePage';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import Services from './Services';



class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/home" component={HomePage} />
          <Route path="/services" component={Services} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}


export default App;
