class AddPriceToPhonetype < ActiveRecord::Migration
  def change
    add_column :phonetypes, :base_price, :integer
  end
end
