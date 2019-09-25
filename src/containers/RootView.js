import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import router from './routes/Routes';
import Home from './views/Home/HomeScreen';
import RegisterScreen from './views/Register/RegisterScreen';
import ProfileScreen from './views/Profile/ProfileScreen';
class RootView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <nav>
                    <Header />
                </nav>
                <main>
                    <Switch>
                        {router.map((route, index) => {
                            return route.component ? <Route key={index} component={route.component} path={route.path} /> : null
                        })}
                    </Switch>
                </main>
            </div>

        );
    }
}

export default RootView;
