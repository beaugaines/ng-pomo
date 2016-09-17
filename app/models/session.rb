class Session < ActiveRecord::Base
  belongs_to :user
  scope :today, -> { where('created_at >= ?', Time.current.beginning_of_day) }
  scope :order_created_at_desc, -> { order(created: :desc) }
end
