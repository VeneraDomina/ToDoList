import React, { Component } from 'react';
import Styles from './styles.scss';
import PropTypes from 'prop-types';

export default class Task extends Component {
    static propTypes = {
        task: PropTypes.string.isRequired
    };

    state = {
        task: ''
    };

    render () {
        const { task } = this.props;

        return (
            <section className = { Styles.task }>
                <span className = { Styles.select } />
                <input
                    type = 'text'
                    value = { task }
                />
                <input type = 'submit' value = 'Del' />
            </section>
        );
    }
}
