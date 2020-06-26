class OperationsController < ApplicationController
  before_action :set_operation, only: [:show, :edit, :update, :destroy]


  # GET /operations/1
  def show
  end


  # GET /operations/1/edit
  def edit
  end

  # POST /operations
  def create
    @operation = Operation.new(operation_params)

    if @operation.save
      redirect_to @operation, notice: 'Operation was successfully created.'
    else
      render :new
    end
  end

  # PATCH/PUT /operations/1
  def update
    if @operation.update(operation_params)
      redirect_to @operation, notice: 'Operation was successfully updated.'
    else
      render :edit
    end
  end

  # DELETE /operations/1
  def destroy
    @operation.destroy
    redirect_to operations_url, notice: 'Operation was successfully destroyed.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_operation
      @operation = Operation.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def operation_params
      params.require(:operation).permit(:current_status, :boolean, :weekday_hours, :string, :weekend_hours, :opening_date, :date, :occupancy_rate, :integer, :reservation_required, :boolean, :notes, :string)
    end
end
