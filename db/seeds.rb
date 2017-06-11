# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first

require_relative 'tags_seeds'
require_relative 'teams_seeds'
require_relative 'users_seeds'
require_relative 'bookmarks_seeds'
require_relative 'bookmarks_tags_seeds'
require_relative 'team_members_seeds'
require_relative 'bookmark_teams_seeds'
require_relative './seeds/destroy_seeds.rb'

#Destroy
destroy_entities

#Seeds
seed_teams
seed_tags
seed_users
seed_bookmarks
seed_bookmarks_tags
seed_team_members
seed_bookmark_team
