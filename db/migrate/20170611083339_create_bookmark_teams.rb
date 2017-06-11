class CreateBookmarkTeams < ActiveRecord::Migration[5.0]
  def change
    create_table :bookmark_teams do |t|
      t.references :bookmark, foreign_key: true
      t.references :team, foreign_key: true

      t.timestamps
    end
  end
end
