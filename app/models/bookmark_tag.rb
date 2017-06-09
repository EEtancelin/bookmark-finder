class BookmarkTag < ApplicationRecord
  belongs_to :bookmark
  belongs_to :tag

  attr_reader :tag_uuid

end
