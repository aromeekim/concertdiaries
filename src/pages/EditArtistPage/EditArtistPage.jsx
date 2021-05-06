import React, {useState, useEffect, useRef} from 'react';
import {Link, useLocation} from 'react-router-dom';
import './EditArtistPage.css';

export default function EditArtistPage(props){

  const location = useLocation()

  const [invalidForm, setValidForm] = useState(true);
  const [formData, setFormData] = useState(location.state.artist)
  
  const formRef = useRef();

  useEffect(() => {
      formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true)
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleUpdateArtist(formData);
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <h1>Edit Artist</h1>
      <form ref={formRef} autoComplete="off" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Artist: </label>
          <input 
            type="text"
            className="form-control"
            name="name"
            value={ formData.name}
            onChange={ handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Genre: </label>
          <input
            type="text"
            className="form-control"
            name="genre"
            value={ formData.genre}
            onChange={ handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Venue: </label>
          <input
            type="text"
            className="form-control"
            name="venue"
            value={ formData.venue}
            onChange={ handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>City/State: </label>
          <input
            type="text"
            className="form-control"
            name="city"
            value={ formData.city}
            onChange={ handleChange}
          />
        </div>
        <div className="form-group">
          <label>Date Seen: </label>
          <input
            type="text"
            className="form-control"
            name="date"
            value={ formData.date}
            onChange={ handleChange}
          />
        </div>
        <div className="form-group">
          <label>Rating: </label>
          <select 
            className="form-control"
            name="rating"
            value={ formData.rating }
            onChange={handleChange}>
                <option>⭐</option>
                <option>⭐⭐</option>
                <option>⭐⭐⭐</option>
                <option>⭐⭐⭐⭐</option>
                <option>⭐⭐⭐⭐⭐</option>
          </select>
          </div>
        <button
          type="submit"
          className="btn btn-xs"
          disabled={invalidForm}
        >
          SAVE ARTIST 
        </button>&nbsp;&nbsp;
        <Link to='/artists'><button>CANCEL</button></Link>
      </form>
    </>
  );
}