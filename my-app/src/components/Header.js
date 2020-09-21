import React, { useState } from "react";

function Header() {
  let [visibleMobileMenu, setVisibleMobileMenu] = useState(false);
  return (
    <div className="Header">
      <div className="title">My Blog</div>
      <div className="search-links-profile-logout">
        <div className="search">
          <input type="search" />
        </div>
        <div
          className="hamburger-menu"
          onClick={() => setVisibleMobileMenu(!visibleMobileMenu)}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="links-my-profile-logout desktop">
          <div className="links">
            <ul>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
          </div>
          <div className="my-profile">My profile</div>
          <div className="logout">Logout</div>
        </div>
        {visibleMobileMenu && (
          <div className="links-my-profile-logout mobile">
            <div className="links">
              <ul>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
              </ul>
            </div>
            <div className="my-profile">My profile</div>
            <div className="logout">Logout</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
