Template.registerHelper("usernameFromId", function (userId){
	var user = Meteor.users.findOne({_id: userId});
	if(user == null){
		return $('p').html('<a href="/login">Login</a> to view author name');
	} else {
		return user.username;
	}
});