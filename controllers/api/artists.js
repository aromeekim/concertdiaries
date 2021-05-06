const Artist = require('../../models/artist');
//const jwt = require('jsonwebtoken');
//const bcrypt = require('bcrypt');

module.exports = {
    index, 
    create,
    show, 
    update,
    delete: deleteOne
  };

  async function index(req, res) {
    const artists = await Artist.find({});
    res.status(200).json(artists);
  }

  async function create(req, res) {
      const artist = await Artist.create(req.body);
      res.status(201).json(artist);
  }

  async function show(req, res) {
      const artist = await Artist.findById(req.params.id);
      res.status(200).json(artist);
  }

  async function update(req, res) {
    const updatedArtist = await Artist.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedArtist)
  }

  async function deleteOne(req, res) {
    const deletedArtist = await Artist.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedArtist);
  }
  