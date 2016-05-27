Template.modal.events({
	'submit #updatePost': function(e){
		e.preventDefault();
		var post = Posts.findOne({title: this.title, description: this.desc});
		var title = $('#blog-title').val();
		var desc = $('#blog-value').val();

		Meteor.call('updatePost', post._id, title, desc, function(error){
			if(error){
				alert(error);
			} else {
				console.log("awesome update u guys");
			}
		});
		$('#myModal').modal('hide');
	}
})