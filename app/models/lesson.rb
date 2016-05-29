class Lesson < ActiveRecord::Base
  has_many :steps, dependent: :destroy
  validates :title, presence: true
  
  def last_step
    self.steps.order(:step_number).last
  end
end
