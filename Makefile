lib/parser.js: lib/grammar.peg
	./node_modules/.bin/pegjs --allowed-start-rules TopLevel $< $@
