Template.registerHelper("usernameFromId", function (userId){
	var user = Meteor.users.findOne({_id: userId});
	if(user == null){
		return $('p').html('<a href="/login">Login</a> to view author name');
	} else {
		return user.username;
	}
});

Template.registerHelper("isUsersPost", function(userId, post){
  console.log("User: " + userId);
  console.log("Post: " + post.title);
  var user = Meteor.users.findOne({_id: userId});
  var post = Meteor.posts.findOne({title: post.title});

  if(post.user === user.id){
    return '<a href="" class="remove-post"><i class="glyphicon glyphicon-remove" id="remove-post"></i></a>'.raw
  }
})