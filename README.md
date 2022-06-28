# simple-resume

configuration driving tool for generate a simply resume.

## usage

1. running the project

```sh
git clone https://github.com/1uciuszzz/simple-resume.git
cd simple-resume
npm i
npm start
```

2. editing the `config.json` file

3. i recommend deploying the dist to heroku.

```sh
npm i -g heroku
heroku login
npm run build
git add .
git commit -m "foo"
heroku apps:create <subdomain_name>
# add https://github.com/heroku/heroku-buildpack-static.git to buildpack of your heroku app settings.
git push heroku main
heroku open
```

## wiki for config.json

> all of the images should put in `assets`
> in config.json, you should fill the image name only.
> example config👇

```json
{
  // 顶部导航栏
  "header": {
    "brandText": {
      // logo位置的字符串
      "label": "1uciuszzz" // 字符串，推荐填写你的First Name
    },
    "navbar": [
      // 顶部右侧菜单栏
      {
        "id": 0, // 索引，按顺序填下来
        "label": "Home", // 在页面上显示的
        "anchor": "profile" // 创建锚点后的锚点值
      },
      {
        "id": 1,
        "label": "About Me",
        "anchor": "about"
      },
      {
        "id": 2,
        "label": "My Works",
        "anchor": "works"
      },
      {
        "id": 3,
        "label": "Contact",
        "anchor": "contact"
      }
    ]
  },
  "profile": {
    // 简单概括
    "greetingText": "Hello 👋, I'm", // 招呼语
    "firstName": "Lucius", // first name
    "lastName": "Zhao", // last name
    "simplyIntroduction": "I am a web developer specializing in JavaScript frameworks like VueJS, ReactJS and ExpressJS. Currently I am doing ... work.", // 简单的一句话概括自己
    "startBtnText": "More 👇", // 大按钮的文本
    "banner": "web-development.svg" // 右侧图片的名称
  },
  "about": {
    // 关于我
    "title": "About Me", // 标题文本
    "photo": "photo.jpg", // 照片的名称
    "paragraph": [
      // 段落
      {
        "id": 0, // 段落索引
        "content": "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi." // 段落内容
      },
      {
        "id": 1,
        "content": "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."
      }
    ]
  },
  "skills": {
    // 技能部分
    "list": [
      {
        "id": 0, // 索引
        "name": "javascript", // 图片显示失败时的替代文本
        "imgName": "javascript.svg" // 图片名称
      },
      {
        "id": 1,
        "name": "vue",
        "imgName": "vue-js.svg"
      },
      {
        "id": 2,
        "name": "react",
        "imgName": "react.svg"
      },
      {
        "id": 3,
        "name": "nodejs",
        "imgName": "node-js.svg"
      },
      {
        "id": 4,
        "name": "python",
        "imgName": "python.svg"
      },
      {
        "id": 5,
        "name": "mongodb",
        "imgName": "mongodb.svg"
      },
      {
        "id": 6,
        "name": "material-ui",
        "imgName": "material-ui.svg"
      },
      {
        "id": 7,
        "name": "tailwindcss",
        "imgName": "tailwindcss.svg"
      },
      {
        "id": 8,
        "name": "sass",
        "imgName": "sass.svg"
      }
    ]
  },
  "works": {
    // 个人作品
    "list": [
      {
        "id": 1, // 作品索引
        "title": "Marka", // 作品名称
        "introduction": "使用React、FastAPI和PostgreSQL构建的书签管理系统，用于收集和分享网络书签。", // 作品的简要介绍
        "banner": "marka.png", // 作品图片名称
        "url": "https://github.com/1uciuszzz/mark-library", // 仓库地址
        "btnLabel": "Github💨" // 甚么仓库
      },
      {
        "id": 2,
        "title": "Vocabulary",
        "introduction": "使用React、FastAPI和PostgreSQL构建的单词应用，核心功能为添加单词，左侧按首字母分类渲染列表，将单词标记为已掌握等等。",
        "banner": "vocabulary-app.png",
        "url": "https://github.com/1uciuszzz/vocabulary-card",
        "btnLabel": "Github💨"
      },
      {
        "id": 3,
        "title": "Bugfix",
        "introduction": "使用Vue3、Express和MongoDB构建的项目开发中的Bug工作流管理系统，以单个开发组为例，项目经理能够派发功能开发和功能测试给到对应的开发人员和测试人员；开发人员和测试人员可以访问派发给自己的任务。",
        "banner": "bugfix.png",
        "url": "https://github.com/1uciuszzz/bugfix-module",
        "btnLabel": "Github💨"
      },
      {
        "id": 4,
        "title": "Spotify Clone",
        "introduction": "使用React对Spotify iOS端应用的模拟。",
        "banner": "spotify-clone.png",
        "url": "",
        "btnLabel": ""
      },
      {
        "id": 5,
        "title": "Live Demo",
        "introduction": "使用Vue3和DPlayer构建的简单的直播案例，ws实现的双端通信，支持多用户弹幕互动。",
        "banner": "live.png",
        "url": "",
        "btnLabel": ""
      }
    ]
  },
  "findMe": {
    // 找到我
    "title": "Find Me!", // 标题
    "description": "Find me on social networks with @1uciuszzz", // 描述文本
    "socialMedia": [
      // 社交图标
      // 如果要修改此部分中的logo，需要修改源码
      // 仅建议修改url
      {
        "id": 0, // 索引
        "platform": "github", // 平台
        "url": "https://github.com/1uciuszzz" // 个人主页地址
      },
      {
        "id": 1,
        "platform": "linkedin",
        "url": "https://www.linkedin.com/in/zhaolixing/"
      }
    ]
  },
  "contact": {
    // 联系方式
    "list": [
      {
        "id": 0, // 索引
        "type": "email", // 邮箱
        "content": "nick_zzhao@outlook.com", // 邮箱地址
        "description": "send email" // 链接文本
      },
      {
        "id": 1,
        "type": "phone",
        "content": "+86 18171299340",
        "description": "call me"
      }
    ]
  },
  "footer": {
    // 页脚版权部分
    "author": "Lucius" // 换成你的名字
  }
}
```
