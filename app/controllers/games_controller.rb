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
    ranking = Score.where(level: 2)
    .select('MAX(scores.score) as max_score, scores.user_id')
    .group(:user_id)
    .order('max_score DESC')
    .limit(10)
  
    ranking_data = ranking.map do |record|
      user = User.find(record.user_id)
      {
        username: user.username,
        score: record.max_score,
        level: "上級"
      }
    end
    
    render json: ranking_data
  end
end