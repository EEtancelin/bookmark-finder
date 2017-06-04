
def seed_tags
  tags = [
    {title: 'blog'},
    {title: 'ci'},
    {title: 'css'},
    {title: 'code'},
    {title: 'design'},
    {title: 'doc'},
    {title: 'flex'},
    {title: 'front'},
    {title: 'game'},
    {title: 'grid'},
    {title: 'github'},
    {title: 'howto'},
    {title: 'immutable'},
    {title: 'set'},
    {title: 'map'},
    {title: 'medium'},
    {title: 'package'},
    {title: 'package manager'},
    {title: 'react'},
    {title: 'redux'},
    {title: 'ror'},
    {title: 'tag'},
    {title: 'tutorial'},
    {title: 'video'},
    {title: 'yarn'}
  ]
  Tag.create(tags)
end
