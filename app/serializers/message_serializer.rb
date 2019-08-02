class MessageSerializer < ActiveModel::Serializer
  attributes :id, :chat_id, :user_id, :text
end
