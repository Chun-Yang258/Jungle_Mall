class SessionsController < ApplicationController
  def new
    puts flash[:alert]
  end

  def create
    user = User.find_by_email(params[:email])
    # If the user exists and the password is correct
    if user && user.authenticate(params[:password])
      # Save the user id inside browser cookie.
      # logged in when they navigate around website
      session[:user_id] = user.id
      redirect_to '/'
    else
      # If login doesn't work, send them back to login form
      flash[:errors] = "User does not exist. Please try again!"
      redirect_to '/authentication'
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to '/login'
  end
end
