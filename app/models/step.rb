class Step < ActiveRecord::Base
  belongs_to :lesson
  validates :title, presence: true
  validates :lesson_id, presence: true
  validates :step_number, presence: true
  validates :instruction, presence: true
end
