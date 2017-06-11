
def create_bt(bookmark_title, tag_title)
  bookmark = Bookmark.where(title: bookmark_title).first
  tag = Tag.where(title: tag_title).first
  BookmarkTag.create(bookmark: bookmark, tag: tag)
end


def seed_bookmarks_tags

  puts 'Seed Bookmark Tags'
  create_bt('The myth of the Genius Programmer', 'video')
  create_bt('The myth of the Genius Programmer', 'howto')
  create_bt('The myth of the Genius Programmer', 'design')
  create_bt('The myth of the Genius Programmer', 'code')

  create_bt('React is Slow, React is Fast: Optimizing React Apps in Practice', 'code')
  create_bt('React is Slow, React is Fast: Optimizing React Apps in Practice', 'howto')
  create_bt('React is Slow, React is Fast: Optimizing React Apps in Practice', 'react')

  create_bt('Active Record Migrations — Ruby on Rails Guides', 'ror')
  create_bt('Active Record Migrations — Ruby on Rails Guides', 'doc')

  create_bt('Vous avez une idée ? Testez la – SlashGen – Medium', 'blog')
  create_bt('Vous avez une idée ? Testez la – SlashGen – Medium', 'medium')

  create_bt('Dan Abramov - The Redux Journey at react-europe 2016', 'video')
  create_bt('Dan Abramov - The Redux Journey at react-europe 2016', 'react')

  create_bt('Conditional Rendering - React', 'react')
  create_bt('Conditional Rendering - React', 'doc')

  create_bt('Imperative vs Declarative Programming', 'design')
  create_bt('Imperative vs Declarative Programming', 'code')

  create_bt('Yarn', 'yarn')
  create_bt('Yarn', 'doc')

  create_bt('shakacode/react_on_rails', 'howto')
  create_bt('shakacode/react_on_rails', 'github')
  create_bt('shakacode/react_on_rails', 'package')

  create_bt('CSS - Level 4 Selectors', 'css')

  create_bt('Immutable Set', 'immutable')
  create_bt('Immutable Set', 'doc')

  create_bt('Immutable Map', 'immutable')
  create_bt('Immutable Map', 'doc')

  create_bt('React Semantic Ui', 'react')
  create_bt('React Semantic Ui', 'front')

  create_bt('Circle Ci', 'ci')

  create_bt('FlexBox Froggy', 'code')
  create_bt('FlexBox Froggy', 'css')
  create_bt('FlexBox Froggy', 'flex')
  create_bt('FlexBox Froggy', 'game')

  create_bt('CSS Grid Garden game', 'code')
  create_bt('CSS Grid Garden game', 'css')
  create_bt('CSS Grid Garden game', 'game')
  create_bt('CSS Grid Garden game', 'grid')
end
