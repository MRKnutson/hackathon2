class Appointment < ApplicationRecord
  belongs_to :user
  belongs_to :location

#   SELECT l.id AS locations_id, appointments.id AS a_id, * FROM appointments
# JOIN locations AS l ON l.id = appointments.location_id;
#  this is giving back a weird ID
  def self.by_location
    select('l.id AS locations_id, appointments.id AS a_id, *')
    .joins('JOIN locations AS l ON l.id = appointments.location_id')
    .order('session')
  end

  def self.distinct_locations(id)
    select('DISTINCT locations.name, locations.address, locations.id').joins('INNER JOIN users ON users.id = appointments.user_id 
    INNER JOIN locations ON appointments.location_id = locations.id').where("users.id = #{id}")
  end
end
