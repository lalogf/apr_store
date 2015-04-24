class Collection < ActiveRecord::Base
	validates :name,
	format: {with: /\A[a-zA-Z+ñáéíóúÑ\s]+\z/ , message: "Este campo solo acepta letras" }, 
	presence: { message: "Nombre inválido"}
end
