# frozen_string_literal: true

require 'csv'
require 'open-uri'
require 'json'

TAG_MAP = {
  'consumer products' => 'retail',
  'consumer cyclical' => 'retail',
  'consumer defensive' => 'retail',
  'basic materials' => 'manufacture',
  'industrials' => 'manufacture',
  'metals & mining' => 'manufacture',
  'financial services' => 'finance',
  'food products' => 'food',
  'technology' => 'tech',
  'communication services' => 'communication'
}.freeze

def download_img(url, name)
  URI.open(url) do |image|
    File.open("public/logo/#{name}", 'wb') do |file|
      file.write(image.read)
    end
  end
end

def logo_url_name(company_name, logo)
  name, url = logo.split(' ')
  url = url[1..-2] # remove parenthesis
  ext = name.split('.').last
  [url, "#{company_name}.#{ext}"]
end

items = []

CSV.foreach('scripts/data.csv', headers: true) do |row|
  name = row['Name']
  action = row['Action']
  logo = row['Logo']
  status = row['Status']
  website = row['Website URL']
  instagram = row['Instagram']
  twitter = row['Twitter']
  sector = row['Sector']

  url, logo = logo_url_name(name, logo)

  begin
    download_img(url, logo)
  rescue StandardError
    next
  end

  next unless logo

  sector&.downcase!
  tag = TAG_MAP[sector] || sector

  items << {
    name: name,
    logo: logo,
    description: action,
    status: status,
    website: website,
    instagram: instagram,
    twitter: twitter,
    tags: [tag].compact
  }
end

puts JSON.pretty_generate(items)
