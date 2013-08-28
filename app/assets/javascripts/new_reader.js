window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($rootEl) {
		var feeds = new NewsReader.Collections.Feeds();
		feeds.fetch({
			success: function(responseData) {
				console.log(responseData.toJSON())
				console.log("Hi")
				console.log(responseData)
				new NewsReader.Routers.FeedsRouter($rootEl, feeds);
				Backbone.history.start();
			}
		});
  }
};

$(document).ready(function(){
	NewsReader.initialize($('.content'));
});
