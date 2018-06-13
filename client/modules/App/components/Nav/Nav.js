import React, { PropTypes } from 'react';

const Nav = () => (<nav>
  <ul>
    <li><a href="/home">Home</a> </li>
    <li><a href="/">Posts</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>
  );

Nav.propTypes = {
};

export default Nav;
