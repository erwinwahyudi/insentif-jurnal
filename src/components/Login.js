import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Dimmer, Loader } from 'semantic-ui-react'
import axios from 'axios';
import Storage from '../utils/Storage';
import Auth from '../utils/Auth';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {username: '', password: '', r: '', message: true, active: false};
    
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit   = this.handleSubmit.bind(this);
    }

    handleUsername(e) {
        this.setState({ username: e.target.value });
    }
      
    handlePassword(e) {
        this.setState({ password: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.username);
        var headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
        const user = {
                username: this.state.username,
                password: this.state.password
        }
        axios.post(`http://203.24.50.79/api_insentif/public/api/auth/sign`, user, headers)
                    .then(response =>{
                        console.log(response.data);
                        if( response.data ) {
                        console.log('masuk login');
                                const data = {
                                                username: this.state.username,
                                                r: response.data.level,
                                                t: response.data.token
                                            }
                                
                                // session storage react
                                // sessionStorage.setItem( 'myData', JSON.stringify(data) );
                                Storage.setData('session', data );

                                // console.log(data);
                                // const session = JSON.parse( sessionStorage.getItem( 'myData' ) );
                                const session = Storage.getData('session');
                                console.log("on submit", session.username);
                                if(Auth.role() == 'rektor') {
                                    this.props.history.push('/admin');
                                } else if (Auth.role() == 'validator') {
                                    this.props.history.push('/admin');
                                } else if (Auth.role() == 'keuangan') {
                                    this.props.history.push('/admin');
                                } else if (Auth.role() == 'dosen') {
                                    this.props.history.push('/jurnal');
                                } else {
                                    this.props.history.push('/login');
                                }
                        }
                    }).catch(error => {
                        console.log(error.response);
                        console.log('login gagal');
                        this.setState({ message: false });
                        this.setState({ active: false });
                    });
        
    }

    handleShow = () => this.setState({ active: true })
    handleHide = () => this.setState({ active: false })

    render() { 
        const { active } = this.state
        return ( 
            <Segment style={{ padding: '4em 0em' }} vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>                            
                            
                            <Grid.Column width={8}>    
                                {/* <Grid.Column style={{ maxWidth: 450 }}> */}
                                        <Header as='h2' color='teal' textAlign='center'>
                                        {/* <Image src='https://react.semantic-ui.com/logo.png' /> */}
                                        {' '}Login ke dashboard Insentif Jurnal
                                        </Header>
                                        <Message negative hidden={this.state.message} >
                                            <Message.Header>Verifikasi gagal !</Message.Header>
                                            <p>User atau password anda tidak valid.</p>
                                        </Message>
                                        <Form size='large' onSubmit={this.handleSubmit}>
                                            <Dimmer.Dimmable as={Segment} dimmed={active}>
                                                <Dimmer active={active} inverted>
                                                    <Loader>Loading</Loader>
                                                </Dimmer> 
                                                <Segment stacked>
                                                    <Form.Input
                                                    onChange={this.handleUsername}
                                                    fluid
                                                    icon='user'
                                                    iconPosition='left'
                                                    placeholder='E-mail address'
                                                    />
                                                    <Form.Input
                                                    onChange={this.handlePassword}
                                                    fluid
                                                    icon='lock'
                                                    iconPosition='left'
                                                    placeholder='Password'
                                                    type='password'
                                                    />

                                                    <Button color='teal' fluid size='large' onClick={this.handleShow} >Login</Button>
                                                </Segment>
                                            </Dimmer.Dimmable> 
                                        </Form>
                                        {/* <Message>
                                        New to us? <a href='#'>Sign Up</a>
                                        </Message> */}
                                
                            </Grid.Column>

                            <Grid.Column width={1}> </Grid.Column>

                            <Grid.Column width={7}>
                                <Header as='h3' style={{ fontSize: '2em' }}>We Help Companies and Companions</Header>
                                <p style={{ fontSize: '1.33em' }}>
                                We can give your company superpowers to do things that they never thought possible. Let us delight
                                your customers and empower your needs... through pure data analytics.
                                </p>
                                <Header as='h3' style={{ fontSize: '2em' }}>We Make Bananas That Can Dance</Header>
                                <p style={{ fontSize: '1.33em' }}>
                                Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.
                                </p>
                            </Grid.Column>

                    </Grid.Row>
                    
                </Grid>
            </Segment>
         );
    }
}
 
export default Login;