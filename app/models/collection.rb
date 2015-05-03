class Collection < ActiveRecord::Base
	has_many :designs
	has_many :products, through: :designs
	validates :name,
	presence: { message: "El campo no puede estar vacío"},
	format: {with: /\A[a-zA-Z+ñáéíóúÑ0-9\s]+\z/ , message: "Este campo solo acepta letras y números", :allow_blank => true  } 
	
end
