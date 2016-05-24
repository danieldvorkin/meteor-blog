Template.post.events({
	'click #remove-post': function(e){
		Meteor.call('removePost', this.user, function(error){
			if(error){
				console.log("Removal of blog post: Failed: " + error); 
			} else {
				console.log("Removal of blog post: Successful")
			}
		});
		console.log("This: " + $(this));
		console.log("Panel: " + $(this).parent('panel'));
		$(this).remove();
	}
})