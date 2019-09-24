import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from 'views/Home/HomeScreen'
class Routes extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route path="/" component={Home} exact />
                </Router>
            </div>
        )
    }
}

export default Routes
