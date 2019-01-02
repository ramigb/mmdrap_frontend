import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

function Header(props) {

  // const [sideBarVisible, toggleSideBar] = useState(false);

  return (
    <nav class="row navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">MMDrap</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/artists">Artists</Link>
          </li>          
        </ul>
      </div>
    </nav>
  )
}

export default Header;

