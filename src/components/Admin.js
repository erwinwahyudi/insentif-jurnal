import React, { Component } from 'react';

class Admin extends Component {

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);        
    }

    handleClick(e) {
        e.preventDefault();
        sessionStorage.clear();
        this.props.history.push('/login');
    }

    render() {
        return(
            <div>
                <h1>Sukses LOGIN</h1>
                <button onClick={ this.handleClick }>Logout</button>
            </div>
        )
    }
}

export default Admin;