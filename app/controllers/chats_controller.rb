class ChatsController < ApplicationController
  
  def index
    chats = Chat.all 
    render json: chats
  end 

  def show 
    chat = Chat.find_by(id: params[:id])
    # render :json => chat.to_json(:include => { :messages => { :include => :user }})
    
    # json_data = render :json => chat.to_json(:include => { :messages => { :include => :user }})
    # serialized_data = ActiveModelSerializers::Adapter::Json.new(
    #   ChatSerializer.new(chat)
    # ).serializable_hash
    # render json: chat.to_json(:include => { :users => { :except => [:created_at, :updated_at]}, :messages => {}})
    
    render :json => chat.to_json(:include =>  { :messages => { :include => :user }})
    
    # ActionCable.server.broadcast 'chats_channel', json_data
    # # byebug
    #   head :ok


    # render :json => chat.to_json(:include => { :messages => { :include => :users => { :except => [:created_at, :updated_at]} }})
  end 

  def create 
    chat = Chat.create(chat_params)
    # byebug
    render :json => chat.to_json(:include => :messages)
  end 

  private 

  def chat_params
    params.require(:chat).permit(:name)
  end 

end