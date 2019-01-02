import React from 'react'
import { Link } from 'react-router-dom';

const AppSideBar = ({sideBarVisible, toggleSideBar}) =>  {
    
    return(
      <>
        {/* <Sidebar visible={sideBarVisible} onHide={(e) => toggleSideBar(false)} position="right">
          <h3>MMDrap</h3>
          <ul>
            <li><Link to="/artists" onClick={(e) => toggleSideBar(false)}>Artists</Link></li>
          </ul>
        </Sidebar> */}
      </>
    )
}


export default AppSideBar