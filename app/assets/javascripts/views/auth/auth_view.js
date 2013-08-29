NewsReader.Views.AuthView = Backbone.View.extend({

	events: {
		"click #loginButton" : "login",
		"click #signUpButton" : "signup",
		"click #logout" : "logout"
	},

	logout: function() {
			var that = this;
			event.preventDefault();

			$.ajax({
				url: "/session",
				type: "DELETE",
				success: function (responseData) {
					window.currentUser.username = "";
					that.render();
				}
			});
	},

	login: function() {
			var that = this;
			event.preventDefault();

			var formData = $('#login').serializeJSON();

			$.ajax({
				url: "/session",
				type: "POST",
				data: formData,
				success: function (responseData) {
					$('.errors').empty();
					window.currentUser.username = responseData.username;
					that.render();
				},
				error: function (responseData) {
					if( $('.errors').html() === "" ) {
						$('.errors').append(responseData.responseText);
					}
				}
			});

		},

	signup: function() {
			var that = this;
			event.preventDefault();

			var formData = $('#login').serializeJSON();

			$('.errors').empty();

			$.ajax({
				url: "/users",
				type: "POST",
				data: formData,
				success: function (responseData) {
					window.currentUser.username = responseData.username;
					that.render();
				},
				error: function (responseData) {
					for (var i = 0, len = responseData.responseJSON.length; i < len; i++) {
						$('.errors').append(responseData.responseJSON[i]);
					}
				}
			});
	},

	render: function() {

		var that = this;

		if (window.currentUser.username === "" ) {
			var renderedContent = JST['auth/loginsignup'];
		} else {
			var renderedContent = JST['auth/logout'];
		}

		that.$el.html(renderedContent);
  	return that;

	}
})