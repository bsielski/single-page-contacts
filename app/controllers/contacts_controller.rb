class ContactsController < ApplicationController
  def index
    if params[:search]
      @contacts = Contact.search(params[:search])
      render json: @contacts.reverse
    else
      @contacts = Contact.all.reverse
    end
    @prefix = "There are"

  end

  def show
     @contact = Contact.find(params[:id])
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      render json: Contact.all.reverse
    else
      render json: { errors: @contact.errors.full_messages }, status: 422
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
