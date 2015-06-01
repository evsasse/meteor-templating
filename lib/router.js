Router.configure({
	loadingTemplate: 'loadingLayout',
	notFoundTemplate: 'notFoundLayout'
});

Router.route('/', function(){
	this.layout('defaultLayout', {data:{title:'Home, sweet home'}});
	this.render('home');
})
