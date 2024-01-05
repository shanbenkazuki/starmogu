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

  def ranking
  end

  def fetch_ranking
    ranking = Score.includes(:user).where(level: 2).order(score: :desc).limit(10)
  
    ranking_data = ranking.map do |score|
      { username: score.user.username, score: score.score, level: "上級" }
    end
  
    render json: ranking_data
  end
end