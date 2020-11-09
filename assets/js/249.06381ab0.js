(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{672:function(s,a,e){"use strict";e.r(a);var t=e(42),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"数据库操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据库操作"}},[s._v("#")]),s._v(" 数据库操作")]),s._v(" "),e("p",[s._v("学习数据库之前先来认识几个单词")]),s._v(" "),e("ol",[e("li",[e("code",[s._v("local")]),s._v("本地")]),s._v(" "),e("li",[e("code",[s._v("host")]),s._v("主机 ，简写为"),e("code",[s._v("-h")])]),s._v(" "),e("li",[e("code",[s._v("username")]),s._v("用户名，简写为"),e("code",[s._v("-u")])]),s._v(" "),e("li",[e("code",[s._v("password")]),s._v("密码，简写为"),e("code",[s._v("-p")])]),s._v(" "),e("li",[e("code",[s._v("port")]),s._v("端口号，简写为"),e("code",[s._v("-P")])])]),s._v(" "),e("h2",{attrs:{id:"_01查看所有数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_01查看所有数据库"}},[s._v("#")]),s._v(" 01查看所有数据库")]),s._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("show databases;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_02创建数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_02创建数据库"}},[s._v("#")]),s._v(" 02创建数据库")]),s._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("-- 创建数据库\ncreate database [if not exists] `数据库名` [charset = 字符码];\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ol",[e("li",[e("code",[s._v("if not exists")]),s._v("是如果不存在的意思，上面的意思是如果表格××不存在，就创建。加上此句即使创建之前已经有这个数据库，也不会报错，可以省略。")]),s._v(" "),e("li",[s._v("数据库名加反引号``可以防止数据库名是关键词而报错，省略后不能再用关键字作为数据库名，可以省略。")]),s._v(" "),e("li",[e("code",[s._v("charset = 字符码")]),s._v("中常用字符码有"),e("code",[s._v("UTF8")]),s._v("、"),e("code",[s._v("gbk")]),s._v("、 "),e("code",[s._v("gb2312")]),s._v("。省略后默认字符集为初始默认设置，可以省略。")])]),s._v(" "),e("p",[s._v("创建数据库的简单写法："),e("code",[s._v("create database 数据库名;")])]),s._v(" "),e("p",[s._v("最后，来个例子吧：创建数据库"),e("code",[s._v("Myfirst")]),s._v("。")]),s._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("-- 复杂写法\ncreate database if not exists Myfirst charset = utf8;\n-- 简单写法\ncreate database Myfirst;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h2",{attrs:{id:"_03删除数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_03删除数据库"}},[s._v("#")]),s._v(" 03删除数据库")]),s._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("drop database [if exists] `数据库名`;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("同样的，只要替换数据库名就可以了：删除 "),e("code",[s._v("Myfirst")]),s._v("数据库。")]),s._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("-- 复杂写法\ndrop database if exists `Myfirst`;\n-- 简单写法\ndrop database Myfirst;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h2",{attrs:{id:"_04显示数据库的sql语句"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_04显示数据库的sql语句"}},[s._v("#")]),s._v(" 04显示数据库的sql语句")]),s._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("show create database 数据库名;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("万变不离其宗，这个就不在举例子了。")]),s._v(" "),e("h2",{attrs:{id:"_05修改数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_05修改数据库"}},[s._v("#")]),s._v(" 05修改数据库")]),s._v(" "),e("p",[s._v("首先说明一下，修改数据库只能修改数据库字符集，其他都不能修改，所以这条"),e("code",[s._v("sql")]),s._v("语句不怎么常用。")]),s._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("alter database `数据库名` charset = utf8;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("在这里，数据库名是可以更换的，"),e("code",[s._v("utf8")]),s._v("也是可以更换的内容。")]),s._v(" "),e("p",[s._v("数据库名是你所要修改的哪个数据库，"),e("code",[s._v("charset")]),s._v("等号后面的内容代表无论以前是什么字符集，这个数据库的字符集以后要修改为什么字符集，比如上面代表修改为"),e("code",[s._v("utf8")]),s._v("。")]),s._v(" "),e("h2",{attrs:{id:"_06选择数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_06选择数据库"}},[s._v("#")]),s._v(" 06选择数据库")]),s._v(" "),e("p",[s._v("如果你想要在某个文件夹内放文件，最起码你要选择一个文件夹并且打开它；同样的，你必须选择一个数据库，才能在这个数据库中创建数据表。")]),s._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("use `数据库名`；\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("代码很短，但很重要。")])])}),[],!1,null,null,null);a.default=r.exports}}]);