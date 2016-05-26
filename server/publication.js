Meteor.publish('posts', function(){
	// Returns all the messages
	return Posts.find({});
})