require 'rails_helper'

RSpec.describe Contact, type: :model do

  it { should validate_presence_of(:first_name) }
  it { should validate_presence_of(:last_name) }
  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:phone_number) }

  describe "::search" do

    before(:context) do
      @c1 =  Contact.create! first_name: "Jo", last_name: "Smith", email: "jo.john@onet.com", phone_number: "997"
      @c2 =  Contact.create! first_name: "Jon", last_name: "Brown", email: "jon.bob@gmail.com", phone_number: "555 345 645"
      @c3 =  Contact.create! first_name: "Jonny", last_name: "Kowalski", email: "bob@gmail.com", phone_number: "555 444 567"
      @c4 =  Contact.create! first_name: "John", last_name: "Nowak", email: "john3@gmail.org", phone_number: "555 446 567"
      @c5 =  Contact.create! first_name: "John", last_name: "Wang", email: "john2@mail.org", phone_number: "555 444 543"
      @c6 =  Contact.create! first_name: "John", last_name: "Kim", email: "john@mail.org", phone_number: "555 234 777"
      @c7 =  Contact.create! first_name: "Alice", last_name: "Ivanov", email: "noideaforname@mail.pl", phone_number: "555 444 777"
      @c8 =  Contact.create! first_name: "Alice", last_name: "Hansen", email: "www@ambergold.pl", phone_number: "555 222 777"
      @c9 =  Contact.create! first_name: "Alice", last_name: "Muller", email: "asd@email.pl", phone_number: "555 444 777"
      @c10 = Contact.create! first_name: "Bob", last_name: "McDonald", email: "mcd@email.eu", phone_number: "112"
    end

    after(:context) do
      Contact.destroy_all
    end

    it "returns everything with 'bob' in it" do
      expect(Contact.search("bob")).to contain_exactly(@c2, @c3, @c10)
    end

  end

end
