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

# puts most_chars('hello world')


def more_than_half(arr)
  n = arr.length
  l = [-1] + arr
  count = 0
  pos = (n + 1) / 2
  candidate = l[pos]
  (n).times do |i|
    if l[i+1] == candidate
      count += 1
    end

    if (2*count > n)
      return candidate
    end
  end
  -1
end

# puts more_than_half([1, 1, 1, 2, 2])
# puts more_than_half([1, 1, 2, 2])
# puts more_than_half([1, 1, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4])
# puts more_than_half([1, 1, 2, 2, 3, 3, 3, 3, 3, 4])

def not_included(arr) 
  hash = Hash.new(0)
  arr.each { |el| hash[el] = 0 }
  i = 1
  # hash[5] == 0
  while true
    return i unless hash.has_key?(i)
    i += 1
  end
end

# puts not_included([1, 2, 3, 4]) # => 5
# puts not_included([0, 1, 3, 4]) # => 2

def solution(a)
  ans = 0
  for i in 1 .. (a.length - 1)
    ans += a[i]
  end 
  ans
end

def summteset(arr) 
  sum = 0
  arr.each do |el|
    case el 
    when -99..-10
      puts el
      sum += el 
    when 10..99
      puts el
      sum += el
    end
  end

  sum
end

# puts summteset([1, 10, 90])
# puts summteset([1, -10, -90])
# puts summteset([-10, -100, -99, 10, 99])


# given an array of strings, return the n longest combination of consecutive strings
def longest_consec(arr, n)
  return '' if (n < 1 || n > arr.length)

  record = 0
  best_idx = 0
  arr.each_index do |idx|
    crop = arr[idx...(idx + n)]
    current = crop.reduce(0) { |acc, el| acc += el.length }
    if current > record
      record = current 
      best_idx = idx
    end
  end

  arr[best_idx...(best_idx + n)].join('')
end


p longest_consec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) # 'agigailtheta'
p longest_consec(["zone", "abigail", "theta", "form", "libe", "zas"], 0) # ''
p longest_consec(["zone", "abigail", "zas"], 1) # 'abigail'
p longest_consec(["zone", "abigail", "zas"], 3) # 'zoneabigailzas'































