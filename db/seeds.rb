# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user1 = User.create(name: "Jello")
user2 = User.create(name: "Biafra")

chat1 = Chat.create(name: "DK CHAT")
chat2 = Chat.create(name: "BLACK FLAG CHAT")

message1 = Message.create({user_id: 1, chat_id: 1, text: "sup"})
message2 = Message.create({user_id: 2, chat_id: 1, text:"yeerrrrr"})
message3 = Message.create({user_id: 1, chat_id: 2, text: "wow"})