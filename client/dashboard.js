Template.dashboard.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('posts');
    self.subscribe('users');
	});
});

Template.dashboard.helpers({
	posts: function(){
		return Posts.find({}, {sort: {timestamp: '-1'}});
	},
  users: function(){
    return Meteor.users.find({})
  }
});


Template.dashboard.events({
	'submit #newPost': function(e){
		e.preventDefault();
		var inputVal = $('#newBlog-value').val();
		var inputTitle = $('#newBlog-title').val();
		var userId = Meteor.userId();

		Meteor.call('createPost', inputTitle, inputVal, userId, function(error){
			if(error){
				alert("There was an error: " + error);
			} else {
				$('#blog-value').val("");
				$('#blog-title').val("");
				FlowRouter.go("/");
			}
		});
		$('#newBlog-value').val("");
		$('#newBlog-title').val("");
	}
});