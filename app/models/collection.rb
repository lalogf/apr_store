class Collection < ActiveRecord::Base
	validates :name,
	presence: { message: "El campo no puede estar vacío"},
	format: {with: /\A[a-zA-Z+ñáéíóúÑ0-9\s]+\z/ , message: "Este campo solo acepta letras", :allow_blank => true  } 
	
end
