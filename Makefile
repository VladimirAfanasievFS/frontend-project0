install:
	npm install
start:
	npx node src/bin/brain-games.js
publish:
	npm publish --dry-run
gitlg: 
	git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr)%C(bold blue)<%an>%Creset' --abbrev-commit"
make lint:
	npx eslint .
