class AddActiveToBanner < ActiveRecord::Migration
  def change
    add_column :banners, :active, :boolean, :default => false
  end
end
