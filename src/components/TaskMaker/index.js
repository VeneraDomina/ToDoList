import React, { Component } from 'react';
import Styles from './styles.scss';
import PropTypes from 'prop-types';
import { getUniqueID } from '../../helpers/index';

export default class TaskMaker extends Component {
    static propTypes = {
        createTask: PropTypes.func.isRequired
    };
    constructor () {
        super();
        this.handleTaskChange =:: this._handleTaskChange;
        this.handleSubmit =:: this._handleSubmit;
    }

    state = {
        taskValue: ''
    };

    _handleTaskChange (event) {
        const taskValue = event.target.value;

        this.setState(() => ({
            taskValue
        }));
    }

    _handleSubmit (event) {
        event.preventDefault();

        const { taskValue } = this.state;

        if (!taskValue) {
            return;
        }
        this.props.createTask({
            _id:  getUniqueID(10),
            task: taskValue
        });

        this.setState(() => ({
            taskValue: ''
        }));
    }

    render () {

        const { taskValue } = this.state;

        return (
            <section className = { Styles.task }>
                <form onSubmit = { this.handleSubmit }>
                    <input
                        placeholder = 'new task'
                        type = 'text'
                        value = { taskValue }
                        onChange = { this.handleTaskChange }
                    />
                    <input type = 'submit' value = 'Add' />
                </form>
            </section>
        );
    }
}


/*<section className = { Styles.task }>
                <input name = 'task' type = 'checkbox' />
                <label htmlFor = 'task'
                       onClick = { this.labelClick }>
                    { labelValue }
                </label>
                <input type = 'text'
                       value = { taskValue }
                       onChange = { this.handleTaskChange }>
                </input>
            </section>*/
