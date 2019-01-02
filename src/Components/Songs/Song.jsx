import React from 'react';
import cn from 'classnames';
import {HALF_SCREEN} from '../../Constants/style'
import SongArtists from './SongArtists'
import SongPlayer from './SongPlayer'
import { isMobile } from 'react-device-detect';
import Disqus from 'disqus-react';

function Song({song}) {

    console.log(arguments)

    const disqusShortname = 'MMDrap';
    const disqusConfig = {
        url: window.location.href,
        identifier: song.id,
        title: song.title,
    };


    const renderSong = () => {
        if(!song) return <div>Loading ...</div>
        return (
            <div className="songPage" key={song.id}>
                <h1>{song.title}</h1>
                <h2><SongArtists song={song} /></h2>
                <div className={cn("songContent", "row", {"mobile": isMobile})}>
                    <div className={cn("songLeftArea", HALF_SCREEN)}>
                        <SongPlayer song={song} />
                    </div>
                    <div className={cn("songRightArea", HALF_SCREEN)}>
                        <h3>Lyrics</h3>
                        <p>{song.lyrics}</p>
                    </div>
                </div>
                <div>
                <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
                    Comments
                </Disqus.CommentCount>
                <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
                </div>
            </div>
        )
    }

    return renderSong();

}

export default Song