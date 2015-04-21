var fs = require('fs');

SupAPI.registerPlugin('typescript', 'validator', {	
  code : "declare var validator;",
  defs: fs.readFileSync(__dirname + '/validator.d.ts.txt', {
    encoding: 'utf8'
  })
});