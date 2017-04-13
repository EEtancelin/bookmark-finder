
class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home
    tag = {
      "1":{id:"1",title:"movie"},
      "2":{id:"2",title:"music"},
      "3":{id:"3",title:"theater"},
    }

    bookmark_tag = {
      "1":{tag:"1",bookmark:"2"},
      "2":{tag:"2",bookmark:"2"},
      "3":{tag:"3",bookmark:"1"},
      "4":{tag:"2",bookmark:"2"},
    }

    @hello_world_props = {
      bookmarksList: ["1","2"],
      bookmarks:{
        "1":{id:"1", title:"The Blog",url:"www.medium.com", date:"12-jan"},
        "2":{id:"2", title:"The Blog2",url:"www.medium2.com", date: "15-Août"}
      },
      tags: tag,
      bookmarkTag: bookmark_tag
    }

  end
end
