Router.configure({
	loadingTemplate: 'loadingLayout',
	notFoundTemplate: 'notFoundLayout'
});

Router.route('/', function(){
	this.layout('defaultLayout');
})
