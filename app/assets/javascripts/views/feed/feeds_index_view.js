NewsReader.Views.FeedsIndexView = Backbone.View.extend({

	//Views automatically has an initialize, so that when it is passed a collection, it does what it has to do with the collection.

	render: function () {
		var that = this;

		var renderedContent = JST['feed/index']({ feeds: that.collection });

		//that.$el is made for us.

		that.$el.html(renderedContent);
		return that;
	}
})