class AddPhonetypeIdToPictureForCustom < ActiveRecord::Migration
	def self.up
		change_table :picture_for_customs do |t|
			t.references :phonetype, index: true
		end
	end
end
