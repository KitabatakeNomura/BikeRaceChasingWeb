var sqlite3 = require('sqlite3')

modules.exports.init = function(file){
	return new sqlite3.Database(file);
}
