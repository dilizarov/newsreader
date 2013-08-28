NewsReader.Views.EntryShowView = Backbone.View.extend({

	//Views automatically has an initialize, so that when it is passed a model, it does what it has to do with the model.

	// initialize: function() {
	// 	this.listenTo(this.model, "change", this.render);
	// },
	//
	// events: {
	// 	"click input": "refresh"
	// },

	render: function () {
		var that = this;

		var renderedContent = JST['entry/show']({ entry: that.model });

		//that.$el is made for us.

		that.$el.html(renderedContent);
		return that;
	}


})