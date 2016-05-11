class CreateSteps < ActiveRecord::Migration
  def change
    create_table :steps do |t|
      t.string :title
      t.integer :lesson_id
      t.integer :step_number
      t.text :html
      t.text :css
      t.text :javascript
      t.text :instruction
      t.timestamps null: false
    end
  end
end
