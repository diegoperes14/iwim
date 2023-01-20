(function(){"use strict";var a={7037:function(a,e,t){var o=t(144),r=t(1096),n=t(3250),i=t(1828),s=t(5057),c=t(2469),l=t(3551),u=t(5234),d=function(){var a=this,e=a._self._c;return e(r.Z,[e(n.Z,{attrs:{app:"",color:"primary",dark:""}},[e("div",{staticClass:"d-flex align-center"},[e(c.Z,{staticClass:"shrink mr-2",attrs:{alt:"UFPA Logo",contain:"",src:t(5380),transition:"scale-transition",width:"40"}})],1),e(u.Z),e(i.Z,{attrs:{href:"https://ppgeaa.propesp.ufpa.br/index.php/br/",target:"_blank",text:""}},[e("span",{staticClass:"mr-2"},[a._v("PPGEAA - UFPA")]),e(s.Z,[a._v("mdi-open-in-new")])],1)],1),e(l.Z,[e("router-view")],1)],1)},m=[],f={name:"AppApp",data:()=>({})},p=f,g=t(1001),v=(0,g.Z)(p,d,m,!1,null,null,null),b=v.exports,h=t(8345),Z=function(){var a=this,e=a._self._c;return e("pagina-principal")},_=[],x=t(4437),k=t(6035),y=t(5294),C=function(){var a=this,e=a._self._c;return e(k.Z,[e(y.Z,{staticClass:"text-center"},[e(x.Z,{staticClass:"mb-4"},[e("h2",{staticClass:"display-2 font-weight-bold mb-3"},[a._v(" IWIM "),e(s.Z,{attrs:{"x-large":""}},[a._v("mdi-beta")])],1),e("p",{staticClass:"subheading font-weight-regular"},[a._v(" Interface Web para Identificação de Melanoma (beta) ")])]),e(x.Z,{attrs:{cols:"12"}},[e(c.Z,{staticClass:"mx-auto",attrs:{src:t(9322),contain:"",width:"200"}})],1),e(x.Z,{attrs:{cols:"12"}},[e(i.Z,{attrs:{block:"",elevation:"2",color:"primary"},on:{click:a.abrirJanelaVerificacao}},[a._v("VERIFICAR UMA IMAGEM")])],1),e(x.Z,{attrs:{cols:"12"}},[e(i.Z,{attrs:{block:"",elevation:"2",color:"primary"},on:{click:a.abrirJanelaSubimissao}},[a._v("SUBMETER UMA IMAGEM")])],1),e(x.Z,{attrs:{cols:"12"}},[e(i.Z,{attrs:{block:"",elevation:"2",color:"error"},on:{click:a.abrirJanelaResultados}},[a._v("RESULTADO")])],1)],1),e("JanelaVerificacao",{ref:"JanelaVerificacao"}),e("JanelaSubimissao",{ref:"JanelaSubimissao"}),e("JanelaResultados",{ref:"JanelaResultados"})],1)},w=[],J=t(3058),j=t(5223),A=t(5452),M=t(271),P=function(){var a=this,e=a._self._c;return e("form",{ref:"formulario"},[e(y.Z,{attrs:{justify:"center"}},[e(A.Z,{attrs:{persistent:"","max-width":"450",transition:"dialog-top-transition"},model:{value:a.dialog,callback:function(e){a.dialog=e},expression:"dialog"}},[e(J.Z,{attrs:{loading:a.carregando}},[e(j.EB,{staticClass:"text-h5"},[a._v(" Verificar uma Imagem ")]),e(j.ZB,[e(y.Z,[e(x.Z,{attrs:{cols:"12"}},[e(c.Z,{staticClass:"mx-auto",attrs:{src:t(6939),contain:"",width:"200"}})],1)],1),e("strong",[a._v("Instruções:")]),a._l(a.instrucoes,(function(t){return e("li",{key:t.instrucao},[a._v(" "+a._s(t.instrucao)+" ")])})),e(y.Z,[e(x.Z,[e(M.Z,{attrs:{accept:"image/*",label:"Lesão",required:"",disabled:a.carregando,rules:[a.regras.required]},model:{value:a.imagem,callback:function(e){a.imagem=e},expression:"imagem"}})],1)],1)],2),e(j.h7,[e(u.Z),e(i.Z,{attrs:{color:"green darken-1",text:"",loading:a.carregando},on:{click:function(e){a.dialog=!1}}},[a._v(" Cancelar ")]),e(i.Z,{attrs:{color:"green darken-1",text:"",loading:a.carregando},on:{click:function(e){return a.enviar()}}},[a._v(" Enviar ")])],1)],1)],1)],1)],1)},E=[],I=t(8945);const O=I.Z.create({withCredentials:!0,baseURL:"http://localhost:8080/api"});var S=O,q={name:"JanelaVerificacao",data(){return{dialog:!1,imagem:[],carregando:!1,regras:{required:a=>!!a||"Obrigatório."},instrucoes:[{instrucao:"   Permita a abertura da câmera"},{instrucao:"   Enquadre a lesão no centro da imagem"},{instrucao:"   Mantenha a lesão totalmente visível, sem cortes"},{instrucao:"   Mantena a imagem focada"},{instrucao:"   Se preferir, selecione uma imagem da galeria."}]}},methods:{enviar(){this.carregando=!0;let a=new FormData;a.append("imagem",this.imagem),S.post("verificar-img",a,{timeout:12e4}).then((a=>{console.log(a.data)})).catch((a=>{console.log(a)})).finally((()=>{this.carregando=!1}))}}},R=q,T=(0,g.Z)(R,P,E,!1,null,null,null),V=T.exports,B=t(1047),L=function(){var a=this,e=a._self._c;return e("form",{ref:"formulario"},[e(y.Z,{attrs:{justify:"center"}},[e(A.Z,{attrs:{persistent:"","max-width":"450",transition:"dialog-bottom-transition"},model:{value:a.dialog,callback:function(e){a.dialog=e},expression:"dialog"}},[e(J.Z,{attrs:{loading:a.carregando}},[e(j.EB,{staticClass:"text-h5"},[a._v(" Submeter uma Imagem ")]),e(j.ZB,[e(y.Z,[e(x.Z,{attrs:{cols:"12"}},[e(c.Z,{staticClass:"mx-auto",attrs:{src:t(4405),contain:"",width:"200"}})],1)],1),e("strong",[a._v("Instruções:")]),a._l(a.instrucoes,(function(t){return e("li",{key:t.instrucao},[a._v(" "+a._s(t.instrucao)+" ")])})),e(y.Z,[e(x.Z,[e(M.Z,{attrs:{accept:"image/*",label:"Lesão",required:"",disabled:a.carregando,rules:[a.regras.required]},model:{value:a.imagem,callback:function(e){a.imagem=e},expression:"imagem"}})],1)],1),e(y.Z,[e(x.Z,[e(B.Z,{attrs:{items:a.classificacoes,dense:"","prepend-icon":"mdi-import",label:"Classificação",required:"",disabled:a.carregando,rules:[a.regras.required]},model:{value:a.classificacao,callback:function(e){a.classificacao=e},expression:"classificacao"}})],1)],1)],2),e(j.h7,[e(u.Z),e(i.Z,{attrs:{color:"green darken-1",text:"",loading:a.carregando},on:{click:function(e){a.dialog=!1}}},[a._v(" Cancelar ")]),e(i.Z,{attrs:{color:"green darken-1",text:"",loading:a.carregando},on:{click:function(e){return a.enviar()}}},[a._v(" Enviar ")])],1)],1)],1)],1)],1)},F=[],U={name:"JanelaSubimissao",data(){return{dialog:!1,imagem:[],classificacao:"",carregando:!1,regras:{required:a=>!!a||"Obrigatório."},classificacoes:[{value:1,text:"BENIGNO"},{value:2,text:"MALIGNO"}],instrucoes:[{instrucao:"   Permita a abertura da câmera"},{instrucao:"   Enquadre a lesão no centro da imagem"},{instrucao:"   Mantenha a lesão totalmente visível, sem cortes"},{instrucao:"   Mantena a imagem focada"},{instrucao:"   Se preferir, selecione uma imagem da galeria."}]}},methods:{enviar(){console.log(!this.$refs.formulario),console.log("Clicou em enviar"),this.carregando=!0,setTimeout(this.funcaoDeTempo,3e3)},funcaoDeTempo(){this.carregando=!1,console.log("Já se passaram 3 segundos")}}},N=U,D=(0,g.Z)(N,L,F,!1,null,null,null),G=D.exports,W=function(){var a=this,e=a._self._c;return e("form",{ref:"formulario"},[e(y.Z,{attrs:{justify:"center"}},[e(A.Z,{attrs:{persistent:"","max-width":"450"},model:{value:a.dialog,callback:function(e){a.dialog=e},expression:"dialog"}},[e(J.Z,{attrs:{loading:a.carregando}},[e(j.EB,{staticClass:"text-h5"},[a._v(" Resultados ")]),e(j.ZB,[e(y.Z,[e(x.Z,{attrs:{cols:"12"}},[e("h3",[a._v("Contorno")]),e(c.Z,{staticClass:"mx-auto",attrs:{src:t(6606),contain:"",width:"250"}}),e("p",{staticClass:"text-justify"},[a._v(" "+a._s(a.texto_bordas)+" ")])],1)],1),e(y.Z,[e(x.Z,{attrs:{cols:"12"}},[e("h3",[a._v("Medidas")]),e(c.Z,{staticClass:"mx-auto",attrs:{src:t(7664),contain:"",width:"250"}}),e("p",{staticClass:"text-justify"},[a._v(" "+a._s(a.texto_assimetria)+" ")])],1)],1),e(y.Z,[e(x.Z,{attrs:{cols:"12"}},[e("h3",[a._v("Resultado Final")]),e(c.Z,{staticClass:"mx-auto",attrs:{src:t(5021),contain:"",width:"250"}}),e("p",{staticClass:"text-justify"},[a._v(" "+a._s(a.texto_cores)+" ")])],1)],1),e(y.Z,[e(x.Z,{attrs:{cols:"12"}},[e("h3",[a._v("Diagnóstico")]),e("p",{staticClass:"text-justify"},[a._v(" "+a._s(a.texto_diagnóstico)+" ")])])],1)],1),e(j.h7,[e(u.Z),e(i.Z,{attrs:{color:"green darken-1",text:"",loading:a.carregando},on:{click:function(e){a.dialog=!1}}},[a._v(" Sair ")])],1)],1)],1)],1)],1)},$=[],z={name:"JanelaResultados",data(){return{dialog:!1,texto_bordas:"A lesão segmentada apresenta bordas relativamente regulares, não fugindo do padão visto em histogramas de lesões benignas, espalhando-se pouco além das fronteiras atuais.",texto_cores:" O número de cores identificadas na lesão foi de aproximadamente 10 mil, o que corresponde a um número alto de cores para uma lesão de pele. Isso significa que é possível que a lesão evolua para algo sério, portanto é importante tomar cuidado quando a evolução.",texto_assimetria:"Lesão de Aparência simétrica, indicando uma evolução homogênea de suas bordas até o presente momento.","texto_diagnóstico":"Conforme os dados obtidos a partir treinamento de aprendizado de máquina, é calculado uma probabilidade de 34% de esta lesão ser do tipo maligna, portanto, recomenda-se a procura por um especialista em dermatologia para acompanhar a evolução desta lesão e o devido tratamento caso necessáro."}},methods:{}},H=z,K=(0,g.Z)(H,W,$,!1,null,null,null),Q=K.exports,X={name:"PaginaPrincipal",components:{JanelaVerificacao:V,JanelaSubimissao:G,JanelaResultados:Q},data:()=>({}),methods:{abrirJanelaVerificacao(){this.$refs.JanelaVerificacao.dialog=!0,console.log("Abrir Janela Verificacao")},abrirJanelaSubimissao(){this.$refs.JanelaSubimissao.dialog=!0,console.log("Abrir Janela Submissao")},abrirJanelaResultados(){this.$refs.JanelaResultados.dialog=!0,console.log("Abrir Janela Resultados")}}},Y=X,aa=(0,g.Z)(Y,C,w,!1,null,null,null),ea=aa.exports,ta={name:"HomeView",components:{PaginaPrincipal:ea}},oa=ta,ra=(0,g.Z)(oa,Z,_,!1,null,null,null),na=ra.exports;o.ZP.use(h.ZP);const ia=[{path:"/",name:"home",component:na},{path:"/about",name:"about",component:()=>t.e(443).then(t.bind(t,7750))}],sa=new h.ZP({mode:"history",base:"/",routes:ia});var ca=sa,la=t(2250);o.ZP.use(la.Z);var ua=new la.Z({});o.ZP.config.productionTip=!1,new o.ZP({router:ca,vuetify:ua,render:a=>a(b)}).$mount("#app")},4405:function(a,e,t){a.exports=t.p+"img/IWIM_aprendendo.16755c3f.png"},9322:function(a,e,t){a.exports=t.p+"img/IWIM_coracao.ba6a9885.png"},6939:function(a,e,t){a.exports=t.p+"img/IWIM_lupa.8aff4eef.png"},5380:function(a,e,t){a.exports=t.p+"img/brasao_ufpa.fd8c6c77.png"},6606:function(a,e,t){a.exports=t.p+"img/Contorno.a1af9261.jpg"},7664:function(a,e,t){a.exports=t.p+"img/Medidas.1f8b9e5a.jpg"},5021:function(a,e,t){a.exports=t.p+"img/Resultado.3ff42019.jpg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var n=e[o]={exports:{}};return a[o](n,n.exports,t),n.exports}t.m=a,function(){var a=[];t.O=function(e,o,r,n){if(!o){var i=1/0;for(u=0;u<a.length;u++){o=a[u][0],r=a[u][1],n=a[u][2];for(var s=!0,c=0;c<o.length;c++)(!1&n||i>=n)&&Object.keys(t.O).every((function(a){return t.O[a](o[c])}))?o.splice(c--,1):(s=!1,n<i&&(i=n));if(s){a.splice(u--,1);var l=r();void 0!==l&&(e=l)}}return e}n=n||0;for(var u=a.length;u>0&&a[u-1][2]>n;u--)a[u]=a[u-1];a[u]=[o,r,n]}}(),function(){t.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return t.d(e,{a:e}),e}}(),function(){t.d=function(a,e){for(var o in e)t.o(e,o)&&!t.o(a,o)&&Object.defineProperty(a,o,{enumerable:!0,get:e[o]})}}(),function(){t.f={},t.e=function(a){return Promise.all(Object.keys(t.f).reduce((function(e,o){return t.f[o](a,e),e}),[]))}}(),function(){t.u=function(a){return"js/about.e9a88b46.js"}}(),function(){t.miniCssF=function(a){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){t.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){var a={},e="mestrado-vuetify:";t.l=function(o,r,n,i){if(a[o])a[o].push(r);else{var s,c;if(void 0!==n)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==e+n){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",e+n),s.src=o),a[o]=[r];var m=function(e,t){s.onerror=s.onload=null,clearTimeout(f);var r=a[o];if(delete a[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(a){return a(t)})),e)return e(t)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){t.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var a={143:0};t.f.j=function(e,o){var r=t.o(a,e)?a[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var n=new Promise((function(t,o){r=a[e]=[t,o]}));o.push(r[2]=n);var i=t.p+t.u(e),s=new Error,c=function(o){if(t.o(a,e)&&(r=a[e],0!==r&&(a[e]=void 0),r)){var n=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",s.name="ChunkLoadError",s.type=n,s.request=i,r[1](s)}};t.l(i,c,"chunk-"+e,e)}},t.O.j=function(e){return 0===a[e]};var e=function(e,o){var r,n,i=o[0],s=o[1],c=o[2],l=0;if(i.some((function(e){return 0!==a[e]}))){for(r in s)t.o(s,r)&&(t.m[r]=s[r]);if(c)var u=c(t)}for(e&&e(o);l<i.length;l++)n=i[l],t.o(a,n)&&a[n]&&a[n][0](),a[n]=0;return t.O(u)},o=self["webpackChunkmestrado_vuetify"]=self["webpackChunkmestrado_vuetify"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(7037)}));o=t.O(o)})();
//# sourceMappingURL=app.aec929f3.js.map