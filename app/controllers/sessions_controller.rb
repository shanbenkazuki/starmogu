class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def create
    user = User.find_by(username: params[:user][:username])
  
    if user && user.authenticate(params[:user][:password])
      session[:user_id] = user.id
      render json: { status: 200 }
    else
      render json: { status: 404, error: "Invalid username or password" }, status: :not_found
    end
  end

  def destroy
    session[:user_id] = nil
    render json: { status: 200 }
  end
end