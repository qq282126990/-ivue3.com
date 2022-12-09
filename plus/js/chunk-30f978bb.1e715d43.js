(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30f978bb"],{"3e52":function(e,t,n){},6722:function(e,t,n){"use strict";n.r(t);var c=n("7a23");const o={import:"import 'ivue-material-plus/dist/styles/elevation.css';",default:'<template>\n    <link rel="stylesheet" href="//unpkg.com/ivue-material-plus/dist/styles/elevation.css">\n    <div class="elevation-demo">\n        <div\n            :class="`ivue-content ivue-elevation-${index}`"\n            v-for="(item, index) in length"\n            :key="index"\n        >{{ index }}</div>\n    </div>\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\n\nconst length = ref(25);\n<\/script>\n\n<style scoped>\n.elevation-demo {\n    padding: 16px;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.ivue-content {\n    width: 100px;\n    height: 100px;\n    margin: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n</style>'};var l=o;const a={class:"elevation-demo"};var i={__name:"default",setup(e){const t=Object(c["ref"])(25);return(e,n)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",a,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(t.value,(e,t)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:Object(c["normalizeClass"])("ivue-content ivue-elevation-"+t),key:t},Object(c["toDisplayString"])(t),3))),128))]))}},d=(n("9e5e"),n("6b0d")),r=n.n(d);const s=r()(i,[["__scopeId","data-v-d78847c6"]]);var u=s;const p=Object(c["createStaticVNode"])("<h1>Elevation 海拔</h1><p> 阴影提供有关物体深度和方向运动的重要视觉线索。它们是唯一的视觉提示，表明表面之间的分离量。 <code>Elevation</code> 确定其阴影的外观。 <code>Elevation</code>值在 <code>“Z-空间”</code>和范围映射出 <code>0</code>到 <code>24</code>的深度。你可以在 <code>class</code> 里面引入 <code>ivue-elevation-[size]</code> 设置显示的深度。 </p><h2>首先引入CSS</h2>",3),v=Object(c["createElementVNode"])("h2",null,"基本用法",-1),b=Object(c["createElementVNode"])("p",null,"基本用法，最简单的显示。",-1),m=Object(c["createElementVNode"])("h2",null,"API",-1),j=Object(c["createElementVNode"])("h3",null,"Class",-1),O=["innerHTML"];var f={__name:"index",setup(e){const t=Object(c["ref"])(l),n=Object(c["ref"])([{name:"ivue-elevation-[size]",illustrate:"向目标元素添加深度 ,大小可以是<code>0</code>到<code>24</code>.例如: <code>ivue-elevation-4</code>"}]);return(e,o)=>{const l=Object(c["resolveComponent"])("pre-code"),a=Object(c["resolveComponent"])("doc-markdown"),i=Object(c["resolveComponent"])("ivue-table-column"),d=Object(c["resolveComponent"])("ivue-table");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",null,[p,Object(c["createVNode"])(l,null,{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(Object(c["toDisplayString"])(t.value.import),1)]),_:1}),v,b,Object(c["createVNode"])(a,{code:t.value.default},{demo:Object(c["withCtx"])(()=>[Object(c["createVNode"])(Object(c["unref"])(u))]),_:1},8,["code"]),m,j,Object(c["createVNode"])(d,{data:n.value,border:""},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(i,{prop:"name",label:"名称",width:"200"}),Object(c["createVNode"])(i,{prop:"illustrate",label:"说明","min-width":"300"},{default:Object(c["withCtx"])(e=>[Object(c["createElementVNode"])("p",{innerHTML:e.row.illustrate},null,8,O)]),_:1})]),_:1},8,["data"])])}}};const h=f;t["default"]=h},"9e5e":function(e,t,n){"use strict";n("3e52")}}]);
//# sourceMappingURL=chunk-30f978bb.1e715d43.js.map