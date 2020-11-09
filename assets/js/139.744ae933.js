(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{557:function(s,n,t){"use strict";t.r(n);var a=t(42),i=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"static之静态变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#static之静态变量"}},[s._v("#")]),s._v(" static之静态变量")]),s._v(" "),t("h4",{attrs:{id:"java-中被-static修饰的成员称为静态成员或类成员。它属于整个类所有-而不是某个对象所有-即被类的所有对象所共享。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-中被-static修饰的成员称为静态成员或类成员。它属于整个类所有-而不是某个对象所有-即被类的所有对象所共享。"}},[s._v("#")]),s._v(" Java 中被 static修饰的成员称为静态成员或类成员。它属于整个类所有，而不是某个对象所有，即被类的所有对象所共享。")]),s._v(" "),t("h5",{attrs:{id:"可参考java程序设计基础-第四版-第109页"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可参考java程序设计基础-第四版-第109页"}},[s._v("#")]),s._v(" 可参考Java程序设计基础（第四版）第109页")]),s._v(" "),t("p",[s._v("1.对于类的任何一个具体对象而言，静态变量是一个公共的储存单元，任何一个类的对象访问他时，都是一个值，同样，任何一个类的对修改它时，也都是在同一个内存单元做操作。")]),s._v(" "),t("p",[s._v("2.静态成员可以使用类名直接访问，也可以使用对象名进行访问。当然，鉴于他作用的特殊性更推荐用类名访问~~")]),s._v(" "),t("p",[s._v("3.静态方法中可以直接调用同类中的静态成员，但不能直接调用非静态成员。")]),s._v(" "),t("p",[s._v("4.如果希望在静态方法中调用非静态变量，可以通过创建类的对象，然后通过对象来访问非静态变量\n使用 static 可以修饰变量、方法和代码块。")]),s._v(" "),t("h6",{attrs:{id:"本小节-我们先认识一下静态变量。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本小节-我们先认识一下静态变量。"}},[s._v("#")]),s._v(" 本小节，我们先认识一下静态变量。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(' package draw_01;\n\n public class statics {\n\n\tstatic String hobby="imooc";\n\tString hobby2="imooc2";\n\n\tpublic static void main (String args[]){\n\t//静态变量可以直接使用类名来访问，无需创建对象\n\t\tSystem.out.println("通过类名访问hobby："+statics.hobby);//imooc\n\t\t         //System.out.println("通过类名访问hobby2："+statics.hobby2);被报错\n\t\tSystem.out.println("===================");\n\t//通过创建对象来访问\n\t\tstatics hell = new statics();\n\t\tSystem.out.println("通过对象名来访问hobby："+hell.hobby);//imooc\n\t\tSystem.out.println("通过对象名来访问hobby2:"+hell.hobby2);//imooc2\n\t\tSystem.out.println("====================");\n\t//适用对象名对变量的值进行修改，静态变量的值发生改变\n\t\thell.hobby="你好";\n\t\thell.hobby2="你好";\n\t\tSystem.out.println("通过类名来访问hobby："+statics.hobby);//你好\n\t\tSystem.out.println("直接访问输出hobby："+hobby);//你好\n\t\tSystem.out.println("===================");\n\t\t        //\tSystem.out.println("直接访问输出hobby2："+hobby2);被报错，不能在静态方法中直接访问非静态变量\n    //在新建一个对象，判断值的变化情况\n        statics  hell2=new statics();\n        System.out.println(hell2.hobby);//你好\n        System.out.println(hell2.hobby2);//imooc2\n\t}\n}\n\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br")])]),t("p",[s._v("运行结果：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("通过类名访问hobby：imooc\n===================\n通过对象名来访问hobby：imooc\n通过对象名来访问hobby2:imooc2\n====================\n通过类名来访问hobby：你好\n直接访问输出hobby：你好\n===================\n你好\nimooc2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h1",{attrs:{id:"static之静态方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#static之静态方法"}},[s._v("#")]),s._v(" static之静态方法")]),s._v(" "),t("p",[s._v("1.在普通成员方法中，则可以直接访问同类的非静态变量和静态变量。")]),s._v(" "),t("p",[s._v("2.静态方法中不能直接调用非静态方法，需要通过对象来访问非静态方法。")]),s._v(" "),t("p",[s._v("3.在静态方法中不能使用this或super。因为this是代表调用该方法的对象，但现在“静态方法”既然不需要对象来调用，this也自然不该存在于“静态方法”内部.")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('package draw_01;\n\npublic class statics {\n\t//创建一个普通方法\n\tpublic void show(){\n\t\tSystem.out.println("你好！");\n\t}\n\t//静态方法\n\tpublic static void sho(){\n\t\tSystem.out.println("你好！");\n\t}\n\tpublic static void main(String[] args) {\n\t\t//普通方法必须通过创建对象来调用\n\t\tstatics m=new statics();\n\t\tm.show();\n\t\t//静态方法可以直接调用\n\t\tsho();\n\t}}\n    \n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("p",[s._v("运行结果：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("你好！\n你好！\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h1",{attrs:{id:"static之静态初始化块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#static之静态初始化块"}},[s._v("#")]),s._v(" static之静态初始化块")]),s._v(" "),t("p",[s._v("组成：static{}")]),s._v(" "),t("p",[s._v("作用：完成初始化工作，与构造方法有点像")]),s._v(" "),t("p",[s._v("与构造方法的区别：")]),s._v(" "),t("ol",[t("li",[s._v("构造方法是对每个新创建对象进行初始化，而静态初始化器是对类自身进行初始化。")]),s._v(" "),t("li",[s._v("new一个对象，构造方法自动执行。静态初始化器一般不能被调用，自动执行。")]),s._v(" "),t("li",[s._v("new多少个对象，静态方法就会执行多少次；静态初始化器却只会执行一次，与创建多少个对象无关。")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('package draw_01;\n\npublic class statics {\n    int num1;//声明变量num1\n    int num2;//声明变量num2\n    static int num3;//声明静态变量num3\n    public statics (){//构造器\n    \tnum1=1;\n    \tSystem.out.println("通过构造方法对变量num1赋值");\n    }\n    {//初始化块\n    \tnum2=2;System.out.println("通过初始化块对num2赋值");\n    }\n    \n    static {//静态初始化块\n    \tnum3=3;System.out.println("通过静态初始化块为num3赋值");\n    \t}\n\tpublic static void main(String[] args) {\n\t\tstatics name=new statics();//创建对象\n\t\tSystem.out.println("num1="+name.num1);\n\t\tSystem.out.println("num2="+name.num2);\n\t\tSystem.out.println("num3="+num3);\n\t\tstatics name2 =new statics();//创建对象\n\t}\n\t}\n\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])]),t("p",[s._v("运行结果：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("通过静态初始化块为num3赋值\n通过初始化块对num2赋值\n通过构造方法对变量num1赋值\nnum1=1\nnum2=2\nnum3=3\n通过初始化块对num2赋值\n通过构造方法对变量num1赋值\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),t("p",[s._v("能不用静态的尽量还是不要用静态啦，用得太多就太占内存啦。")])])}),[],!1,null,null,null);n.default=i.exports}}]);