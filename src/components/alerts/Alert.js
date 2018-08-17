import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';
import { UncontrolledAlert } from 'reactstrap';

import {clearLoginError} from '../../actions/errorHandlers';

class Alert extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            visible: true,
            color: this.props.color || "info"
        };

        this.onDismiss = this.onDismiss.bind(this)
    }

    onDismiss(){
        this.setState({
            visible: false
        });
        this.props.clearLoginError()
    }

    render() {
        const { message } = this.props;

        return (
            <div>
                <UncontrolledAlert
                    isOpen={this.state.visible}
                    toggle={this.onDismiss}
                    color={this.state.color}>
                    {message}
                </UncontrolledAlert>
            </div>
        )
    }
}

Alert.propTypes = {
    message: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    clearLoginError: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearLoginError: bindActionCreators(clearLoginError, dispatch)
    }
};

export default connect(null, mapDispatchToProps)(Alert);
