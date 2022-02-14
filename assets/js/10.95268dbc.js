(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{579:function(t,s,a){t.exports=a.p+"assets/img/image-20211221205550326.a7b9a244.png"},580:function(t,s,a){t.exports=a.p+"assets/img/image-20211221210015059.cd09a8b9.png"},581:function(t,s,a){t.exports=a.p+"assets/img/image-20211221210155061.58275242.png"},582:function(t,s,a){t.exports=a.p+"assets/img/tortoisegit.bdd5f7e7.png"},602:function(t,s,a){"use strict";a.r(s);var e=a(6),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"},[t._v("背景")]),e("p",[e("RouterLink",{attrs:{to:"/blog_tutorials/2_configurate_vuepress.html"}},[t._v("上一节")]),t._v("，我们讲述了如果通过yarn启动一个热加载器来查看我们构建的博客是什么样的，本节我们介绍如何将我们的博客部署到github.io上")],1)]),e("h2",{attrs:{id:"_1-下载git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载git"}},[t._v("#")]),t._v(" 1. 下载Git")]),t._v(" "),e("h3",{attrs:{id:"_1-1-下载地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-下载地址"}},[t._v("#")]),t._v(" 1.1 下载地址")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://git-scm.com/download/win",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方下载地址"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("如果该网址下载很慢的话，可以通过国内的镜像来进行下载"),e("a",{attrs:{href:"https://npm.taobao.org/mirrors/git-for-windows/",target:"_blank",rel:"noopener noreferrer"}},[t._v("git-for-windows Mirror (taobao.org)"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("下载适合自己电脑的最新版即可")]),t._v(" "),e("h3",{attrs:{id:"_1-2-安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-安装"}},[t._v("#")]),t._v(" 1.2 安装")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("简单快捷的一直点next即可")])]),t._v(" "),e("li",[e("p",[t._v("一些定制化的东西")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("例如我这里选择Visual Studio Code 来作为我默认的文件编辑器")]),t._v(" "),e("p",[e("img",{attrs:{src:a(579),alt:"image-20211221205550326"}})])])])])]),t._v(" "),e("h3",{attrs:{id:"_1-3-安装验证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-安装验证"}},[t._v("#")]),t._v(" 1.3 安装验证")]),t._v(" "),e("p",[t._v("鼠标邮件有下图的git说明安装成功")]),t._v(" "),e("p",[e("img",{attrs:{src:a(580),alt:"image-20211221210015059"}})]),t._v(" "),e("h2",{attrs:{id:"_2-下载小乌龟tortoisegit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-下载小乌龟tortoisegit"}},[t._v("#")]),t._v(" 2. 下载小乌龟TortoiseGit")]),t._v(" "),e("h3",{attrs:{id:"_2-1-下载地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-下载地址"}},[t._v("#")]),t._v(" 2.1 下载地址")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://tortoisegit.org/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download – TortoiseGit – Windows Shell Interface to Git"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("另外还可以下载对应的语言包")]),t._v(" "),e("p",[e("img",{attrs:{src:a(581),alt:"image-20211221210155061"}})]),t._v(" "),e("h3",{attrs:{id:"_2-2-安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-安装"}},[t._v("#")]),t._v(" 2.2 安装")]),t._v(" "),e("p",[t._v("一直点下一步就完事了")]),t._v(" "),e("h3",{attrs:{id:"_2-3-验证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-验证"}},[t._v("#")]),t._v(" 2.3 验证")]),t._v(" "),e("p",[e("img",{attrs:{src:a(582),alt:"tortoisegit"}})]),t._v(" "),e("h2",{attrs:{id:"_3-配置git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置git"}},[t._v("#")]),t._v(" 3. 配置Git")]),t._v(" "),e("h3",{attrs:{id:"_3-1-配置用户名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-配置用户名"}},[t._v("#")]),t._v(" 3.1 配置用户名")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("打开 Git Bash。")])]),t._v(" "),e("li",[e("p",[t._v("设置 Git 用户名：")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zlbingo"')]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])]),t._v(" "),e("li",[e("p",[t._v("确认您正确设置了 Git 用户名：")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name\nzlbingo\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])])]),t._v(" "),e("li",[e("p",[t._v("参考文章："),e("a",{attrs:{href:"https://docs.github.com/cn/get-started/getting-started-with-git/setting-your-username-in-git",target:"_blank",rel:"noopener noreferrer"}},[t._v("在 Git 中设置用户名 - GitHub Docs"),e("OutboundLink")],1)])])]),t._v(" "),e("h3",{attrs:{id:"_3-2-配置邮箱"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-配置邮箱"}},[t._v("#")]),t._v(" 3.2 配置邮箱")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("开 Git Bash。")])]),t._v(" "),e("li",[e("p",[t._v("在 Git 中设置电子邮件地址。")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zxxxxxxxx@126.com"')]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])]),t._v(" "),e("li",[e("p",[t._v("确认在 Git 中正确设置了电子邮件地址：")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email\nzxxxxxxxx@126.com\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])])])]),t._v(" "),e("h3",{attrs:{id:"_3-3-配置ssh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-配置ssh"}},[t._v("#")]),t._v(" 3.3 配置SSH")]),t._v(" "),e("h4",{attrs:{id:"git-ssh-key配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-ssh-key配置"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://blog.csdn.net/lqlqlq007/article/details/78983879",target:"_blank",rel:"noopener noreferrer"}},[t._v("git ssh key配置"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"_4-部署到github-io上"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-部署到github-io上"}},[t._v("#")]),t._v(" 4.部署到github.io上")]),t._v(" "),e("p",[t._v("执行如下脚本")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run docs:build\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入生成的文件夹")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" docs/.vuepress/dist\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -A\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果发布到 https://<USERNAME>.github.io")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -f git@github.com:zlbingo/zlbingo.github.io.git master\n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/\n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br")])]),e("h2",{attrs:{id:"参考文章"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/331540965",target:"_blank",rel:"noopener noreferrer"}},[t._v("git镜像下载 - 知乎 (zhihu.com)"),e("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);