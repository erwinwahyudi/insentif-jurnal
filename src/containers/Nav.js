import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Button,
    Container,
    Header,
    Menu,
    Segment,
    Visibility,
    Icon
  } from 'semantic-ui-react'

  const FixedMenu = () => (
    <Menu fixed='top' size='large'>
        <Container>
            <Menu.Item as={NavLink} exact to="/"> Home  </Menu.Item>
            <Menu.Item as={NavLink} exact to="/jurnal"> Jurnal  </Menu.Item>
            <Menu.Item as='a'> Prosiding </Menu.Item>
            <Menu.Item as='a'> Profil </Menu.Item>
            <Menu.Menu position='right'>
            <Menu.Item className='item'>
                <NavLink exact to='/login'> <Button >  Log in </Button> </NavLink>
            </Menu.Item>
            </Menu.Menu>
        </Container>
    </Menu>
  )
  

          
class Nav extends Component {

    state = {}

    hideFixedMenu = () => this.setState({ visible: false })
    showFixedMenu = () => this.setState({ visible: true })

    render() {
        const { visible } = this.state;
            return (
                <div>
                { visible ? <FixedMenu /> : null }
                <Visibility
                            onBottomPassed={this.showFixedMenu}
                            onBottomVisible={this.hideFixedMenu}
                            once={false}
                            >
                            <Segment
                                inverted
                                textAlign='center'
                                style={{ minHeight: 300, padding: '1em 0em' }}
                                vertical
                            >
                                <Container>
                                <Menu inverted pointing secondary size='large'>
                                    <Menu.Item as={NavLink} exact to="/" > Home </Menu.Item>
                                    <Menu.Item as={NavLink} exact to="/jurnal" > Jurnal </Menu.Item>
                                    <Menu.Item as='a'>Prosiding</Menu.Item>
                                    <Menu.Item as='a'>Profil</Menu.Item>
                                    <Menu.Item as='a'>Laporan</Menu.Item>
                                    <Menu.Item position='right'>
                                        <NavLink exact to='/login'>
                                            <Button  inverted> <Icon name='unlock alternate' />  &nbsp; Log in   </Button> 
                                            
                                        </NavLink>
                                    {/* <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button> */}
                                    </Menu.Item>
                                </Menu>
                                </Container>
                    
                                <Container text>
                                <Header
                                    as='h1'
                                    content='Insentif Jurnal Universitas Tanjungpura'
                                    inverted
                                    style={{ fontSize: '2em', fontWeight: 'normal', marginBottom: 0, marginTop: '1em' }}
                                />
                                <Header
                                    as='h2'
                                    content='Do whatever you want when you want to.'
                                    inverted
                                    style={{ fontSize: '1em', fontWeight: 'normal' }}
                                />
                                <Button primary size='huge'>
                                    Get Started
                                    <Icon name='right arrow' />
                                </Button>
                                </Container>
                            </Segment>
                            </Visibility>
                </div>
            );
        }
}

export default Nav;