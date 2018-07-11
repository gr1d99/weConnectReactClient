import React from 'react';

import {
    Navbar,
    NavbarBrand,
} from 'reactstrap';

export default class AppNavbar extends React.Component{
    render(){
        return(
          <div>
              <Navbar color="light" light expand="md">
                  <NavbarBrand href="/">We Connect</NavbarBrand>
              </Navbar>
          </div>
        );
    }
}
