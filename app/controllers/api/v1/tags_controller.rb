# app/controllers/api/v1/tags_controller.rb
class Api::V1::TagsController < Api::V1::BaseController

  before_action :set_tag, only: [ :show ]

  def index
    @tags = policy_scope(Tag)
    @tags = Tag.all
  end

  def show
    @tags = policy_scope(Tag)
    @tags = Tag.first
  end

  private
  def set_tag
    @tag = Tag.find(params[:id])
    authorize @tag  # For Pundit
  end
end
