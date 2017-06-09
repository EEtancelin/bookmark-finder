class Bookmark < ApplicationRecord
  belongs_to :user
  has_many :bookmarkTag
  has_many :tags, through: :bookmarkTag


  def to_redux_hash
    attr = self.attributes.to_h
    attr.each_key do |k|
      if attribute_is_id_or_foreign_key(k)
        attr[k] = attr[k].to_s
      end
    end
    return attr
  end


#Given a attribute name return true if attribute name is "id" or finish by "_id"
  def attribute_is_id_or_foreign_key(attr_name)
    attr_name.to_s.end_with?('id') || attr_name.to_s.end_with?('_id')
  end
end
