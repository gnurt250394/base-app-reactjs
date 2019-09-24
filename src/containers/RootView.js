import React, { Component } from 'react';
import Header from 'components/Header';

class RootView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
                <Header />
        );
    }
}

export default RootView;
