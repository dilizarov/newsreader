collection @feeds
attributes :title, :url, :id

child(:entries) do
  attribute :guid, :link, :published_at, :title, :json, :feed_id
end
