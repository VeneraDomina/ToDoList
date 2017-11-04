import React, { Component } from 'react';
import TaskList from '../TaskList';
import FolderList from '../FolderList';
import Styles from './styles.scss';
import Folder from '../Folder';
import { Transition } from 'react-transition-group';
import { fromTo } from 'gsap';

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
        this.deleteTask =:: this._deleteTask;
        this.folderAppear =:: this._folderAppear;
        this.taskListAppear =:: this._taskListAppear;
        this.editTask =:: this._editTask;
        this.editFolder =:: this._editFolder;
    }
    state = {
        folders:  [],
        folderID: ''
    };

    componentDidMount () {
        this.setFolders();

        setImmediate(() => {
            this.state.folders.length
                ? this.setState(() => ({
                    folderID: this.state.folders[0]._id
                }))
                : null;
        });
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
    _editFolder (_id, editedFolder) {
        const { folders, folderID } = this.state;
        const foldersEdited = folders.map((folder) => {
            if (folder._id === folderID) {
                folder.folder = editedFolder;
            }

            return folder;
        });

        this.setState(() => ({
            folders: foldersEdited
        }));
        localStorage.setItem('folders', JSON.stringify(folders));
    }
    _createTask (newTask) {
        const { folders, folderID } = this.state;
        const foldersAddTask = folders.map((folder) => {
            if (folder._id === folderID) {
                folder.taskList = [...folder.taskList, newTask];
            }

            return folder;
        });

        this.setState(() => ({
            folders: foldersAddTask
        }));
        localStorage.setItem('folders', JSON.stringify(folders));
    }
    _deleteTask (_id) {
        const { folders, folderID } = this.state;
        const folderToChange = folders.filter((folder) => folder._id === folderID);
        const taskList = folderToChange[0].taskList.filter((task) => task._id !== _id);
        const foldersDelTask = folders.map((folder) => {
            if (folder._id === folderID) {
                folder.taskList = taskList;
            }

            return folder;
        });

        this.setState(() => ({
            folders: foldersDelTask
        }));
        localStorage.setItem('folders', JSON.stringify(folders));
    }
    _editTask (_id, editedTask) {
        const { folders, folderID } = this.state;
        const folderToChange = folders.filter((folder) => folder._id === folderID);
        const editingTaskList = folderToChange[0].taskList.map((task) => {
            if (task._id === _id) {
                task.task = editedTask;
            }

            return task;
        });
        const foldersEditTask = folders.map((folder) => {
            if (folder._id === folderID) {
                folder.taskList = editingTaskList;
            }

            return folder;
        });

        this.setState(() => ({
            folders: foldersEditTask
        }));
        localStorage.setItem('folders', JSON.stringify(folders));
    }
    _selectedFolder (_id) {
        this.setState(() => ({
            folderID: _id
        }));
    }
    _folderAppear (folder) {
        fromTo(
            folder,
            1,
            { x: -1000 },
            { x: 0 }
        );
    }
    _taskListAppear (taskList) {
        fromTo(
            taskList,
            1,
            { x: -1000 },
            { x: 0 }
        );
    }
    render () {
        let taskArray = [];
        const { folders, folderID } = this.state;
        const folderList = folders.map((folder) => (

            <Folder
                _id = { folder._id }
                deleteFolder = { this.deleteFolder }
                editFolder = { this.editFolder }
                folder = { folder.folder }
                folderID = { folderID }
                key = { folder._id }
                selectedFolder = { this.selectedFolder }
            />

        ));

        folders.filter((folder) => {
            if (folder._id === folderID) {
                taskArray = folder.taskList;
            }
        });

        return (
            <section className = { Styles.feed }>
                <Transition
                    appear
                    in
                    timeout = { 1000 }
                    onEnter = { this.folderAppear }>
                    <FolderList
                        createFolder = { this.createFolder }
                        deleteAllFolders = { this.deleteAllFolders }
                        deleteFolder = { this.deleteFolder }
                        folderList = { folderList }
                    />
                </Transition>
                <Transition
                    appear
                    in
                    timeout = { 1000 }
                    onEnter = { this.taskListAppear }>
                    <TaskList
                        createTask = { this.createTask }
                        deleteTask = { this.deleteTask }
                        editTask = { this.editTask }
                        tasks = { taskArray }
                    />
                </Transition>
            </section>
        );
    }
}
