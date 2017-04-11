
class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home
    @hello_world_props = { bookmarks_list: ["1","2"],
    bookmarks:{ "1":{id:"1", title:"The Blog",url:"www.medium.com", date:"12-jan"},
      "2":{id:"2", title:"The Blog2",url:"www.medium2.com", date: "15-Août"} }}
  end
end
