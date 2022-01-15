# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "faker"

u1 = User.create(email:"test@test.com", password: 123456, name: Faker::Name.name)
 l = Location.create(
    name: Faker::TvShows::FamilyGuy.location,
    address: Faker::Address.street_address
  )
  5.times do
    Appointment.create(
    title: Faker::TvShows::GameOfThrones.house,
    description: Faker::Quote.yoda,
    session: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now),
    user_id: u1.id,
    location_id: l.id 
    )
  end

5.times do
  u = User.create(
    name: Faker::Name.first_name,
    email: Faker::Internet.unique.email, 
    password: Faker::Internet.password(min_length: 6),
  )
  l = Location.create(
    name: Faker::TvShows::FamilyGuy.location,
    address: Faker::Address.street_address
  )
  7.times do
    Appointment.create(
    title: Faker::TvShows::GameOfThrones.house,
    description: Faker::Quote.yoda,
    session: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now),
    user_id: u.id,
    location_id: l.id 
    )
  end
end