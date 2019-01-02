import React from 'react';
import { Query } from "react-apollo";
import {Song} from '../../Components/Songs'
import query from './Queries/SongQuery'


function SongContainer({ match }) {
    if(!match.params) return <div>Unable to find such a song!</div>
    const { id } = (match && match.params) || undefined
    return (
        <Query query={query} variables={{ id }}>
            {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;

                return <Song song={data.song} />
            }}
        </Query>
    );

}

export default SongContainer