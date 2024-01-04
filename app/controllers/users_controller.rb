class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  def new
  end

  def create
    # ユーザ登録の処理を記述する
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      render json: { status: 200 }
    else
      render json: { status: 500 }
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
