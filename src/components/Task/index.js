import React, { Component } from 'react';
import Styles from './styles.scss';
import PropTypes from 'prop-types';

export default class Task extends Component {
    static propTypes = {
        _id:        PropTypes.string.isRequired,
        deleteTask: PropTypes.func.isRequired,
        task:       PropTypes.string.isRequired
    };

    constructor () {
        super();
        this.deleteTask =:: this._deleteTask;
    }

    _deleteTask () {
        this.props.deleteTask(this.props._id);
    }

    render () {
        const { task } = this.props;

        return (
            <section className = { Styles.task }>
                <div className = { Styles.select } />
                <input
                    type = 'text'
                    value = { task }
                />
                <span onClick = { this.deleteTask }>Del</span>
            </section>
        );
    }
}
