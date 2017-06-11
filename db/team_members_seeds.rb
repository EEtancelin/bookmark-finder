def seed_team_members
  TeamMember.create({user: User.first, team: Team.first})
  TeamMember.create({user: User.where(id: 2).first, team: Team.first})

end
