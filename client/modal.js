Template.modal.events({
	'submit #updatePost': function(e){
		e.preventDefault();
		var title = $('#blog-title').val();
		var desc = $('#blog-value').val();
		var post = Posts.findOne({title: title, description: desc});
			
		Meteor.call('updatePost', post._id, title, desc, function(error){
			if(error){
				alert(error);
			} else {
				console.log("awesome update u guys");
			}
		});
	}
})