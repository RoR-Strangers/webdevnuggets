class Lesson < ActiveRecord::Base
  has_many :steps
  validates :title, presence: true
  
  def step
    self.steps.find_by(step_number: self.current_step)
  end
  
end
