Template.index.events({
	'click #logout': function(e){
		e.preventDefault();

		Meteor.logout(function(error){
			if(error){
				console.log(error);
			} else {
				FlowRouter.go('/')
			}
		});
	}
});