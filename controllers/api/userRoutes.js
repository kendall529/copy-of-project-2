const router = require('express').Router();
const { Users } = require("../../models");

router.get('/', (req, res) => {
    try{
      // console.log("Get from the api/users");
    res.status(200).send("Get from the api/users");
    } catch {
      console.log(err);
      res.status(500).json(err);
    }
})
.post('/', async (req, res) => {
    //Create a new user
    //This code is currently taken directly from Week 14 example 19 Ins-Middleware, so if there's something that doesn't fit, that's probably why...
   
    try {
      const dbUserData = await Users.create({
        //id? id: req.body.id,
        user_name: req.body.user_name,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
      });
  
      req.session.save(() => {
        req.session.user_id = dbUserData.id
        req.session.loggedIn = true;
  
        res.status(200).json(dbUserData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

router.post('/login', async (req, res) => {

  try {
    
    const userData = await Users.findOne({
      where: {
        email: req.body.email
      }
    });

    if(!userData) {
      res.status(400).json({ mssg: 'Incorrect email or password.' })

      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if(!validPassword) {

      res.status(400).json({ mssg: 'Incorrect email or password.' })

      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;

      res.json({ user: userData, mssg: 'You are now logged in.' })
    });

  } catch (err) {
    
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {

  if(req.session.loggedIn) {

    req.session.destroy(() => {

      res.status(204).end();
    });

  } else {

    res.status(404).end();
  }
});
  

module.exports = router; 