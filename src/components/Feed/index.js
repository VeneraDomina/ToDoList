import React, { Component } from 'react';
import TaskList from '../TaskList';
import FolderList from '../FolderList';
import Styles from './styles.scss';
import Folder from '../Folder';

export default class Feed extends Component {
    constructor () {
        super();

        this.createFolder = ::this._createFolder;
        this.getFolders = ::this._getFolders;
        this.setFolders = ::this._setFolders;
        this.deleteAllFolders = ::this._deleteAllFolders;
        this.deleteFolder =:: this._deleteFolder;
        this.createTask =:: this._createTask;
        this.selectedFolder =:: this._selectedFolder;
    }
    state = {
        folders:  [],
        folderID: ''
    };
    componentWillMount () {
        this.setFolders();
        this.state.folders.length
            ? this.setState(() => ({
                folderID: this.state.folders[0]._id
            }))
            : null;
    }
    _createFolder (newFolder) {
        localStorage.setItem(
            'folders',
            JSON.stringify([
                ...this.getFolders(),
                {
                    folder:   newFolder.folder,
                    _id:      newFolder._id,
                    taskList: []
                }
            ])
        );

        this.setState(({ folders }) => ({
            folders:  [...folders, newFolder],
            folderID: newFolder._id
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
    _createTask (newTask) {
        const { folders, folderID } = this.state;
        const folderWithTask = folders.map((folder) => {
            if (folder._id == folderID) {
                folder.taskList = [...folder.taskList, newTask];
            }
        });
        this.setState(() => ({
            folders:  folderWithTask
        }));
        localStorage.setItem(
            'folders',
            JSON.stringify([
                ...this.getFolders()
            ])
        );
    }
    _selectedFolder (_id) {
        this.setState(() => ({
            folderID: _id
        }));
    }
    render () {
        const { folders, folderID } = this.state;
        const folderList = folders.map((folder) => (
            console.log('Map folders in Feed', folder),
            <li key = { folder._id }>
                <Folder
                    _id = { folder._id }
                    deleteFolder = { this.deleteFolder }
                    folder = { folder.folder }
                    selectedFolder = { this.selectedFolder }
                />
            </li>
        ));

        console.log('State folders', this.state.folders);

        return (
            <section className = { Styles.feed }>
                <FolderList
                    createFolder = { this.createFolder }
                    deleteFolder = { this.deleteFolder }
                    folderList = { folderList }
                />
                <TaskList
                    createTask = { this.createTask }
                    folderID = { folderID }
                    folders = { folders }
                />
            </section>
        );
    }
}
