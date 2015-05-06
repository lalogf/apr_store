class CreateBanners < ActiveRecord::Migration
  def change
    create_table :banners do |t|
      t.string :caption
      t.string :type_of_banner

      t.timestamps null: false
    end
  end
end
