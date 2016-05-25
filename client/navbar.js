Template.navbar.events({
	'click #logout': function(e){
		e.preventDefault();

		Meteor.logout(function(error){
			if(error){
				console.log(error);
			} else {
				FlowRouter.go('/')
			}
		});
	},
	'submit #blogPost': function(e){
		e.preventDefault();
		var inputVal = $('#blog-value').val();
		var inputTitle = $('#blog-title').val();

		Meteor.call('createPost', inputTitle, inputVal, Meteor.userId(), function(error){
			if(error){
				alert("There was an error: " + error);
			} else {
				$('#blog-value').val("");
				$('#blog-title').val("");
				FlowRouter.go("/");
			}
		});
		$('#myModal').modal('hide');
	}
});