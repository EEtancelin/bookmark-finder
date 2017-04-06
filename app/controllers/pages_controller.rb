class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home
    @hello_world_props = { name: "Stranger" }
  end
end
