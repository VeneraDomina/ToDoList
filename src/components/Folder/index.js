import React, { Component } from 'react';
import Styles from './styles.scss';
import PropTypes from 'prop-types';

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
            <section className = { Styles.folder } onClick = { this.selectedFolder }>
                <a>
                    <input
                        type = 'text'
                        value = { folder }
                    />
                </a>
                <span onClick = { this.deleteFolder }>Del</span>
            </section>
        );
    }
}
