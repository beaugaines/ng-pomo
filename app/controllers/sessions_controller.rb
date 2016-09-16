class SessionsController < ApplicationController
  # respond_to :json

  def create
    if current_user.sessions.create(session_params)
      head 200
    else
      head 400
    end
  end

  def count
    render json: current_user.sessions.today.count
  end

  private
  def session_params
    params.require(:session).permit(:category)
  end

end
