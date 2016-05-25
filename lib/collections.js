Posts = new Mongo.Collection("posts");

Meteor.startup(function(){
	if (Posts.find({}).count() === 0){
		for (var i = 0; i < 4; i++){
			Posts.insert({
				title: 'title ' + i,
				description: 'description ' + i,
				timestamp: new Date()
			})
		}
	}
});