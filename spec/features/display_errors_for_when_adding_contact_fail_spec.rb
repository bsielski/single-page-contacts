require 'rails_helper'

RSpec.describe "Displaying errors", :type => :feature do

  it "displays errors when no input", js: true do
    visit '/'
    click_button "Add contact"
    expect(page).to have_content "First name can't be blank"
    expect(page).to have_content "Last name can't be blank"
    expect(page).to have_content "Email can't be blank"
    expect(page).to have_content "Phone number can't be blank"
  end

  it "displays errors when delete input", js: true do
    visit '/'
    fill_in "First name", with: ""
    fill_in "Last name", with: ""
    fill_in "Email", with: ""
    fill_in "Phone number", with: ""
    click_button "Add contact"
    expect(page).to have_content "First name can't be blank"
    expect(page).to have_content "Last name can't be blank"
    expect(page).to have_content "Email can't be blank"
    expect(page).to have_content "Phone number can't be blank"
  end

  it "displays errors for first name", js: true do
    visit '/'
    fill_in "First name", with: ""
    fill_in "Last name", with: "Something"
    fill_in "Email", with: "some@mail.com"
    fill_in "Phone number", with: "123 423 123"
    click_button "Add contact"
    expect(page).to have_content "First name can't be blank"
    expect(page).to_not have_content "Last name can't be blank"
    expect(page).to_not have_content "Email can't be blank"
    expect(page).to_not have_content "Phone number can't be blank"
  end

  xit "displays errors for multiple tries", js: true do
    visit '/'
    fill_in "First name", with: ""
    fill_in "Last name", with: "Something"
    fill_in "Email", with: "some@mail.com"
    fill_in "Phone number", with: "123 423 123"
    click_button "Add contact"

    expect(page).to have_content "First name can't be blank"
    expect(page).to_not have_content "Last name can't be blank"
    expect(page).to_not have_content "Email can't be blank"
    expect(page).to_not have_content "Phone number can't be blank"

    fill_in "First name", with: "SomeNotFakeName"
    fill_in "Last name", with: ""
    fill_in "Email", with: ""
    fill_in "Phone number", with: "123 423 123"
    click_button "Add contact"

    expect(page).to have_content "Last name can't be blank"
    expect(page).to have_content "Email can't be blank"
    expect(page).to_not have_content "First name can't be blank"
    expect(page).to_not have_content "Phone number can't be blank"
  end

  it "doesn't display errors when everything is OK", js: true do
    visit '/'
    fill_in "First name", with: "Somename"
    fill_in "Last name", with: "Something"
    fill_in "Email", with: "some@mail.com"
    fill_in "Phone number", with: "123 423 123"
    click_button "Add contact"
    expect(page).to_not have_content "First name can't be blank"
    expect(page).to_not have_content "Last name can't be blank"
    expect(page).to_not have_content "Email can't be blank"
    expect(page).to_not have_content "Phone number can't be blank"
  end

end
