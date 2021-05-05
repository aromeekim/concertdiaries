import {Link} from 'react-router-dom';

export default function ArtistCard({artist}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{artist.name}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Genre</dt>
          <dd>{artist.genre}</dd>
          <dt>Venue</dt>
          <dd>{artist.venue}</dd>
          <dt>City/State</dt>
          <dd>{artist.city}</dd>
          <dt>Date Seen</dt>
          <dd>{artist.date}</dd>
          <dt>Performance Rating</dt>
          <dd>{artist.rating}</dd>
          <dt>Additional Thoughts</dt>
          <dd>{artist.thoughts}</dd>
        </dl>
      </div>
      <div className='panel-footer'>
        <Link to='/'>RETURN TO LIST</Link>
      </div>
    </div>
  );
}
