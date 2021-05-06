import React from 'react';
import { Link } from 'react-router-dom';
//import './ArtistListItem.css';

export default function ArtistListItem({ artist, handleDeleteArtist }) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{artist.name}</h3>
      </div>
      <div className='panel-footer ArtistListItem-action-panel'>
        <Link
          className='btn btn-xs btn-info'
          to={{
            pathname: '/artists/details',
            state: { artist }
          }}
        >
          <button>
          DETAILS
          </button>
        </Link>
        &nbsp; &nbsp;
        <Link
          className='btn btn-xs btn-warning'
          to={{
            pathname: '/artists/edit',
            state: { artist }
          }}
        >
          <button>
          EDIT
          </button>
        </Link>
        &nbsp; &nbsp;
        <button
          className='btn btn-xs btn-danger margin-left-10'
          onClick={() => handleDeleteArtist(artist._id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}