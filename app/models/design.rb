require 'open-uri' 
class Design < ActiveRecord::Base
	belongs_to :designer
	belongs_to :collection
	has_many :products
	has_many :phonetypes, through: :products	

	# attr_reader :picture_remote_url
	has_attached_file :picture, 
	:styles => { 
			:medium => "x600>", 
			:thumb => ["100x100>", :png],
			:thumbBox => ["250x250", :png],
			:croppable => '600x600', 
		},
		:storage => :s3,
		:bucket  => ENV['S3_BUCKET_NAME']
	# :default_url => "/assets/missing.png"
	validates_attachment_content_type :picture, :content_type => /\Aimage\/.*\Z/
	validates_with AttachmentSizeValidator, :attributes => :picture, :greater_than => 0.megabytes

	before_post_process :rename_picture

	 def picture_from_url(url)
    	self.picture = open(url)
  	end

	# def picture_remote_url=(url_value)
	# 	self.picture = URI.parse(url_value)
 #    # Assuming url_value is http://example.com/photos/face.png
 #    # avatar_file_name == "face.png"
 #    # avatar_content_type == "image/png"
 #    	@picture_remote_url = url_value
	# end
	
private
	def rename_picture
	    extension = File.extname(picture_file_name).downcase
	    self.picture.instance_write :file_name, "#{name.split(" ").join("_")}.png"
  	end
end
