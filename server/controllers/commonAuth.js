const userdb = require("../models/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

passport.use(
  new JWTStrategy(
    {
      secretOrKey: "1234",
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    },
    async (token, done) => {
      done(null, token);
    }
  )
);

module.exports.registerController = async (req, res) => {
  const { name, email, password } = req.body;

  console.log(req.body);

  try {
    const userWithEmail = await userdb.findOne({ email });

    if (userWithEmail) {
      res.json({ message: "user already exist" }).status(401);
    }

    const newUser = new userdb({
      displayName: name,
      email: email,
      password: password,
    });

    await newUser.save();

    res.json({ message: "created successfully" }).status(200);
  } catch (error) {
    res.json({ message: error.message }).status(401);
  }
};

module.exports.loginController = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const userFound = await userdb.findOne({ email });

    if (!userFound) {
      res.json({ message: "user doesn't exist, register" }).status(401);
    }

    const validate = bcrypt.compare(password, userFound.password);

    if (!validate) {
      res.json({ message: "incorrect password" }).status(401);
    }

    const token = jwt.sign({ id: userFound._id }, "1234");

    res.json({token: token})
  } catch (error) {
    res.json({ message: error.message }).status(401);
  }
};
