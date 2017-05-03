class Api::V1::BookmarkTagsController < Api::V1::BaseController

  before_action :set_bookmark_tag, only: [ :show ]
  def index
    @bookmark_tags = policy_scope(BookmarkTag)
    @bookmark_tags = BookmarkTag.all
  end

  private
  def set_bookmark_tag
    @bookmark_tag = BookmarkTag.find(params[:id])
    authorize @bookmark_tag  # For Pundit
  end
end
