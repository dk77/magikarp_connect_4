get '/' do
  erb :index
end

post '/' do
  content_type :json
  row = 3
  column = 4
  {:row => row, :column => column}.to_json
end
