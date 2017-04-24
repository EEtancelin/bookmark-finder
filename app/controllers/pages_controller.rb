
class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home

    if current_user
    user = {  userEmail: current_user.email ,
              token: current_user.authentication_token
            }
    else
    user = {  userEmail: 'not loged',
              token:  'not loged'
            }
    end

    tag = {
      "1":{id:"1",title:"movie"},
      "2":{id:"2",title:"music"},
      "3":{id:"3",title:"theater"},
    }

    bookmark_tag = {
      "1":{id: "1", tag:"1",bookmark:"2"},
      "2":{id: "2",tag:"2",bookmark:"2"},
      "3":{id:"3",tag:"3",bookmark:"1"},
    }
    bookmarks = {
      "1":{id:"1", title:"The Blog",url:"www.medium.com", date:"12-jan",thumbnail:"https://lh3.googleusercontent.com/proxy/lSMyWvrS-uHJUFn9weB8zlgdz2_7mKlO1GsNPlm4VHC9Zf0uDEc-Z1cJ5BI1x-jjupIkf9IFWBEqunLFbKDRiC54GWAcyHbsYwlFbc9QtjTz-AU"},
      "2":{id:"2", title:"The Blog2",url:"www.medium2.com", date: "15-Août"}
    }
    searchedTags = []

    @hello_world_props = {
      entities: {
        bookmarks: bookmarks,
        tags: tag,
        bookmarkTag: bookmark_tag
      },
      ui:{
        searchedTags: searchedTags,
        searchBoxValue: ''
      },
      user: user
    }

  end
end
