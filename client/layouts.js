Template.defaultLayout.events({
	'click .toggleNav': function(event){
		var current = Session.get('navOpen') === true;
		Session.set('navOpen',!current);
	}
});
