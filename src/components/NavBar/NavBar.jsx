import { Link } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    usersService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/artists">Artists Seen</Link>
      &nbsp; | &nbsp;
      <Link to="/artists/add">Add Artist</Link>
      &nbsp; | &nbsp;
      <span>Welcome { user.name }</span>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}