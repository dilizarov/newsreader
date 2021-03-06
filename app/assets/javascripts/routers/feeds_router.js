NewsReader.Routers.FeedsRouter = Backbone.Router.extend({

	initialize: function ($rootEl, $subEl, feeds) {
		this.$rootEl = $rootEl;
		this.$subEl = $subEl;
		this.feeds = feeds;
		this.authView = new NewsReader.Views.AuthView();
		$('.loginInfo').html(this.authView.render().$el);
	},

	routes: {
		"": "index",
		"feeds/:id": "show",
		"feeds/:feed_id/entries/:id": "showEntry"
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

		var feedShowView = new NewsReader.Views.FeedShowView({
			model: feed
		});

		that.index();
		that.$subEl.html(feedShowView.render().$el);
	},

	showEntry: function (feed_id, id) {
		var that = this;

		var feed = this.feeds.get(feed_id);
		var entry = feed.get('entries').get(id);

		var entryShowView = new NewsReader.Views.EntryShowView({
			model: entry
		});

		that.index();
		that.$subEl.html(entryShowView.render().$el);

	}

})