import { Link } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    usersService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/artists"><button>Artists Seen</button></Link>
      &nbsp; | &nbsp;
      <Link to="/artists/add"><button>Add Artist</button></Link>
      &nbsp; | &nbsp;
      <span>Welcome { user.name }</span>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}><button>Log Out</button></Link>
    </nav>
  );
}