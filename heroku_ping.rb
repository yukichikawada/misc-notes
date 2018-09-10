require 'net/ping'


loop do
  smedium = Net::HTTP.new('yk-smedium.herokuapp.com')
  response = smedium.request_get('/')
  p "smedium response: " + response.code

  evictions = Net::HTTP.new('yk-sf-evictions-analysis.herokuapp.com')
  response = evictions.request_get('/')
  p "evictions response: " + response.code

  # ping heroku dynos every 30 min to keep awake
  sleep 3000
end