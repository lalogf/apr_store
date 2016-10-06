require 'open-uri' 
class PictureForCustom < ActiveRecord::Base
  belongs_to :user
  belongs_to :phonetype
  belongs_to :order
  has_one :custom_product 


  attr_reader :picture_remote_url
  has_attached_file :picture, 
  :styles => { 
  	:medium => "x600>", 
  	:thumb => ["100x100>", :png],
  	:thumbBox => ["250x250", :png],
  	:croppable => '600x600', 
  },
    :storage => :s3,
    :bucket  => ENV['S3_BUCKET_NAME']
	validates_attachment_content_type :picture, :content_type => /\Aimage\/.*\Z/
	validates_with AttachmentSizeValidator, :attributes => :picture, :greater_than => 0.megabytes

	def picture_from_url(url)
		self.picture = open(url)
  end
  def to_param
   uuid
 end
end
