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
  'removePost': function(obj){
  	if(obj.user === Meteor.userId()){
      console.log("This post belongs to you");
      Posts.remove({title: obj.title})
    } else {
      return alert("This post does not belong to you");
    }

  }
})