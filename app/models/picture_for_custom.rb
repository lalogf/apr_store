require 'open-uri' 
class PictureForCustom < ActiveRecord::Base
  belongs_to :user


  attr_reader :picture_remote_url
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

	def picture_from_url(url)
		self.picture = open(url)
  	end
end
