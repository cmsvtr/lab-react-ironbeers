import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'

function HomeBtn() {
    return ( 
        <Navbar bg="dark" sticky='bottom'>
        <Container>
        <LinkContainer to='/'>
            <Navbar.Brand>
                <img
                src="/src/assets/homebtn.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="home icon"
                />
            </Navbar.Brand>
        </LinkContainer>
        </Container>
      </Navbar>
     );
}

export default HomeBtn;