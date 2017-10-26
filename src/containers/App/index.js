// Core
import React, { Component } from 'react';
import Feed from '../../components/Feed';

// Instruments

export default class App extends Component {

    timer = setInterval(() => this.forceUpdate(), 1000);

    render () {
        return (
            <section>
                <Feed />
            </section>
        );
    }
}
