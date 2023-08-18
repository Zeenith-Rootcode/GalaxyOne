const bcrypt = require("bcryptjs");
const request = require("request-promise");
const User = require("../models/user");

// *******************************************************************************
// ************************* To register a user account **************************
// *******************************************************************************

exports.registerUser = async (req, res) => {
  const {
    fullName,
    loginType,
    universalId,
    googleId,
    universalTel,
    homePlanet,
    homeDestrict,
    race,
    password,
  } = req.body;

  if (loginType !== "") {
    if (
      fullName === "" ||
      universalId === "" ||
      universalTel === "" ||
      homePlanet === "" ||
      homeDestrict === "" ||
      race === ""
    ) {
      res.json({
        Error: true,
        Status: 400,
        Message: "Empty Values",
      });
    } else {
      let newUser;
      User.find({ universalId: universalId })
        .then((user) => {
          if (user.length > 0) {
            res.json({
              Error: true,
              Status: 400,
              Message: "There is a user with this universalId already.",
            });
          } else {
            if (loginType === "NORMAL") {
              if (!password || password === "") {
                res.json({
                  Error: true,
                  Status: 400,
                  Message: "Empty values",
                });
              }
              newUser = new User({
                fullName,
                loginType,
                universalId,
                universalTel,
                homePlanet,
                homeDestrict,
                race,
                password,
              });

              bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                  if (err) throw err;
                  newUser.password = hash;
                  newUser
                    .save()
                    .then((responseSavingUser) => {
                      console.log(responseSavingUser);
                      res.json({
                        Error: false,
                        Status: 200,
                        Message: "Registration succeeded.",
                        User: responseSavingUser,
                      });
                    })
                    .catch((error) => {
                      console.log(error);
                      res.json({
                        Error: true,
                        Status: 400,
                        Message:
                          "Registration was unsuccessful : " + error.message,
                      });
                    });
                });
              });
            } else if (loginType === "GOOGLE") {
              if (googleId === "" || !googleId) {
                res.json({
                  Error: true,
                  Status: 400,
                  Message: "Empty values",
                });
              }
              newUser = new User({
                fullName,
                loginType,
                universalId,
                googleId,
                universalTel,
                homePlanet,
                homeDestrict,
                race,
              });

              newUser
                .save()
                .then((responseSavingUser) => {
                  console.log(responseSavingUser);
                  res.json({
                    Error: false,
                    Status: 200,
                    Message: "Registration succeeded.",
                    User: responseSavingUser,
                  });
                })
                .catch((error) => {
                  console.log(error);
                  res.json({
                    Error: true,
                    Status: 400,
                    Message: "Registration was unsuccessful : " + error.message,
                  });
                });
            } else {
              res.json({
                Error: true,
                Status: 400,
                Message: "Invalid login type.",
              });
            }
          }
        })
        .catch((error) => {
          console.log(error);
          res.json({
            Error: true,
            Status: 400,
            Message: "Registration was unsuccessful : " + error.message,
          });
        });
    }
  } else {
    res.json({
      Error: true,
      Status: 400,
      Message: "Invalid login type.",
    });
  }
};

// *******************************************************************************
// ************************* To login into a user account ************************
// *******************************************************************************

exports.loginUser = async (req, res) => {
  const { universalId, password, loginType, googleId } = req.body;

  //Validation
  if (!loginType) {
    res.json({
      Error: true,
      Status: 400,
      Message: "Login type is empty.",
    });
  } else if (loginType === "NORMAL") {
    if (!universalId || !password || universalId === "" || password === "") {
      res.json({
        Error: true,
        Status: 400,
        Message: "Universal id or password is empty.",
      });
    } else {
      //Check for existing user
      User.findOne({ universalId: universalId }).then((user) => {
        if (!user) {
          res.json({
            Error: true,
            Status: 400,
            Message: "Invalid universal id.",
          });
        } else {
          //Validating password
          bcrypt.compare(password, user.password).then((isMatch) => {
            if (!isMatch) {
              res.json({
                Error: true,
                Status: 400,
                Message: "Password is incorrect.",
              });
            } else {
              res.json({
                Error: false,
                Status: 200,
                Status: "Successful",
                Message: "User has been logged successfully.",
                User: user,
              });
            }
          });
        }
      });
    }
  } else if (loginType === "GOOGLE") {
    if (!googleId || googleId === "") {
      res.json({
        Error: true,
        Status: 400,
        Message: "Google id is empty.",
      });
    } else {
      //Check for existing user
      User.findOne({ googleId: googleId }).then((user) => {
        if (!user) {
          res.json({
            Error: true,
            Status: 400,
            Message: "User logging unsuccessful",
          });
        } else {
          res.json({
            Error: false,
            Status: 200,
            Status: "Successful",
            Message: "User has been logged successfully.",
            User: user,
          });
        }
      });
    }
  } else {
    res.json({
      Error: true,
      Status: 400,
      Message: "Invalid login type.",
    });
  }
};

exports.getUsers = async (req, res) => {
  User.find()
    .then((users) => {
      res.json({
        Status: "Successful",
        Users: users,
      });
    })
    .catch((error) => {
      res.json({
        Status: "Unsuccessful",
        Error: error,
      });
    });
};
