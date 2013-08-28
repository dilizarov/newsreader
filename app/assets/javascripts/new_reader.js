window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($rootEl) {
		var feeds = new NewsReader.Collections.Feeds();
		feeds.fetch({
			success: function(responseData) {
				new NewsReader.Routers.FeedsRouter($rootEl, responseData);
				Backbone.history.start();
			}
		});
  }
};

$(document).ready(function(){
	NewsReader.initialize($('.content'));
});
