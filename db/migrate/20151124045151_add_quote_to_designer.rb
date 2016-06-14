class AddQuoteToDesigner < ActiveRecord::Migration
  def change
    add_column :designers, :quote, :text
  end
end
