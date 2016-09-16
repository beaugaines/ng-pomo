class AddUserRefToSessions < ActiveRecord::Migration
  def change
    add_reference :sessions, :user, type: :uuid, null: false, index: true
  end
end
