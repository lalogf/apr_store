class Phonetype < ActiveRecord::Base
	has_many :products
	has_many :caseinventories
	has_many :customproducts
	has_many :picture_for_customs
	
end
