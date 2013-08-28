class FeedsController < ApplicationController
  def index
    @feeds = Feed.all

    respond_to do |format|
      format.html { render :index }
      format.json { render 'index.rabl' }
    end
  end

  def create
    feed = Feed.find_or_create_by_url(params[:feed][:url])

    if feed
      render :json => feed
    else
      render :json => { error: "invalid url" }, status: :unprocessable_entity
    end
  end

  def show

    @feed = Feed.find_by_id(params[:id])
    @feed.reload

    render 'show.rabl'
  end

end
