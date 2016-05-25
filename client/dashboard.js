Template.dashboard.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('posts');
	});
});

Template.dashboard.helpers({
	posts: function(){
		return Posts.find({}, {sort: {timestamp: '-1'}});
	}
});

Template.dashboard.events({
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
	}
})