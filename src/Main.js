import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import RootView from './RootView';
import LoginScreen from 'views/Login/LoginScreen';
import constants from 'config/constants';
import './App.scss'
import RegisterScreen from 'views/Register/RegisterScreen';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Route exact component={LoginScreen} path="/" />
                        <Route exact component={LoginScreen} path={constants.path.login} />
                        <Route exact component={RegisterScreen} path={constants.path.register} />
                        {["/admin", '/admin/:function', "/admin/:function/:id"].map((e, i) => {
                            return <Route key={i} path={e} exact component={RootView} />
                        })}
                    </div>
                </Router>
            </div>

        );
    }
}

export default Main;
