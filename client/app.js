Template.registerHelper("usernameFromId", function (userId){
	var user = Meteor.users.findOne({_id: userId});
	console.log(user);
	if(typeof user === "undefined"){
		return "";
	}
	return user.username;
});