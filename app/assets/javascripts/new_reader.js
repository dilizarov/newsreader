window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($feedEl, $subEl) {
		var feeds = new NewsReader.Collections.Feeds();
		feeds.fetch({
			success: function(responseData) {
				new NewsReader.Routers.FeedsRouter($feedEl, $subEl, responseData);
				Backbone.history.start();
			}
		});
  }
};

$(document).ready(function(){
	NewsReader.initialize($('.feeds'), $('.feedEntries'));
});
