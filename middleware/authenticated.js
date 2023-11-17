'use strict';
const jwt = require('jsonwebtoken');
const User = require('../models/users');
const ensureEmployeeAuth = async function (req, res, next) {
  if (!req.headers.authorization) {
    return res
      .status(403)
      .send({ message: 'The request does not have the authentication header' });
  }
  const token = req.headers.authorization.split(' ')[1];
  try {
    const decodedToken = jwt.verify(token, 'Image-Gallery');
    const { _id } = decodedToken.result;
    console.log(_id);
    await User.findById(_id)
      .exec()
      .then((user) => {
        if (!user) {
          return res.status(403).send({ message: 'Unauthorized request' });
        } else {
          req.user = user;
          next();
        }
      })
      .catch((error) => {
        console.error(error);
        return res.status(401).send({ message: 'user not authorized' });
      });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'invalid token' });
  }
};
module.exports = { ensureEmployeeAuth };
