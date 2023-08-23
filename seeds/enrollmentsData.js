const { Enrollments } = require("../models");

const enrollmentsdata = [
    {
        user_id: 1,  
        study_group_id: 1
    },
    {
        user_id: 3,  
        study_group_id: 1
    },
    {
        user_id: 4,  
        study_group_id: 1
    },
    {
        user_id: 5,  
        study_group_id: 1
    },
    {
        user_id: 1,  
        study_group_id: 2
    },
    {
        user_id: 2,  
        study_group_id: 2
    }
];

const seedEnrollments = () => Enrollments.bulkCreate(enrollmentsdata);

module.exports = seedEnrollments; 