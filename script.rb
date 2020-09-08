require 'active_support/all'

# def sum_eq_n?()
#   return true if arr.empty? && n == 0

#   arr.product(arr).reject { |a,b| a == b }.any? { |a,b| a + b == n }
# end

# sum_eq_n?()

# ARGV.each do|a|
#   puts "Argument: #{a}"
# end

puts ARGV[0]
Time.zone = ARGV[0]
puts DateTime.now.in_time_zone