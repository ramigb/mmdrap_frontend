import React from 'react';
import { Query } from "react-apollo";
import Artist from '../../Components/Artists/Artist'
import query from './Queries/ArtistQuery'

function ArtistContainer({ match }) {
    if(!match.params) return <div>Unable to find such a artist!</div>
    const { id } = (match && match.params) || undefined
    return (
        <Query query={query} variables={{ id }}>
            {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;

                return <Artist artist={data.artist} />
            }}
        </Query>
    );

}

export default ArtistContainer