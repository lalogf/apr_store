# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

collections = Collection.create([
	{name: "Lanzamiento"}, 
	{name: "Navidad"},
	{name: "Patterns"} 
	])
designers = Designer.create([
	{name: "Tatiana", lastname: "De La Piedra"}, 
	{name: "Lalo", lastname: "González"}, 
	{name: "Thanos", lastname: "Cocoles"}
	])

designs = Design.create([
	{name:"Colorful",collection_id:"1", designer_id:"1", picture:File.new("#{Rails.root}/images_for_seeding/colorful.jpg")},
	{name:"Patterns",collection_id:"1", designer_id:"1", picture:File.new("#{Rails.root}/images_for_seeding/patterns.jpg")},
	{name:"Zebra",collection_id:"1", designer_id:"2", picture:File.new("#{Rails.root}/images_for_seeding/zebra.png")},
	{name:"Animal Print",collection_id:"2", designer_id:"2", picture:File.new("#{Rails.root}/images_for_seeding/animal_print.jpg")},
	{name:"Dots",collection_id:"2", designer_id:"3", picture:File.new("#{Rails.root}/images_for_seeding/dots.jpg")},
	{name:"Piramides",collection_id:"3", designer_id:"3", picture:File.new("#{Rails.root}/images_for_seeding/17.jpg")}
	])
	
phonetypes = Phonetype.create([
	{modelName:"iPhone 4",type_of_case: "Tough"},
	{modelName:"iPhone 5",type_of_case: "Slim"},
	{modelName:"iPhone 5",type_of_case: "Tough"},
	{modelName:"iPhone 6",type_of_case: "Slim"},
	{modelName:"iPhone 6",type_of_case: "Tough"},
	{modelName:"iPhone 6 Plus",type_of_case: "Tough"},
	{modelName:"Galaxy S5",type_of_case: "Tough"},
	{modelName:"Moto G",type_of_case: "Slim"}	
	])

inventories = CaseInventory.create([
	{finish:"Brillante",phonetype_id: "1",stock: 50},
	{finish:"Mate",phonetype_id:"2",stock:50 },
	{finish:"Brillante",phonetype_id:"2",stock:50},
	{finish:"Brillante",phonetype_id:"3",stock:100},
	{finish:"Mate",phonetype_id:"4",stock: 48 },
	{finish:"Brillante",phonetype_id:"4",stock: 50},
	{finish:"Brillante",phonetype_id:"5",stock:100},
	{finish:"Brillante",phonetype_id:"6",stock: 50},
	{finish:"Brillante",phonetype_id:"7",stock: 50},
	{finish:"Mate",phonetype_id:"8",stock:42},
	])

admin = Admin.create([
	{email:"lalo@soulutions.com.pe",password:"password",god_mode:true},
	{email:"lalo@laboratoria.la",password:"password",god_mode:false},
	])


File.open("flatcolors3.txt").each do |line|
	line.split("\r").each do |dp|
		FlatColor.create(color_code: dp.gsub(/\s+/, ""))
	end
end