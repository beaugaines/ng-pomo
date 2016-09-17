Rails.application.routes.draw do
  root 'dashboards#show'
  devise_for :users
  resources :sessions, only: [:index, :create]
  resources :users, only: :show
end
