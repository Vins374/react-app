import React, { Component } from 'react';

import PropTypes from 'prop-types';
import{ connect } from 'react-redux';
import { loginUser } from '../actions/userActions';

class LoginNew extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
            message:''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.user);
        if(nextProps.user)
            this.setState({ message : nextProps.user.message });
        // if(nextProps.newPost) {
        //     this.props.posts.unshift(nextProps.newPost);
        // }
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const user = { 
            username: this.state.username,
            password: this.state.password
        }

        this.props.loginUser(user);

        
    }

    render() {
        const user  = this.state.loginData;
        return (
            <div>
                Login New
            </div>
        )
    }
}

LoginNew.propTypes = {
    loginUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    user: state.user.loginData
});

export default connect(mapStateToProps, { loginUser })(LoginNew);