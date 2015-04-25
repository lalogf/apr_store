class Designer < ActiveRecord::Base
	has_many :designs
	
	validates :name,
	presence: { message: "Este campo no puede estar vacío"},
	format: {with: /\A[a-zA-Z+ñáéíóúÑ\s]+\z/ , message: "Este campo solo acepta letras", :allow_blank => true }
	
	validates :lastname, 
	presence: { message: "Este campo no puede estar vacío"}, 
	format: {with: /\A[a-zA-Z+ñáéíóúÑ\s]+\z/ , message: "Este campo solo acepta letras", :allow_blank => true }
end
