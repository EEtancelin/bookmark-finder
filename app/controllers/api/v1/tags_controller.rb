# app/controllers/api/v1/restaurants_controller.rb
class Api::V1::TagsController < Api::V1::BaseController
  def index
    @tags = policy_scope(Tag)
    @tags = Tag.all
  end
end
