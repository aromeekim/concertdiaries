import { useState, useRef, useEffect } from 'react';

export default function AddArtistPage(props){
  const [invalidForm, setValidForm] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    genre: '',
    venue: '',
    city: '',
    date: '',
  })

  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddArtist(formData);
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <h1>Add Artist</h1>
      <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Artist</label>
          <input
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange }
            required
          />
        </div>
        <div className="form-group">
          <label>Genre</label>
          <input
            className="form-control"
            name="genre"
            value={ formData.genre }
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Venue</label>
          <input
            className="form-control"
            name="venue"
            value={ formData.venue }
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>City/State</label>
          <input
            className="form-control"
            name="city"
            value={ formData.city }
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            className="form-control"
            name="date"
            value={ formData.date }
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Rating</label>
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
          <div className="form-group">
          <label>Thoughts</label>
          <input
            className="form-control"
            name="thoughts"
            value={ formData.thoughts }
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn"
          disabled={invalidForm}
        >
          ADD ARTIST
        </button>
      </form>
    </>
  );
  
}