class AddTermsToShipping < ActiveRecord::Migration
  def change
    add_column :shippings, :terms, :boolean
  end
end
