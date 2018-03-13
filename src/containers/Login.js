import React, { Component } from 'react';

import { Button, Form, Grid, Header, Image, Message, Segment, Divider, Dimmer, Loader } from 'semantic-ui-react'


class Login extends Component {

    state = {}

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
                                        <Form size='large'>
                                        <Dimmer.Dimmable as={Segment} dimmed={active}>
                                            <Dimmer active={active} inverted>
                                                <Loader>Loading</Loader>
                                            </Dimmer> 
                                            <Segment stacked>
                                                <Form.Input
                                                fluid
                                                icon='user'
                                                iconPosition='left'
                                                placeholder='E-mail address'
                                                />
                                                <Form.Input
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