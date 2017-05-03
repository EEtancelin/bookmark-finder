class Api::V1::BookmarkTagsController < Api::V1::BaseController
  acts_as_token_authentication_handler_for User, except: [ :index, :show ]
  before_action :set_bookmark_tag, only: [ :show, :destroy  ]

  def index
    @bookmark_tags = policy_scope(BookmarkTag)
    @bookmark_tags = BookmarkTag.all
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
end
