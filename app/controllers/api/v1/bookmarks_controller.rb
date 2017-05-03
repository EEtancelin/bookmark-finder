# app/controllers/api/v1/bookmarks_controller.rb
class Api::V1::BookmarksController < Api::V1::BaseController
  acts_as_token_authentication_handler_for User, except: [ :index, :show ]
  before_action :set_bookmark, only: [ :show, :update]

  def index
    @bookmarks = policy_scope(Bookmark)
    @bookmarks = Bookmark.all
  end

  def show
    @bookmarks = policy_scope(Bookmark)
  end

  def create
    binding.pry
    @bookmark = Bookmark.new(bookmark_params)
    @bookmark.user = current_user
    authorize @bookmark
    binding.pry
    if @bookmark.save
      render :show, status: :created
    else
      render_error
    end
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
