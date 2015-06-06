Template.navigation.helpers({
  open: function(){
    if(Session.get('navigationOpen') === true)
      return 'open';
  }
})

Template.navigation.events({
  'click .toggleNavigation': function(event){
    var current = Session.get('navigationOpen') === true;
		Session.set('navigationOpen',!current);
  }
})
