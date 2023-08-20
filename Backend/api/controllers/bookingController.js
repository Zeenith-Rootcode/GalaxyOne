const bcrypt = require("bcryptjs");
const request = require("request-promise");
const Users = require("../models/user");
const Planets = require("../models/planet");
const Packages = require("../models/package");
const Bookings = require("../models/booking");
const Tickets = require("../models/ticket");
const Payments = require("../models/payment");
const ticket = require("../models/ticket");
const { format } = require("date-fns");

// *******************************************************************************
// ****************************** To add a booking *******************************
// *******************************************************************************
exports.addBooking = async (req, res) => {
  const { user, ticket, numberOfTickets } = req.body;

  if (!ticket || !numberOfTickets || ticket === "" || numberOfTickets === 0) {
    res.json({
      Error: true,
      Status: 400,
      Message: "Empty Values",
    });
  } else {
    Tickets.findById(ticket)
      .then((ticketFromDB) => {
        let price = ticketFromDB.price * numberOfTickets;
        let newBooking = new Bookings({
          user: user,
          ticket: ticket,
          issuedDate: format(Date.now(), "dd/MM/yyyy"),
          departureDate: ticketFromDB.departureDate,
          destination: ticketFromDB.destinationPlanetName,
          startingPlanet: ticketFromDB.startingPlanetName,
          numberOfTickets: numberOfTickets,
          price: price,
          status: "NOT PAID",
        });

        newBooking
          .save()
          .then((resultAfterSaving) => {
            res.json({
              Error: false,
              Status: 200,
              Message: "Booking succeeded.",
              Booking: resultAfterSaving,
            });
          })
          .catch((error) => {
            res.json({
              Error: true,
              Status: 400,
              Message: "Booking was unsuccessful : " + error.message,
            });
          });
      })
      .catch((error) => {
        res.json({
          Error: true,
          Status: 400,
          Message: "Booking was unsuccessful : " + error.message,
        });
      });
  }
};

// *******************************************************************************
// ****************************** To payment *************************************
// *******************************************************************************
exports.payForBooking = async (req, res) => {
  const { user, ticket, booking, cardNumber, nameOnCard, cvc, expDate } =
    req.body;

  if (
    !user ||
    !booking ||
    !cardNumber ||
    !nameOnCard ||
    !cvc ||
    !expDate ||
    user === "" ||
    booking === "" ||
    cardNumber === "" ||
    nameOnCard === "" ||
    cvc === "" ||
    expDate === ""
  ) {
    res.json({
      Error: true,
      Status: 400,
      Message: "Empty Values",
    });
  } else {
    Users.findById(user)
      .then((userFormDB) => {
        Bookings.findById(booking)
          .then((bookingFromDB) => {
            let newPayment = new Payments({
              user: user,
              booking: booking,
              paymentDate: format(Date.now(), "dd/MM/yyyy"),
              price: bookingFromDB.price,
            });

            newPayment
              .save()
              .then((resultAfterSavingPayment) => {
                Bookings.findByIdAndUpdate(booking, { status: "PAID" })
                  .then((resultAfterUpdatingBooking) => {
                    res.json({
                      Error: false,
                      Status: 200,
                      Message: "Payment succeeded.",
                      Booking: resultAfterUpdatingBooking,
                      Payment: resultAfterSavingPayment,
                    });
                  })
                  .catch((error) => {
                    res.json({
                      Error: true,
                      Status: 400,
                      Message: "Payment was unsuccessful : " + error.message,
                    });
                  });
              })
              .catch((error) => {
                res.json({
                  Error: true,
                  Status: 400,
                  Message: "Payment was unsuccessful : " + error.message,
                });
              });
          })
          .catch((error) => {
            res.json({
              Error: true,
              Status: 400,
              Message: "Payment was unsuccessful : " + error.message,
            });
          });
      })
      .catch((error) => {
        res.json({
          Error: true,
          Status: 400,
          Message: "Payment was unsuccessful : " + error.message,
        });
      });
  }
};

// *******************************************************************************
// *********************** To get bookings of user *******************************
// *******************************************************************************

