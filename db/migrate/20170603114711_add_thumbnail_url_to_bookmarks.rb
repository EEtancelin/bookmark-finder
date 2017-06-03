class AddThumbnailUrlToBookmarks < ActiveRecord::Migration[5.0]
  def change
    add_column :bookmarks, :thumbnail_url, :string
  end
end
