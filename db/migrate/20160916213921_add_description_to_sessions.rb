class AddDescriptionToSessions < ActiveRecord::Migration
  def change
    add_column :sessions, :description, :string, default: 'Worked on something...'
  end
end
