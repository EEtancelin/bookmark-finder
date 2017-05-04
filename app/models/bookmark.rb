class Bookmark < ApplicationRecord
  belongs_to :user
  has_many :BookmarkTag
  has_many :tag, through: :BookmarkTag


  def to_redux_hash
    attr = self.attributes.to_h
    attr["id"] = attr["id"].to_s
    attr["user_id"] = attr["user_id"].to_s
    return attr
  end
end
