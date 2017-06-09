class Team < ApplicationRecord
  has_many :team_member
  has_many :user, through: :team_member

  def to_redux_hash
    attr = self.attributes.to_h
    attr["id"] = attr["id"].to_s
    return attr
  end
end
