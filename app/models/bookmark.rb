class Bookmark < ApplicationRecord
  belongs_to :user
  has_many :bookmarkTag
  has_many :tags, through: :bookmarkTag


  def to_redux_hash
    attr = self.attributes.to_h
    attr["id"] = attr["id"].to_s
    attr["user_id"] = attr["user_id"].to_s
    return attr
  end
end
