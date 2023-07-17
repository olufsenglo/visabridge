import React from 'react';
import { Link } from "react-router-dom";

import { navigationData } from '../data';

const Nav = () => {
  return (
    <nav>
      <ul className='flex gap-x-8'>
        <Link to="/request">Request</Link>
        <Link to="/login">Login</Link>
      </ul>
    </nav>  
  );
};

export default Nav;
