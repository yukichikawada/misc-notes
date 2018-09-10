require 'net/ping'


loop do
  smedium = Net::HTTP.new('yk-smedium.herokuapp.com')
  smedium_time = Time.now
  response = smedium.request_get('/')
  p "smedium response: " + response.code + " ~ #{smedium_time}"

  evictions = Net::HTTP.new('yk-sf-evictions-analysis.herokuapp.com')
  eviction_time = Time.now
  response = evictions.request_get('/')
  p "evictions response: " + response.code + " ~ #{eviction_time}"

  # ping heroku dynos every 30 min to keep awake
  sleep (60 * 30)
end