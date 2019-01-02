import React from 'react';
import { Link } from 'react-router-dom'
import { songArtists } from './Style/SongArtists.module.scss'

export default ({ song }) => {
    return (
        <span className={songArtists}>
            {song.artists.map(artist => {
                return <Link to={`/a/${artist.id}`} key={artist.id}>{artist.name}</Link>
            })}
        </span>
    )
}