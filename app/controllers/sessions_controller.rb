class SessionsController < ApplicationController

  def index
    render json: current_user.sessions.today.limit(6)
  end

  def create
    if current_user.sessions.create(session_params)
      head 200
    else
      head 400
    end
  end

  private
  def session_params
    params.require(:session).permit(:category, :description)
  end

end
