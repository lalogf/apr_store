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

    # def admin_success_payment(user,products)
    #   @user = user
    #   @order = products
    #   mail(to: "lalo@soulutions.com.pe", subject:'Nuevo case para'+ @order.picture_for_custom.phonetype.modelName + @order.picture_for_custom.phonetype.type_of_case +' en ArteAparte')
    # end
end
