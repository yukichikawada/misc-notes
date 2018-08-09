# given a number, return the length of the longest
# continuous sequence of 1's when converted to binary

def longest_continuous_binary(num) 
  return 0 if num == 0
  sequence = binary_num(num)
  longest(sequence)
end

def binary_num(num)
  arr = []

  # O(log(n))
  while num > 1
    arr.unshift(num)
    num /= 2
  end
  # the above finishes with a 1 that
  # doesn't get pushed onto the stack
  arr.unshift(1)

  arr.map { |e| e % 2 }
end

def longest(arr)
  record = 1
  count = 1

  # iterate thru only once for O(n) time complexity
  # rather than a nested loops check
  (arr.length).times do |i|
    if (arr[i] == 1) && (arr[i + 1] == 1)
      count += 1
    else
      # reset count
      count = 1
    end
    
    record = count if count > record
  end

  record
end

# puts "longest continous sequence of 1's"
# puts "0 => 0: " + (0 == longest_continuous_binary(0)).to_s
# puts "1 => 1: " + (1 == longest_continuous_binary(1)).to_s
# puts "75 => 2: " + (2 == longest_continuous_binary(75)).to_s
# puts "71 => 3: " + (3 == longest_continuous_binary(71)).to_s
# puts "2928018016900296589618184185 => 37: " + 
#   (37 == longest_continuous_binary(2928018016900296589618184185)).to_s

def most_chars(str)
  hash = Hash.new(0)
  str.each_char { |chr| hash[chr] += 1 if chr != ' ' }
   
  hi_chr = ''
  count  = 0
  hash.each do |k, v|
    if v > count
      hi_chr, count = k, v
    end
  end
    
  hi_chr
end

puts most_chars('hello world')