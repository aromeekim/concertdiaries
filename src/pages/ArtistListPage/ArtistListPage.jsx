import React from 'react';
//import './ArtistListPage.css';
import ArtistListItem from '../../components/ArtistListItem/ArtistListItem';

export default function ArtistListPage(props) {
  return (
    <>
      <h1>Artist List</h1>
      <div className='ArtistListPage-grid'>
        {props.artists.map(artist => 
          <ArtistListItem
            artist={artist}
            key={artist._id}
            handleDeleteArtist={props.handleDeleteArtist}
          />
        )}
      </div>
    </>
  );
}
