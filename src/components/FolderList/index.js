import React, { Component } from 'react';
import Styles from './styles.scss';
import FolderMaker from '../FolderMaker';
import PropTypes from 'prop-types';

export default class FolderList extends Component {
    static propTypes = {
        createFolder: PropTypes.func.isRequired,
        folderList:   PropTypes.array.isRequired
    };
    constructor () {
        super();

        this.createFolder = ::this._createFolder;
    }
    _createFolder (newFolder) {
        this.props.createFolder(newFolder);
    }

    render () {
        const { folderList } = this.props;

        return (
            <section className = { Styles.boxTaskList }>
                <ol className = { Styles.folderMenu }>{ folderList }</ol>
                <FolderMaker createFolder = { this.props.createFolder } />
                <button onClick = { this.deleteAllFolders }>clear</button>
            </section>
        );
    }
}
