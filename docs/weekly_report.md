# 周报生成器

基于 Laravel 11 + Vue 3 的周报生成器应用。

<span style="float: right; color: #888; font-size: 0.9em;">2025-12-26</span>

## 功能特性

- 周报数据管理
- 自动生成周报文本
- 数据持久化存储

## 环境要求

- PHP >= 8.2
- Composer
- Node.js >= 18
- MySQL >= 5.7

## 安装步骤

1. 安装 PHP 依赖
```bash
composer install
```

2. 安装前端依赖
```bash
npm install
```

3. 复制环境配置文件
```bash
cp .env.example .env
```

4. 生成应用密钥
```bash
php artisan key:generate
```

5. 配置数据库（编辑 `.env` 文件）
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=daily
DB_USERNAME=root
DB_PASSWORD=your_password
```

6. 运行数据库迁移
```bash
php artisan migrate
```

7. 启动开发服务器

终端1 - Laravel 服务：
```bash
php artisan serve
```

终端2 - Vite 前端构建：
```bash
npm run dev
```

8. 访问应用
打开浏览器访问：`http://localhost:8000`

## 使用说明

1. 在顶部输入框中输入你的名字
2. 点击"重置列表"按钮，会自动生成当前周的7天数据
3. 点击列表中的某一行，右侧会显示编辑表单
4. 填写项目、内容等信息后，点击"保存"更新记录，或点击"创建"创建新记录
5. 点击"生成结果"按钮，会在下方显示格式化的周报文本
6. 点击底部的"保存"按钮，将数据保存到数据库



## 项目地址
[github](https://github.com/mpw-explore/weekly)