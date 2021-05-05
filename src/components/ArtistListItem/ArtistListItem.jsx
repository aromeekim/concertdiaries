import React from 'react';
import { Link } from 'react-router-dom';
//import './ArtistListItem.css';

export default function ArtistListItem({ artist }) { 
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
          DETAILS
        </Link>
        <Link
          className='btn btn-xs btn-warning'
          to={{
            pathname: '/artists/edit',
            state: { artist }
          }}
        >
          EDIT
        </Link>
        <button
          className='btn btn-xs btn-danger margin-left-10'
        >
          DELETE
        </button>
      </div>
    </div>
  );
}
