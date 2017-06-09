class TeamMember < ApplicationRecord
  belongs_to :team
  belongs_to :user

  def to_redux_hash
    attr = self.attributes.to_h
    attr["id"] = attr["id"].to_s
    attr["user_id"] = attr["user_id"].to_s
    attr["team_id"] = attr["team_id"].to_s
    return attr
  end
end
