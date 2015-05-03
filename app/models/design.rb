class Design < ActiveRecord::Base
	belongs_to :designer
	belongs_to :collection
	has_many :products
	has_many :phonetypes, through: :products	


	has_attached_file :picture, 
	:styles => { 
			:medium => "x600>", 
			:thumb => ["100x100>", :png],
			:thumbBox => ["250x250", :png],
			:croppable => '600x600', 
		}
	# :default_url => "/assets/missing.png"
	validates_attachment_content_type :picture, :content_type => /\Aimage\/.*\Z/
	validates_with AttachmentSizeValidator, :attributes => :picture, :greater_than => 0.megabytes

	before_post_process :rename_picture
	
private
	def rename_picture
	    extension = File.extname(picture_file_name).downcase
	    self.picture.instance_write :file_name, "#{name}.png"
  	end
end
