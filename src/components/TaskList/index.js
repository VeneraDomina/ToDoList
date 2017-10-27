import React, { Component } from 'react';
import TaskMaker from '../TaskMaker';
import Styles from './styles.scss';
import Task from '../Task';

export default class TaskList extends Component {
    constructor () {
        super();
        this.createTask =:: this._createTask;
    }
    state = {
        tasks: []
    };

    _createTask (task) {

        this.setState(({ tasks }) => ({
            tasks: [...tasks, task]
        }));
    }

    render () {
        const { tasks } = this.state;
        const header = 'Let\'s do this!';
        const taskList = tasks.map(
            ({ _id, task }) => (
                <Task
                    _id = { _id }
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
