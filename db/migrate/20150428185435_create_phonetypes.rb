class CreatePhonetypes < ActiveRecord::Migration
  def change
    create_table :phonetypes do |t|
      t.string :modelName
      t.string :type_of_case
      t.timestamps null: false
    end
  end
end
