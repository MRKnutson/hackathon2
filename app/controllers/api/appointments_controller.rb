class Api::AppointmentsController < ApplicationController
    # before_action :authenticate_user!

    def index
      render json: Appointment.all
    end
  
    # def show
    # end
  
    # def create
    # end
  
    # def update
    # end
  
    # def destroy
    # end
  
    private
  
    # some stuff here
  
end
