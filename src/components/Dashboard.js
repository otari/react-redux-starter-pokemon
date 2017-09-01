import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class Dashboard extends React.Component {

    render() {
        return (
            <div>
                <span>this is Dashboard</span>
                <Link to="/">Home</Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})
export default connect(mapStateToProps)(Dashboard);