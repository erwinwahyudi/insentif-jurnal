import React, { Component } from 'react'

import {
    Container,
    List,   
    Segment,
  } from 'semantic-ui-react';


class Footer extends Component {
    
    render() { 
        return ( 
            <Segment inverted vertical style={{ padding: '1em 0em' }}>
                <Container textAlign='center'>
                    <List horizontal inverted divided link >
                        <List.Item as='a' href='#'>Home</List.Item>
                        <List.Item as='a' href='#'>Jurnal</List.Item>
                        <List.Item as='a' href='#'>Prosiding</List.Item>
                        <List.Item as='a' href='#'>Profil</List.Item>
                        <List.Item as='a' href='#'>Login</List.Item>
                        <List.Item as='a' href=''>&copy; 2017 UPT.TIK Universitas Tanjungpura</List.Item>
                    </List>
                    
                </Container>
            </Segment> 
        );
    }
}
 
export default Footer;