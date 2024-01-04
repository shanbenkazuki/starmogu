class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def create
    # user = User.find_or_create_by(user_name: params[:username])
    # session[:user_id] = user.id
    # status 200を返す
    render json: { status: 200 }
  end
end