import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions/fetchAdmins';
import requireAuth from '../components/hocs/requireAuth';

class AdminsListPage extends Component {
    componentDidMount() {
        if (!this.props.admins.length) {
            this.props.fetchAdmins();
        }
    }

    renderAdmins() {
        return this.props.admins.map(admin => {
            return <li key={admin.id}>{admin.name}</li>;
        });
    }

    render() {
        return (
            <div>
                <h3>Protected list of admins</h3>
                <ul>{this.renderAdmins()}</ul>
            </div>
        )
    }
}

function mapStateToProps({ admins }) {
    return { admins };
}

export default connect(
    mapStateToProps,
    { fetchAdmins }
)(requireAuth(AdminsListPage));
