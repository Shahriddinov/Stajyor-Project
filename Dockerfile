from node: alpinme  

WORKDIR '/'


copy package.json .

run npm i


copy . .


cmd [npm, start]