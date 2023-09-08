import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import logo from '../assets/logo.jpg';

/**
 * Navigation bar
 * Contains navigation links
 */
const NavBar = () => {
  return (
    <Menu borderless fixed="top">
      <Menu.Item>
        <img
          src={logo}
          alt="cookbook logo"
          style={{ width: 100, height: 100 }}
        />
      </Menu.Item>
      <Menu.Item name="Home" as={Link} to="/" />
      <Menu.Item name="Recipes" as={Link} to="/search" />
    </Menu>
  );
};

export default NavBar;
