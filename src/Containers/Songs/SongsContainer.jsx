import React from 'react';
import { Query } from "react-apollo";
import {Songs} from '../../Components/Songs'
import query from './Queries/SongsQuery'


function SongsContainer() {

    return (
        <Query query={query}>
            {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;
                return <Songs songs={data.songs} />
            }}
        </Query>
    );

}

export default SongsContainer