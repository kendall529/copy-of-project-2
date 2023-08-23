const Users = require('./Users');
const Topics = require('./Topics');
const Enrollments = require('./Enrollments');
const Groups = require('./Groups');

Users.belongsToMany(Groups, {
  through: {
    model: Enrollments,
    unique: false
  },
  as: 'user_id',
  // onDelete: 'CASCADE'
});

Groups.belongsToMany(Users, {
  through: {
    model: Enrollments,
    unique: false
  },
  as: 'group_id',
  // onDelete: 'CASCADE'
});

Topics.hasMany(Groups, {
  foreignKey: 'topic_id',
  onDelete: 'CASCADE'
})

Groups.belongsTo(Topics, {
  foreignKey: 'topic_id'
})

Groups.belongsTo(Users, {
  foreignKey: 'created_by'
})

Users.hasMany(Groups, {
  foreignKey: 'created_by'
})

module.exports = { Users, Topics, Enrollments, Groups };
