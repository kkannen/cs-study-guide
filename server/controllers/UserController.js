const User = require("../models/UserModel");
const tokenForUser = require("../services/token").tokenForUser;
const hash = require("../services/hash").hash;

module.exports.create = (request, response, next) => {
  const { username, password } = request.body;
  const u = username;
  // If no username or password was supplied return an error
  if (!username || !password) {
    return response.status(422)
    .json({ error: "You must provide an username and password" });
  }
  console.log("Look for a user with the username");
  User.findOne({username: u}).exec()
  .then((existingUser) => {
      // If the user exist return an error on sign up
    if (existingUser) {
      console.log("This username is already being used");
      return response.status(422).json({ error: "This username is already in use" });
    }
    console.log("This username is free to use");
    saveUser(username,password,(token) => {
      response.json(token);
    });
  })
  .catch(err => next(err));
}

function saveUser(username,password,done) {
  hash(password, null, (hashedPassword) => {
    // Create a new user with the supplied username, and the hashed password
    //create an object with a key corresponding to each lesson in a module and value set to false. represents progress when the user has not completed any lessons
    const sicpProg = {};
    const createSicpProgressObj = () => {
      for(let x = 1; x <= 38; x++){
        Object.keys(sicpProg).push(`lesson${x}`)
        sicpProg[`lesson${x}`] = false;
      }
      return sicpProg;
    }

    const user = new User({ 
      username, 
      password: hashedPassword,
      sicpProgress: createSicpProgressObj()
    });
    console.log("Saving the user");
    user.save()
      .then(u => {
        console.log("User has been saved to database");
        done({ token: tokenForUser(u), u });
      });
  });
}

module.exports.read = (request, response) => {
  User.findById({"_id": request.params.id}).exec()
  .then(contact => response.json(contact))
};

module.exports.update = ((request, response) => {
  const newSicpProgress = {
    sicpProgress: request.body,
  }
  User.updateOne({"_id": request.params.id},
  newSicpProgress).exec().then(sicpprog => {
    response.json(sicpprog)
  })
})



