class BookmarkTagPolicy < ApplicationPolicy

  def create?
     true
  end

  def destroy?
    record.bookmark.user == user
  end

  class Scope < Scope
    def resolve
      scope
    end
  end
end
