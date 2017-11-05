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
    shouldComponentUpdate (nextProps) {
        const isEqual = this.props.folderList.length !== nextProps.folderList.length;

        return isEqual;
    }
    _createFolder (newFolder) {
        this.props.createFolder(newFolder);
    }
    _deleteAllFolders () {
        this.props.deleteAllFolders();
    }

    render () {
        console.log('render FolderList');
        const { folderList } = this.props;

        return (
            <section className = { Styles.folderList }>
                <ol className = { Styles.folderMenu }>{ folderList }</ol>
                <FolderMaker createFolder = { this.props.createFolder } />
                <div className = { Styles.button } onClick = { this.deleteAllFolders }>Delete all folders</div>
            </section>
        );
    }
}
