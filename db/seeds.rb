# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

collections = Collection.create([
	{name: "Lanzamiento"}, 
	{name: "Día de la madre"},
	{name: "Copa América 2015"} 
	# {name: "Día del Padre"}, 
	# {name: "Fiestas Patrias"}
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
	{model:"iPhone 4",finish: "Tough"	},
	{model:"iPhone 5",finish: "Brillante"	},
	{model:"iPhone 5",finish: "Mate"	},
	{model:"iPhone 5",finish:"Tough"	},
	{model:"iPhone 6",finish:"Mate"	},
	{model:"iPhone 6",finish:"Brillante"	},
	{model:"iPhone 6",finish:"Tough"	},
	{model:"iPhone 6 Plus",finish:"Tough"	},
	{model:"Galaxy S5",finish:"Tough"	},
	{model:"Moto G",finish:"Brillante"}	
	])
