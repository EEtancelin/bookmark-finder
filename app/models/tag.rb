class Tag < ApplicationRecord

  def to_redux_hash
    attr = self.attributes.to_h
    attr["id"] = attr["id"].to_s
    return attr
  end
end
