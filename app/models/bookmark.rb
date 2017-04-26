class Bookmark < ApplicationRecord
  belongs_to :user
  has_many :BookmarkTag
  has_many :tag, through: :BookmarkTag
end
