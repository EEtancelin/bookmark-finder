class Tag < ApplicationRecord
  validates :title, uniqueness: true
  before_save { |tag| tag.title = tag.title.downcase }
end
