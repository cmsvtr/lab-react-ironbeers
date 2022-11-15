import {LinkContainer} from 'react-router-bootstrap';

function Home({ beers }) {
    
    const randomIndex = Math.floor(Math.random()*beers.length)

    console.log(beers)
    
    return (
        <>
            <LinkContainer to='/Beers'>
                <img src='../assets/beers.png' alt='beers'/>
            </LinkContainer>
            <h2>All Beers</h2>
            <article>Showcase our complete selection of ales.</article>
            <LinkContainer to='/RandomBeers'>
                <img src='../assets/random-beer.png' alt='random beer'/>
            </LinkContainer>
            <h2>Beer picker</h2>
            <article>Can't decide which to choose? Our advanced AI will help you out!.</article>
            <LinkContainer to={`/${beers[randomIndex]['_id']}`}>
                <img src='../assets/new-beer.png' alt='new beer'/>
            </LinkContainer>
            <h2>New Beers</h2>
            <article>ShoCame across some of this golden elixir that's not on our list? Add it here!</article>
        </>
    )
}

export default Home