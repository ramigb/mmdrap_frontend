import React from 'react';
import Songs from '../Songs/Songs'
function Artist({artist}) {

    const renderArtist = () => {
        if(!artist) return <div>Loading ...</div>

        return (
            <div key={artist.id}>
                <h1>{artist.name}</h1>
            </div>
        )
    }

    return (
        <>
            {renderArtist()}
            <Songs songs={artist.songs} />
        </>
    );

}

export default Artist