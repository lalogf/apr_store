class AddPrincipalToBanner < ActiveRecord::Migration
  def change
    add_column :banners, :principal, :boolean, :default => false
  end
end
