import React, { Component } from 'react';
import TaskMaker from '../TaskMaker';
import Styles from './styles.scss';
import Task from '../Task';
import PropTypes from 'prop-types';

export default class TaskList extends Component {
    static propTypes = {
        createTask: PropTypes.func.isRequired
    }
    constructor () {
        super();
        this.createTask =:: this._createTask;
        this.deleteTask =:: this._deleteTask;
    }
    state = {
        tasks: []
    };

    _createTask (newTask) {
        this.props.createTask(newTask);
    }
    _deleteTask (_id) {

    }

    render () {
        const { tasks } = this.state;
        const header = 'Let\'s do this!';
        const taskList = tasks.map(
            ({ _id, task }) => (
                <Task
                    _id = { _id }
                    deleteTask = { this.deleteTask }
                    key = { _id }
                    task = { task }
                />
            ));

        return (
            <section className = { Styles.taskList }>
                <h1>{ header }</h1>
                { taskList }
                <TaskMaker createTask = { this.createTask } />
            </section>
        );
    }
}
