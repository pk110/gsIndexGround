webpackJsonp([7],{oRln:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={data:function(){return{pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-7776e6),t.$emit("pick",[a,e])}}]},search:"",city:[],cities:["全部","上海","北京","广州","深圳"],time:"",date:"",timeAround:[],times:["全部","全天","0:00-12:00","12:00-18:00","18:00-24:00"],data:[{name:"aa",img:"https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=229445282,848378121&fm=202&mola=new&crop=v1",url:"https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=229445282,848378121&fm=202&mola=new&crop=v1",city:"武汉",detail:"关联了三个菜品",date:"2018-2019",time:"00:00-06:00"},{name:"bb",img:"https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=229445282,848378121&fm=202&mola=new&crop=v1",url:"https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=229445282,848378121&fm=202&mola=new&crop=v1",city:"武汉",detail:"关联了三个菜品",date:"2018-2019",time:"00:00-06:00"},{name:"cc",img:"https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=229445282,848378121&fm=202&mola=new&crop=v1",url:"https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=229445282,848378121&fm=202&mola=new&crop=v1",city:"武汉",detail:"关联了三个菜品",date:"2018-2019",time:"00:00-06:00"},{name:"dd",img:"https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=229445282,848378121&fm=202&mola=new&crop=v1",url:"https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=229445282,848378121&fm=202&mola=new&crop=v1",city:"武汉",detail:"关联了三个菜品",date:"2018-2019",time:"00:00-06:00"}]}},methods:{searchBanner:function(){this.$stamp(null,this.search)},chooseCity:function(t){this.$stamp(null,t)},chooseTimeAll:function(t){this.$stamp(null,t)},chooseDate:function(t){this.$stamp(null,t)},chooseTime:function(t){this.$stamp(null,t)}},computed:{},components:{},created:function(){}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"hot_head"},[a("router-link",{attrs:{to:"/manager/hotDetail"}},[a("el-button",{staticStyle:{color:"#fff","background-color":"#ed6f00",padding:"10px 20px","font-size":"14px","border-radius":"30px"},attrs:{size:"small"}},[t._v("+ 新增活动")])],1),t._v(" "),a("el-input",{staticClass:"hot_search",staticStyle:{width:"240px"},attrs:{size:"small",placeholder:"搜索品牌、商品名称","prefix-icon":"el-icon-search"},on:{blur:t.searchBanner},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),a("div",{staticClass:"hot_choose"},[a("div",{staticClass:"hot_choose_city",staticStyle:{"margin-top":"0"}},[a("span",{staticStyle:{"padding-right":"20px",color:"#000000"}},[t._v("展示城市: ")]),t._v(" "),a("el-radio-group",{on:{change:t.chooseCity},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}},t._l(t.cities,function(e){return a("el-radio",{key:e,attrs:{label:e}},[t._v(t._s(e))])}))],1),t._v(" "),a("div",{staticClass:"hot_choose_city"},[a("span",{staticStyle:{"padding-right":"20px",color:"#000000"}},[t._v("时间: ")]),t._v(" "),a("el-radio-group",{staticStyle:{"padding-right":"20px"},on:{change:t.chooseTimeAll},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}},[a("el-radio",{attrs:{label:1}},[t._v("全部")])],1),t._v(" "),a("el-date-picker",{attrs:{size:"small",type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions},on:{change:t.chooseDate},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1),t._v(" "),a("div",{staticClass:"hot_choose_city"},[a("span",{staticStyle:{"padding-right":"20px",color:"#000000"}},[t._v("时段: ")]),t._v(" "),a("el-radio-group",{on:{change:t.chooseTime},model:{value:t.timeAround,callback:function(e){t.timeAround=e},expression:"timeAround"}},t._l(t.times,function(e){return a("el-radio",{key:e,attrs:{label:e}},[t._v(t._s(e))])}))],1)]),t._v(" "),a("el-table",{staticClass:"hot_table",staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.data}},[a("el-table-column",{attrs:{prop:"name",align:"center",label:"标题"}}),t._v(" "),a("el-table-column",{attrs:{prop:"img",align:"center",label:"海报"}}),t._v(" "),a("el-table-column",{attrs:{prop:"url",align:"center",label:"文章链接"}}),t._v(" "),a("el-table-column",{attrs:{prop:"city",align:"center",label:"展示城市"}}),t._v(" "),a("el-table-column",{attrs:{prop:"date",align:"center",label:"时间"}}),t._v(" "),a("el-table-column",{attrs:{prop:"time",align:"center",label:"时段"}}),t._v(" "),a("el-table-column",{attrs:{prop:"detail",align:"center",label:"详情"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作"}})],1)],1)},staticRenderFns:[]};var o=a("C7Lr")(i,l,!1,function(t){a("tfso")},null,null);e.default=o.exports},tfso:function(t,e){}});
//# sourceMappingURL=7.e158c21c2bedeab2a87a.js.map