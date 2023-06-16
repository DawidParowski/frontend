import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>SPA</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Landing Page</Link>
          </li>
          <li>
            <Link to='/new-meetup'>Form</Link>
          </li>
          <li>
            <Link to='/favorites'>Favorites</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/settings'>Settings</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;