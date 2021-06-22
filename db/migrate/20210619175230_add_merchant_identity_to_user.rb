class AddMerchantIdentityToUser < ActiveRecord::Migration
  def change
    add_column :users, :is_merchant, :integer
  end
end
