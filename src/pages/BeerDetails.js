import { useParams } from 'react-router-dom'

function BeerDetails (beers) {
    const { beerID } = useParams();

    const selectedBeer = beers.find(beer => {
        return beer['_id'] === beerID
    })
    
    return (
        <>
            <img src={selectedBeer['image']} alt='the beer'/>
            <h2>{selectedBeer['name']}</h2>
            <h2>{selectedBeer['attenuation_level']}</h2>
            <h3>{selectedBeer['tagline']}</h3>
            <h3>{selectedBeer['first_brewed']}</h3>
            <article>{selectedBeer['description']}</article>
            <p>{selectedBeer['contributed_by']}</p>

        </>
    )
}

export default BeerDetails;

