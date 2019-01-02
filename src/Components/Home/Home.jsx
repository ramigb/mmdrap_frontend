import React from 'react';
import {isMobile} from "react-device-detect";
import cn from 'classnames'
import {FULL_SCREEN} from '../../Constants/style'
import SongsContainer from '../../Containers/Songs/SongsContainer';
import './Home.scss'

export default () => {
    const classes = cn("homePage","row", {"mobile": isMobile})
    return (
    <div className={classes}>
        <div className={FULL_SCREEN}>
            <SongsContainer />
        </div>
    </div>
)};
