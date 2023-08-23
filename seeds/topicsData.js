const { Topics } = require("../models");

const topicsdata = [
    {
        topic_name: "HTML"
    },
    {
        topic_name: "CSS"
    },
    {
        topic_name: "Node.js"
    },
    {
        topic_name: "REST API's"
    },
    {
        topic_name: "Web API's"
    },
    {
        topic_name: "Express.js"
    },
    {
        topic_name: "Inquirer"
    },
    {
        topic_name: "Object Oriented Programming"
    },
    {
        topic_name: "Modularized Routes"
    },
    {
        topic_name: "Middleware"
    },
    {
        topic_name: "MySQL"
    },
    {
        topic_name: "ORM"
    },
    {
        topic_name: "Models"
    },
    {
        topic_name: "Views"
    },
    {
        topic_name: "Controllers"
    },

];

const seedTopics = () => Topics.bulkCreate(topicsdata);

module.exports = seedTopics; 