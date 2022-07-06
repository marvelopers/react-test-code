import React from "react";

const Navbar = ({ totalCount }: { totalCount: number }) => (
  <nav className="navbar">
    <i className="navbar-logo fas fa-leaf" />
    <span>Check Your List</span>
    <span className="navbar-count">{totalCount}</span>
  </nav>
);

export default Navbar;
