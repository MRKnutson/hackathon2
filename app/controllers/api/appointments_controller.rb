class Api::AppointmentsController < ApplicationController
    before_action :authenticate_user!
    before_action :set_recording

    def index
      render json: @appointment.all
    end
  
    # def show
    # end
  
    def create
    @appointment = current_user.recordings.new
    if @appointment.save
      render json: @appointment
    else 
      render json: {@appointment.error} status: 422
    end
  
    # def update
    # end
  
    # def destroy
    # end
  
    private
  
    def set_recording
      @appointment = current_user.appointments
    end
  
end
