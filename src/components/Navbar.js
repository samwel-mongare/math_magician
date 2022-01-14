/* eslint-disable */
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const lists = {
      textDecoration: 'none',
      listStyleType: 'none'
  }

  const links = [
    {
      id: 1,
      path: '/Home',
      text: 'Home',
    },
    {
      id: 2,
      path: '/Calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/Quotes',
      text: 'Quote',
    },
  ];

  return (
    <nav className="navBar">
        <h1>Math Magicians</h1>
      <ul style={lists}>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;