class ContactsController < ApplicationController
  def index
    @contacts = Contact.all
    @prefix = "There are"
    @size = @contacts.size
  end

  def show
     @contact = Contact.find(params[:id])

  end
end
