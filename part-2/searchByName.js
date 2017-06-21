var answer = [];
const nameQuery = process.argv[2].toLowerCase();
const nameLength = nameQuery.length

const clients = require('./list.js')

for (var i = 0; i < clients.length; i++) {
  var holder = clients[i].rep_name.substring(0, nameLength).toLowerCase();
  if(holder === nameQuery) {
    answer.push({"id": clients[i].id, "rep_name": clients[i].rep_name});
  }
}

console.log(answer);
