webpackJsonp([19,24],{2:/*!********************************!*\
  !*** ./example/views/index.js ***!
  \********************************/
function(e,n,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0}),n.Mark=void 0;var r=a(7),o=l(r);n.Mark=o["default"]},3:/*!****************************************************************************************************************************************************************!*\
  !*** ./~/babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!./~/vue-loader/lib/selector.js?type=script&index=0!./example/views/mark.vue ***!
  \****************************************************************************************************************************************************************/
function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(e){var n=document.createElement("div");return n.innerHTML=e,n.innerText||n.textContent};n["default"]={data:function(){return{mark:""}},ready:function(){this.mark=window.marked(a(this.$el.getElementsByClassName("ex-mark-text")[0].innerHTML))}}},4:/*!************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/vue-loader/lib/selector.js?type=style&index=0!./example/views/mark.vue ***!
  \************************************************************************************************************************************************/
function(e,n,a){n=e.exports=a(9)(),n.push([e.id,".ex-mark-text{display:none}.marked code{display:block;background:#f7f7f7;padding:1rem;color:#999;font-size:.8rem;line-height:1.2;overflow-x:auto}.marked{font-size:.9rem;line-height:1.8;color:#666}.marked h1{font-size:1.6rem}.marked h2{font-size:1.2rem}.marked blockquote{font-size:90%;color:#999;border-left:4px solid #e9e9e9;padding-left:.8em;margin:1em 0;font-style:italic}.marked ul,ol{padding:0 2rem;list-style:inherit}@media screen and (max-width:768px){.ex-card{margin:0}}","",{version:3,sources:["/./example/views/mark.vue"],names:[],mappings:"AACA,cACI,YAAc,CACjB,AACD,aACI,cAAe,AACf,mBAAoB,AACpB,aAAc,AACd,WAAY,AACZ,gBAAiB,AACjB,gBAAiB,AACjB,eAAiB,CACpB,AACD,QACI,gBAAiB,AACjB,gBAAiB,AACjB,UAAY,CACf,AACD,WACI,gBAAkB,CACrB,AACD,WACI,gBAAkB,CACrB,AACD,mBACI,cAAe,AACf,WAAY,AACZ,8BAA+B,AAC/B,kBAAmB,AACnB,aAAc,AACd,iBAAmB,CACtB,AACD,cACI,eAAgB,AAChB,kBAAoB,CACvB,AACD,oCACI,SACI,QAAU,CACb,CACJ",file:"mark.vue",sourcesContent:["\n.ex-mark-text {\n    display: none;\n}\n.marked code {\n    display: block;\n    background: #f7f7f7;\n    padding: 1rem;\n    color: #999;\n    font-size: .8rem;\n    line-height: 1.2;\n    overflow-x: auto;\n}\n.marked {\n    font-size: .9rem;\n    line-height: 1.8;\n    color: #666;\n}\n.marked h1 {\n    font-size: 1.6rem;\n}\n.marked h2 {\n    font-size: 1.2rem;\n}\n.marked blockquote {\n    font-size: 90%;\n    color: #999;\n    border-left: 4px solid #e9e9e9;\n    padding-left: .8em;\n    margin: 1em 0;\n    font-style: italic;\n}\n.marked ul, ol {\n    padding: 0 2rem;\n    list-style: inherit;\n}\n@media screen and (max-width: 768px) {\n    .ex-card {\n        margin: 0;\n    }\n}\n"],sourceRoot:"webpack://"}])},5:/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/extract-text-webpack-plugin/loader.js?{"omit":1,"extract":true,"remove":true}!./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/vue-loader/lib/selector.js?type=style&index=0!./example/views/mark.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
function(e,n,a){var l=a(4);"string"==typeof l&&(l=[[e.id,l,""]]),a(10)(l,{}),l.locals&&(e.exports=l.locals)},6:/*!*********************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./example/views/mark.vue ***!
  \*********************************************************************************************************/
function(e,n){e.exports="<div class=marked> <div> {{{mark}}} </div> <slot></slot> </div>"},7:/*!********************************!*\
  !*** ./example/views/mark.vue ***!
  \********************************/
function(e,n,a){var l,r;a(5),l=a(3),r=a(6),e.exports=l||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},287:/*!*************************************************************************************************************************************************************************!*\
  !*** ./~/babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!./~/vue-loader/lib/selector.js?type=script&index=0!./example/views/form/cascader.vue ***!
  \*************************************************************************************************************************************************************************/
