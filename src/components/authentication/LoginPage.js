import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Alert from '../alerts/Alert';
import loginUser from '../../actions/loginUser';
import LoginForm from './LoginForm';


class LoginPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: ""
        };

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onEmailChange(event){
        const email = event.target.value;
        this.setState({
            email: email
        });
    }

    onPasswordChange(event){
        const password = event.target.value;
        this.setState({
            password: password
        });
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.loginUser(
            this.state.email,
            this.state.password
        );
        this.renderAlert()
    }

    renderAlert() {
        const {login_error_message} = this.props.messages;
        const {login_success_message} = this.props.messages;

        if (login_error_message) {
            return <Alert color="warning" message={login_error_message}/>;
        } else if (login_success_message) {
            return <Alert color="success" message={login_success_message}/>;
        }
    }

    render(){
        return (
            <div>
                <h1 className="text-center">Login</h1>
                <hr/>
                {this.renderAlert()}
                <LoginForm
                    onEmailChange={this.onEmailChange}
                    onPasswordChange={this.onPasswordChange}
                    onFormSubmit={this.onFormSubmit}/>
            </div>
        );
    }
}

LoginPage.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    messages: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        auth: state.auth,
        messages: state.messages.login
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loginUser: bindActionCreators(loginUser, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
