class AddTagsAToBookmarks < ActiveRecord::Migration[5.0]
  def change
    add_column :bookmarks, :tags_a, :text
  end
end
