import {Routes, Route} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
import Home from './pages/Home';
import Beers from './pages/Beers';
import NewBeer from './pages/NewBeer';
import BeerDetails from './pages/BeerDetails';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  
  const [beers, setBeers] = useState([])
    
  useEffect(() => {
      
      async function fetchBeers() {
          const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
          setBeers(response.data)
      }

      fetchBeers()

      console.log('Am I running')

  }, [])
  
  
  return (
    <div className="App">
      
      <Navbar bg="primary" variant="dark" sticky='top'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Ironbeers</Navbar.Brand>
          </LinkContainer>
          
          <Nav className="me-auto">
            <LinkContainer to='/Beers'>
              <Nav.Link>Beers</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/RandomBeer'>
              <Nav.Link>Random Beer</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/NewBeer'>
              <Nav.Link>New Beer</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
      
      <Routes>
        <Route path='/' element={<Home beers={beers}/>}/>
        <Route path='/Beers' element={<Beers beers= {beers} setBeers={setBeers}/>}/>
        <Route path='/NewBeer' element={<NewBeer/>}/>
        <Route path='/:beerID' element={<BeerDetails beers={beers}/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
