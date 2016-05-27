Template.post.events({
	'click .delete': function(e){
		e.preventDefault();
		var post = Posts.findOne({title: this.title, description: this.description});
		if(post.user === Meteor.userId()){
			Meteor.call('removePost', post._id, function(error){
				if(error){
					console.log(error);
				} else {
					console.log("Awesome, deleted!!!");
				}
			});	
		}
	},
	'click .update': function(e){
		e.preventDefault();
		var post = Posts.findOne({title: this.title, description: this.description});
		$('#blog-title').val(post.title);
		$('#blog-value').val(post.description);
	}
});