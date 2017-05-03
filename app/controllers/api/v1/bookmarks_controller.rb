# app/controllers/api/v1/bookmarks_controller.rb
class Api::V1::BookmarksController < Api::V1::BaseController

  before_action :set_bookmark, only: [ :show, :update]

  def index
    @bookmarks = policy_scope(Bookmark)
    @bookmarks = Bookmark.all
  end

  def show
    @bookmarks = policy_scope(Bookmark)
    @bookmarks = Bookmark.first
  end

  def update
    if @bookmark.update(bookmark_params)
      render :show
    else
      render_error
    end
  end

  private
  def set_bookmark
    @bookmark = Bookmark.find(params[:id])
    authorize @bookmark  # For Pundit
  end

  def bookmark_params
    params.require(:bookmark).permit(:title)
  end

  def render_error
    render json: { errors: @bookmark.errors.full_messages },
      status: :unprocessable_entity
  end
end
