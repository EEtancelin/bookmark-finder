class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :omniauthable, omniauth_providers: [:facebook]
  acts_as_token_authenticatable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :bookmarks

  has_many :team_member
  has_many :teams , through: :team_member

  has_many :teams_bookmarks, through: :teams , source: :bookmarks

  has_many :bookmark_tags, through: :bookmarks
  has_many :teams_bookmark_tags, through: :teams_bookmarks , source: :bookmark_tags

  has_many :tags, through: :bookmark_tags
  has_many :teams_tags, through: :teams_bookmark_tags , source: :tag

  def user_and_teams_bookmarks
    self.teams_bookmarks + self.bookmarks
  end

  def user_and_teams_bookmark_tags
    user_bt = self.bookmark_tags
    team_bt = self.teams_bookmark_tags
    user_bt + team_bt
  end

  def user_and_teams_tags
    user_tags = self.tags
    teams_tags = self.teams_tags
    user_tags + teams_tags
  end

  #OmniAuth Faebook
  def self.find_for_facebook_oauth(auth)
    user_params = auth.slice(:provider, :uid)
    user_params.merge! auth.info.slice(:email, :first_name, :last_name)
    user_params[:facebook_picture_url] = auth.info.image
    user_params[:token] = auth.credentials.token
    user_params[:token_expiry] = Time.at(auth.credentials.expires_at)
    user_params = user_params.to_h

    user = User.find_by(provider: auth.provider, uid: auth.uid)
    user ||= User.find_by(email: auth.info.email) # User did a regular sign up in the past.
    if user
      user.update(user_params)
    else
      user = User.new(user_params)
      user.password = Devise.friendly_token[0,20]  # Fake password for validation
      user.save
    end

    return user
  end

end
