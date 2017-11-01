import React, { Component } from 'react';
import TaskMaker from '../TaskMaker';
import Styles from './styles.scss';
import Task from '../Task';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import { fromTo } from 'gsap';

export default class TaskList extends Component {
    static propTypes = {
        createTask: PropTypes.func.isRequired,
        deleteTask: PropTypes.func.isRequired,
        tasks:      PropTypes.array.isRequired
    };
    constructor () {
        super();
        this.createTask =:: this._createTask;
        this.deleteTask =:: this._deleteTask;
        this.taskAppear =:: this._taskAppear;
        this.appearTaskMaker =:: this._appearTaskMaker;
    }

    _createTask (newTask) {
        this.props.createTask(newTask);
    }
    _deleteTask (_id) {
        this.props.deleteTask(_id);
    }
    _taskAppear (task) {
        fromTo(
            task,
            1,
            { y: -500 },
            { y: 0 }
        );
    }
    _appearTaskMaker (taskMaker) {
        fromTo(
            taskMaker,
            1,
            { y: -500 },
            { y: 0 }
        );
    }

    render () {
        const { tasks } = this.props;
        const header = 'Let\'s do this!';
        const taskList = tasks.map(
            ({ _id, task }) => (
                <Transition
                    appear
                    in
                    key = { _id }
                    timeout = { 1000 }
                    onEnter = { this.taskAppear }>
                    <Task
                        _id = { _id }
                        deleteTask = { this.deleteTask }
                        task = { task }
                    />
                </Transition>
            ));

        return (
            <section className = { Styles.taskList }>
                <h1>{ header }</h1>
                { taskList }
                <Transition
                    appear
                    in
                    timeout = { 1000 }
                    onEnter = { this.appearTaskMaker }>
                    <TaskMaker createTask = { this.createTask } />
                </Transition>
            </section>
        );
    }
}
