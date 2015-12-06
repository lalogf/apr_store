class Designer < ActiveRecord::Base
	has_many :designs
	has_many :products, through: :designs

	extend FriendlyId
  	friendly_id :store_name, use: :slugged

	def store_name
		"#{name} #{lastname}"
	end  
	
	validates :name,
	presence: { message: "Este campo no puede estar vacío"},
	format: {with: /\A[a-zA-Z+ñáéíóúÑ\s]+\z/ , message: "Este campo solo acepta letras", :allow_blank => true }
	
	validates :lastname, 
	presence: { message: "Este campo no puede estar vacío"}, 
	format: {with: /\A[a-zA-Z+ñáéíóúÑ\s]+\z/ , message: "Este campo solo acepta letras", :allow_blank => true }

	has_attached_file :avatar, 
	:styles => { 
		:medium => "x600>", 
		:thumb => ["100x100>", :png],
		:thumbBox => ["250x250", :png],
		:croppable => '600x600', 
	}
	validates_attachment_content_type :avatar, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]
end
