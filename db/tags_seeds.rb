
def seed_tags
  tags = [
    {title: 'blog'},
    {title: 'css'},
    {title: 'code'},
    {title: 'design'},
    {title: 'doc'},
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
    {title: 'tutorial'},
    {title: 'video'},
    {title: 'yarn'}
  ]
  Tag.create(tags)
end
