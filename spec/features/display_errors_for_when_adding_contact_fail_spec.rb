require 'rails_helper'

RSpec.describe "Displaying errors", :type => :feature do

  it "displays that first name can't be blank", js: true do
    visit '/'
    fill_in "First name", with: ""
    click_button "Add contact"
    expect(page).to have_content "First name can't be blank"
  end

  it "doesn't display that first name can't be blank", js: true do
    visit '/'
    fill_in "First name", with: "Something"
    click_button "Add contact"
    expect(page).to_not have_content "First name can't be blank"
  end

  it "displays that last name can't be blank", js: true do
    visit '/'
    fill_in "Last name", with: ""
    click_button "Add contact"
    expect(page).to have_content "Last name can't be blank"
  end

  it "doesn't display that last name can't be blank", js: true do
    visit '/'
    fill_in "Last name", with: "Something"
    click_button "Add contact"
    expect(page).to_not have_content "Last name can't be blank"
  end

  it "displays that email can't be blank", js: true do
    visit '/'
    fill_in "Email", with: ""
    click_button "Add contact"
    expect(page).to have_content "Email can't be blank"
  end

  it "doesn't display that email can't be blank", js: true do
    visit '/'
    fill_in "Email", with: "some@email.com"
    click_button "Add contact"
    expect(page).to_not have_content "Email can't be blank"
  end

  it "displays that phone number can't be blank", js: true do
    visit '/'
    fill_in "Phone number", with: ""
    click_button "Add contact"
    expect(page).to have_content "Phone number can't be blank"
  end

  it "doesn't display that phone number can't be blank", js: true do
    visit '/'
    fill_in "Phone number", with: "555 333 222"
    click_button "Add contact"
    expect(page).to_not have_content "Phone number can't be blank"
  end

end
