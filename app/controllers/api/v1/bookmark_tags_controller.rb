class Api::V1::BookmarkTagsController < Api::V1::BaseController
  def index
    @bookmark_tags =  policy_scope(BookmarkTag)
  end
end
