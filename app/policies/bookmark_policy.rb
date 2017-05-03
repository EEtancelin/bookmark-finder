class BookmarkPolicy < ApplicationPolicy

  def create?
     return true
  end

  def destroy?
     record.user == user
  end

  def update?
    record.user == user
  end

  class Scope < Scope
    def resolve
      scope
    end
  end
end
