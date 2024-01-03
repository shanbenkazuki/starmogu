Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "games#home"
  get "games/low" => "games#low"
  get "games/middle" => "games#middle"
  get "games/high" => "games#high"
end