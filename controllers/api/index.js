const router = require('express').Router();

const userRoutes = require('./userRoutes.js');

const groupRoutes = require('./groupRoutes.js');

const enrollmentsRoutes = require('./enrollmentsRoutes.js');

router.use('/users', userRoutes);

router.use('/groups', groupRoutes);

router.use('/enrollments', enrollmentsRoutes);

module.exports = router; 