Template.navigation.events({
  'click .toggleNavigation': function(event){
    var current = Session.get('navigationOpen') === true;
		Session.set('navigationOpen',!current);

    if(!current)
      document.body.classList.add('navigationOpen')
    else
      document.body.classList.remove('navigationOpen')
  }
})
