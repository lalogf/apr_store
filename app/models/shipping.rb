class Shipping < ActiveRecord::Base
  belongs_to :order

  validates :district, :province, :department, :country, presence: true

  validates :address, 
	presence: { message: "Incluir dirección"}
  validates :phone, 
	presence: { message: "Incluir celular"}

end
