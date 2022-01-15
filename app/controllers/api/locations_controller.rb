class Api::LocationsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_location, only: [:show, :destroy, :update]

  def index
    render json: Location.all
  end

  def show
    render json: @location
  end

  def create
    @location = current_user.locations.new(location_params)
    if @location.save
      render json: @location
    else
      render json: {error: @location.errors}, status: 422
    end
  end

  def update
    if @location.update(location_params)
      render json: @location
    else
      render json: {error: @location.errors}, status: 422
    end
  end

  def destroy 
    render json: @location.destroy
  end

  private

  def set_location
    @location = current_user.locations.find(params[:id])
  end

  def location_params
    params.require(:location).permit(:name, :address)
  end

end
