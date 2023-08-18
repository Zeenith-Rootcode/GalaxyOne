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
                password,
              });
            } else {
              res.json({
                Error: true,
                Status: 400,
                Message: "Invalid login type.",
              });
            }
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

exports.getUserRecords = (req, res) => {
  const { userId } = req.body;

  if (userId === null || userId === "") {
    res.json({
      Status: "Unsuccessful",
      Message: "Email and password must be entered.",
    });
  } else {
    User.findById(userId)
      .then((user) => {
        if (user) {
          UserFatLevelRecords.find({ userId: userId })
            .then((userFatLevelRecords) => {
              UserMoodRecords.find({ userId: userId })
                .then((userMoodRecords) => {
                  res.json({
                    Status: "Successful",
                    UserFatLevels: userFatLevelRecords,
                    UserMoods: userMoodRecords,
                  });
                })
                .catch((error) => {
                  console.log(error);
                  res.json({
                    Status: "Unsuccessful",
                    Error: error,
                    Message: "Happened when getting fat levels records.",
                  });
                });
            })
            .catch((error) => {
              console.log(error);
              res.json({
                Status: "Unsuccessful",
                Error: error,
                Message: "Happened when getting fat levels records.",
              });
            });
        } else {
          console.log("BAAA");

          res.json({ Status: "Unsuccessful", Message: "Invalid user id." });
        }
      })
      .catch((error) => {
        console.log(error);
        res.json({
          Status: "Unsuccessful",
          Error: error,
        });
      });
  }
};

exports.addAppointment = (req, res) => {
  const {
    userId,
    appointmentDate,
    appointmentTime,
    age,
    scholarship,
    hypertension,
    diabetes,
    alcoholism,
    handcap,
    sms,
    gender,
  } = req.body;

  if (
    userId === "" ||
    age === null ||
    scholarship === null ||
    hypertension === null ||
    diabetes === null ||
    alcoholism === null ||
    handcap === null ||
    sms === null ||
    gender === null ||
    appointmentDate === null ||
    appointmentTime === null
  ) {
    res.json({ Status: "Unsuccessful", Message: "All data must be entered." });
  } else {
    const options = {
      method: "POST",
      uri: PYTHON_FLASK_API_URL + "predictNoShow",
      body: {
        modelInput: [
          [
            parseFloat(age),
            parseInt(scholarship),
            parseInt(hypertension),
            parseInt(diabetes),
            parseInt(alcoholism),
            parseInt(handcap),
            parseInt(sms),
            parseInt(gender),
          ],
        ],
      },
      json: true,
      headers: {
        "Content-Type": "application/json",
      },
    };

    request(options).then(function (response) {
      let dataFromFlaskAPI = JSON.stringify(response);
      dataFromFlaskAPI = JSON.parse(dataFromFlaskAPI);
      dataFromFlaskAPI = dataFromFlaskAPI.prediction;
      let pred1 = dataFromFlaskAPI[0][0];
      let pred2 = dataFromFlaskAPI[0][1];
      let noShow;
      if (pred1 >= pred2) {
        noShow = true;
      } else {
        noShow = false;
      }
      const newRecord = new Appointments({
        userId,
        age,
        noShow,
        appointmentDate,
        appointmentTime,
      });
      newRecord
        .save()
        .then((result) => {
          console.log(result);
          res.json({
            Status: "Successful",
            Message: "Record  has been saved successfully.",
          });
        })
        .catch((error) => {
          console.log(error);

          res.json({
            Status: "Unsuccessful",
            Message: "Happened while saving the body fat record in the DB.",
            error: error,
          });
        });
    });
  }
};
