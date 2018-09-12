require 'net/ping'


loop do
  smedium = Net::HTTP.new('yk-smedium.herokuapp.com')
  smedium_time = Time.now
  response = smedium.request_get('/')
  p "#{smedium_time} ~ " + "smedium response: " + response.code 

  evictions = Net::HTTP.new('yk-sf-evictions-analysis.herokuapp.com')
  eviction_time = Time.now
  response = evictions.request_get('/')
  p "#{eviction_time} ~ " + "evictions response: " + response.code 

  # ping heroku dynos every 30 min to keep awake
  sleep (60 * 30)
end
