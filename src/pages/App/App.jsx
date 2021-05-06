import { useState, useEffect } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import { getUser } from '../../utilities/users-service';
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import * as artistAPI from "../../services/artists-api";
import ArtistListPage from "../ArtistListPage/ArtistListPage";
import AddArtistPage from "../AddArtistPage/AddArtistPage"; 
import ArtistDetailPage from "../ArtistDetailPage/ArtistDetailPage";
import EditArtistPage from "../EditArtistPage/EditArtistPage";

export default function App(props) {
  const [user, setUser] = useState(getUser());
  const [artists, setArtists] = useState([]);
  const history = useHistory();

  useEffect(() => {
    history.push('/artists')
  }, [artists, history]);

  useEffect(() => {
	async function getArtists(){
	  const artists = await artistAPI.getAll();
	  setArtists(artists);
	}
	getArtists();
  }, []);


  async function handleAddArtist (newArtistData) {
	  const newArtist = await artistAPI.create(newArtistData);
	  setArtists([...artists, newArtist])
  }

  async function handleUpdateArtist (updatedArtistData) {
    const updatedArtist = await artistAPI.update(updatedArtistData);
    const newArtistsArray = artists.map(a => a._id === updatedArtist._id ? updatedArtist : a
    );
    setArtists(newArtistsArray);
  }

  async function handleDeleteArtist(id) {
		console.log(id);
		await artistAPI.deleteOne(id);
		setArtists(artists.filter(artist => artist._id !== id));
	}

  return (
    <main className="App">

    { user ?
      <>
        <NavBar user = { user } setUser = { setUser } />
        <h1>Concert Tracker</h1>
		  <Route exact path="/artists/add">
			  <AddArtistPage handleAddArtist = { handleAddArtist } />
		  </Route>
		  <Route exact path="/artists/details">
			  <ArtistDetailPage />
		  </Route>
		  <Route exact path="/artists">
			  <ArtistListPage artists = { artists } handleDeleteArtist = { handleDeleteArtist } />
		  </Route>
      <Route exact path="/artists/edit">
        <EditArtistPage handleUpdateArtist = { handleUpdateArtist } />
      </Route>
          <Redirect to="/artists" />
      </>
      :
      <AuthPage setUser = { setUser } />
    }
  </main>
  );
}