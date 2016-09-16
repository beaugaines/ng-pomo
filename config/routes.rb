Rails.application.routes.draw do
  resources :users, only: :show
  resources :sessions, only: :create

  get 'sessions/count', to: 'sessions#count'

  devise_for :users
  root 'dashboards#show'
end
