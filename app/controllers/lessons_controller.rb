class LessonsController < ApplicationController
  include ApplicationHelper
  before_action :require_admin, except: [:index, :show]
  before_action :set_lesson, only: [:edit, :update, :show, :destroy]

  def index
    @lessons = Lesson.all
  end

  def new
    @lesson = Lesson.new
  end

  def edit
  end

  def update
    if @lesson.update(lesson_params)
      flash[:success] = "Lesson was successfully updated"
      redirect_to lesson_path(@lesson)
    else
      render 'edit'
    end
  end

  def create
    @lesson = Lesson.new(lesson_params)
    if @lesson.save
      flash[:success] = "Lesson was successfully created"
      redirect_to lesson_path(@lesson)
    else
      render 'new'
    end
  end
  
  def show 
  end

  def destroy
    @lesson.destroy
    flash[:danger] = "Lesson was successfully deleted"
    redirect_to lessons_path
  end

  private

  def lesson_params
    params.require(:lesson).permit(:title, :current_step)
  end

  def set_lesson
    @lesson = Lesson.find(params[:id])
  end
end
