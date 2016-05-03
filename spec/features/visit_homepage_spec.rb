require 'spec_helper'

describe "Visit Homepage" do
  it "goes to homepage" do
    visit '/'
    expect(page).to have_content('welcome')
  end
end
