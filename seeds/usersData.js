const { Users } = require("../models");

const usersdata = [
    {
        user_name: "shawn777",
        first_name: "Shawn",
        last_name: "Robinson",
        email: "shawn@mail.com",
        password: "password"
    },
    {
        user_name: "gabby98",
        first_name: "Gabriela",
        last_name: "Robinson",
        email: "gabby@mail.com",
        password: "password"
    },
    {
        user_name: "nam123",
        first_name: "Nam",
        last_name: "Nguyen",
        email: "nam@mail.com",
        password: "Password123"
    },
    {
        user_name: "jennifer111",
        first_name: "Jennifer",
        last_name: "Dutton",
        email: "jennifer@mail.com",
        password: "Password123"
    },
    {
        user_name: "kendall999",
        first_name: "Kendall",
        last_name: "Smith",
        email: "kendall@mail.com",
        password: "Password123"
    }
];

const seedUsers = () => Users.bulkCreate(usersdata, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUsers; 