import React, { Component } from 'react';
import Styles from './styles.scss';
import PropTypes from 'prop-types';
import ContentEditable from 'react-contenteditable';

export default class Folder extends Component {
    static propTypes = {
        _id:            PropTypes.string.isRequired,
        deleteFolder:   PropTypes.func.isRequired,
        editFolder:     PropTypes.func.isRequired,
        folder:         PropTypes.string.isRequired,
        folderID:       PropTypes.string.isRequired,
        selectedFolder: PropTypes.func.isRequired
    };
    constructor () {
        super();
        this.deleteFolder =:: this._deleteFolder;
        this.selectedFolder =:: this._selectedFolder;
        this.handlerChangeValue =:: this._handlerChangeValue;
    }
    shouldComponentUpdate (nextProps) {
        return !(this.props.folderID === nextProps.folderID);
    }
    _selectedFolder () {
        this.props.selectedFolder(this.props._id);
    }
    _deleteFolder () {
        this.props.deleteFolder(this.props._id);
    }
    _handlerChangeValue (event) {
        const editedFolder = event.target.value;

        this.props.editFolder(this.props._id, editedFolder);
    }

    render () {
        const { folder, folderID, _id } = this.props;
        const folderStyle = folderID === _id ? Styles.folderSelected : Styles.folder;

        return (
            <li className = { folderStyle }  onClick = { this.selectedFolder }>
                <ContentEditable
                    className = { Styles.contentValue }
                    disabled = { false }
                    html = { folder }
                    onChange = { this.handlerChangeValue }
                />
                <span onClick = { this.deleteFolder }>X</span>
            </li>
        );
    }
}
