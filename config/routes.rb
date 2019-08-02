Rails.application.routes.draw do

  mount ActionCable.server => '/cable'

  resources :chats, only: [:index, :show, :create]
  resources :messages, only: [:create]
  resources :users, only: [:index, :create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
