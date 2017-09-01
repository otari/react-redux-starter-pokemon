import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import * as sidebarActions from '../actions/sidebar';
import { bindActionCreators } from 'redux';
import AppStyles from '../containers/App.scss';
import SidebarStyles from './Sidebar.scss';

const Sidebar = (props) => {
    return (
        <aside className={(props.sidebar.visible ? '' : SidebarStyles.hidden)}>
            <div className={`${AppStyles['btn-group']} ${AppStyles['btn-group-justified']}`}>
                <div className={`${AppStyles['btn-group']}`}>
                    <Link to="/" type="button" className={`${AppStyles.btn} ${SidebarStyles.btn} ${AppStyles['btn-success']}`}>Dashboard</Link>
                </div>
                <div className={`${AppStyles['btn-group']}`}>
                    <button type="button" className={`${AppStyles.btn} ${SidebarStyles.btn} ${AppStyles['btn-info']}`} onClick={() => { props.actions.sidebar.hide() }}>Hide Sidebar</button>
                </div>
            </div>
        </aside>
    )
}

export default connect(
    (state) => ({
        sidebar: state.sidebar
    }),
    (dispatch) => ({
        actions: {
            sidebar: bindActionCreators(sidebarActions, dispatch)
        }
    }))(Sidebar);
