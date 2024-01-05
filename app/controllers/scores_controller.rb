class ScoresController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    if session[:user_id]
      # セッションからユーザーIDを取得
      user_id = session[:user_id]

      # user_idに紐づくユーザーを検索
      user = User.find_by(id: user_id)

      if user
        # 新しいスコアを作成し、ユーザーに紐づける
        score = user.scores.build(score_params)

        if score.save
          render json: { status: 200, message: "Score successfully saved." }
        else
          render json: { status: 422, errors: score.errors.full_messages }, status: :unprocessable_entity
        end
      else
        render json: { status: 404, error: "User not found" }, status: :not_found
      end
    else
      # render json: { status: 401, error: "Not authorized" }, status: :unauthorized
      render json: { status: 200, message: "スコア登録なし" }
    end
  end

  private

  def score_params
    params.require(:score).permit(:score, :level)
  end
end
