import React from 'react';
import { Query } from "react-apollo";
import Artists from '../../Components/Artists/Artists'
import query from './Queries/ArtistsQuery'


function ArtistsContainer() {

    return (
        <Query query={query}>
            {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;
                return (
                    <>
                        <Artists Artists={data.artists}/>
                    </>
                )
            }}
        </Query>
    );

}

export default ArtistsContainer