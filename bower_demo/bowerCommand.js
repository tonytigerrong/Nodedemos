//npm install bower
var bower = require('bower');

bower.commands
.install(
	['jquery'],{save: true},{

	}
)
.on('end',function(installed){
	console.log(installed);
});