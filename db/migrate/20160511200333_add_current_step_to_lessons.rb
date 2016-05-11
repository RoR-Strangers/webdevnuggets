class AddCurrentStepToLessons < ActiveRecord::Migration
  def change
    add_column :lessons, :current_step, :integer
  end
end
