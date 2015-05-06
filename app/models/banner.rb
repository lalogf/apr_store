class Banner < ActiveRecord::Base
	validates :caption,
	presence: { message: "El campo no puede estar vacío"}

	validates :type_of_banner,
	presence: { message: "El campo no puede estar vacío"}
	
	has_attached_file :image, 
	:styles => {  
			:thumb => ["100x100>", :png],
		}
	validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
	validates_with AttachmentSizeValidator, :attributes => :image, :greater_than => 0.megabytes

	before_post_process :rename_banner
	
	validates :image,
	presence: {message: "El campo no puede estar vacío"}	
private
	def rename_banner
	    extension = File.extname(image_file_name).downcase
	    self.image.instance_write :file_name, "#{caption.split(" ").join("_")}.png"
  	end
end
