Meteor.methods ({
	'createPost': function(inputTitle, inputVal, userId){
 		check(userId, String);
 		check(inputTitle, String);
 		check(inputVal, String);

    Posts.insert({
    	title: inputTitle,
		 	description: inputVal,
		 	user: userId,
		 	timestamp: new Date()
		});
  },
  'removePost': function(postId){
  	Posts.remove({_id: postId})
  }
})