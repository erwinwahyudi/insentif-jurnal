import React, { Component } from 'react'

import {
    Grid,
    Segment,
    Header,
    Image
} from 'semantic-ui-react'

class Home extends Component {
    render() { 
        return ( 
            <Segment style={{ padding: '4em 0em' }} vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>

                    <Grid.Column width={8}>
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

                    {/* <Grid.Column width={8}>  */}
                        
                        {/* <Grid.Column style={{ maxWidth: 450 }}> */}
                            {/* <Header as='h2' color='teal' textAlign='center'> */}
                            {/* <Image src='https://react.semantic-ui.com/logo.png' /> */}
                            {/* {' '}Login ke dashboard Insentif Jurnal
                            </Header>
                            <Form size='large'>
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

                                <Button color='teal' fluid size='large'>Login</Button>
                            </Segment>
                            </Form>
                            <Message>
                            New to us? <a href='#'>Sign Up</a>
                            </Message>
                    </Grid.Column> */}

                    <Grid.Column floated='right' width={4}>
                        <Image
                        bordered
                        rounded
                        size='large'
                        src='https://react.semantic-ui.com/assets/images/wireframe/white-image.png'
                        />
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    {/* <Grid.Column textAlign='center'>
                        <Button size='huge'>Check Them Out</Button>
                    </Grid.Column> */}
                    </Grid.Row>
                </Grid>
            </Segment>
         );
    }
}
 
export default Home;