
def seed_public_team_member
  public_team = Team.where(name: 'Public').first
  User.all.to_a.each do |user|
    TeamMember.create({user: user, team: public_team})
  end
end

def seed_team_members
  puts 'Seed Team Members'
  TeamMember.create({user: User.first, team: Team.first})
  TeamMember.create({user: User.where(id: 2).first, team: Team.first})
  seed_public_team_member
end
