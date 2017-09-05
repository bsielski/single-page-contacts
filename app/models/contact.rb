class Contact < ApplicationRecord

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true
  validates :phone_number, presence: true

  def self.search(phrase)
    phrase = "%" + phrase + "%"
    self.where("first_name LIKE ?", phrase)
    .or(self.where("last_name LIKE ?", phrase))
    .or(self.where("email LIKE ?", phrase))
    .or(self.where("phone_number LIKE ?", phrase))
  end
end
