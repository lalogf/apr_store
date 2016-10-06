class Phonetype < ActiveRecord::Base
	has_many :products
	has_one :case_inventory
	has_many :custom_products
	has_many :picture_for_customs
	
end
