class BookmarkTag < ApplicationRecord
  belongs_to :bookmark, dependent: :destroy
  belongs_to :tag

  attr_reader :tag_uuid

end
