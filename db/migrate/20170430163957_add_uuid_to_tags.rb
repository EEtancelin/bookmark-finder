class AddUuidToTags < ActiveRecord::Migration[5.0]
  def change
    add_column :tags, :uuid, :string
  end
end
