import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './Login';
import Jurnal from './jurnal/index';
import Home from './Home';
import Nav from './Nav';
import Footer from './Footer';




class App extends Component {

  render() {
    return (
        <BrowserRouter>
            <div>                
                    <Nav />                           
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/login" exact component={Login} />
                            <Route path="/jurnal" exact component={Jurnal} />
                        </Switch>
                    
                    <Footer />
            </div>
            
        </BrowserRouter>      
    );
  }
}

export default App;
