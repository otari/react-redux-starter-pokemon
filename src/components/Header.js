import React from 'react';
import { Link } from 'react-router-dom';
import Search from './search';
import { connect } from 'react-redux';
import * as sidebarActions from '../actions/sidebar';
import { bindActionCreators } from 'redux';
import styles from '../containers/App.scss';

export class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            toggleMenu: false
        }
    }
    toggleNavBar() {
        this.setState({ toggleMenu: !this.state.toggleMenu })
    }
    render() {
        return (
            <header>
                <div className={styles.navbar + ' ' + styles['navbar-default']}>
                    <div className={styles['container-fluid']}>

                        <div className={styles['navbar-header']}>
                            <button onClick={this.toggleNavBar.bind(this)} type="button" className={styles['navbar-toggle']} data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="true">
                                <span className={styles['icon-bar']}></span>
                                <span className={styles['icon-bar']}></span>
                                <span className={styles['icon-bar']}></span>
                            </button>
                            <a href="javascript:void(0)" className={styles['navbar-brand']}
                                onClick={() => {
                                    this.props.sidebar.visible ? this.props.actions.sidebar.hide() : this.props.actions.sidebar.show()
                                } }>
                                Pokémon
                            </a>
                        </div>
                        {   //Implement classnames utility for easier class name manipulation
                            //https://github.com/JedWatson/classnames
                            this.state.toggleMenu ?
                                <div className={`${styles['navbar-collapse']}`}>
                                    <Search />
                                </div>
                                :
                                <div className={`${styles['navbar-collapse']} ${styles.collapse}`}>
                                    <Search />
                                </div>
                        }

                    </div>
                </div>
            </header>
        )
    }
}

export default connect(
    (state) => ({
        sidebar: state.sidebar
    }),
    (dispatch) => ({
        actions: {
            sidebar: bindActionCreators(sidebarActions, dispatch)
        }
    }))(Header);
