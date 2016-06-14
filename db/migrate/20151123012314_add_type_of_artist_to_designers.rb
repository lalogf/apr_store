class AddTypeOfArtistToDesigners < ActiveRecord::Migration
  def change
    add_column :designers, :type_Of_Artist, :string
  end
end
