get '/' do
  erb :index
end

post '/' do
  content_type :json
  row = 0
  column = 0
  {:row => row, :column => column}.to_json
end
