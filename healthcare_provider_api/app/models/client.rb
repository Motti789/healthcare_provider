class Client < ApplicationRecord
    has_many :client_notes

    validates :name, :age, :birthdate, :caregiver_name, :caregiver_phone_number, :address, presence: true
end
