Template.post.events({
	'click .remove-post': function(e){
		e.preventDefault();
		Meteor.call('removePost', this, function(error){
			if(error){
				console.log("Removal of blog post: Failed: " + error);
			} else {
				console.log("Removal of blog post: Successful")
			}
		});
	}
})