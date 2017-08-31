class ContactsController < ApplicationController
  def index
    @contacts = Contact.all
    @prefix = "There are"
    @size = @contacts.size
  end

  def show
     @contact = Contact.find(params[:id])

  end

  def create
    @contact = Contact.new(contact_params)
    @contact.save
  end

  def destroy
    Contact.find(params[:id])
    @contact.destroy
  end

  private

  def contact_params
    params.require(:contact).permit(:first_name, :last_name, :email, :phone_number)
  end

end
