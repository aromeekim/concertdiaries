import React from 'react';
import ArtistCard from '../../components/ArtistCard/ArtistCard';
import { useLocation } from 'react-router-dom';

export default function ArtistDetailPage(props) {
	const {
		state: { artist },
	} = useLocation();

	return (
		<>
			<h1>Artist Details</h1>
			<ArtistCard key={artist._id} artist={artist} />
		</>
	);
}
