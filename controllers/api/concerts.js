const Artist = require('../../models/artist');

module.exports = { 
    create,
    index
}

async function index(req, res) {
    const concerts = await Artist.find({});
    res.status(200).json(concerts);
  }

async function create(req, res) {
    const concerts = await Artist.findById(req.params.id, function(err, artist) {
        artist.concerts.push(req.body);
        artist.save(function(err) {
            res.redirect(`/artists/${artist._id}`);
        });
    });
}