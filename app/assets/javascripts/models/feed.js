NewsReader.Models.Feed = Backbone.Model.extend({

	parse: function(data) {
		var entries_collection = new NewsReader.Collections.Entries(data.entries)
		console.log(entries_collection)
		data.entries = entries_collection
		return data;
	},

	toJSON: function() {
		var json = Backbone.Model.prototype.toJSON.call(this);

		json.entries = this.attributes.entries.toJSON();

		return json;
	}
});