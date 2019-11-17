class Business < ApplicationRecord
	has_many :business_categories
	has_many :categories, through: :business_categories
	has_one :listing #, dependent: :delete_all
	has_many :reviews#, dependent: :delete_all
	has_many :images#, dependent: :delete_all
	has_one :map#, dependent: :delete_all
	has_many :entries, through: :photos
	has_many :entries, through: :listings
	has_many :entries, through: :reviews
end

# models/movie.rb
class Movie < ActiveRecord::Base
  has_many :showtimes
  has_many :theatres, through: :showtimes
end

# models/theatre.rb
class Theatre < ActiveRecord::Base
  has_many :showtimes
  has_many :movies, through: :showtimes
end

# models/showtime.rb
class ShowTime < ActiveRecord::Base
  belongs_to :movie
  belongs_to :theatre
end

#:destroy causes all the associated objects to also be destroyed
#:delete_all causes all the associated objects to be deleted directly from the database (so callbacks will not execute)
