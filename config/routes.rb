Rails.application.routes.draw do
  mount ForestLiana::Engine => '/forest'
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :tags, only: [ :index , :show ]
      resources :bookmarks, only: [ :index , :show, :update ]
      resources :bookmark_tags, only: [ :index, :show ]
    end
  end
end
