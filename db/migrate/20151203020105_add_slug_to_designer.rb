class AddSlugToDesigner < ActiveRecord::Migration
  def change
    add_column :designers, :slug, :string
    add_index :designers, :slug, unique: true
  end
end
