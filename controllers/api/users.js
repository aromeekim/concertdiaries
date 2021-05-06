const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    index,
    create,
    logIn,
    checkToken
  };

  function checkToken(req, res) {
  console.log('req.user', req.user);
  res.json(req.exp);
}

async function index(req, res) {
  const user = await User.find({});
  res.status(200).json(user);
}
  
  async function create(req, res) {
    try {
      const user = await User.create(req.body);
      const token = createJWT(user);
      res.json(token);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  async function logIn(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) throw new Error();
      const match = await bcrypt.compare(req.body.password, user.password);
      if (match) {
        const token = createJWT(user);
        res.json(token);
      } else {
        throw new Error();
      }
    } catch (e) {
      res.status(400).json('Bad Credentials');
    }
  }

  function createJWT(user) {
    return jwt.sign(
      { user },
      process.env.SECRET,
      { expiresIn: '24h' }
    );
  }