import React, { Component } from 'react';
import TaskMaker from '../TaskMaker';
import Styles from './styles.scss';
import Task from '../Task';

export default class TaskList extends Component {
    constructor () {
        super();
        this.createTask =:: this._createTask;
        this.redactTask =:: this._redactTask;
    }
    state = {
        tasks: []
    };

    _createTask (task) {

        this.setState(({ tasks }) => ({
            tasks: [...tasks, task]
        }));
    }
    _redactTask (_id, task) {

    }

    render () {
        const { tasks } = this.state;
        const taskList = tasks.map(
            ({ _id, task }) => (
                <Task
                    _id = { _id }
                    key = { _id }
                    task = { task }
                    redactTask = { this.redactTask }
                />
            ));

        return (
            <section className = { Styles.taskList }>
                <h1>Let's do this!</h1>
                { taskList }
                <TaskMaker createTask = { this.createTask } />
            </section>
        );
    }
}
