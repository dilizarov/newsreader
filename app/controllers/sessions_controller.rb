class SessionsController < ApplicationController
  # before_filter :require_no_current_user!, :only => [:create, :new]
  # before_filter :require_current_user!, :only => [:destroy]

    def create

      user = User.find_by_credentials(
        params[:user][:username],
        params[:user][:password]
      )

      if user.nil?
        render :json => "Credentials were incorrect"
      else
        self.current_user = user
        render :json => user
      end
    end

    def destroy
      p current_user
      @current = current_user
      logout_current_user!
      render :json => @current, :status => 200
    end

    def new
    end

end
