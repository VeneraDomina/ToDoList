import React, { Component } from 'react';
import Styles from './styles.scss';
import FolderMaker from '../FolderMaker';
import PropTypes from 'prop-types';

export default class FolderList extends Component {
    static propTypes = {
        createFolder:     PropTypes.func.isRequired,
        deleteAllFolders: PropTypes.func.isRequired,
        folderList:       PropTypes.array.isRequired
    };
    constructor () {
        super();
        this.deleteAllFolders =:: this._deleteAllFolders;
        this.createFolder = ::this._createFolder;
    }
    _createFolder (newFolder) {
        this.props.createFolder(newFolder);
    }
    _deleteAllFolders () {
        this.props.deleteAllFolders();
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
