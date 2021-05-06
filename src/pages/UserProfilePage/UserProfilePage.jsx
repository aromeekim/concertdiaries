import React from 'react';
import UserCard from '../../components/UserCard/UserCard';
import { useLocation } from 'react-router-dom';
import './UserProfilePage.css';

export default function UserDetailPage(props) {
	const {
		state: { user },
	} = useLocation();

	return (
		<>
			<h1>User Profile</h1>
			<UserCard key={user._id} user={user} />
		</>
	);
}
