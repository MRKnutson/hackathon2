class Api::AppointmentsController < ApplicationController
    before_action :authenticate_user!
    before_action :set_appointment

    def index
      render json: @appointment.by_location
    end
  
    # def show
    # end
  
    def create
        @appointment = current_user.appointment.new
        if @appointment.save
          render json: @appointment
        else 
          # render json: { @appointment.error } status: 422
        end
    end
  
    def update
        if @appointment.update
          render json: @appointment
        else
          render json: { errors: @appointment.errors }, status: 422
        end
    end
  
    def destroy
      render json: @appointment.find(params[:id]).destroy
    end
  
    private
  
    def set_appointment
      @appointment = current_user.appointments
    end
  
end
