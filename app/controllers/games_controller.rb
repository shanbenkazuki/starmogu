class GamesController < ApplicationController

  def index

  end

  def home
    @is_login = false
    @username = nil
    if session[:user_id]
      @is_login = true
      @username = User.find(session[:user_id]).username
    end
  end
end