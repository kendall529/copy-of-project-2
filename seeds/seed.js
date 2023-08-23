const sequelize = require("../config/connection");
const seedUsers = require("./usersData");
const seedTopics = require("./topicsData");
const seedGroups = require("./groupsData");
const seedEnrollments = require("./enrollmentsData")

const seedAll = async () => {
    await sequelize.sync({force: true});

    await seedUsers();

    await seedTopics();

    await seedGroups();

    await seedEnrollments();

    process.exit(0);

};

seedAll();
