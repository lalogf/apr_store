class AddUuidToCharges < ActiveRecord::Migration
  def change
    add_column :charges, :uuid, :string
  end
end
