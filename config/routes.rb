Rails.application.routes.draw do
  resources :users, only: [:new, :create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "games#home"
  get "games/low" => "games#low"
  get "games/middle" => "games#middle"
  get "games/high" => "games#high"
  get "login" => "games#login_form"
  post 'login', to: 'sessions#create'
end