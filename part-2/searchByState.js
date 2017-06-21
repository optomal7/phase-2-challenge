var answer = [];
var state = process.argv[2];

const clients = require('./list.js')

for (var i = 0; i < clients.length; i++) {
  if(state === clients[i].state) {
    answer.push({"id": clients[i].id, "rep_name": clients[i].rep_name, "company": clients[i].company, "city":clients[i].city, "state":clients[i].state});
  }
}

console.log(answer);
