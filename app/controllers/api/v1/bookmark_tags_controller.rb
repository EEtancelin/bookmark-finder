class Api::V1::BookmarkTagsController < Api::V1::BaseController
  def index
    @bookmark_tags = policy_scope(BookmarkTag)
    @bookmark_tags = BookmarkTag.all
  end
end
