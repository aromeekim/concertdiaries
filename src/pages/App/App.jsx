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

export default function App() {
  const [user, setUser] = useState(getUser());
  const [artists, setArtists] = useState([]);
  const history = useHistory();

  useEffect(() => {
	async function getArtists(){
	  const artists = await artistAPI.getAll();
	  setArtists(artists);
	}
	getArtists();
  }, [])

  useEffect(() => {
	  history.push('/')
  }, [artists, history])

  async function handleAddArtist (newArtistData) {
	  const newArtist = await artistAPI.create(newArtistData);
	  setArtists([...artists, newArtist])
  }

  return (
    <main className="App">
    { user ?
      <>
        <NavBar user = { user } setUser = { setUser } />
		  <Route exact path="/artists/add">
			  <AddArtistPage handleAddArtist = { handleAddArtist } />
		  </Route>
		  <Route exact path="/artists/details">
			  <ArtistDetailPage />
		  </Route>
		  <Route exact path="/artists">
			  <ArtistListPage artists = { artists } />
		  </Route>
          <Redirect to="/artists" />
      </>
      :
      <AuthPage setUser = { setUser } />
    }
  </main>
  );
}