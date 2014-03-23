# this file helps me remember the commands to run while developing,
# as I don't know a **** about frontend development. :-)

help:
	@echo
	@echo "make autogen    initialize clean environment"
	@echo "make run        run local development server"
	@echo "make dist       build target code for distribution"
	@echo "make clean      cleans up all temporary working files from the autogen task"
	@echo "make help       prints this help"
	@echo

autogen:
	bower install
	npm install

run:
	grunt server

dist:
	grunt build

clean:
	rm -rf dist
	rm -rf node_modules
	rm -rf app/bower_components

.PHONY: help autogen run dist clean
