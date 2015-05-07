class AddPrincipalToBanner < ActiveRecord::Migration
  def change
    add_column :banners, :principal, :boolean
  end
end
