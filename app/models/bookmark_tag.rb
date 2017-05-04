class BookmarkTag < ApplicationRecord
  belongs_to :bookmark
  belongs_to :tag

  attr_reader :tag_uuid

  def initialize
    @tag_uuid = self.tag.uuid
  end

  def to_redux_hash
    attr = self.attributes.to_h
    attr["id"] = attr["id"].to_s
    attr["bookmark_id"] = attr["bookmark_id"].to_s
    attr["tag_id"] = attr["tag_id"].to_s
    return attr
  end
end
