import React, { Component } from 'react';
import Styles from './styles.scss';
import PropTypes from 'prop-types';
import ContentEditable from 'react-contenteditable';

export default class Folder extends Component {
    static propTypes = {
        _id:            PropTypes.string.isRequired,
        deleteFolder:   PropTypes.func.isRequired,
        folder:         PropTypes.string.isRequired,
        selectedFolder: PropTypes.func.isRequired
    };
    constructor () {
        super();
        this.deleteFolder =:: this._deleteFolder;
        this.selectedFolder =:: this._selectedFolder;
    }
    _selectedFolder () {
        this.props.selectedFolder(this.props._id);
    }
    _deleteFolder () {
        this.props.deleteFolder(this.props._id);
    }

    render () {
        const { folder } = this.props;

        return (
            <li className = { Styles.folder } onClick = { this.selectedFolder }>
                <p>{ folder }<span onClick = { this.deleteFolder }>X</span></p>
            </li>
        );
    }
}
