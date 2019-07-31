class ChatsController < ApplicationController
  
  def index
    chats = Chat.all 
    render json: chats
  end 

  def show 
    chat = Chat.find_by(id: params[:id])
    # render json: chat.to_json(:include => { :users => { :except => [:created_at, :updated_at]}, :messages => {}})
    render :json => chat.to_json(:include => { :messages => { :include => :user }})
    # render :json => chat.to_json(:include => { :messages => { :include => :users => { :except => [:created_at, :updated_at]} }})
  end 

end