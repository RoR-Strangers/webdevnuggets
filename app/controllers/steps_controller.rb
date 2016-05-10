class StepsController < ApplicationController
  before_action :require_admin
  before_action :set_step, only: [:edit, :update, :show, :destroy]

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
    @step = step.new(step_params)
    if @step.save
      flash[:success] = "Step was successfully created"
      redirect_to step_path(@step)
    else
      render 'new'
    end
  end

  def show
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
    @step = step.find(params[:id])
  end
end
