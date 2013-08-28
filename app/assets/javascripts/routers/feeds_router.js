NewsReader.Routers.FeedsRouter = Backbone.Router.extend({

	routes: {
		"": "index",
		"feeds/:id": "show"
	},

	index: function () {
		var that = this;

		var feedsIndexView = new NewsReader.Views.FeedsIndexView({
			//whatever I plan to pass to my index
		});

		// I know I'm going to need to render something to my $rootEl, which I need.
		// Render method is in the FeedsIndexView
	}

	show: function (id) {
		var that = this;

		var feedShowView = new NewsReader.Views.FeedShowView({
			//whatever I plan to pass to the show view
		});

		// I render here, like before.
	}

})