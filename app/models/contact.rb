class Contact < ApplicationRecord

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true
  validates :phone_number, presence: true

  def self.search(phrase)
    phrase = "%" + phrase.downcase + "%"
    self.where("LOWER(first_name) LIKE ?", phrase)
    .or(self.where("LOWER(last_name) LIKE ?", phrase))
    .or(self.where("LOWER(email) LIKE ?", phrase))
    .or(self.where("LOWER(phone_number) LIKE ?", phrase))
  end
end
