class Bookmark < ApplicationRecord
  belongs_to :user
  has_many :bookmarkTag
  has_many :tags, through: :bookmarkTag

end
