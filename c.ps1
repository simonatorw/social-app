$body = '{"username":"Timmy","body":"helloworld2"}'

Invoke-WebRequest -ContentType "application/json" -Method POST -Uri http://localhost:3000/api/posts -Body $body
