
def seed_bookmarks
  puts 'Seed Bookmarks'

user = User.first
bookmarks = [
  { url: 'https://www.youtube.com/watch?v=0SARbwvhupQ',
    title: 'The myth of the Genius Programmer',
    thumbnail_url: 'https://lh3.googleusercontent.com/I58BBPL959ysdBBBV_c1JeFUJdIF6TEhQrBIKOfCcQIuMfmAxoQfei2yZoR64AC1g-nqIA=s113',
    user: user
  },
  { url: 'https://medium.com/dailyjs/react-is-slow-react-is-fast-optimizing-react-apps-in-practice-394176a11fba',
    title: 'React is Slow, React is Fast: Optimizing React Apps in Practice',
    thumbnail_url: 'https://cdn-images-1.medium.com/max/1200/1*DWqrndqrZxYXqHT789XK1g.jpeg',
    user: user
  },
  { url: 'http://edgeguides.rubyonrails.org/active_record_migrations.html',
    title: 'Active Record Migrations — Ruby on Rails Guides',
    thumbnail_url: 'https://avatars1.githubusercontent.com/u/4223?v=3&s=400',
    user: user
  },
  { url: 'https://medium.com/slashgen/vous-avez-une-id%C3%A9e-testez-la-53067e760744',
    title: 'Vous avez une idée ? Testez la – SlashGen – Medium',
    thumbnail_url: 'https://cdn-images-1.medium.com/max/1200/0*W8Z-IEsrv_uU2CL0.jpg',
    user: user
  },
  { url: 'https://www.youtube.com/watch?v=uvAXVMwHJXU',
    title: 'Dan Abramov - The Redux Journey at react-europe 2016',
    thumbnail_url: 'https://yt3.ggpht.com/-D_R2RCma-mk/AAAAAAAAAAI/AAAAAAAAAAA/YBGMoNufCeE/s88-c-k-no-mo-rj-c0xffffff/photo.jpg',
    user: user
  },
  {
    url: 'https://facebook.github.io/react/docs/conditional-rendering.html',
    title: 'Conditional Rendering - React',
    thumbnail_url: 'https://facebook.github.io/react/img/logo_og.png',
    user: user
  },
  {
    url: 'http://guides.rubyonrails.org/association_basics.html',
    title: 'Active Record Associations — Ruby on Rails Guides',
    thumbnail_url: 'https://avatars1.githubusercontent.com/u/4223?v=3&s=400',
    user: user
  },
  {
      url: 'https://tylermcginnis.com/imperative-vs-declarative-programming/',
      title: 'Imperative vs Declarative Programming',
      thumbnail_url: 'https://developers.google.com/experts/img/user/117394765599569284055.jpg',
      user: user
  },
  {
    url: 'https://yarnpkg.com/fr/',
    title: 'Yarn',
    thumbnail_url: 'https://yarnpkg.com/assets/og_image.png',
    user: user
  },
  {
      url: 'https://github.com/shakacode/react_on_rails',
      title: 'shakacode/react_on_rails',
      thumbnail_url: 'https://avatars2.githubusercontent.com/u/1118459?v=3&s=460',
      user: user
  },
  { url: 'http://css4.rocks/',
    title: 'CSS - Level 4 Selectors',
    thumbnail_url: 'http://css4.rocks/img/logo.png',
    user: user
  },
  { url: '  https://facebook.github.io/immutable-js/docs/#/Map',
    title: 'Immutable Map',
    thumbnail_url: 'https://cloudinary-a.akamaihd.net/bountysource/image/upload/d_noaoqqwxegvmulwus0un.png,c_pad,w_200,h_200,b_white/pfxsayjjyvwk3amjidxo.png',
    user: user
  },
  { url: '  https://facebook.github.io/immutable-js/docs/#/Set',
    title: 'Immutable Set',
    thumbnail_url: 'https://cloudinary-a.akamaihd.net/bountysource/image/upload/d_noaoqqwxegvmulwus0un.png,c_pad,w_200,h_200,b_white/pfxsayjjyvwk3amjidxo.png',
    user: user
  },
  { url: 'https://react.semantic-ui.com/',
    title: 'React Semantic Ui',
    thumbnail_url: 'https://semantic-ui.com/images/logo.png',
    user: user
  },
  { url: 'https://circleci.com/',
    title: 'Circle Ci',
    thumbnail_url: 'https://d3r49iyjzglexf.cloudfront.net/logo-wordmark-26f8eaea9b0f6e13b90d3f4a8fd8fda31490f5af41daab98bbede45037682576.svg',
    user: user
  },
  { url: 'https://flexboxfroggy.com/',
    title: 'FlexBox Froggy',
    thumbnail_url: 'https://d3r49iyjzglexf.cloudfront.net/logo-wordmark-26f8eaea9b0f6e13b90d3f4a8fd8fda31490f5af41daab98bbede45037682576.svg',
    user: user
  },
  { url: 'http://cssgridgarden.com/',
    title: 'CSS Grid Garden game',
    thumbnail_url: 'https://d3r49iyjzglexf.cloudfront.net/logo-wordmark-26f8eaea9b0f6e13b90d3f4a8fd8fda31490f5af41daab98bbede45037682576.svg',
    user: user
  }
]

Bookmark.create(bookmarks)
end
