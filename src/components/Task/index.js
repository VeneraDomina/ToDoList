import React, { Component } from 'react';
import Styles from './styles.scss';
import PropTypes from 'prop-types';

export default class Task extends Component {
    static propTypes = {
        _id:        PropTypes.string.isRequired,
        deleteTask: PropTypes.func.isRequired,
        editTask:   PropTypes.func.isRequired,
        task:       PropTypes.string.isRequired
    };

    constructor () {
        super();
        this.deleteTask =:: this._deleteTask;
        this.toggleClassSelect =:: this._toggleClassSelect;
        this.editTask =:: this._editTask;
        this.editOnBlur =:: this._editOnBlur;
    }
    state = {
        isSelected: false,
        isEditing:  false
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
    _editTask () {
        this.props.editTask(this.props._id);
        this.setState(() => ({
            isEditing: true
        }));
    }
    _editOnBlur () {
        this.setState(() => ({
            isEditing: false
        }));
    }

    render () {
        const { task } = this.props;
        const { isSelected, isEditing } = this.state;
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
            ? <span
                className = { Styles.taskValueDone }
                contentEditable = { isEditing }
                onBlur = { this.editOnBlur }
                onClick = { this.editTask }>
                { task }
            </span>
            : <span
                className = { Styles.taskValue }
                contentEditable = { isEditing }
                onBlur = { this.editOnBlur }
                onClick = { this.editTask }>
                { task }
            </span>;

        return (
            <section className = { Styles.task }>
                { isDone }
                { isDoneTask }
                <span onClick = { this.deleteTask }>Del</span>
            </section>
        );
    }
}
