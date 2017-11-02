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
        this.toggleClassSelect =:: this._toggleClassSelect;
    }
    state = {
        isSelected: false
    };

    _deleteTask () {
        this.props.deleteTask(this.props._id);
    }
    _toggleClassSelect () {
        const { isSelected } = this.state;

        this.setState(() => ({
            isSelected: !isSelected
        }));
    }

    render () {
        const { task } = this.props;
        const { isSelected } = this.state;
        const isDone = isSelected
            ? <div
                className = { Styles.selected }
                onClick = { this.toggleClassSelect }
            />
            : <div
                className = { Styles.select }
                onClick = { this.toggleClassSelect }
            />;
        const isDoneTask = isSelected
            ? <span className = { Styles.taskValueDone }>{ task }</span>
            : <span className = { Styles.taskValue }>{ task }</span>;

        return (
            <section className = { Styles.task }>
                { isDone }
                { isDoneTask }
                <span onClick = { this.deleteTask }>Del</span>
            </section>
        );
    }
}
