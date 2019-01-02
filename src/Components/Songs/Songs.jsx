import React from 'react';
import * as cn from 'classnames';
import {HALF_SCREEN} from '../../Constants/style'
import { Link } from 'react-router-dom'

import SongArtists from './SongArtists'
import SongPlayer from './SongPlayer'

import style from './Style/Songs.module.scss'

console.log(style)

function Songs({ songs }) {

    const renderSongs = (songs) => {
        return (songs.map((song) => (
            <div className={cn("card", style.song)} key={song.id}>
                <div className="card-body">
                    <div className="row">
                        <div className={HALF_SCREEN}>
                            <h5 className="card-title"><Link to={`/s/${song.id}`}>{song.title} - <SongArtists song={song} /> </Link></h5> 
                        </div>
                        <SongPlayer song={song} preview={true} className={HALF_SCREEN} />
                    </div>
                </div>
                <div className={cn("card-footer", style.songActions)}>
                    <Link className="btn-sm btn-primary" to={`/s/${song.id}`}>Lyrics & Comments</Link>
                    <Link className="btn-sm btn-primary" to={`/s/${song.id}`}><i className="fas fa-heart"></i></Link>
                    <Link className="btn-sm btn-primary" to={`/s/${song.id}`}><i className="fas fa-plus"></i></Link>
                </div>
            </div>


        )))
    }

    return (
        <div className="songsContainer row">
            <div className="col-12">
                {renderSongs(songs)}
            </div>
            <div className="col-12">
                <span>Total Songs : {songs.length}</span>
            </div>            
        </div>
    )

}

export default Songs 