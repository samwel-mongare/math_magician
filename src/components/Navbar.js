import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const lists = {
    textDecoration: 'none',
    listStyleType: 'none',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30vw',
    paddingRight: '2rem',
    marginRight: '2rem',
  };

  const navContainer = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100vw',
    height: '10vh',
    paddingTop: '0.8vh',
    paddingLeft: '2vw',
    backgroundColor: 'whitesmoke',
  };

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
    <nav className="navBar" style={navContainer}>
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
