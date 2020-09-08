# require 'active_support/all'
require 'json'
require 'active_support/core_ext/time'

time_zones = JSON.parse(ARGV[0])
converted_timezones = {}

time_zones.each do |key, value|
    Time.zone = value['timezone']
    converted_timezones[key] = Time.zone.tzinfo.to_s.sub(' - ', '/').sub(' ', '_')
end

converted_timezones
