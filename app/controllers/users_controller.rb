class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  def new
  end

  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      render json: { status: 200 }
    else
      render json: { status: 422, errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
