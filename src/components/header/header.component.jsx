import React from 'react';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import './header.style.css';
import { Switch, Route, Link } from 'react-router-dom';
import HomePage from '../../pages/home.page';
import BuyPage from '../../pages/buy.page';
import InvestPage from '../../pages/invest.page';
import SellPage from '../../pages/sell.page';
import LoginPage from '../../pages/login.page';

function Home() {
  return <HomePage />;
}
function Buy() {
  return <BuyPage />;
}

function Invest() {
  return <InvestPage />;
}

function Sell() {
  return <SellPage />;
}

function Login() {
  return <LoginPage />;
}
function Header() {
  return (
    <div>
      <Navbar className='header' bg='light' expand='sm'>
        <Navbar.Brand as={Link} to='/bisform'>
          BisForm
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link as={Link} to='/'>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to='/buy'>
              Buy
            </Nav.Link>
            <Nav.Link as={Link} to='/invest'>
              Invest
            </Nav.Link>
            <Nav.Link as={Link} to='/sell'>
              Sell
            </Nav.Link>
            <Nav.Link as={Link} to='/login'>
              Login
            </Nav.Link>
            {/* <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
            <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action/3.4'>
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/bisform' component={Home} />
        <Route exact path='/buy' component={Buy} />
        <Route exact path='/invest' component={Invest} />
        <Route exact path='/sell' component={Sell} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </div>
  );
}

export default Header;
