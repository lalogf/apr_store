class AddCostToShipping < ActiveRecord::Migration
  def change
    add_column :shippings, :cost, :decimal
  end
end
