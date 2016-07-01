class UserMailer < ActionMailer::Base
  default from: 'Lalo de ArteAparte <lalo@arteaparte.pe>'
 
  def purchase_confirmation(user, product)
    @user = user
    @product = product
    mail(to: @user.email, subject: 'Mira el case que creaste')
  end

    def success_payment(user, products)
	    @user = user
	    @order = products
	    mail(to: @user.email, subject: 'Gracias por comprar en ArteAparte - ')
  	end
end
