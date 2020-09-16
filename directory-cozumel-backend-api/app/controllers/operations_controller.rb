class OperationsController < ApplicationController
  before_action :set_operation, only: [:show, :edit, :update, :destroy]


  def show
    operation = Operation.find_by_id(params['id'])
    render json: operation
  end

  # GET /operations/1/edit
  def edit
    operation = Operation.find(params['id'])
    render json: operation
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

  def destroy
    @operation.destroy
    response = {} 
    if operation.destroyed?
			response['msg'] = 'Operation Deleted!'
		else
			response['msg'] = 'Operation Failed to Delete!'
		end
		render json: response
  end

  def index_associated
		operations = Operation.where(business_id: params['business_id']).all
		render json: operations
  end
  
   def attributes
		columnsToExclude = ['id', 'created_at', 'updated_at']
		attributes = Operation.attribute_names - columnsToExclude
		render json: attributes
	end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_operation
      @operation = Operation.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def operation_params
      params.require(:operation).permit(:current_status, :opening_date, :occupancy_rate, :reservation_required, :business_hours, :notes, :user_updated)
    end
end