function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var l=a(2),r=a(8),o=[{value:"china",label:"中国",children:[{value:"sichuan",label:"四川",children:[{value:"chegndu",label:"成都"},{value:"deyang",label:"德阳"}]}]},{value:"America",label:"美国",children:[{value:"California",label:"加利福尼亚",children:[{value:"lake",label:"湖"},{value:"Los Angeles",label:"洛杉矶"}]},{value:"Delaware",label:"特拉华",children:[{value:"Dover",label:"多佛"}]}]},{value:"china",label:"中国",children:[{value:"sichuan",label:"四川",children:[{value:"chegndu",label:"成都"},{value:"deyang",label:"德阳"}]}]},{value:"America",label:"美国",children:[{value:"California",label:"加利福尼亚",children:[{value:"lake",label:"湖"},{value:"Los Angeles",label:"洛杉矶"}]},{value:"Delaware",label:"特拉华",children:[{value:"Dover",label:"多佛"}]}]},{value:"china",label:"中国",children:[{value:"sichuan",label:"四川",children:[{value:"chegndu",label:"成都"},{value:"deyang",label:"德阳"}]}]},{value:"America",label:"美国",children:[{value:"California",label:"加利福尼亚",children:[{value:"lake",label:"湖"},{value:"Los Angeles",label:"洛杉矶"}]},{value:"Delaware",label:"特拉华",children:[{value:"Dover",label:"多佛"}]}]}];n["default"]={data:function(){return{cascader:{options:o,valueArr:[]}}},components:{radonCascader:r.radonCascader,Mark:l.Mark}}},519:/*!******************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./example/views/form/cascader.vue ***!
  \******************************************************************************************************************/
function(e,n){e.exports="<div class=ex-content> <div class=ex-card> <mark> <textarea class=ex-mark-text>\n# Cascader 级联选择\n级联选择框。\n\n## 何时使用\n\n - 需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。\n - 从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。\n - 比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验。\n        </textarea> </mark> <p> <radon-cascader :cascader=cascader></radon-cascader> </p> <mark> <textarea class=ex-mark-text>\n# API\n\n## cascader \ncascader 是级联组件的数据对象，它有选项数组 options 和 结果数组 valueArr\n```\ncascader: {\n    options: options,\n    valueArr: []\n}\n\n<radon-cascader :cascader=cascader></radon-cascader>\n```\n## options\noptions 带选取的级联数据\n```\nconst options = [{\n    // label 是级联选项展示值\n    label: '中国',\n\n    // value 是对象自定义属性\n    value: 'china',\n    // 也可以自定义其他属性\n    sku: '2234234',\n    id: 'j4jb345jb34j5',\n\n    // 该对象的子选项数组\n    children: [{\n        value: 'sichuan',\n        label: '四川',\n        children: [{\n            value: 'chegndu',\n            label: '成都'\n        }, {\n            value: 'deyang',\n            label: '德阳'\n        }]\n    }]\n}]\n```\n## valueArr\n选择结果数组\n\n```\n// 比如一次选择 美国 加利福尼亚 洛杉矶 valueArr会得到这样的数组\nvalueArr: [{\n    value: 'America',\n    label: '美国'\n}, {\n    value: 'California',\n    label: '加利福尼亚'\n}, {\n    value: 'Los Angeles',\n    label: '洛杉矶'\n}]\n```\n\n        </textarea> </mark> <mark> <textarea class=ex-mark-text>\n## 完整示例代码\n```javascript\nconst options = [{\n    value: 'china',\n    label: '中国',\n    children: [{\n        value: 'sichuan',\n        label: '四川',\n        children: [{\n            value: 'chegndu',\n            label: '成都'\n        }, {\n            value: 'deyang',\n            label: '德阳'\n        }]\n    }]\n}, {\n    value: 'America',\n    label: '美国',\n    children: [{\n        value: 'California',\n        label: '加利福尼亚',\n        children: [{\n            value: 'lake',\n            label: '湖'\n        }, {\n            value: 'Los Angeles',\n            label: '洛杉矶'\n        }]\n    }, {\n        value: 'Delaware',\n        label: '特拉华',\n        children: [{\n            value: 'Dover',\n            label: '多佛'\n        }]\n    }]\n}]\n\nexport default {\n    template: '<radon-cascader :cascader=cascader></radon-cascader>',\n    data () {\n        return {\n            cascader: {\n                options: options,\n                valueArr: []\n            }\n        }\n    },\n    components: {\n        radonCascader\n    }\n}\n```\n        </textarea> </mark> </div> </div>"},547:/*!*****************************************!*\
  !*** ./example/views/form/cascader.vue ***!
  \*****************************************/
function(e,n,a){var l,r;l=a(287),r=a(519),e.exports=l||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)}});