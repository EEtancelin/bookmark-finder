json.array! @bookmark_tags do |bookmark_tag|
  json.extract! bookmark_tag, :id, :uuid, :tag_id, :bookmark_id
end
