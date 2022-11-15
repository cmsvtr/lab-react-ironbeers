import {LinkContainer} from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import BeersImg from '../assets/beers.png';
import RandomBeersImg from '../assets/random-beer.png';
import NewBeersImg from '../assets/new-beer.png';

function Home() {

    const [beers, setBeers] = useState([])   
  
    useEffect(() => {
      async function fetchBeers() {
        const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
        setBeers(response.data)
        console.log('SAD')
      }
  
      fetchBeers()
  
    }, [])   
    
    const randomIndex = Math.floor(Math.random()*beers.length)

    console.log(beers)
    
    return (
        <>
            <LinkContainer to='/Beers'>
                <Link>
                    <img src={BeersImg} alt='beers'/>
                </Link>
            </LinkContainer>
            <h2>All Beers</h2>

            <article>Showcase our complete selection of ales.</article>
            <LinkContainer to={`/${beers[randomIndex]}`}>
                <Link>
                    <img src={RandomBeersImg} alt='random beer'/>
                </Link>
            </LinkContainer>
            <h2>Beer picker</h2>
            <article>Can't decide which to choose? Our advanced AI will help you out!.</article>
            <LinkContainer to='/NewBeer'>
                <Link>
                    <img src={NewBeersImg} alt='new beer'/>                    
                </Link>
            </LinkContainer>
            <h2>New Beers</h2>
            <article>Came across some of this golden elixir that's not on our list? Add it here!</article>
        </>
    )
}

export default Home