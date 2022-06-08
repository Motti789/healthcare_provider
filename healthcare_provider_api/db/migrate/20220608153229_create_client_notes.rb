class CreateClientNotes < ActiveRecord::Migration[7.0]
  def change
    create_table :client_notes do |t|
      t.text :notes
      t.integer :client_id

      t.timestamps
    end
  end
end
