import { Component } from "react";
import { Button, Container, Nav, Navbar} from "react-bootstrap";
import './componentStyles.css'

class MyNav extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" >
            <Container>
            <Navbar.Brand href="#home">TREEBOOKS</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#p">About</Nav.Link>
                <Nav.Link href="#p">Browse</Nav.Link>
                
              </Nav>
              <Nav>
                <Button variant="success">Start Reading</Button>
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar> 
        )
    }
}

export default MyNav;