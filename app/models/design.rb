class Design < ActiveRecord::Base
	belongs_to :designer
	belongs_to :collection	


	has_attached_file :picture, 
	:styles => { 
			:medium => "x600>", 
			:thumb => "100x100>",
			:croppable => '600x600', 
		},
	:size => { :in => 0..10.kilobytes }
	# :default_url => "/assets/missing.png"
	validates_attachment_content_type :picture, :content_type => /\Aimage\/.*\Z/
	validates_with AttachmentSizeValidator, :attributes => :picture, :less_than => 1.megabytes
end