function getDetailsOfBookings(singleBookingFromDB) {
  return new Promise((resolve, reject) => {
    Tickets.findById(singleBookingFromDB.ticket)
      .then((ticketFromDB) => {
        Planets.findById(ticketFromDB.startingPlanet)
          .then((startingPlanetDetails) => {
            Planets.findById(ticketFromDB.destinationPlanet)
              .then((destinationPlanetDetails) => {
                Packages.findById(ticketFromDB.package).then(
                  (packageFromDB) => {
                    resolve({
                      ticket: ticketFromDB,
                      startingPlanet: startingPlanetDetails,
                      destination: destinationPlanetDetails,
                      package: packageFromDB,
                      departureDate: ticketFromDB.departureDate,
                      arrivalDate: ticketFromDB.arrivalDate,
                      ticketPrice: ticketFromDB.price,
                      numberOfTickets: singleBookingFromDB.numberOfTickets,
                      totalPrice: singleBookingFromDB.price,
                    });
                  }
                );
              })
              .catch((error) => {
                res.json({
                  Error: true,
                  Status: 400,
                  Message:
                    "Getting bookings of the user was unsuccessful : " +
                    error.message,
                });
              });
          })
          .catch((error) => {
            res.json({
              Error: true,
              Status: 400,
              Message:
                "Getting bookings of the user was unsuccessful : " +
                error.message,
            });
          });
      })
      .catch((error) => {
        res.json({
          Error: true,
          Status: 400,
          Message:
            "Getting bookings of the user was unsuccessful : " + error.message,
        });
      });
  });
}
exports.getBookingsOfUser = async (req, res) => {
  const { user } = req.body;

  if (!user || user === "") {
    res.json({
      Error: true,
      Status: 400,
      Message: "Empty Values",
    });
  } else {
    Users.findById(user)
      .then((userFromDB) => {
        Bookings.find({ user: user })
          .then((bookingsFromDB) => {
            Promise.all(
              bookingsFromDB.map((singleBookingFromDB) => {
                return getDetailsOfBookings(singleBookingFromDB);
              })
            )
              .then((resultsOfBookings) => {
                res.json({
                  Error: false,
                  Status: 200,
                  Message: "Getting bookins of user was succeded.",
                  User: userFromDB,
                  Bookings: resultsOfBookings,
                });
              })
              .catch((error) => {
                res.json({
                  Error: true,
                  Status: 400,
                  Message:
                    "Getting booking of the user was unsuccessful : " +
                    error.message,
                });
              });
          })
          .catch((error) => {
            res.json({
              Error: true,
              Status: 400,
              Message:
                "Getting bookings of the user was unsuccessful : " +
                error.message,
            });
          });
      })
      .catch((error) => {
        res.json({
          Error: true,
          Status: 400,
          Message:
            "Getting bookings of the user was unsuccessful : " + error.message,
        });
      });
  }
};

// *******************************************************************************
// ******************** To get recent planets of user ****************************
// *******************************************************************************

function getPlanetDetails(singleBookingFromDB) {
  return new Promise((resolve, reject) => {
    Tickets.findById(singleBookingFromDB.ticket)
      .then((ticketFromDB) => {
        Planets.findById(ticketFromDB.destinationPlanet)
          .then((planetFromDB) => {
            resolve(planetFromDB);
          })
          .catch((error) => {
            res.json({
              Error: true,
              Status: 400,
              Message:
                "Getting recent planets of the user was unsuccessful : " +
                error.message,
            });
          });
      })
      .catch((error) => {
        res.json({
          Error: true,
          Status: 400,
          Message:
            "Getting recent planets of the user was unsuccessful : " +
            error.message,
        });
      });
  });
}
exports.getRecentPlanetsOfUser = async (req, res) => {
  const { user } = req.body;

  if (!user || user === "") {
    res.json({
      Error: true,
      Status: 400,
      Message: "Empty Values",
    });
  } else {
    Users.findById(user)
      .then((userFromDB) => {
        Bookings.find({ user: user })
          .then((bookingsFromDB) => {
            Promise.all(
              bookingsFromDB.map((singleBookingFromDB) => {
                return getPlanetDetails(singleBookingFromDB);
              })
            )
              .then((resultsOfPlanets) => {
                const uniquePlanetsSet = new Set(resultsOfPlanets);
                const uniquePlanetsArray = Array.from(uniquePlanetsSet);

                res.json({
                  Error: false,
                  Status: 200,
                  Message: "Getting recent planets of user was succeeded.",
                  RecentPlanets: uniquePlanetsArray,
                });
              })
              .catch((error) => {
                res.json({
                  Error: true,
                  Status: 400,
                  Message:
                    "Getting booking of the user was unsuccessful : " +
                    error.message,
                });
              });
          })
          .catch((error) => {
            res.json({
              Error: true,
              Status: 400,
              Message:
                "Getting bookings of the user was unsuccessful : " +
                error.message,
            });
          });
      })
      .catch((error) => {
        res.json({
          Error: true,
          Status: 400,
          Message:
            "Getting bookings of the user was unsuccessful : " + error.message,
        });
      });
  }
};
