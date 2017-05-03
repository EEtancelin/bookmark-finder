json.array! @bookmarks do |bookmark|
  json.extract! bookmark, :id
end
