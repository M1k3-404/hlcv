import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow navigation col-6" container light>
          <NavbarBrand className='col-2 mx-5' tag={Link} to="/">HLCV.App</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
            <ul className="navbar-nav flex-grow col-10">
              <NavItem>
                <NavLink tag={Link} className="text-dark mx-4" to="/">Our Story</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark mx-4" to="/counter">Experience</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark mx-4" to="/fetch-data">Contact Us</NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
