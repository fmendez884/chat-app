class UsersController < ApplicationController

  def index
    users = User.all 
    render json: users
  end 

  def create
    checkUser = User.find_by(name: user_params["name"])
    # byebug
    if checkUser
      render :json => checkUser.to_json()
    else 
      newUser = User.create(name: user_params["name"])
      render :json => newUser.to_json()
    end
    # render :json => chat.to_json(:include => { :users => { :include => :user }})
  end 

private 

  def user_params
    params.require(:user).permit(:name)
  end 


end
