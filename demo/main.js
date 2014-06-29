var cml = require('../');

window.init = function() {

	var textarea = document.getElementById("source");

	var compile = document.getElementById("compile");
	compile.addEventListener('click', function() {

		var out = cml.parser.parse(textarea.value, {start: 'TopLevel'});
		console.log(out);

	});

}