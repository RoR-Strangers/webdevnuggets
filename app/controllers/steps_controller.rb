class StepsController < ApplicationController
  include ApplicationHelper
  before_action :require_admin
  before_action :set_step, only: [:edit, :update, :destroy, :show]

  def index
    @steps = Step.all
  end

  def new
    @step = Step.new
  end

  def edit
  end

  def update
    if @step.update(step_params)
      flash[:success] = "Step was successfully updated"
      redirect_to step_path(@step)
    else
      render 'edit'
    end
  end

  def create
    @step = Step.new(step_params)
    if @step.save
      flash[:success] = "Step was successfully created"
      redirect_to lesson_path(@step.lesson)
    else
      render 'new'
    end
  end
  
  def show
    respond_to do |format|
      format.js { render :show_step }
    end
  end

  def destroy
    @step.destroy
    flash[:danger] = "Step was successfully deleted"
    redirect_to step_path
  end

  private

  def step_params
    params.require(:step).permit(:title, :lesson_id, :step_number, :html,
                                 :css, :javascript, :instruction)
  end

  def set_step
    @step = Step.find(params[:id])
  end

end
