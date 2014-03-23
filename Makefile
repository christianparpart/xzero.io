
dist:
	grunt build

autogen:
	bower install
	npm install

clean:
	rm -rf dist
	rm -rf node_modules
	rm -rf app/bower_components

.PHONY: dist autogen clean
