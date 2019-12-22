# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_11_18_055052) do

  create_table "admins", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.integer "admin_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "business_categories", force: :cascade do |t|
    t.integer "business_id"
    t.integer "category_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "businesses", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "entries", force: :cascade do |t|
    t.string "type"
    t.integer "bus_id"
    t.string "date"
    t.string "contributor"
    t.string "contributor_email"
    t.string "data_array"
    t.string "status"
    t.string "resolved_date"
    t.integer "admin_id"
    t.string "notes"
    t.string "entryable_type"
    t.integer "entryable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["entryable_type", "entryable_id"], name: "index_entries_on_entryable_type_and_entryable_id"
  end

  create_table "images", force: :cascade do |t|
    t.string "description"
    t.string "date"
    t.string "url"
    t.string "contributor"
    t.integer "business_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "contributor_email"
    t.index ["business_id"], name: "index_images_on_business_id"
  end

  create_table "listings", force: :cascade do |t|
    t.integer "overall_rating"
    t.string "address"
    t.string "phone_number"
    t.string "website"
    t.integer "business_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["business_id"], name: "index_listings_on_business_id"
  end

  create_table "maps", force: :cascade do |t|
    t.float "lat"
    t.float "lng"
    t.integer "business_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["business_id"], name: "index_maps_on_business_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "content"
    t.string "contributor"
    t.string "contributor_email"
    t.integer "rating"
    t.integer "business_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["business_id"], name: "index_reviews_on_business_id"
  end

end
