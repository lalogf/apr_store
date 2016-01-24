class CustomProduct < ActiveRecord::Base
  belongs_to :picture_for_custom


  	has_attached_file :picture, 
	:styles => { 
		:medium => "x600>", 
		:thumb => ["100x100>", :png],
		:thumbBox => ["250x250", :png],
		:croppable => '600x600' 
	},	
		:storage => :s3,
		:bucket  => ENV['S3_BUCKET_NAME']

	validates_attachment_content_type :picture, :content_type => /\Aimage\/.*\Z/

	attr_reader :picture_remote_url

		def picture_remote_url=(url_value)
		self.picture = URI.parse(url_value)
    # Assuming url_value is http://example.com/photos/face.png
    # avatar_file_name == "face.png"
    # avatar_content_type == "image/png"
    	@picture_remote_url = url_value
	end
end
