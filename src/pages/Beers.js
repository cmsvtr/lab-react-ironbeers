
import HomeBtn from '../components/HomeBtn';
import ListGroup from 'react-bootstrap/ListGroup';
import { LinkContainer } from 'react-router-bootstrap'

function Beers({beers, setBeers}) {

    return (
        <>
            <ListGroup as="ul">
            {beers.map(beer => {
                return (
                    <ListGroup.Item as="li" active key={beer['_id']}>
                        <LinkContainer to={`/beers/${beer['_id']}`}>
                            <img src={beer['image_url']} alt='beer'/>
                        </LinkContainer>
                        <h2>{beer.name}</h2>
                        <h3>{beer.tagline}</h3>
                        <p>Created by: {beer.contributed_by}</p>              

                    </ListGroup.Item>
                )

            })}
            </ListGroup>
            <HomeBtn />
        </>
  );          

}

export default Beers