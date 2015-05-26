Template.nav.helpers({
	open: function(){
		if(Session.get('navOpen') === true)
			return 'open';
	}
});
