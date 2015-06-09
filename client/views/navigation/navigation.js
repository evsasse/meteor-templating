Template.navigation.events({
  'click .toggle-navigation': function(event){
    var current = Session.get('navigation-open') === true;
		Session.set('navigation-open',!current);

    console.log(current);

    if(!current)
      document.body.classList.add('navigation-open')
    else
      document.body.classList.remove('navigation-open')
  }
})
