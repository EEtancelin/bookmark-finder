class Api::V1::BookmarkTagsController < Api::V1::BaseController
  acts_as_token_authentication_handler_for User, except: [ :index, :show, :create ]
  before_action :set_bookmark_tag, only: [ :show, :destroy  ]

  def index
    @bookmark_tags = policy_scope(BookmarkTag)
    @bookmark_tags = BookmarkTag.all
  end

  def create
    @bookmark = Bookmark.find(bookmark_tag_params[:bookmark_id])
    @tag = Tag.find_or_create_by(title: bookmark_tag_params[:tag_title])
    @bookmark_tag = BookmarkTag.new(bookmark: @bookmark, tag: @tag)
    #@bookmark.user = current_user
    #authorize @bookmark
    if @bookmark_tag.save
      render :show, status: :created
    else
      render_error
    end
  end

  def destroy
    @bookmark_tag.destroy
    head :no_content
    # No need to create a `destroy.json.jbuilder` view
  end

  private

  def set_bookmark_tag
    @bookmark_tag = BookmarkTag.find(params[:id])
    authorize @bookmark_tag  # For Pundit
  end

  def bookmark_tag_params
    params.require(:bookmark_tag).permit(:bookmark_id, :tag_title)
  end

end
