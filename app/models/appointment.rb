class Appointment < ApplicationRecord
  belongs_to :user
  belongs_to :location

  # SELECT * FROM appointments
  # JOIN locations ON locations.id = appointments.location_id;
  def self.by_location
    select('*')
    .joins('JOIN locations ON locations.id = appointments.location_id')
  end
#   SELECT * FROM appointments
# WHERE appointments.user_id = 2 AND created_at <= timestamp '2022-01-14 22:22:05.653877';
# DateTime.now().setZone('America/New_York').minus({weeks:1}).endOf('day').toISO();
end
