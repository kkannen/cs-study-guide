const jwt = require("jwt-simple");

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ userId: user.id, iat: timestamp }, "abc123"/*process.env.SECRET*/);
}


exports.tokenForUser = tokenForUser;

