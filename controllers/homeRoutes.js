const router = require('express').Router();
const { Op } = require("sequelize");
const { Groups, Topics, Users, Enrollments } = require("../models");
const loginAuthentication = require('../utils/authentication');

router.get('/', async (req, res) => {
  try {
    const records = await Groups.findAll({});

  const groups = records.map((record) => record.get({plain: true}));

  // console.log(records);
  res.status(200).render('homepage', {
    groups,
    loggedIn: req.session.loggedIn
  }); 
  } catch (err){
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  try{

    if(req.session.loggedIn) {
      res.redirect('/profile');

      return;
    }

    res.render('login');
  } catch(err) {
    console.log(err);
    res.status(500).json(err); 
  }
});

router.get('/groups', loginAuthentication, async (req, res) => {
  try {
    const records = await Groups.findAll({
      include: [
        {
          model: Topics,
          attributes: ['topic_name'],
        },
        {
          model: Users,
          attributes: ['first_name', 'last_name'],
        },
      ]
    });

    const groups = records.map((record) => record.get({plain: true}));
  
    // console.log(records);
    res.render('groups_list', {groups, loggedIn: true}); 
  }catch (err){
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/profile', loginAuthentication, async (req, res) => {
  try{
  const recordsTopics = await Topics.findAll({});

  const userData = await Users.findAll({
    where: {
      id: {[Op.ne]: req.session.user_id}
    }
  });

  const recordsEnrollments = await Users.findByPk(req.session.user_id, {
    attributes: { exclude: ['password'] },
    include: [
      { 
        model: Groups, 
        through: Enrollments, 
        as: 'user_id',
        include: [
          {
            model: Topics,
            attributes: ['topic_name'],
          },
          {
            model: Users,
            attributes: ['first_name', 'last_name'],
          },
        ]
      },
    ]
  });

  const users = userData.map((user) => user.get({plain: true}));
  const topics = recordsTopics.map((recordsTopics) => recordsTopics.get({plain: true}));
  const enrollments = recordsEnrollments.get({ plain: true });
  //console.log(enrollments.user_id[0].created_by);
  
  // checking for if the session.user_id is the same as the created_by in order to dynamically generate info with hbs
  enrollments.user_id.forEach(element => {


    if(element.created_by === req.session.user_id) {
      // creates a new element in user model when if statement is true which can then be used in #if method in hbs
      element.isOwner = true;

    }
  });

  res.render('profile', { 
    topics,
    enrollments,
    users,
    loggedIn: true
  }); 
  //console.log();
  }catch (err){
    console.log(err);
    res.status(500).json(err);
  }
  
});

router.get('/groups/:id', loginAuthentication, async (req, res) => {
  try{
    const recordData = await Groups.findByPk(req.params.id, {
      include: [
        {
          model: Topics,
          attributes: ['topic_name'],
        },
        {
          model: Users,
          attributes: ['first_name', 'last_name'],
        }
      ]
    });

    const userData = await Groups.findByPk(req.params.id, {
      include: [
        { 
          model: Users, 
          through: Enrollments, 
          as: 'group_id',
          attributes: { exclude: ['password'] },
        },
      ]
    });

    const userData2 = await Groups.findByPk(req.params.id, {
      include: [
        {
          model: Users,
          attributes: ['first_name', 'last_name'],
        },
      ]
    })
    // const userData = await Users.findAll({
    //   where: {
    //     id: {[Op.ne]: req.session.user_id}
    //   }
    // });

    const users2 = userData2.get({ plain: true});

    const users = userData.get({ plain: true });


    const group = recordData.get({ plain: true });
  
    //console.log(users2);
    res.render('group', { group, users, users2, loggedIn: true}); 
  } catch (err){
    console.log(err);
    res.status(500).json(err);
  }
})

router.get('/enrollments/:id', async (req, res) => {
  try{
    const records = await Groups.findByPk(req.params.id,{
      include: [{ model: Users, through: Enrollments, as: 'group_id' }]
  
  
    });
    //const enrollments = records.map((record) => record.get({plain: true}));
  
    res.send(records);
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



module.exports = router;
