class MessagesController < ApplicationController

  def create
    message = Message.create(message_params)
    # byebug
    render :json => message.to_json(:include => :user)

    # ActionCable.server.broadcast 'messages',
    #   message: message.text,
    #   user: message.user.name
    # head :ok

    # render :json => chat.to_json(:include => { :messages => { :include => :user }})
  end 

private 

  def message_params
    params.require(:message).permit(:user_id, :chat_id, :text)
  end 

end


# def create
#   message = Message.new(message_params)
#   message.user = current_user
#   if message.save
#     ActionCable.server.broadcast 'messages',
#       message: message.content,
#       user: message.user.username
#     head :ok
#   end
# end