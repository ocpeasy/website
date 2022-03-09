deploy:
	#git subtree push --prefix dist origin gh-pages
	GIT_USER=dbrrt USE_SSH=true npx docusaurus deploy

