import React, { Component } from 'react';
import TaskList from '../TaskList';
import FolderList from '../FolderList';
import Styles from './styles.scss';

export default class Feed extends Component {
    state = {
        taskLists: []
    };

    render () {
        const { taskLists } = this.state;

        return (
            <section className = { Styles.feed }>
                <FolderList />
                <TaskList />
            </section>
        );
    }
}
