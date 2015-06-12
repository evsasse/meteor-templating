function toggleNavigation(){
  var current = Session.get('navigation-open') === true;
  Session.set('navigation-open',!current);

  if(!current)
    document.body.classList.add('navigation-open')
  else
    document.body.classList.remove('navigation-open')
}

Template.navigation.events({
  'click .toggle-navigation': function(event){
    toggleNavigation();
  }
})
