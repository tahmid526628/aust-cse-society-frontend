import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Footer from './components/footer/footer.component';
import AboutPage from './pages/aboutpage/aboutpage.component';
import ContactPage from './pages/contactpage/contactpage.component';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
