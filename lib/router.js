FlowRouter.route('/register', {
    action: function(params, queryParams) {
    	BlazeLayout.render('registerLayout')
    }
});

FlowRouter.route('/', {
	action: function(params, queryParams){
		BlazeLayout.render('index')
	}
});

FlowRouter.route('/login', {
	action: function(params, queryParams){
		BlazeLayout.render('login')
	}
})