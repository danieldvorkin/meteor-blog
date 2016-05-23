FlowRouter.route('/register', {
    action: function(params, queryParams) {
    	BlazeLayout.render('registerLayout')
    }
});

FlowRouter.route('/', {
	action: function(params, queryParams){
		BlazeLayout.render('dashboard')
	}
});