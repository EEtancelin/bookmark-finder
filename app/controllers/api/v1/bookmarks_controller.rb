# app/controllers/api/v1/bookmarks_controller.rb
class Api::V1::BookmarksController < Api::V1::BaseController

  before_action :set_bookmark, only: [ :show ]

  def index
    @bookmarks = policy_scope(Bookmark)
    @bookmarks = Bookmark.all
  end

  def show
    @bookmarks = policy_scope(Bookmark)
    @bookmarks = Bookmark.first
  end

  private
  def set_bookmark
    @bookmark = Bookmark.find(params[:id])
    authorize @bookmark  # For Pundit
  end
end
