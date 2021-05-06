import {Link} from 'react-router-dom';

export default function ArtistCard({artist}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{artist.name}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Genre: {artist.genre}</dt>
          <dt>Venue: {artist.venue}</dt>
          <dt>City/State: {artist.city}</dt>
          <dt>Date Seen: {artist.date}</dt>
          <dt>Performance Rating: {artist.rating}</dt>
          <dt>Additional Thoughts: {artist.thoughts}</dt>
        </dl>
      </div>
      <div className='panel-footer'>
        <Link to='/artists'><button>RETURN TO LIST</button></Link>
      </div>
    </div>
  );
}