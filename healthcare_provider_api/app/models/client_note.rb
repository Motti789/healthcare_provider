class ClientNote < ApplicationRecord
    belongs_to :client

    validates :notes, presence: true
end


