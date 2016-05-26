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
