import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Header from 'components/Header';
import router from 'routes/Routes';
import constants from 'config/constants';
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
                     <Header />
                <main>
                    <Switch>
                        {router.map((route, index) => {
                            return route.component ? <Route key={index} component={route.component} path={route.path} /> : null
                        })}
                    </Switch>
                    <Redirect exact from='/' to={constants.path.home} />
                </main>
            </div>

        );
    }
}

export default RootView;
