Rails.application.routes.draw do
  mount ForestLiana::Engine => '/forest'
  devise_for :users,
    controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :tags, only: [ :index , :show ]
      resources :bookmarks, only: [ :index , :show, :update, :create , :destroy ]
      resources :bookmark_tags, only: [ :index, :show, :destroy, :create ]
    end
  end
end
