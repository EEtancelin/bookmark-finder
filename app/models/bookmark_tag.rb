class BookmarkTag < ApplicationRecord
  belongs_to :bookmark
  belongs_to :tag

  attr_reader :tag_uuid

  def initialize
    @tag_uuid = self.tag.uuid
  end

  def to_redux_hash
    attr = self.attributes
    attr["tag_uuid"] = self.tag.uuid
    return attr
  end
end
