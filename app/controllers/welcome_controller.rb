class WelcomeController < ApplicationController
  
  def home
    @lessons = Lesson.all
  end
end
