import React, { Component } from 'react';
import Styles from './styles.scss';
import FolderMaker from '../FolderMaker';
import Folder from '../Folder';

export default class FolderList extends Component {
    constructor () {
        super();
        this.createFolder =:: this._createFolder;
        this.getFolders =:: this._getFolders;

    }
    state = {
        folders: []
    };

    componentWillMount () {
        this.getFolders();
    }

    _createFolder (newFolder) {
        localStorage.setItem('folders', JSON.stringify({ folder: newFolder.folder, folderID: newFolder._id }));
        this.setState(({ folders }) => ({
            folders: [...folders, newFolder]
        }));
        console.log(newFolder._id);
    }
    _getFolders () {
        const data = JSON.parse(localStorage.getItem('folders'));

        this.setState(({ folders }) => ({
            folders: [...folders, data]
        }));
    }

    render () {
        const { folders } = this.state;
        const folderList = folders.map(
            ({ _id, folder }) => (
                <li key = { _id }>
                    <Folder
                        _id = { _id }
                        folder = { folder }
                    />
                </li>
            ));

        return (
            <section className = { Styles.boxTaskList } >
                <ol className = { Styles.folderMenu }>{ folderList }</ol>
                <FolderMaker createFolder = { this.createFolder } />
            </section>
        );
    }
}
