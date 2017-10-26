import React, { Component } from 'react';
import TaskList from '../TaskList';
import BoxTaskList from '../FolderList';
import Styles from './styles.scss';

export default class Feed extends Component {
    render () {
        return (
            <section className = { Styles.feed }>
                <BoxTaskList />
                <TaskList />
            </section>
        );
    }
}
