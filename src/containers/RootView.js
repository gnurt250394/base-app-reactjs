import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import router from './routes/Routes';
class RootView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
            <Header/>
                <Switch>
                    {router.map((e, i) => {
                        return e.component ?
                            <Route path={e.path} component={e.component} />
                            :
                            null
                    })}
                </Switch>
            </div>

        );
    }
}

export default RootView;
