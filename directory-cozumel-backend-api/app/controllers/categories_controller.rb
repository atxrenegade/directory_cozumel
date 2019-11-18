class CategoriesController < ApplicationController
	validates :name, uniqueness: true
end
