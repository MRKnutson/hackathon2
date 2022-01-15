Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    post "users/image", to: "users#profile_image"
    resources :appointments
    get "appointments_byDate", to: "appointments#by_date"
    get "appointments_byLocation", to: "appointments#by_location"
    resources :locations
    get "distinct_locations", to: "locations#distinct"
  end
end
