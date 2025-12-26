# 本项目信息
<span style="float: right; color: #888; font-size: 0.9em;">2025-12-26</span>
## 核心框架 

- **VitePress**: `2.0.0-alpha.15`
- **Vue**: `^3.5.24`
- **Vite**: `^7.2.2`

## 开发环境

- **Node.js**: `v22.14.0`
- **npm**: `10.9.2`

## 主要依赖

- **@vitejs/plugin-vue**: `^6.0.1`
- **@vueuse/core**: `^14.0.0`
- **shiki**: `^3.15.0` (代码高亮)
- **markdown-it**: (Markdown 解析)

## 项目结构

- 文档目录: `docs/`
- 配置文件: `docs/.vitepress/config.mts`
- 构建输出: `docs/.vitepress/dist`

## 部署指南


### 本地构建

```bash
# 安装依赖
npm install

# 本地开发预览
npm run docs:dev

# 构建生产版本
npm run docs:build

# 预览构建结果
npm run docs:preview
```

构建完成后，静态文件会生成在 `docs/.vitepress/dist` 目录。


## 项目地址
[代码地址](https://github.com/mpw-explore/daily)

[githubpage](https://mpw-explore.github.io/blog/index.html)