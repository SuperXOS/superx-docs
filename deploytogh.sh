#!/usr/bin/env sh
set -e

cd docs
yarn run build
cd src/.vuepress/dist

git init
git add -A
git commit -m 'Automated GH Pages Deployment'

git push -f git@github.com:SuperXOS/superx-docs.git master:gh-pages

cd -
