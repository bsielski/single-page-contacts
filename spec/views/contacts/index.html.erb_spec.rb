require 'rails_helper'

RSpec.describe "contacts/index.html.erb", type: :view do
  it "displays the submit button with proper name" do
    render
    expect(rendered).to have_css("input[type=submit][value='Add contact']")
  end

  it "displays the search input" do
    render
    expect(rendered).to have_css("input[type=search]")
  end

  it "displays the search button with proper name" do
    render
    expect(rendered).to have_css("input[type=submit][value='Search']")
  end

end
