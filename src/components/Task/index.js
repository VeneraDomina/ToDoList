import React, { Component } from 'react';
import Styles from './styles.scss';
import PropTypes from 'prop-types';

export default class Task extends Component {
    static propTypes = {
        task: PropTypes.string.isRequired
    };
    constructor () {
        super();
        this.redactTask =:: this._redactTask;
    }
    state = {
        task: ''
    };

    _redactTask (event) {
        const task = event.target.value;

        this.props.redactTask(this.props._id, this.props.task);
        this.setState(() => ({
            task
        }));
        console.log(task);
    }


    render () {
        const { task } = this.props;

        return (
            <section className = { Styles.task }>
                <span className = { Styles.select } />
                <input
                    type = 'text'
                    value = { task }
                    onChange = { this.redactTask }
                />
                <input type = 'submit' value = 'Del' />
            </section>
        );
    }
}
