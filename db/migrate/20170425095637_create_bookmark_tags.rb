class CreateBookmarkTags < ActiveRecord::Migration[5.0]
  def change
    create_table :bookmark_tags do |t|
      t.references :bookmark, foreign_key: true
      t.references :tag, foreign_key: true

      t.timestamps
    end
  end
end
