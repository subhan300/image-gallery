const User = require('../models/users');
const jwt = require('jsonwebtoken');
const { sendEmail } = require('../global-functions/GlobalFunctions');
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    if (!email || !password) {
      return res.status(400).send({ error: 'You must provide email and password.' });
    }
    const result = await User.findOne({ email: email, password: password });
    if (!result) {
      return res.status(401).send({
        message: 'Invalid email or password',
      });
    }
    if (result) {
      const userPassword = await User.findOne({ password: password });
      if (userPassword) {
        const token = jwt.sign({ result }, 'Image-Gallery', {
          expiresIn: '30d',
        });
        const resultRes = {
          message: 'Login Successful',
          token,
          result: {
            _id: result._id,
            username: result.username,
            email: result.email,
            createdAt: result.createdAt,
            __v: result.__v,
          },
        };
        res.status(200).send(resultRes);
      } else {
        res.status(401).send({
          message: 'Invalid email or password',
        });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong');
  }
};
const userSignUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).send({ error: 'You must provide username, email and password.' });
    }
    const user = await User.findOne({ email: email });
    if (user != null) {
      return res.status(400).send({ error: 'User already exsist' });
    }
    const result = new User({
      username: username,
      email: email,
      password: password,
    });
    const data = await result.save();
    res.status(200).send({
      result: {
        username: data.username,
        email: data.email,
        createdAt: data.createdAt
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send('Something went wrong');
  }
};
const sendGernalEmail = async (req, res) => {
  try {
    const { email, password } = req.body;
    let mailOptions = {
      from: 'sys.notification77@gmail.com',
      to: email,
      subject: `Budget Increase Request`,
      text: `Your Password ${password}  Link : https://system-frontend-ten.vercel.app/`,

    };
    sendEmail(mailOptions);
  } catch (err) {
    res.status(500).send('Something went wrong');
  }
}
module.exports = {
  userLogin,
  userSignUp,
  sendGernalEmail
};
