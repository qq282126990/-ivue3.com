(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fcbc842"],{4468:function(e,t,n){},"7e95":function(e,t,n){"use strict";n("4468")},ccce:function(e,t,n){"use strict";n("f95a")},d404:function(e,t,n){"use strict";n.r(t);var o=n("7a23");const a={default:"<template>\n    <ivue-table v-loading=\"loading\" :data=\"tableData\">\n        <ivue-table-column prop=\"date\" label=\"Date\" width=\"180\" />\n        <ivue-table-column prop=\"name\" label=\"Name\" width=\"180\" />\n        <ivue-table-column prop=\"address\" label=\"Address\" />\n    </ivue-table>\n</template>\n\n<script setup>\nimport { ref } from 'vue';\n\nconst loading = ref(true);\n\nconst tableData = [\n    {\n        date: '2016-05-02',\n        name: 'John Smith',\n        address: 'No.1518,  Jinshajiang Road, Putuo District',\n    },\n    {\n        date: '2016-05-04',\n        name: 'John Smith',\n        address: 'No.1518,  Jinshajiang Road, Putuo District',\n    },\n    {\n        date: '2016-05-01',\n        name: 'John Smith',\n        address: 'No.1518,  Jinshajiang Road, Putuo District',\n    },\n];\n<\/script>\n",customize:'<template>\n    <ivue-table\n        v-loading="loading"\n        :data="tableData"\n        ivue-loading-text="Loading..."\n        ivue-loading-background="rgba(0, 0, 0, 0.8)"\n    >\n        <ivue-table-column prop="date" label="Date" width="180" />\n        <ivue-table-column prop="name" label="Name" width="180" />\n        <ivue-table-column prop="address" label="Address" />\n    </ivue-table>\n    <ivue-table\n        v-loading="loading"\n        ivue-loading-icon-class="ivue-loop-icon ivue-icon ivue-animation-loop"\n        ivue-loading-icon-text="loop"\n        :data="tableData"\n    >\n        <ivue-table-column prop="date" label="Date" width="180" />\n        <ivue-table-column prop="name" label="Name" width="180" />\n        <ivue-table-column prop="address" label="Address" />\n    </ivue-table>\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\n\nconst loading = ref(true);\n\nconst tableData = [\n    {\n        date: \'2016-05-02\',\n        name: \'John Smith\',\n        address: \'No.1518,  Jinshajiang Road, Putuo District\',\n    },\n    {\n        date: \'2016-05-04\',\n        name: \'John Smith\',\n        address: \'No.1518,  Jinshajiang Road, Putuo District\',\n    },\n    {\n        date: \'2016-05-01\',\n        name: \'John Smith\',\n        address: \'No.1518,  Jinshajiang Road, Putuo District\',\n    },\n];\n<\/script>\n\n<style>\n.ivue-loop-icon {\n    font-size: 40px !important;\n}\n</style>\n',fullscreen:'<template>\n    <ivue-button\n        class="button"\n        v-loading.fullscreen.lock="loading"\n        type="primary"\n        @click="handleOpen1"\n    >锁定屏幕滚动</ivue-button>\n    <ivue-button class="button" type="primary" @click="handleOpen2">不锁定屏幕滚动,使用命令调用</ivue-button>\n    <ivue-button class="button" type="primary" @click="handleOpen3">使用命令调用,自定义旋转图标</ivue-button>\n</template>\n\n<script setup>\nimport { ref, getCurrentInstance, h } from \'vue\';\n\nconst { proxy } = getCurrentInstance();\n\nconst loading = ref(false);\n\nconst handleOpen1 = () => {\n    loading.value = true;\n\n    setTimeout(() => {\n        loading.value = false;\n    }, 2000);\n};\n\nconst handleOpen2 = () => {\n    const loading = proxy.$loading({\n        lock: false,\n        text: \'Loading...\',\n        background: \'rgba(0, 0, 0, 0.7)\',\n    });\n\n    setTimeout(() => {\n        loading.close();\n    }, 2000);\n};\n\nconst handleOpen3 = () => {\n    const loading = proxy.$loading({\n        text: \'Loading...\',\n        background: \'rgba(0, 0, 0, 0.7)\',\n        loadingSpinner: () => h(\'i\', {\n          class: \'ivue-loop-icon ivue-icon ivue-animation-loop\'\n        }, [\'loop\']),\n    });\n\n    setTimeout(() => {\n        loading.close();\n    }, 2000);\n};\n<\/script>\n\n<style>\n.button {\n    margin-right: 10px !important;\n}\n</style>\n',setup:"const { proxy } = getCurrentInstance();\n\nproxy.$loading(options)\n",close:"const loadingInstance = IvueLoading.$loading(options)\n\nloadingInstance.close()\n",singleton:"const loadingInstance1 = IvueLoading.service({ fullscreen: true })\nconst loadingInstance2 = IvueLoading.service({ fullscreen: true })\n// true\nconsole.log(loadingInstance1 === loadingInstance2)\n"};var c=a,l={__name:"default",setup(e){const t=Object(o["ref"])(!0),n=[{date:"2016-05-02",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-04",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-01",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"}];return(e,a)=>{const c=Object(o["resolveComponent"])("ivue-table-column"),l=Object(o["resolveComponent"])("ivue-table"),d=Object(o["resolveDirective"])("loading");return Object(o["withDirectives"])((Object(o["openBlock"])(),Object(o["createBlock"])(l,{data:n},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,{prop:"date",label:"Date",width:"180"}),Object(o["createVNode"])(c,{prop:"name",label:"Name",width:"180"}),Object(o["createVNode"])(c,{prop:"address",label:"Address"})]),_:1})),[[d,t.value]])}}};const d=l;var i=d,r={__name:"customize",setup(e){const t=Object(o["ref"])(!0),n=[{date:"2016-05-02",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-04",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-01",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"}];return(e,a)=>{const c=Object(o["resolveComponent"])("ivue-table-column"),l=Object(o["resolveComponent"])("ivue-table"),d=Object(o["resolveDirective"])("loading");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["withDirectives"])((Object(o["openBlock"])(),Object(o["createBlock"])(l,{data:n,"ivue-loading-text":"Loading...","ivue-loading-background":"rgba(0, 0, 0, 0.8)"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,{prop:"date",label:"Date",width:"180"}),Object(o["createVNode"])(c,{prop:"name",label:"Name",width:"180"}),Object(o["createVNode"])(c,{prop:"address",label:"Address"})]),_:1})),[[d,t.value]]),Object(o["withDirectives"])((Object(o["openBlock"])(),Object(o["createBlock"])(l,{"ivue-loading-icon-class":"ivue-loop-icon ivue-icon ivue-animation-loop","ivue-loading-icon-text":"loop",data:n},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,{prop:"date",label:"Date",width:"180"}),Object(o["createVNode"])(c,{prop:"name",label:"Name",width:"180"}),Object(o["createVNode"])(c,{prop:"address",label:"Address"})]),_:1})),[[d,t.value]])],64)}}};n("7e95");const u=r;var s=u,b={__name:"fullscreen",setup(e){const{proxy:t}=Object(o["getCurrentInstance"])(),n=Object(o["ref"])(!1),a=()=>{n.value=!0,setTimeout(()=>{n.value=!1},2e3)},c=()=>{const e=t.$loading({lock:!1,text:"Loading...",background:"rgba(0, 0, 0, 0.7)"});setTimeout(()=>{e.close()},2e3)},l=()=>{const e=t.$loading({text:"Loading...",background:"rgba(0, 0, 0, 0.7)",loadingSpinner:()=>Object(o["h"])("i",{class:"ivue-loop-icon ivue-icon ivue-animation-loop"},["loop"])});setTimeout(()=>{e.close()},2e3)};return(e,t)=>{const d=Object(o["resolveComponent"])("ivue-button"),i=Object(o["resolveDirective"])("loading");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["withDirectives"])((Object(o["openBlock"])(),Object(o["createBlock"])(d,{class:"button",type:"primary",onClick:a},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("锁定屏幕滚动")]),_:1})),[[i,n.value,void 0,{fullscreen:!0,lock:!0}]]),Object(o["createVNode"])(d,{class:"button",type:"primary",onClick:c},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("不锁定屏幕滚动,使用方法调用")]),_:1}),Object(o["createVNode"])(d,{class:"button",type:"primary",onClick:l},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("使用方法调用,自定义旋转图标")]),_:1})],64)}}};n("ccce");const p=b;var m=p;const j=Object(o["createStaticVNode"])("<h1>区域加载</h1><p>在需要的时候展示加载动画，防止页面失去响应提高用户体验（例如表格)</p><h2>基础用法</h2><p>该组件提供了两种调用 Loading 的方法：指令和服务</p><p> 对于自定义指令 <code>v-loading</code>，只需要绑定 <code>boolean</code> 值即可 </p><p> 通过添加 <code>body</code> 修饰符，可以使遮罩插入至 <code>Dom</code> 中的 <code>body</code> 上 </p>",6),O=Object(o["createStaticVNode"])("<h2>自定义加载中组件内容</h2><p>你可以自定义加载中组件的文字，图标，以及背景颜色</p><p> 在绑定了 <code>v-loading</code> 指令的元素上添加 <code>ivue-loading-text</code> 属性，其值会被渲染为加载文案，并显示在加载图标的下方 </p><p><code>ivue-loading-spinner</code>自定义加载图标类名， <code>ivue-loading-background</code>遮罩背景色， <code>ivue-loading-icon-class</code>自定义加载图标类名， <code>ivue-loading-icon-text</code>自定义加载图标的内容 </p>",4),g=Object(o["createElementVNode"])("h2",null,"让加载组件铺满整个屏幕",-1),v=Object(o["createElementVNode"])("p",null,"加载数据时显示全屏动画",-1),h=Object(o["createElementVNode"])("p",null,[Object(o["createTextVNode"])(" 当使用指令方式时，全屏遮罩需要添加 "),Object(o["createElementVNode"])("code",null,"fullscreen"),Object(o["createTextVNode"])("修饰符（遮罩会插入至 "),Object(o["createElementVNode"])("code",null,"body"),Object(o["createTextVNode"])(" 上） ")],-1),N=Object(o["createElementVNode"])("p",null,[Object(o["createTextVNode"])(" 此时若需要锁定屏幕的滚动，可以使用 "),Object(o["createElementVNode"])("code",null,"lock"),Object(o["createTextVNode"])("修饰符； 当使用服务方式时，遮罩默认即为全屏，无需额外设置 ")],-1),V=Object(o["createElementVNode"])("h2",null,"以方法的方式来调用",-1),f=Object(o["createElementVNode"])("p",null,[Object(o["createElementVNode"])("code",null,"Loading"),Object(o["createTextVNode"])(" 还可以以方法的方式调用。 你可以像这样引入 "),Object(o["createElementVNode"])("code",null,"Loading"),Object(o["createTextVNode"])(" 方法 ")],-1),x=Object(o["createElementVNode"])("p",null,"在你需要的时候通过下面的方式调用",-1),y=Object(o["createElementVNode"])("p",null,[Object(o["createTextVNode"])(" 在 "),Object(o["createElementVNode"])("code",null,"setup"),Object(o["createTextVNode"])("中使用 ")],-1),w=Object(o["createElementVNode"])("p",null,[Object(o["createTextVNode"])(" 其中 "),Object(o["createElementVNode"])("code",null,"options"),Object(o["createTextVNode"])("参数为 "),Object(o["createElementVNode"])("code",null,"Loading"),Object(o["createTextVNode"])(" 的配置项，具体见下表 ")],-1),k=Object(o["createElementVNode"])("p",null,[Object(o["createElementVNode"])("code",null,"Loading"),Object(o["createTextVNode"])(" 会返回一个 "),Object(o["createElementVNode"])("code",null,"Loading"),Object(o["createTextVNode"])(" 实例，可通过调用该实例的 "),Object(o["createElementVNode"])("code",null,"close"),Object(o["createTextVNode"])(" 方法来关闭它： ")],-1),D=Object(o["createElementVNode"])("p",null,"需要注意的是，以服务的方式调用的全屏 Loading 是单例的。 若在前一个全屏 Loading 关闭前再次调用全屏 Loading，并不会创建一个新的 Loading 实例，而是返回现有全屏 Loading 的实例",-1),C=Object(o["createStaticVNode"])("<p> 此时调用它们中任意一个的 <code>close</code> 方法都能关闭这个全屏 <code>Loading</code></p><p> 如果完整引入了 Ivue Material Plus，那么 <code>app.config.globalProperties</code>上会有一个全局方法， <code>$loading</code>， 它的调用方式为： <code>this.$loading(options)</code>，同样会返回一个 <code>Loading</code> 实例。 </p><h2>Options</h2>",3),T=["innerHTML"],L=Object(o["createElementVNode"])("h2",null,"Directives",-1),E=["innerHTML"];var S={__name:"index",setup(e){const t=Object(o["ref"])(c),n=Object(o["ref"])([{name:"target",illustrate:"<code>Loading</code> 需要覆盖的 <code>DOM</code> 节点。 可传入一个 <code>DOM</code> 对象或字符串； 若传入字符串，则会将其作为参数传入 <code>document.querySelector</code> 以获取到对应 <code>DOM</code> 节点",type:"Object | String",default:"document.body"},{name:"body",illustrate:"同 <code>v-loading</code> 指令中的 <code>body</code> 修饰符，使遮罩插入至 <code>Dom</code> 中的 <code>body</code> 上",type:"Boolean",default:"false"},{name:"fullscreen",illustrate:"同 <code>v-loading</code> 指令中的 <code>fullscreen</code> 修饰符，让加载组件铺满整个屏幕",type:"Boolean",default:"true"},{name:"lock",illustrate:"同 <code>v-loading</code> 指令中的 <code>lock</code> 修饰符，锁定屏幕的滚动",type:"Boolean",default:"true"},{name:"text",illustrate:"显示在加载图标下方的加载文案",type:"String",default:"-"},{name:"spinner",illustrate:"自定义加载图标类名",type:"String",default:"-"},{name:"background",illustrate:"遮罩背景色",type:"String",default:"-"},{name:"custom-class",illustrate:"Loading 的自定义类名",type:"String",default:"-"},{name:"icon-class",illustrate:"自定义加载图标类名",type:"String",default:"-"},{name:"icon-text",illustrate:"自定义加载图标内容",type:"String",default:"-"},{name:"loading-spinner",illustrate:"通过 <code>Render</code> 函数，自定义旋转图标",type:"VNode",default:"-"}]),a=Object(o["ref"])([{name:"v-loading",illustrate:"是否显示动画",type:"Boolean"},{name:"ivue-loading-text",illustrate:"显示在加载图标下方的加载文案",type:"string"},{name:"ivue-loading-background",illustrate:"遮罩背景色",type:"string"},{name:"ivue-loading-icon-class",illustrate:"自定义加载图标类名",type:"string"},{name:"ivue-loading-icon-text",illustrate:"自定义加载图标内容",type:"string"},{name:"ivue-loading-custom-class",illustrate:"<code>Loading</code> 的自定义类名",type:"string"}]);return(e,c)=>{const l=Object(o["resolveComponent"])("doc-markdown"),d=Object(o["resolveComponent"])("pre-code"),r=Object(o["resolveComponent"])("ivue-table-column"),u=Object(o["resolveComponent"])("ivue-table");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,[j,Object(o["createVNode"])(l,{code:t.value.default},{demo:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i)]),_:1},8,["code"]),O,Object(o["createVNode"])(l,{code:t.value.customize},{demo:Object(o["withCtx"])(()=>[Object(o["createVNode"])(s)]),_:1},8,["code"]),g,v,h,N,Object(o["createVNode"])(l,{code:t.value.fullscreen},{demo:Object(o["withCtx"])(()=>[Object(o["createVNode"])(m)]),_:1},8,["code"]),V,f,Object(o["createVNode"])(d,null,{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("import { IvueLoading } from 'ivue-material-plus'")]),_:1}),x,Object(o["createVNode"])(d,null,{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("IvueLoading.$loading(options)")]),_:1}),y,Object(o["createVNode"])(d,null,{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(t.value.setup),1)]),_:1}),w,k,Object(o["createVNode"])(d,null,{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(t.value.close),1)]),_:1}),D,Object(o["createVNode"])(d,null,{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(t.value.singleton),1)]),_:1}),C,Object(o["createVNode"])(u,{data:n.value,border:""},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(r,{prop:"name",label:"名称",width:"200"}),Object(o["createVNode"])(r,{prop:"illustrate",label:"说明","min-width":"300"},{default:Object(o["withCtx"])(e=>[Object(o["createElementVNode"])("p",{innerHTML:e.row.illustrate},null,8,T)]),_:1}),Object(o["createVNode"])(r,{prop:"type",label:"类型",width:"200"}),Object(o["createVNode"])(r,{prop:"default",label:"默认值",width:"200"})]),_:1},8,["data"]),L,Object(o["createVNode"])(u,{data:a.value,border:""},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(r,{prop:"name",label:"名称",width:"200"}),Object(o["createVNode"])(r,{prop:"illustrate",label:"说明","min-width":"300"},{default:Object(o["withCtx"])(e=>[Object(o["createElementVNode"])("p",{innerHTML:e.row.illustrate},null,8,E)]),_:1}),Object(o["createVNode"])(r,{prop:"type",label:"类型",width:"200"})]),_:1},8,["data"])])}}};const J=S;t["default"]=J},f95a:function(e,t,n){}}]);
//# sourceMappingURL=chunk-7fcbc842.bf624ac9.js.map