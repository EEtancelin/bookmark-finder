def seed_team_members
  TeamMember.create({user: User.first, team: Team.first})
end
