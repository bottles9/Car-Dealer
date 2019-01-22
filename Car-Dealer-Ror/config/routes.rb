Rails.application.routes.draw do
  
  # Set Views/Home/index is the main page
  root 'home#index'
  get 'home/index', to: 'home#index'
  
  get 'home/about'
  get 'home/contact'
  get 'home/faq'
end
