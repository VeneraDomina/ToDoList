import React, { Component } from 'react';
import Styles from './styles.scss';
import PropTypes from 'prop-types';
import ContentEditable from 'react-contenteditable';

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
        this.handlerChangeValue =:: this._handlerChangeValue;
    }
    state = {
        isSelected: false
    };
    shouldComponentUpdate (nextProps) {
        return !(this.state === nextProps.state && this.props.task === nextProps.task);
    }
    _deleteTask () {
        this.props.deleteTask(this.props._id);
    }
    _toggleClassSelect () {
        const { isSelected } = this.state;

        this.setState(() => ({
            isSelected: !isSelected
        }));
    }

    _handlerChangeValue (event) {
        const editedTask = event.target.value;

        this.props.editTask(this.props._id, editedTask);
    }

    render () {
        const { task } = this.props;
        const { isSelected } = this.state;

        return (
            <section className = { Styles.task }>
                <div
                    className = { isSelected ? Styles.selected : Styles.select }
                    onClick = { this.toggleClassSelect }
                />
                <ContentEditable
                    className = { isSelected ? Styles.taskValueDone : Styles.taskValue }
                    disabled = { false }
                    html = { task }
                    onChange = { this.handlerChangeValue }
                />
                <span onClick = { this.deleteTask }>Del</span>
            </section>
        );
    }
}
