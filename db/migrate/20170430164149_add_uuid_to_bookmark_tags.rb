class AddUuidToBookmarkTags < ActiveRecord::Migration[5.0]
  def change
    add_column :bookmark_tags, :uuid, :string
  end
end
