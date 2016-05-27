Template.profile.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('posts');
    self.subscribe('users');
  });
});

Template.profile.helpers({
  posts: function(){
    return Posts.find({user: Meteor.userId()}, {sort: {timestamp: '-1'}});
  },
  users: function(){
    return Meteor.users.find({})
  }
});