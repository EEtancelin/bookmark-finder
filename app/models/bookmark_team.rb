class BookmarkTeam < ApplicationRecord
  belongs_to :bookmark , dependent: :destroy
  belongs_to :team
end
