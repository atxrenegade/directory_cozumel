# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_06_25_190111) do

  create_table "admins", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "role"
    t.string "status"
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
    t.string "nombre"
  end

  create_table "entries", force: :cascade do |t|
    t.string "entry_type"
    t.integer "business_id"
    t.string "business_name"
    t.string "date"
    t.string "contributor"
    t.string "contributor_email"
    t.string "data_object"
    t.string "status"
    t.string "resolved_date"
    t.integer "admin_id"
    t.string "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "images", force: :cascade do |t|
    t.string "description"
    t.string "date"
    t.string "url"
    t.string "contributor"
    t.string "contributor_email"
    t.integer "business_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
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
