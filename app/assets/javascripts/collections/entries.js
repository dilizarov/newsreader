NewsReader.Collections.Entries = Backbone.Collection.extend({
	url: '/entries',
	model: NewsReader.Models.Entry
})