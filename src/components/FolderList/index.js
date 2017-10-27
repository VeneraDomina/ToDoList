import React, { Component } from 'react';
import Styles from './styles.scss';
import FolderMaker from '../FolderMaker';
import Folder from '../Folder';

export default class FolderList extends Component {
    constructor () {
        super();

        this.createFolder = ::this._createFolder;
        this.getFolders = ::this._getFolders;
        this.setFolders = ::this._setFolders;
        this.deleteAllFolders = ::this._deleteAllFolders;
        this.deleteFolder =:: this._deleteFolder;
    }

    state = {
        folders: []
    };

    componentWillMount () {
        this.setFolders();
    }
    _createFolder (newFolder) {
        localStorage.setItem(
            'folders',
            JSON.stringify([
                ...this.getFolders(),
                {
                    folder: newFolder.folder,
                    _id:    newFolder._id
                }
            ])
        );

        this.setState(({ folders }) => ({
            folders: [...folders, newFolder]
        }));
    }
    _setFolders () {
        this.setState(({ folders }) => ({
            folders: [...folders, ...this.getFolders()]
        }));
    }
    _getFolders () {
        return JSON.parse(localStorage.getItem('folders')) || [];
    }
    _deleteFolder (_id) {
        localStorage.setItem(
            'folders',
            JSON.stringify(this.getFolders().filter((folder) => folder._id !== _id))
        );

        this.setState(() => ({
            folders: this.getFolders()
        }));
    }
    _deleteAllFolders () {
        localStorage.clear();
        this.setState(() => ({
            folders: this.getFolders()
        }));
    }
    render () {
        const { folders } = this.state;

        const folderList = folders.map(({ _id, folder }) => (
            <li key = { _id }>
                <Folder
                    _id = { _id }
                    deleteFolder = { this.deleteFolder }
                    folder = { folder }
                />
            </li>
        ));

        return (
            <section className = { Styles.boxTaskList }>
                <ol className = { Styles.folderMenu }>{folderList}</ol>
                <FolderMaker createFolder = { this.createFolder } />
                <button onClick = { this.deleteAllFolders }>clear</button>
            </section>
        );
    }
}
