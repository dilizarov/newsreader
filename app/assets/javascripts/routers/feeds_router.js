NewsReader.Routers.FeedsRouter = Backbone.Router.extend({

	initialize: function ($rootEl, feeds) {
		this.$rootEl = $rootEl;
		this.feeds = feeds;
	},

	routes: {
		"": "index",
		"feeds/:id": "show"
	},

	index: function () {
		var that = this;

		var feedsIndexView = new NewsReader.Views.FeedsIndexView({
			collection: that.feeds
		});

		that.$rootEl.html(feedsIndexView.render().$el);
	},

	show: function (id) {
		var that = this;
		var feed = this.feeds.get(id);

		debugger

		var feedShowView = new NewsReader.Views.FeedShowView({
			model: feed
		});

		that.$rootEl.html(feedShowView.render().$el);
	}

})