class ContactsController < ApplicationController
  def index
    puts
    puts params.inspect
    puts
    @contacts = Contact.all.reverse
    @prefix = "There are"
    @size = @contacts.size
  end

  def show
    puts
    puts params.inspect
    puts
     @contact = Contact.find(params[:id])
  end

  def create
    puts
    puts params.inspect
    puts
    @contact = Contact.new(contact_params)
    if @contact.save
      render json: Contact.all.reverse
    else
      render json: @contact.errors, status: 422
    end
  end

  def destroy
    @contact = Contact.find(params[:id])
    if @contact.destroy
      render json: Contact.all.reverse
    else
      render json: @contact.errors, status: 422
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:first_name, :last_name, :email, :phone_number)
  end

end
