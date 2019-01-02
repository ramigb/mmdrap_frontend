import React from 'react';
import { Link } from 'react-router-dom'



function Artists({ Artists, noPlayer }) {
    

    return Artists.map((artist, index) => (
        <div className="artist" key={index}>
            <h3><Link to={`/a/${artist.id}`}>{artist.name}</Link></h3>
        </div>
    ))

}

export default Artists 