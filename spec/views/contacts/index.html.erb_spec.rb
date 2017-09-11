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

  it "displays the clear search button with proper name" do
    render
    expect(rendered).to have_css("input[type=submit][value='Clear filter']")
  end

  it "displays the filter headerwith proper name" do
    render
    expect(rendered).to have_css("h1", text: "Filter contacts")
  end


end
