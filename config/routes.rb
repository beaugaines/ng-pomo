Rails.application.routes.draw do
  root 'dashboards#show'
  devise_for :users
  resources :sessions, only: :create
  get 'sessions/count', to: 'sessions#count'
  resources :users, only: :show
end
