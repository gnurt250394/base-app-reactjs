import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import router from './routes/Routes';
import RootView from './RootView';
import LoginScreen from './views/Login/LoginScreen';
import constants from './config/constants';
import './App.scss'
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
