import React, { Component } from 'react';

// import {
// 	BrowserRouter as Router,
// 	Route,
// 	Switch,
// 	Redirect,
// } from 'react-router-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Auth from '../utils/Auth';

import Login from './Login';
import Logout from './Logout';
import Jurnal from './jurnal/index';
import Home from './Home';
import Nav from './Nav';
import Footer from './Footer';
import Admin from './Admin';


class App extends Component {

    authorization = allowedRoles => WrappedComponent => (
		/* eslint-disable no-multi-comp */
		class WithAuthorization extends Component {
			
			constructor(props) {
				super(props);
				// In this case the user is hardcoded, but it could be loaded from anywhere.
				// Redux, MobX, RxJS, Backbone...
				this.state = {
					user: {
						name: Auth.username(),
						role: Auth.role(),
					}
				};
			}
			
			render() {
				const { role } = this.state.user;
				// const props = this.props;
				if (allowedRoles.includes(role)) {			
					return <WrappedComponent { ...this.props } />;
				} else {
					// return <h1>No page for you!</h1>;
					return <Redirect to = "/login" />
				}
			}
		});

	render() {
        const all_admin = this.authorization(['rektor', 'validator', 'keuangan']);
        const rek_val   = this.authorization(['rektor', 'validator'])
		const keuangan  = this.authorization(['keuangan']);
		const dosen 	= this.authorization(['dosen']);

		return (
            <BrowserRouter>
                    <div>                
                        <Nav />
                            <Switch>
                                <Route path="/" exact component={ Home } />
                                <Route path="/jurnal" exact component={ dosen(Jurnal) } />
                                <Route path = "/login" exact component = { Login } />
                                <Route path = "/admin" exact component = { all_admin(Admin) } />
                            </Switch>
                        <Footer />
                    </div>
			</BrowserRouter>
		)
	}

}

export default App;