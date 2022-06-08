# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

client1 = Client.create(name: "Chorche", age: 30, birth_date: "10/5/1992", caregiver_name: "Sara", caregiver_phone_number: "773-456-9822", address: "6832 Pine Rd" )
client2 = Client.create(name: "Jack", age: 20, birth_date: "8/3/2002", caregiver_name: "Isabella", caregiver_phone_number: "985-665-2943", address: "335 Grand St")
client3 = Client.create(name: "John", age: 10, birth_date: "6/15/2012", caregiver_name: "Camila", caregiver_phone_number: "983-448-9567", address: "5982 Hibiscus Rd")




note1 = ClientNote.create(notes: "Client is active and enjoys mangos", client_id: 1)
note2 = ClientNote.create(notes: "Client has made alot of progreess with past caregiver", client_id: 2)
note3 = ClientNote.create(notes: "Client can be violent at times and needs to be taught how to control himself", client_id: 3)