# frozen_string_literal: true

class User < ActiveRecord::Base
  extend Devise::Models
  has_many :appointments, dependent: :destroy
  has_many :locations, through: :appointments

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User
end
