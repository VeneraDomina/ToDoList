import React, { Component } from 'react';
import Styles from './styles.scss';
import PropTypes from 'prop-types';
import { getUniqueID } from '../../helpers/index';

export default class FolderMaker extends Component {
    static propTypes = {
        createFolder: PropTypes.func.isRequired
    };
    constructor () {
        super();
        this.handleFolderChange =:: this._handleFolderChange;
        this.handleSubmit =:: this._handleSubmit;
    }

    state = {
        folderValue: ''
    };

    _handleFolderChange (event) {
        const folderValue = event.target.value;

        this.setState(() => ({
            folderValue
        }));
    }

    _handleSubmit (event) {
        event.preventDefault();

        const { folderValue } = this.state;

        if (!folderValue) {
            return;
        }
        this.props.createFolder({
            _id:    getUniqueID(15),
            folder: folderValue
        });

        this.setState(() => ({
            folderValue: ''
        }));
    }

    render () {

        const { folderValue } = this.state;

        return (
            <section className = { Styles.folder }>
                <form onSubmit = { this.handleSubmit }>
                    <input
                        placeholder = 'new folder'
                        type = 'text'
                        value = { folderValue }
                        onChange = { this.handleFolderChange }
                    />
                    <input type = 'submit' value = 'Add' />
                </form>
            </section>
        );
    }
}
