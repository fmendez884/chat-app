class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.belongs_to :user, index: true
      t.belongs_to :chat, index: true
      t.string :text
      t.datetime :created_at

      t.timestamps
    end
  end
end
