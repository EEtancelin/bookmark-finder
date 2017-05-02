# app/views/api/v1/restaurants/index.json.jbuilder
json.array! @bookmark_tags do |bookmark_tag|
  json.extract! bookmark_tag, :id, :uuid, :bookmark_id
end
