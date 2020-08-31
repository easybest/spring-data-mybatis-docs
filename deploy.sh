#!/usr/bin/env sh

set -e

npm run build
cd src/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:easybest/spring-data-mybatis.git master:gh-pages

cd -
