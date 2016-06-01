class PagesController < ApplicationController
  
  def home
    @lessons = Lesson.all
  end
  
  def about
  end
end
