class Product < ActiveRecord::Base
	belongs_to :design
	belongs_to :phonetype

	has_attached_file :picture, 
	:styles => { 
		:medium => "x600>", 
		:thumb => ["100x100>", :png],
		:thumbBox => ["250x250", :png],
		:croppable => '600x600' 
	}

	validates_attachment_content_type :picture, :content_type => /\Aimage\/.*\Z/
	# validates_with AttachmentSizeValidator, :attributes => :picture, :greater_than => 0.megabytes

	validates :upc, 
	presence: { message: "Este campo no puede estar vacío"},
	uniqueness: {message: "Este campo no puede ser repetido"}

	validates :price, 
	presence: { message: "Este campo no puede estar vacío"}

	validates :stock,
	presence: { message: "Este campo no puede estar vacío"}

end
