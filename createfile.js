var fs = require('fs');
fs.appendFile('created.txt', 'Falamansa ;)', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });