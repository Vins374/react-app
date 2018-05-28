import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

import PropTypes from 'prop-types';
import{ connect } from 'react-redux';
import { loginUser } from '../actions/userActions';

class Login extends Component { 

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
                <form onSubmit={this.onSubmit}>
               <Card>
                    <CardContent>
                    <TextField
                        label="Username"
                        id="margin-none"
                        name="username"
                        onChange={this.onChange} 
                        value={this.state.username}
                    />
                    <br/>
                    <TextField
                        label="Password"
                        id="margin-none"
                        name="password"
                        type="password"
                        onChange={this.onChange} 
                        value={this.state.password}
                    />
                    </CardContent>
                    <CardActions>
                    <Button type="submit" variant="raised" color="primary">
                        Submit
                    </Button>

                    <Button variant="raised" color="default">
                        Register
                    </Button>
                    <p> {this.state.message} </p>
                    </CardActions>
                </Card>
                </form>
            </div>
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    user: state.user.loginData
});

export default connect(mapStateToProps, { loginUser })(Login);