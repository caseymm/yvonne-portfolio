import React from 'react';
import { Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <div className="nav-container">
        <div className="nav">
          <div className="name">
            <Link to="/">
              <span>Yvonne Eadon</span>
            </Link>
          </div>
          <span className="links">
            <Link to="/cv">
              <span>CV</span>
            </Link>
            <Link to="/publications">
              <span>Publications</span>
            </Link>
          </span>
        </div>
      </div>
    );
  }
}

const Nav = () => {
   return(
    <Navigation />
   )
}
 
export default Nav;