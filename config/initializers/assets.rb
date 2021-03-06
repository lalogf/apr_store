# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '2.0'


# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
Rails.application.config.assets.precompile += %w( store.js )
Rails.application.config.assets.precompile += %w( snap.svg.js )
Rails.application.config.assets.precompile += %w( svgs.js )
Rails.application.config.assets.precompile += %w( preview.js )
Rails.application.config.assets.precompile += %w( fabric.js )
Rails.application.config.assets.precompile += %w( application.css )
Rails.application.config.assets.precompile += %w( jquery.emojipicker.css )
Rails.application.config.assets.precompile += %w( jquery.emojipicker.a.css )
# Rails.application.config.assets.precompile = ['*.js', '*.css']
