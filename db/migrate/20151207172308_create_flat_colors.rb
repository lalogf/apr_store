class CreateFlatColors < ActiveRecord::Migration
  def change
    create_table :flat_colors do |t|
      t.string :color_code

      t.timestamps null: false
    end
  end
end
