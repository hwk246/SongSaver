import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <Link
          to="playlist"
          style={{ listStyle: "none", textDecoration: "none" }}
        >
          <li>Playlist</li>
        </Link>
        <Link to="about" style={{ listStyle: "none", textDecoration: "none" }}>
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
