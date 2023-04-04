const express = require("express");
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const router = express.Router();
const jwt = require("jsonwebtoken");
// route pour la creation d'un compte !

router.post("/register", async function (req, res) {
  try {
    let user = await userModel.findOne({ email: req.body.email });
    if (user) {
      res.send({ message: "addresse email deja utilisé" });
    } else {
      let newUser = new userModel(req.body);
      bcrypt.genSalt(10, (err, salt) => {
        if (err) {
          console.log(err);
        }
        bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
          if (err) {
            console.log(err);
          }
          //remplacer le mot de passe brut avec le mot de passe hashé
          newUser.password = hashedPassword;
          newUser.save();
          res.send("utlisateur creé avec succes ! ");
        });
      });
    }
  } catch (err) {
    res.send(err);
  }
});

router.post("/login", async function (req, res) {
  const user = await userModel.findOne({ email: req.body.email });
  if (!user) {
    res.send({
      error: "aucun utilisateur est associé avec cette addresse email",
    });
  }
  bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
    if (err) {
      console.log(err);
    }
    if (isMatch) {
      const payload = {
        id: user._id,
        email: user.email,
        username: user.username,
      };

      let token = jwt.sign(payload, "secret", { expiresIn: 3600 });
      res.send({
        message: "connecté avec succes ! ",
        token: token,
      });
    } else {
      return res.send({ error: "mot de passe incorrecte" });
    }
  });
});
module.exports = router;
