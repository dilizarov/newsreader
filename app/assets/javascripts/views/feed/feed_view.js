NewsReader.Views.FeedShowView = Backbone.View.extend({

	//Views automatically has an initialize, so that when it is passed a model, it does what it has to do with the model.

	render: function () {
		var that = this;

		var renderedContent = JST['feed/show']({ feed: that.model });

		//that.$el is made for us.

		that.$el.html(renderedContent);
		return that;
	}
})