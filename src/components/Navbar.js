import React from 'react';
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button,
    NavDropdown
} from 'react-bootstrap';
import {Link} from "react-router-dom";
class MyNavbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mainMenu: [
                {title: "Home", link: "/home"},
                {title: "Discord", link: "/discord"},
                {title: "About Us", link: "/about-us"}
            ]
        }
    }
    render(){
        return(
        <>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Ruang Belajar</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {this.state.mainMenu.map((item,index) => (
                        <Nav.Link key={`mmi-${index}`}>
                          <Link to={item.link}>{item.title}</Link>
                        </Nav.Link>
                    ))}
                    <Nav.Link key={`mmi-66`} href="/test">
                      Test
                    </Nav.Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
        </>
        );
    }
}

export default MyNavbar;