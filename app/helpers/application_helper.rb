module ApplicationHelper

  def attribute_is_id_or_foreign_key(attr_name)
    attr_name.to_s == 'id' || attr_name.to_s.end_with?('_id')
  end

end
