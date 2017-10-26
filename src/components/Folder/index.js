import React, { Component } from 'react';
import Styles from './styles.scss';
import PropTypes from 'prop-types';

export default class Folder extends Component {
    static propTypes = {
        folder: PropTypes.string.isRequired
    };

    state = {
        folder: ''
    };

    render () {
        const { folder } = this.props;

        return (
            <section className = { Styles.folder }>
                <a>
                    <input
                        type = 'text'
                        value = { folder }
                    />
                </a>
                <input type = 'submit' value = 'Del' />
            </section>
        );
    }
}
