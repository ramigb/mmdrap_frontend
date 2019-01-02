import React from 'react';
import ReactPlayer from 'react-player'


export default ({song, className='player', preview=false}) => {
    return(
        <div className={className}>
            <ReactPlayer key={`rp${song.id}${preview}1`} 
                url={song.url} 
                playing={false} 
                width="100%" 
                height="100%"  
                muted={false}
                light={preview} />
        </div>
    )
}