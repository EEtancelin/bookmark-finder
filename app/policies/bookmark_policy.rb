class BookmarkPolicy < ApplicationPolicy

  def create?
     return true
  end


  def update?
    true
  end

  class Scope < Scope
    def resolve
      scope
    end
  end
end
