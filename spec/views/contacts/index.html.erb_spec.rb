require 'rails_helper'

RSpec.describe "contacts/index.html.erb", type: :view do
  it "displays the submit button with proper name" do
    render
    expect(rendered).to have_css("input[type=submit]", text: "Add contact")
  end
end
