const { Groups } = require("../models");

const groupsdata = [
    {
        group_name: "testGroup1",
        topic_id: 2,
        skill_level: "beginner",
        zoom_link: "www.google.com",
        meet_time: "5:00 PM CST",
        created_by: 1
    },
    {
        group_name: "testGroup2",
        topic_id: 1,
        skill_level: "advanced",
        zoom_link: "www.google.com",
        meet_time: "7:00 PM CST",
        created_by: 2
    },
    {
        group_name: "testGroup3",
        topic_id: 10,
        skill_level: "advanced",
        zoom_link: "www.google.com",
        meet_time: "3:00 PM CST",
        created_by: 3
    }, 
    {
        group_name: "testGroup4",
        topic_id: 7,
        skill_level: "intermediate",
        zoom_link: "www.google.com",
        meet_time: "8:00 AM CST",
        created_by: 4
    }
];

const seedGroups = () => Groups.bulkCreate(groupsdata);

module.exports = seedGroups; 