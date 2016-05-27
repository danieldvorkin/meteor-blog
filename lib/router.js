FlowRouter.route('/register', {
    action: function(params, queryParams) {
    	BlazeLayout.render('register')
    }
});

FlowRouter.route('/', {
	action: function(params, queryParams){
		BlazeLayout.render('dashboard')
	}
});

FlowRouter.route('/login', {
	action: function(params, queryParams){
		BlazeLayout.render('login')
	}
});

FlowRouter.route('/profile', {
  action: function(params, queryParams){
    BlazeLayout.render('profile')
  }
});