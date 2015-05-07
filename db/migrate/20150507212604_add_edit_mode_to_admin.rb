class AddEditModeToAdmin < ActiveRecord::Migration
  def change
    add_column :admins, :reports_only, :boolean,:default => false
  end
end
