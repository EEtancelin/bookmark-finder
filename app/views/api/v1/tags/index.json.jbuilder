json.array! @tags do |tag|
  json.extract! tag, :id, :uuid, :title
end
