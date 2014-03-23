`xzero.io` Website built via AngularJS.

### Tools

- yo (yoemen), scaffolding tool, http://yeoman.io/
- bower, NodeJS dependency management tool (like Ruby's `bundler`), http://bower.io/
- grunt, JS task runner (like Ruby's `rake`)

### Development

```
git clone $GITREPO xzero.io/
cd xzero.io
bower install
grunt server
```

### Deployment

```
git clone $GITREPO xzero.io/
cd xzero.io
grunt build
rsync -Pavuz --delete-after dist/ xzero.io::website/
rm -r dist
```

### Index

- Home
- Download
- Documentation
  - flow configuration language
  - core documentation
  - extensions
    - compress
    - director 
    - ssl
- Github
- Blog
