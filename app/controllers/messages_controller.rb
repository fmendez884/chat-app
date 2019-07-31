class MessagesController < ApplicationController

  def create
    message = Message.create(message_params)
    # byebug
    render :json => message.to_json(:include => :user)
    # render :json => chat.to_json(:include => { :messages => { :include => :user }})
  end 

private 

  def message_params
    params.require(:message).permit(:user_id, :chat_id, :text)
  end 

end
