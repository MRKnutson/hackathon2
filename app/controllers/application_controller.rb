class ApplicationController < ActionController::API
        include DeviseTokenAuth::Concerns::SetUserByToken

        before_action :configure_permitted_parameters, if: :devise_controller?

        protected

        def configure_permitted_parameters
                puts "--------------------"
                puts "configure permitted parameters called"
                puts "--------------------"
                params = [:name, :nickname, :image]
                devise_parameter_sanitizer.permit(:sign_up, keys: params)
                devise_parameter_sanitizer.permit(:account_update, keys: params)
        end

end
