import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {Button, Form, Grid, Header, Message, Segment} from 'semantic-ui-react'
import * as actionTypes from "../../store/actions/loginActionTypes";
import MainHeader from "../FivijHeader/MainHeader";

const LoginCmp = (props) => {

    return (
        <div className='login-form'>
            <MainHeader/>
            <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}
            </style>
            <Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as='h1' color='black' textAlign='center'>
                        Login
                    </Header>
                    {!props.isRegister ? <Form size='large'>
                            <Segment stacked>
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address'/>
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'/>
                                <Button color='youtube' fluid size='large'>
                                    Login
                                </Button>
                            </Segment>
                        </Form> :
                        <Form size="large">
                            <Segment stacked>
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='Name'/>
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='Family'/>
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='Mobile'/>
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='Email'/>
                                <Form.Input fluid type='password' icon='lock' iconPosition='left'
                                            placeholder='Password'/>
                                <Form.Input fluid type='password' icon='lock' iconPosition='left'
                                            placeholder='Confirm Password'/>
                                <Button color='youtube' fluid size='large'>
                                    Register
                                </Button>
                            </Segment>
                        </Form>}
                    <Message>
                        New to us?
                        <a href='#' onClick={() => props.onSwitchBetweenLoginRegister()}>
                            {!props.isRegister ? 'Sign Up' : 'Login'}
                        </a>
                    </Message>
                </Grid.Column>
            </Grid>
        </div>
    )
};
const mapsStateToProps = state => {
    return {
        isLogin: state.loginData.isLogin,
        userInfo: state.loginData.userInfo,
        isRegister: state.loginData.isRegister
    }
};
const mapsDispatcjToProps = dispatch => {
    return {
        onLogin: (userInfo) => dispatch({type: actionTypes.LOGIN, payload: userInfo}),
        onRegister: (userInfo) => dispatch({type: actionTypes.REGISTER, payload: userInfo}),
        onSwitchBetweenLoginRegister: () => dispatch({type: actionTypes.SWITCHBETWEENLOGINREGISTER})
    }
};

export default withRouter(connect(mapsStateToProps, mapsDispatcjToProps)(LoginCmp));
