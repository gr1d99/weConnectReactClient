import React from 'react';

import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavLink,
    NavbarToggler
} from 'reactstrap';

export default class AppNavbar extends React.Component{
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){
        return(
          <div>
              <Navbar color="light" light expand="md">
                  <NavbarBrand href="/">We Connect</NavbarBrand>
                  <NavbarToggler onClick={this.toggle}/>
                  <Collapse isOpen={this.state.isOpen} navbar>
                      <Nav className="ml-auto" navbar>
                          <NavLink href="/login">Login</NavLink>
                      </Nav>
                  </Collapse>
              </Navbar>
          </div>
        );
    }
}
