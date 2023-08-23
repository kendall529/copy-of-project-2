const router = require('express').Router();

const { Groups } = require('../../models');
const loginAuthentication = require('../../utils/authentication');

router.get('/', (req, res) => {
try {
  console.log("api/groups message");

res.status(200).send("message sent from api/groups");
} catch (err) {
  console.log(err);
  res.status(500).json(err);
}


}).post('/', async (req, res) => {
    //Create a new group
    //This code is currently taken directly from Week 14 example 19 Ins-Middleware, so if there's something that doesn't fit, that's probably why...
    try {
      // console.log(req.body);
      const newGroupData = await Groups.create({
        //id? id: req.body.id,
        group_name: req.body.group_name,
        group_description: req.body.group_description,
        topic_id: req.body.topic_id,
        skill_level: req.body.skill_level,
        zoom_link: req.body.zoom_link,
        meet_time: req.body.meet_time,
        created_by: req.session.user_id
      });
      const group = newGroupData.get({ plain: true });
      res.status(200).json(group);
  
    //   req.session.save(() => {
    //     req.session.loggedIn = true;
  
    //     res.status(200).json(newGroupData);
    //   });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  })
  .delete('/:id', loginAuthentication, async (req, res) => {
    try {

      const groupData = await Groups.destroy({
        where: {
          id: req.params.id,
        },
      });

      if (!groupData) {
        res.status(404).json({ msg: 'No group found with this id.' });

        return;
      }

      res.status(200).json(groupData);
    } catch (err) {

      res.status(500).json(err);
    }
  })

module.exports = router; 