import {Link} from 'react-router-dom';
import './UserCard.css';

export default function UserCard({user}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{user.name}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Location: {user.location}</dt>
          <dt>Favorite Artist: {user.fave}</dt>
        </dl>
      </div>
      <div className='panel-footer'>
        <Link to='/'>RETURN TO LIST</Link>
      </div>
    </div>
  );
}
