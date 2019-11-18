class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

	def build_directory_for_export

	end	
end
