# git操作



## commit提交标准

- feat: 新特性
- fix: 修改问题
- refactor: 代码重构
- docs: 文档修改
- style: 代码格式修改, 注意不是 css 修改
- test: 测试用例修改
- chore: 其他修改, 比如构建流程, 依赖管理.
- scope: commit 影响的范围, 比如: route, component, utils, build...
- subject: commit 的概述
- body: commit 具体修改内容, 可以分为多行
- footer: 一些备注, 通常是 BREAKING CHANGE 或修复的 bug 的链接.
- example: feat:add new thing

## 指令集合

### 删除远程分支

```bash
# 删除远程分支
git push origin --delete <branch-name>

# 或者使用简写形式
git push origin :<branch-name>
```

### 推送到指定分支

```bash
# 推送当前分支到远程指定分支
git push origin <local-branch>:<remote-branch>

# 推送当前分支到远程同名分支
git push origin HEAD

```

## 默认启用递归处理子模块（recursive submodules）。

```bash
# 配置
git config --global submodule.recurse true

# 查看配置
git config --global --list | grep submodule

# 本地配置文件
～/.gitconfig

# 等价于
git clone --recurse-submodules <repo>
git pull --recurse-submodules
git fetch --recurse-submodules
git checkout --recurse-submodules
git switch --recurse-submodules

```

## 重写历史

- 工作机制

```bash

A---B---C  main
     \
      D---E  feature

在feature分支执行 git rebase main

A---B---C---D'---E'  feature
```
- 同步主分支最新代码

```
git checkout feature
git fetch origin
git rebase origin/main

```
- 交互式 rebase（提交整理神器）

```
git rebase -i HEAD~3
git rebase -i xxx

```

- 冲突
```
1. 手动解决冲突
2. 标记已解决
git add .

3. 继续 rebase
git rebase --continue

4. 可以选择放弃
git rebase --abort

```

- 重要铁律

！！！ 不要对已经推送到远端、且被他人使用的分支执行 rebase


---