(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{578:function(a,t,s){},684:function(a,t,s){"use strict";s(578)},847:function(a,t,s){"use strict";s.r(t);var e=s(59),r=(s(120),s(485));var i={methods:{getExamp:function(){if("aa-data"===document.getElementsByTagName("main")[0].lastElementChild.id)return;this.exampleHeader=document.getElementById("example-hr"),this.exampleData=document.getElementById("aa-data"),this.exampleHeader.parentNode.removeChild(this.exampleHeader),this.exampleData.parentNode.removeChild(this.exampleData);var a=document.getElementsByTagName("main")[0];this.exampleHeader.classList.add("aaexample-header"),a.appendChild(this.exampleHeader),a.appendChild(this.exampleData)}},computed:{cachedApis:function(){return r}},data:function(){return{exampleData:null,exampleHeader:null,sdgs:[],aichis:[],subjects:[],jurisdictions:[],govTypes:[],orgTypes:[],regions:[],countries:[],lookUp:[],actionCategories:[]}},mounted:function(){var a=this;return Object(e.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.initializeApiStore(),t.next=3,r.lookUp("all",["528B1187-F1BD-4479-9FB3-ADBD9076D361","ca","AICHI-TARGET-10","CBD-SUBJECT-ABS"]);case 3:return a.lookUp=t.sent,t.next=6,r.getData("actionCategories");case 6:return a.actionCategories=t.sent,t.next=9,r.getData("countries");case 9:return a.countries=t.sent,t.next=12,r.getData("regions");case 12:return a.regions=t.sent,t.next=15,r.getData("orgTypes");case 15:return a.orgTypes=t.sent,t.next=18,r.getData("govTypes");case 18:return a.govTypes=t.sent,t.next=21,r.getData("jurisdictions");case 21:return a.jurisdictions=t.sent,t.next=24,r.getData("subjects");case 24:return a.subjects=t.sent,t.next=27,r.getData("aichis");case 27:return a.aichis=t.sent,t.next=30,r.getData("sdgs");case 30:a.sdgs=t.sent,a.getExamp();case 32:case"end":return t.stop()}}),t)})))()},destroyed:function(){this.exampleHeader.parentNode.removeChild(this.exampleHeader),this.exampleData.parentNode.removeChild(this.exampleData)}},n=(s(684),s(29)),c=Object(n.a)(i,(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"кешированные-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#кешированные-api"}},[a._v("#")]),a._v(" Кешированные API")]),a._v(" "),s("h2",{attrs:{id:"описание"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#описание"}},[a._v("#")]),a._v(" Описание")]),a._v(" "),s("p",[a._v("A locally cached version of SCBD's most static API's.")]),a._v(" "),s("h2",{attrs:{id:"установить"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#установить"}},[a._v("#")]),a._v(" Установить")]),a._v(" "),s("code-group",[s("code-block",{attrs:{title:"YARN"}},[s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" @action-agenda/cached-apis\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])])]),a._v(" "),s("code-block",{attrs:{title:"NPM"}},[s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" @action-agenda/cached-apis\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])])])],1),a._v(" "),s("h3",{attrs:{id:"initializeapistore-opts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#initializeapistore-opts"}},[a._v("#")]),a._v(" initializeApiStore = (opts = {})")]),a._v(" "),s("p",[a._v("initializes the local store (IndexedDB/WebSQL/local storage) depending on client.")]),a._v(" "),s("h4",{attrs:{id:"характеристики-options-object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#характеристики-options-object"}},[a._v("#")]),a._v(" Характеристики: (options:Object)")]),a._v(" "),s("div",{staticClass:"language-mjs line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("const validationMap = { expiry: Number, name: String, apisUrls: Object, dataSources: Array, version: String }")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"})]),s("h5",{attrs:{id:"options-apisurls"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options-apisurls"}},[a._v("#")]),a._v(" Options: apisUrls")]),a._v(" "),s("div",{staticClass:"language-mjs line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("const apisUrls = {\n  regions      : 'https://api.cbd.int/api/v2013/thesaurus/domains/regions/terms',\n  countries    : 'https://api.cbd.int/api/v2013/thesaurus/domains/countries/terms',\n  orgTypes     : 'https://api.cbd.int/api/v2013/thesaurus/domains/Organization%20Types/terms',\n  govTypes     : 'https://api.cbd.int/api/v2013/thesaurus/domains/Organization%20Types/terms',\n  aichis       : 'https://api.cbd.int/api/v2013/thesaurus/domains/AICHI-TARGETS/terms',\n  subjects     : 'https://api.cbd.int/api/v2013/thesaurus/domains/CBD-SUBJECTS/terms',\n  jurisdictions: 'https://api.cbd.int/api/v2013/thesaurus/domains/50AC1489-92B8-4D99-965A-AAE97A80F38E/terms',\n  sdgs         : 'https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=false'\n}")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("h5",{attrs:{id:"options-datasources"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options-datasources"}},[a._v("#")]),a._v(" Options: dataSources")]),a._v(" "),s("div",{staticClass:"language-mjs line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("const dataSources = [ ...Object.keys(apisUrls), 'geoLocations', 'actionCategories', 'all', 'documentStates' ]")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"})]),s("h3",{attrs:{id:"getdata-async-datasource-nocache-false"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getdata-async-datasource-nocache-false"}},[a._v("#")]),a._v(" getData  = async (dataSource, noCache=false)")]),a._v(" "),s("h3",{attrs:{id:"lookup-async-datasource-keys-single-false"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lookup-async-datasource-keys-single-false"}},[a._v("#")]),a._v(" lookUp = async(dataSource, keys, single=false)")]),a._v(" "),s("h2",{attrs:{id:"data-references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-references"}},[a._v("#")]),a._v(" Data References")]),a._v(" "),s("h3",{attrs:{id:"action-categories"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#action-categories"}},[a._v("#")]),a._v(" Action Categories")]),a._v(" "),s("div",{staticClass:"language-text"},[s("pre",[s("code",[a._v("\n"+a._s(a.actionCategories)+"\n")])])]),a._v(" "),s("h3",{attrs:{id:"thematic-areas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thematic-areas"}},[a._v("#")]),a._v(" Thematic Areas")]),a._v(" "),s("div",{staticClass:"language-text"},[s("pre",[s("code",[a._v("\n"+a._s(a.subjects)+"\n")])])]),a._v(" "),s("h3",{attrs:{id:"government-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#government-types"}},[a._v("#")]),a._v(" Government Types")]),a._v(" "),s("div",{staticClass:"language-text"},[s("pre",[s("code",[a._v("\n"+a._s(a.govTypes)+"\n")])])]),a._v(" "),s("h3",{attrs:{id:"organization-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#organization-types"}},[a._v("#")]),a._v(" Organization Types")]),a._v(" "),s("div",{staticClass:"language-text"},[s("pre",[s("code",[a._v("\n"+a._s(a.orgTypes)+"\n")])])]),a._v(" "),s("h3",{attrs:{id:"regions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#regions"}},[a._v("#")]),a._v(" Regions")]),a._v(" "),s("div",{staticClass:"language-text"},[s("pre",[s("code",[a._v("\n"+a._s(a.regions)+"\n")])])]),a._v(" "),s("h3",{attrs:{id:"aichi-biodiversity-targets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aichi-biodiversity-targets"}},[a._v("#")]),a._v(" Aichi Biodiversity Targets")]),a._v(" "),s("div",{staticClass:"language-text"},[s("pre",[s("code",[a._v("\n"+a._s(a.aichis)+"\n")])])]),a._v(" "),s("h3",{attrs:{id:"sdg-s"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sdg-s"}},[a._v("#")]),a._v(" SDG's")]),a._v(" "),s("div",{staticClass:"language-text"},[s("pre",[s("code",[a._v("\n"+a._s(a.sdgs)+"\n")])])]),a._v(" "),s("h3",{attrs:{id:"countries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#countries"}},[a._v("#")]),a._v(" Countries")]),a._v(" "),s("div",{staticClass:"language-text"},[s("pre",[s("code",[a._v("\n"+a._s(a.countries)+"\n")])])]),a._v(" "),s("h3",{attrs:{id:"jurisdictions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jurisdictions"}},[a._v("#")]),a._v(" Jurisdictions")]),a._v(" "),s("div",{staticClass:"language-text"},[s("pre",[s("code",[a._v("\n"+a._s(a.jurisdictions)+"\n")])])]),a._v(" "),s("h2",{attrs:{id:"пример"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#пример"}},[a._v("#")]),a._v(" Пример")]),a._v(" "),s("hr",{attrs:{id:"example-hr"}}),a._v(" "),[s("div",{staticClass:"position-relative p-5 aaexamp",attrs:{id:"aa-data"}},[s("div",{staticClass:"inner"},[s("h3",[a._v("lookUp('all', ['528B1187-F1BD-4479-9FB3-ADBD9076D361', 'ca' ,'AICHI-TARGET-10','CBD-SUBJECT-ABS'])")]),a._v(" "),s("hr"),a._v(" "),s("pre",[a._v("    "+a._s(a.lookUp)+"\n    ")]),a._v(" "),s("a",{staticClass:"header-anchor",attrs:{href:"#actionCategories"}},[a._v("#")]),a._v(" "),s("h3",[a._v("CachedApis.getData('actionCategories')")]),a._v(" "),s("hr"),a._v(" "),s("pre",[a._v("    "+a._s(a.actionCategories)+"\n    ")])])])]],2)}),[],!1,null,"d9b84578",null);t.default=c.exports}}]);