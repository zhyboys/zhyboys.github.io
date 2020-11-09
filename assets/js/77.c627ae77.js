(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{492:function(n,s,a){"use strict";a.r(s);var e=a(42),t=Object(e.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"知识补充"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#知识补充"}},[n._v("#")]),n._v(" 知识补充")]),n._v(" "),a("h3",{attrs:{id:"_01-缓动动画"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_01-缓动动画"}},[n._v("#")]),n._v(" 01 缓动动画")]),n._v(" "),a("p",[n._v("公式")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v(" 公式: 步长 = (结束位置 - 开始位置) * 缓动系数(0 ~1)\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br")])]),a("h3",{attrs:{id:"_02-方法封装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_02-方法封装"}},[n._v("#")]),n._v(" 02 方法封装")]),n._v(" "),a("p",[n._v("下面是封装的关于缓动动画效果的函数封装，代码不重要，两句话重要。")]),n._v(" "),a("ol",[a("li",[n._v("通过winds将方法内的方法名提升，将函数绑定到window对象上， 这样全局就可以使用了。")]),n._v(" "),a("li",[n._v("前提条件是执行一下函数体，于是立即执行函数（两个括号搞定）起作用了。")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('(function() {\n    let timerId = null;\n    function linearAnimation(ele, target) {\n        clearInterval(timerId);\n        timerId = setInterval(function () {\n            // 1.拿到元素当前的位置\n            let begin = parseInt(ele.style.marginLeft) || 0;\n            // 2.定义变量记录步长\n            //         0  -  500 = -500    13\n            //         500 -  200 = 300    -13\n            let step = (begin - target) > 0 ? -13 : 13;\n            // 3.计算新的位置\n            begin += step;\n            console.log(Math.abs(target - begin), Math.abs(step));\n            if(Math.abs(target - begin) <= Math.abs(step)){\n                clearInterval(timerId);\n                begin = target;\n            }\n\n            // 4.重新设置元素的位置\n            ele.style.marginLeft = begin + "px";\n        }, 100);\n    }\n    function easeAnimation(ele, target) {\n        clearInterval(timerId);\n        timerId = setInterval(function () {\n            // 1.拿到元素当前的位置\n            let begin = parseInt(ele.style.marginLeft) || 0;\n            // 2.定义变量记录步长\n            // 公式: (结束位置 - 开始位置) * 缓动系数(0 ~1)\n            let step = (target - begin) * 0.3;\n            console.log(step);\n            // 3.计算新的位置\n            begin += step;\n            if(Math.abs(Math.floor(step)) <= 1){\n                clearInterval(timerId);\n                begin = target;\n            }\n            // 4.重新设置元素的位置\n            ele.style.marginLeft = begin + "px";\n        }, 100);\n    }\n\n    // 将函数绑定到window对象上, 这样全局就可以使用了\n    window.linearAnimation = linearAnimation;\n    window.easeAnimation = easeAnimation;\n})();\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);