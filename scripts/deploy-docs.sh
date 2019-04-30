#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

REMOTE=`git remote get-url origin`
GIT_USER_NAME=`git config user.name`
GIT_USER_EMAIL=`git config user.email`


# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git config user.name $GIT_USER_NAME
git config user.email $GIT_USER_EMAIL
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f $REMOTE master:gh-pages

cd -
