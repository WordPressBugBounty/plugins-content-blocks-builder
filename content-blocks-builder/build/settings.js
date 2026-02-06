(()=>{var e={195:(e,t,n)=>{var r=n(981),o=n(332),i=n(799);e.exports=function(e){var t=!1,n=function(n,o){if(e.page<1)return e.listContainer.style.display="none",void(t=!0);t&&(e.listContainer.style.display="block");var i,s=e.matchingItems.length,l=e.i,c=e.page,d=Math.ceil(s/c),u=Math.ceil(l/c),p=o.innerWindow||2,h=o.left||o.outerWindow||0,m=o.right||o.outerWindow||0;m=d-m,n.clear();for(var f=1;f<=d;f++){var g=u===f?"active":"";a.number(f,h,m,u,p)?(i=n.add({page:f,dotted:!1})[0],g&&r(i.elm).add(g),i.elm.firstChild.setAttribute("data-i",f),i.elm.firstChild.setAttribute("data-page",c)):a.dotted(n,f,h,m,u,p,n.size())&&(i=n.add({page:"...",dotted:!0})[0],r(i.elm).add("disabled"))}},a={number:function(e,t,n,r,o){return this.left(e,t)||this.right(e,n)||this.innerWindow(e,r,o)},left:function(e,t){return e<=t},right:function(e,t){return e>t},innerWindow:function(e,t,n){return e>=t-n&&e<=t+n},dotted:function(e,t,n,r,o,i,a){return this.dottedLeft(e,t,n,r,o,i)||this.dottedRight(e,t,n,r,o,i,a)},dottedLeft:function(e,t,n,r,o,i){return t==n+1&&!this.innerWindow(t,o,i)&&!this.right(t,r)},dottedRight:function(e,t,n,r,o,i,a){return!e.items[a-1].values().dotted&&t==r&&!this.innerWindow(t,o,i)&&!this.right(t,r)}};return function(t){var r=new i(e.listContainer.id,{listClass:t.paginationClass||"pagination",item:t.item||"<li><a class='page' href='#'></a></li>",valueNames:["page","dotted"],searchClass:"pagination-search-that-is-not-supposed-to-exist",sortClass:"pagination-sort-that-is-not-supposed-to-exist"});o.bind(r.listContainer,"click",function(t){var n=t.target||t.srcElement,r=e.utils.getAttribute(n,"data-page"),o=e.utils.getAttribute(n,"data-i");o&&e.show((o-1)*r+1,r)}),e.on("updated",function(){n(r,t)}),n(r,t)}}},200:e=>{e.exports=function(e,t){var n=e.getAttribute&&e.getAttribute(t)||null;if(!n)for(var r=e.attributes,o=r.length,i=0;i<o;i++)void 0!==r[i]&&r[i].nodeName===t&&(n=r[i].nodeValue);return n}},212:e=>{e.exports=function(e){if(void 0===e)return[];if(null===e)return[null];if(e===window)return[window];if("string"==typeof e)return[e];if(function(e){return"[object Array]"===Object.prototype.toString.call(e)}(e))return e;if("number"!=typeof e.length)return[e];if("function"==typeof e&&e instanceof Function)return[e];for(var t=[],n=0,r=e.length;n<r;n++)(Object.prototype.hasOwnProperty.call(e,n)||n in e)&&t.push(e[n]);return t.length?t:[]}},249:e=>{e.exports=function(e){return e.handlers.filterStart=e.handlers.filterStart||[],e.handlers.filterComplete=e.handlers.filterComplete||[],function(t){if(e.trigger("filterStart"),e.i=1,e.reset.filter(),void 0===t)e.filtered=!1;else{e.filtered=!0;for(var n=e.items,r=0,o=n.length;r<o;r++){var i=n[r];t(i)?i.filtered=!0:i.filtered=!1}}return e.update(),e.trigger("filterComplete"),e.visibleItems}}},252:e=>{"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,o,i;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;0!==o--;)if(!e(t[o],n[o]))return!1;return!0}if(t instanceof Map&&n instanceof Map){if(t.size!==n.size)return!1;for(o of t.entries())if(!n.has(o[0]))return!1;for(o of t.entries())if(!e(o[1],n.get(o[0])))return!1;return!0}if(t instanceof Set&&n instanceof Set){if(t.size!==n.size)return!1;for(o of t.entries())if(!n.has(o[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(n)){if((r=t.length)!=n.length)return!1;for(o=r;0!==o--;)if(t[o]!==n[o])return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(i=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;0!==o--;)if(!Object.prototype.hasOwnProperty.call(n,i[o]))return!1;for(o=r;0!==o--;){var a=i[o];if(!e(t[a],n[a]))return!1}return!0}return t!=t&&n!=n}},332:(e,t,n)=>{var r=window.addEventListener?"addEventListener":"attachEvent",o=window.removeEventListener?"removeEventListener":"detachEvent",i="addEventListener"!==r?"on":"",a=n(212);t.bind=function(e,t,n,o){for(var s=0,l=(e=a(e)).length;s<l;s++)e[s][r](i+t,n,o||!1)},t.unbind=function(e,t,n,r){for(var s=0,l=(e=a(e)).length;s<l;s++)e[s][o](i+t,n,r||!1)},t.debounce=function(e,t,n){var r;return t?function(){var o=this,i=arguments,a=n&&!r;clearTimeout(r),r=setTimeout(function(){r=null,n||e.apply(o,i)},t),a&&e.apply(o,i)}:e}},340:e=>{e.exports=function(e){return(e=null===(e=void 0===e?"":e)?"":e).toString()}},343:e=>{e.exports=function(e){var t={els:void 0,clear:function(){for(var n=0,r=t.els.length;n<r;n++)e.utils.classes(t.els[n]).remove("asc"),e.utils.classes(t.els[n]).remove("desc")},getOrder:function(t){var n=e.utils.getAttribute(t,"data-order");return"asc"==n||"desc"==n?n:e.utils.classes(t).has("desc")?"asc":e.utils.classes(t).has("asc")?"desc":"asc"},getInSensitive:function(t,n){var r=e.utils.getAttribute(t,"data-insensitive");n.insensitive="false"!==r},setOrder:function(n){for(var r=0,o=t.els.length;r<o;r++){var i=t.els[r];if(e.utils.getAttribute(i,"data-sort")===n.valueName){var a=e.utils.getAttribute(i,"data-order");"asc"==a||"desc"==a?a==n.order&&e.utils.classes(i).add(n.order):e.utils.classes(i).add(n.order)}}}},n=function(){e.trigger("sortStart");var n={},r=arguments[0].currentTarget||arguments[0].srcElement||void 0;r?(n.valueName=e.utils.getAttribute(r,"data-sort"),t.getInSensitive(r,n),n.order=t.getOrder(r)):((n=arguments[1]||n).valueName=arguments[0],n.order=n.order||"asc",n.insensitive=void 0===n.insensitive||n.insensitive),t.clear(),t.setOrder(n);var o,i=n.sortFunction||e.sortFunction||null,a="desc"===n.order?-1:1;o=i?function(e,t){return i(e,t,n)*a}:function(t,r){var o=e.utils.naturalSort;return o.alphabet=e.alphabet||n.alphabet||void 0,!o.alphabet&&n.insensitive&&(o=e.utils.naturalSort.caseInsensitive),o(t.values()[n.valueName],r.values()[n.valueName])*a},e.items.sort(o),e.update(),e.trigger("sortComplete")};return e.handlers.sortStart=e.handlers.sortStart||[],e.handlers.sortComplete=e.handlers.sortComplete||[],t.els=e.utils.getByClass(e.listContainer,e.sortClass),e.utils.events.bind(t.els,"click",n),e.on("searchStart",t.clear),e.on("filterStart",t.clear),n}},378:e=>{e.exports=function(e,t,n,r){return(r=r||{}).test&&r.getElementsByClassName||!r.test&&document.getElementsByClassName?function(e,t,n){return n?e.getElementsByClassName(t)[0]:e.getElementsByClassName(t)}(e,t,n):r.test&&r.querySelector||!r.test&&document.querySelector?function(e,t,n){return t="."+t,n?e.querySelector(t):e.querySelectorAll(t)}(e,t,n):function(e,t,n){for(var r=[],o=e.getElementsByTagName("*"),i=o.length,a=new RegExp("(^|\\s)"+t+"(\\s|$)"),s=0,l=0;s<i;s++)if(a.test(o[s].className)){if(n)return o[s];r[l]=o[s],l++}return r}(e,t,n)}},433:e=>{e.exports=function(e){for(var t,n=Array.prototype.slice.call(arguments,1),r=0;t=n[r];r++)if(t)for(var o in t)e[o]=t[o];return e}},481:e=>{e.exports=function(e,t,n){var r=n.location||0,o=n.distance||100,i=n.threshold||.4;if(t===e)return!0;if(t.length>32)return!1;var a=r,s=function(){var e,n={};for(e=0;e<t.length;e++)n[t.charAt(e)]=0;for(e=0;e<t.length;e++)n[t.charAt(e)]|=1<<t.length-e-1;return n}();function l(e,n){var r=e/t.length,i=Math.abs(a-n);return o?r+i/o:i?1:r}var c=i,d=e.indexOf(t,a);-1!=d&&(c=Math.min(l(0,d),c),-1!=(d=e.lastIndexOf(t,a+t.length))&&(c=Math.min(l(0,d),c)));var u,p,h=1<<t.length-1;d=-1;for(var m,f=t.length+e.length,g=0;g<t.length;g++){for(u=0,p=f;u<p;)l(g,a+p)<=c?u=p:f=p,p=Math.floor((f-u)/2+u);f=p;var b=Math.max(1,a-p+1),y=Math.min(a+p,e.length)+t.length,v=Array(y+2);v[y+1]=(1<<g)-1;for(var x=y;x>=b;x--){var _=s[e.charAt(x-1)];if(v[x]=0===g?(v[x+1]<<1|1)&_:(v[x+1]<<1|1)&_|(m[x+1]|m[x])<<1|1|m[x+1],v[x]&h){var k=l(g,x-1);if(k<=c){if(c=k,!((d=x-1)>a))break;b=Math.max(1,2*a-d)}}}if(l(g+1,a)>c)break;m=v}return!(d<0)}},608:e=>{e.exports=function(e){return function(t,n,r){var o=this;this._values={},this.found=!1,this.filtered=!1,this.values=function(t,n){if(void 0===t)return o._values;for(var r in t)o._values[r]=t[r];!0!==n&&e.templater.set(o,o.values())},this.show=function(){e.templater.show(o)},this.hide=function(){e.templater.hide(o)},this.matching=function(){return e.filtered&&e.searched&&o.found&&o.filtered||e.filtered&&!e.searched&&o.filtered||!e.filtered&&e.searched&&o.found||!e.filtered&&!e.searched},this.visible=function(){return!(!o.elm||o.elm.parentNode!=e.list)},function(t,n,r){if(void 0===n)r?o.values(t,r):o.values(t);else{o.elm=n;var i=e.templater.get(o,t);o.values(i)}}(t,n,r)}}},647:e=>{e.exports=function(e){var t,n,r,o={resetList:function(){e.i=1,e.templater.clear(),r=void 0},setOptions:function(e){2==e.length&&e[1]instanceof Array?t=e[1]:2==e.length&&"function"==typeof e[1]?(t=void 0,r=e[1]):3==e.length?(t=e[1],r=e[2]):t=void 0},setColumns:function(){0!==e.items.length&&void 0===t&&(t=void 0===e.searchColumns?o.toArray(e.items[0].values()):e.searchColumns)},setSearchString:function(t){t=(t=e.utils.toString(t).toLowerCase()).replace(/[-[\]{}()*+?.,\\^$|#]/g,"\\$&"),n=t},toArray:function(e){var t=[];for(var n in e)t.push(n);return t}},i=function(i){return e.trigger("searchStart"),o.resetList(),o.setSearchString(i),o.setOptions(arguments),o.setColumns(),""===n?(e.reset.search(),e.searched=!1):(e.searched=!0,r?r(n,t):function(){for(var r,o=[],i=n;null!==(r=i.match(/"([^"]+)"/));)o.push(r[1]),i=i.substring(0,r.index)+i.substring(r.index+r[0].length);(i=i.trim()).length&&(o=o.concat(i.split(/\s+/)));for(var a=0,s=e.items.length;a<s;a++){var l=e.items[a];if(l.found=!1,o.length){for(var c=0,d=o.length;c<d;c++){for(var u=!1,p=0,h=t.length;p<h;p++){var m=l.values(),f=t[p];if(m.hasOwnProperty(f)&&void 0!==m[f]&&null!==m[f]&&-1!==("string"!=typeof m[f]?m[f].toString():m[f]).toLowerCase().indexOf(o[c])){u=!0;break}}if(!u)break}l.found=u}}}()),e.update(),e.trigger("searchComplete"),e.visibleItems};return e.handlers.searchStart=e.handlers.searchStart||[],e.handlers.searchComplete=e.handlers.searchComplete||[],e.utils.events.bind(e.utils.getByClass(e.listContainer,e.searchClass),"keyup",e.utils.events.debounce(function(t){var n=t.target||t.srcElement;""===n.value&&!e.searched||i(n.value)},e.searchDelay)),e.utils.events.bind(e.utils.getByClass(e.listContainer,e.searchClass),"input",function(e){""===(e.target||e.srcElement).value&&i("")}),i}},672:(e,t,n)=>{e.exports=function(e){var t=n(608)(e),r=function(n,r){for(var o=0,i=n.length;o<i;o++)e.items.push(new t(r,n[o]))},o=function(t,n){var i=t.splice(0,50);r(i,n),t.length>0?setTimeout(function(){o(t,n)},1):(e.update(),e.trigger("parseComplete"))};return e.handlers.parseComplete=e.handlers.parseComplete||[],function(){var t=function(e){for(var t=e.childNodes,n=[],r=0,o=t.length;r<o;r++)void 0===t[r].data&&n.push(t[r]);return n}(e.list),n=e.valueNames;e.indexAsync?o(t,n):r(t,n)}}},717:e=>{e.exports=function(e){var t=function(n,r,o){var i=n.splice(0,50);o=(o=o||[]).concat(e.add(i)),n.length>0?setTimeout(function(){t(n,r,o)},1):(e.update(),r(o))};return t}},774:e=>{"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,o,i;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;0!==o--;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(i=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;0!==o--;)if(!Object.prototype.hasOwnProperty.call(n,i[o]))return!1;for(o=r;0!==o--;){var a=i[o];if(!("_owner"===a&&t.$$typeof||e(t[a],n[a])))return!1}return!0}return t!=t&&n!=n}},799:(e,t,n)=>{var r=n(813),o=n(378),i=n(433),a=n(859),s=n(332),l=n(340),c=n(981),d=n(200),u=n(212);e.exports=function(e,t,p){var h,m=this,f=n(608)(m),g=n(717)(m),b=n(195)(m);h={start:function(){m.listClass="list",m.searchClass="search",m.sortClass="sort",m.page=1e4,m.i=1,m.items=[],m.visibleItems=[],m.matchingItems=[],m.searched=!1,m.filtered=!1,m.searchColumns=void 0,m.searchDelay=0,m.handlers={updated:[]},m.valueNames=[],m.utils={getByClass:o,extend:i,indexOf:a,events:s,toString:l,naturalSort:r,classes:c,getAttribute:d,toArray:u},m.utils.extend(m,t),m.listContainer="string"==typeof e?document.getElementById(e):e,m.listContainer&&(m.list=o(m.listContainer,m.listClass,!0),m.parse=n(672)(m),m.templater=n(939)(m),m.search=n(647)(m),m.filter=n(249)(m),m.sort=n(343)(m),m.fuzzySearch=n(844)(m,t.fuzzySearch),this.handlers(),this.items(),this.pagination(),m.update())},handlers:function(){for(var e in m.handlers)m[e]&&m.handlers.hasOwnProperty(e)&&m.on(e,m[e])},items:function(){m.parse(m.list),void 0!==p&&m.add(p)},pagination:function(){if(void 0!==t.pagination){!0===t.pagination&&(t.pagination=[{}]),void 0===t.pagination[0]&&(t.pagination=[t.pagination]);for(var e=0,n=t.pagination.length;e<n;e++)b(t.pagination[e])}}},this.reIndex=function(){m.items=[],m.visibleItems=[],m.matchingItems=[],m.searched=!1,m.filtered=!1,m.parse(m.list)},this.toJSON=function(){for(var e=[],t=0,n=m.items.length;t<n;t++)e.push(m.items[t].values());return e},this.add=function(e,t){if(0!==e.length){if(!t){var n=[],r=!1;void 0===e[0]&&(e=[e]);for(var o=0,i=e.length;o<i;o++){var a;r=m.items.length>m.page,a=new f(e[o],void 0,r),m.items.push(a),n.push(a)}return m.update(),n}g(e.slice(0),t)}},this.show=function(e,t){return this.i=e,this.page=t,m.update(),m},this.remove=function(e,t,n){for(var r=0,o=0,i=m.items.length;o<i;o++)m.items[o].values()[e]==t&&(m.templater.remove(m.items[o],n),m.items.splice(o,1),i--,o--,r++);return m.update(),r},this.get=function(e,t){for(var n=[],r=0,o=m.items.length;r<o;r++){var i=m.items[r];i.values()[e]==t&&n.push(i)}return n},this.size=function(){return m.items.length},this.clear=function(){return m.templater.clear(),m.items=[],m},this.on=function(e,t){return m.handlers[e].push(t),m},this.off=function(e,t){var n=m.handlers[e],r=a(n,t);return r>-1&&n.splice(r,1),m},this.trigger=function(e){for(var t=m.handlers[e].length;t--;)m.handlers[e][t](m);return m},this.reset={filter:function(){for(var e=m.items,t=e.length;t--;)e[t].filtered=!1;return m},search:function(){for(var e=m.items,t=e.length;t--;)e[t].found=!1;return m}},this.update=function(){var e=m.items,t=e.length;m.visibleItems=[],m.matchingItems=[],m.templater.clear();for(var n=0;n<t;n++)e[n].matching()&&m.matchingItems.length+1>=m.i&&m.visibleItems.length<m.page?(e[n].show(),m.visibleItems.push(e[n]),m.matchingItems.push(e[n])):e[n].matching()?(m.matchingItems.push(e[n]),e[n].hide()):e[n].hide();return m.trigger("updated"),m},h.start()}},813:e=>{"use strict";var t,n,r=0;function o(e){return e>=48&&e<=57}function i(e,t){for(var i=(e+="").length,a=(t+="").length,s=0,l=0;s<i&&l<a;){var c=e.charCodeAt(s),d=t.charCodeAt(l);if(o(c)){if(!o(d))return c-d;for(var u=s,p=l;48===c&&++u<i;)c=e.charCodeAt(u);for(;48===d&&++p<a;)d=t.charCodeAt(p);for(var h=u,m=p;h<i&&o(e.charCodeAt(h));)++h;for(;m<a&&o(t.charCodeAt(m));)++m;var f=h-u-m+p;if(f)return f;for(;u<h;)if(f=e.charCodeAt(u++)-t.charCodeAt(p++))return f;s=h,l=m}else{if(c!==d)return c<r&&d<r&&-1!==n[c]&&-1!==n[d]?n[c]-n[d]:c-d;++s,++l}}return s>=i&&l<a&&i>=a?-1:l>=a&&s<i&&a>=i?1:i-a}i.caseInsensitive=i.i=function(e,t){return i((""+e).toLowerCase(),(""+t).toLowerCase())},Object.defineProperties(i,{alphabet:{get:function(){return t},set:function(e){n=[];var o=0;if(t=e)for(;o<t.length;o++)n[t.charCodeAt(o)]=o;for(r=n.length,o=0;o<r;o++)void 0===n[o]&&(n[o]=-1)}}}),e.exports=i},844:(e,t,n)=>{n(981);var r=n(332),o=n(433),i=n(340),a=n(378),s=n(481);e.exports=function(e,t){t=o({location:0,distance:100,threshold:.4,multiSearch:!0,searchClass:"fuzzy-search"},t=t||{});var n={search:function(r,o){for(var i=t.multiSearch?r.replace(/ +$/,"").split(/ +/):[r],a=0,s=e.items.length;a<s;a++)n.item(e.items[a],o,i)},item:function(e,t,r){for(var o=!0,i=0;i<r.length;i++){for(var a=!1,s=0,l=t.length;s<l;s++)n.values(e.values(),t[s],r[i])&&(a=!0);a||(o=!1)}e.found=o},values:function(e,n,r){if(e.hasOwnProperty(n)){var o=i(e[n]).toLowerCase();if(s(o,r,t))return!0}return!1}};return r.bind(a(e.listContainer,t.searchClass),"keyup",e.utils.events.debounce(function(t){var r=t.target||t.srcElement;e.search(r.value,n.search)},e.searchDelay)),function(t,r){e.search(t,r,n.search)}}},859:e=>{var t=[].indexOf;e.exports=function(e,n){if(t)return e.indexOf(n);for(var r=0,o=e.length;r<o;++r)if(e[r]===n)return r;return-1}},939:e=>{var t=function(e){var t,n=this,r=function(e){if("string"==typeof e){if(/<tr[\s>]/g.exec(e)){var t=document.createElement("tbody");return t.innerHTML=e,t.firstElementChild}if(-1!==e.indexOf("<")){var n=document.createElement("div");return n.innerHTML=e,n.firstElementChild}}},o=function(t,n,r){var o=void 0,i=function(t){for(var n=0,r=e.valueNames.length;n<r;n++){var o=e.valueNames[n];if(o.data){for(var i=o.data,a=0,s=i.length;a<s;a++)if(i[a]===t)return{data:t}}else{if(o.attr&&o.name&&o.name==t)return o;if(o===t)return t}}}(n);i&&(i.data?t.elm.setAttribute("data-"+i.data,r):i.attr&&i.name?(o=e.utils.getByClass(t.elm,i.name,!0))&&o.setAttribute(i.attr,r):(o=e.utils.getByClass(t.elm,i,!0))&&(o.innerHTML=r))};this.get=function(t,r){n.create(t);for(var o={},i=0,a=r.length;i<a;i++){var s=void 0,l=r[i];if(l.data)for(var c=0,d=l.data.length;c<d;c++)o[l.data[c]]=e.utils.getAttribute(t.elm,"data-"+l.data[c]);else l.attr&&l.name?(s=e.utils.getByClass(t.elm,l.name,!0),o[l.name]=s?e.utils.getAttribute(s,l.attr):""):(s=e.utils.getByClass(t.elm,l,!0),o[l]=s?s.innerHTML:"")}return o},this.set=function(e,t){if(!n.create(e))for(var r in t)t.hasOwnProperty(r)&&o(e,r,t[r])},this.create=function(e){return void 0===e.elm&&(e.elm=t(e.values()),n.set(e,e.values()),!0)},this.remove=function(t){t.elm.parentNode===e.list&&e.list.removeChild(t.elm)},this.show=function(t){n.create(t),e.list.appendChild(t.elm)},this.hide=function(t){void 0!==t.elm&&t.elm.parentNode===e.list&&e.list.removeChild(t.elm)},this.clear=function(){if(e.list.hasChildNodes())for(;e.list.childNodes.length>=1;)e.list.removeChild(e.list.firstChild)},function(){var n;if("function"!=typeof e.item){if(!(n="string"==typeof e.item?-1===e.item.indexOf("<")?document.getElementById(e.item):r(e.item):function(){for(var t=e.list.childNodes,n=0,r=t.length;n<r;n++)if(void 0===t[n].data)return t[n].cloneNode(!0)}()))throw new Error("The list needs to have at least one item on init otherwise you'll have to add a template.");n=function(t,n){var r=t.cloneNode(!0);r.removeAttribute("id");for(var o=0,i=n.length;o<i;o++){var a=void 0,s=n[o];if(s.data)for(var l=0,c=s.data.length;l<c;l++)r.setAttribute("data-"+s.data[l],"");else s.attr&&s.name?(a=e.utils.getByClass(r,s.name,!0))&&a.setAttribute(s.attr,""):(a=e.utils.getByClass(r,s,!0))&&(a.innerHTML="")}return r}(n,e.valueNames),t=function(){return n.cloneNode(!0)}}else t=function(t){var n=e.item(t);return r(n)}}()};e.exports=function(e){return new t(e)}},981:(e,t,n)=>{var r=n(859),o=/\s+/;function i(e){if(!e||!e.nodeType)throw new Error("A DOM element reference is required");this.el=e,this.list=e.classList}Object.prototype.toString,e.exports=function(e){return new i(e)},i.prototype.add=function(e){if(this.list)return this.list.add(e),this;var t=this.array();return~r(t,e)||t.push(e),this.el.className=t.join(" "),this},i.prototype.remove=function(e){if(this.list)return this.list.remove(e),this;var t=this.array(),n=r(t,e);return~n&&t.splice(n,1),this.el.className=t.join(" "),this},i.prototype.toggle=function(e,t){return this.list?(void 0!==t?t!==this.list.toggle(e,t)&&this.list.toggle(e):this.list.toggle(e),this):(void 0!==t?t?this.add(e):this.remove(e):this.has(e)?this.remove(e):this.add(e),this)},i.prototype.array=function(){var e=(this.el.getAttribute("class")||"").replace(/^\s+|\s+$/g,"").split(o);return""===e[0]&&e.shift(),e},i.prototype.has=i.prototype.contains=function(e){return this.list?this.list.contains(e):!!~r(this.array(),e)}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.lodash,t=window.wp.domReady;var r=n.n(t);const o=window.wp.element,i=window.wp.i18n,a=window.wp.components,s=window.wp.coreData,l=window.wp.data,c=window.wp.blockEditor;n(252);const d=window.wp.apiFetch;var u=n.n(d);const p={headers:{"Content-Type":"application/json"},method:"GET"},{entries:h,setPrototypeOf:m,isFrozen:f,getPrototypeOf:g,getOwnPropertyDescriptor:b}=Object;let{freeze:y,seal:v,create:x}=Object,{apply:_,construct:k}="undefined"!=typeof Reflect&&Reflect;y||(y=function(e){return e}),v||(v=function(e){return e}),_||(_=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return e.apply(t,r)}),k||(k=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new e(...n)});const w=D(Array.prototype.forEach),j=D(Array.prototype.lastIndexOf),C=D(Array.prototype.pop),S=D(Array.prototype.push),T=D(Array.prototype.splice),E=D(String.prototype.toLowerCase),N=D(String.prototype.toString),F=D(String.prototype.match),A=D(String.prototype.replace),B=D(String.prototype.indexOf),P=D(String.prototype.trim),O=D(Object.prototype.hasOwnProperty),L=D(RegExp.prototype.test),R=(I=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return k(I,t)});var I;function D(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return _(e,t,r)}}function M(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:E;m&&m(e,null);let r=t.length;for(;r--;){let o=t[r];if("string"==typeof o){const e=n(o);e!==o&&(f(t)||(t[r]=e),o=e)}e[o]=!0}return e}function z(e){for(let t=0;t<e.length;t++)O(e,t)||(e[t]=null);return e}function H(e){const t=x(null);for(const[n,r]of h(e))O(e,n)&&(Array.isArray(r)?t[n]=z(r):r&&"object"==typeof r&&r.constructor===Object?t[n]=H(r):t[n]=r);return t}function U(e,t){for(;null!==e;){const n=b(e,t);if(n){if(n.get)return D(n.get);if("function"==typeof n.value)return D(n.value)}e=g(e)}return function(){return null}}const $=y(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),V=y(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),G=y(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),W=y(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Y=y(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),q=y(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Q=y(["#text"]),J=y(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),K=y(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),X=y(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Z=y(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),ee=v(/\{\{[\w\W]*|[\w\W]*\}\}/gm),te=v(/<%[\w\W]*|[\w\W]*%>/gm),ne=v(/\$\{[\w\W]*/gm),re=v(/^data-[\-\w.\u00B7-\uFFFF]+$/),oe=v(/^aria-[\-\w]+$/),ie=v(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ae=v(/^(?:\w+script|data):/i),se=v(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),le=v(/^html$/i),ce=v(/^[a-z][.\w]*(-[.\w]+)+$/i);var de=Object.freeze({__proto__:null,ARIA_ATTR:oe,ATTR_WHITESPACE:se,CUSTOM_ELEMENT:ce,DATA_ATTR:re,DOCTYPE_NAME:le,ERB_EXPR:te,IS_ALLOWED_URI:ie,IS_SCRIPT_OR_DATA:ae,MUSTACHE_EXPR:ee,TMPLIT_EXPR:ne});const ue=function(){return"undefined"==typeof window?null:window};!function e(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue();const n=t=>e(t);if(n.version="3.3.0",n.removed=[],!t||!t.document||9!==t.document.nodeType||!t.Element)return n.isSupported=!1,n;let{document:r}=t;const o=r,i=o.currentScript,{DocumentFragment:a,HTMLTemplateElement:s,Node:l,Element:c,NodeFilter:d,NamedNodeMap:u=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:p,DOMParser:m,trustedTypes:f}=t,g=c.prototype,b=U(g,"cloneNode"),v=U(g,"remove"),_=U(g,"nextSibling"),k=U(g,"childNodes"),I=U(g,"parentNode");if("function"==typeof s){const e=r.createElement("template");e.content&&e.content.ownerDocument&&(r=e.content.ownerDocument)}let D,z="";const{implementation:ee,createNodeIterator:te,createDocumentFragment:ne,getElementsByTagName:re}=r,{importNode:oe}=o;let ae={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]};n.isSupported="function"==typeof h&&"function"==typeof I&&ee&&void 0!==ee.createHTMLDocument;const{MUSTACHE_EXPR:se,ERB_EXPR:ce,TMPLIT_EXPR:pe,DATA_ATTR:he,ARIA_ATTR:me,IS_SCRIPT_OR_DATA:fe,ATTR_WHITESPACE:ge,CUSTOM_ELEMENT:be}=de;let{IS_ALLOWED_URI:ye}=de,ve=null;const xe=M({},[...$,...V,...G,...Y,...Q]);let _e=null;const ke=M({},[...J,...K,...X,...Z]);let we=Object.seal(x(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),je=null,Ce=null;const Se=Object.seal(x(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Te=!0,Ee=!0,Ne=!1,Fe=!0,Ae=!1,Be=!0,Pe=!1,Oe=!1,Le=!1,Re=!1,Ie=!1,De=!1,Me=!0,ze=!1,He=!0,Ue=!1,$e={},Ve=null;const Ge=M({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let We=null;const Ye=M({},["audio","video","img","source","image","track"]);let qe=null;const Qe=M({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Je="http://www.w3.org/1998/Math/MathML",Ke="http://www.w3.org/2000/svg",Xe="http://www.w3.org/1999/xhtml";let Ze=Xe,et=!1,tt=null;const nt=M({},[Je,Ke,Xe],N);let rt=M({},["mi","mo","mn","ms","mtext"]),ot=M({},["annotation-xml"]);const it=M({},["title","style","font","a","script"]);let at=null;const st=["application/xhtml+xml","text/html"];let lt=null,ct=null;const dt=r.createElement("form"),ut=function(e){return e instanceof RegExp||e instanceof Function},pt=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!ct||ct!==e){if(e&&"object"==typeof e||(e={}),e=H(e),at=-1===st.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,lt="application/xhtml+xml"===at?N:E,ve=O(e,"ALLOWED_TAGS")?M({},e.ALLOWED_TAGS,lt):xe,_e=O(e,"ALLOWED_ATTR")?M({},e.ALLOWED_ATTR,lt):ke,tt=O(e,"ALLOWED_NAMESPACES")?M({},e.ALLOWED_NAMESPACES,N):nt,qe=O(e,"ADD_URI_SAFE_ATTR")?M(H(Qe),e.ADD_URI_SAFE_ATTR,lt):Qe,We=O(e,"ADD_DATA_URI_TAGS")?M(H(Ye),e.ADD_DATA_URI_TAGS,lt):Ye,Ve=O(e,"FORBID_CONTENTS")?M({},e.FORBID_CONTENTS,lt):Ge,je=O(e,"FORBID_TAGS")?M({},e.FORBID_TAGS,lt):H({}),Ce=O(e,"FORBID_ATTR")?M({},e.FORBID_ATTR,lt):H({}),$e=!!O(e,"USE_PROFILES")&&e.USE_PROFILES,Te=!1!==e.ALLOW_ARIA_ATTR,Ee=!1!==e.ALLOW_DATA_ATTR,Ne=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Fe=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,Ae=e.SAFE_FOR_TEMPLATES||!1,Be=!1!==e.SAFE_FOR_XML,Pe=e.WHOLE_DOCUMENT||!1,Re=e.RETURN_DOM||!1,Ie=e.RETURN_DOM_FRAGMENT||!1,De=e.RETURN_TRUSTED_TYPE||!1,Le=e.FORCE_BODY||!1,Me=!1!==e.SANITIZE_DOM,ze=e.SANITIZE_NAMED_PROPS||!1,He=!1!==e.KEEP_CONTENT,Ue=e.IN_PLACE||!1,ye=e.ALLOWED_URI_REGEXP||ie,Ze=e.NAMESPACE||Xe,rt=e.MATHML_TEXT_INTEGRATION_POINTS||rt,ot=e.HTML_INTEGRATION_POINTS||ot,we=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&ut(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(we.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&ut(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(we.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(we.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Ae&&(Ee=!1),Ie&&(Re=!0),$e&&(ve=M({},Q),_e=[],!0===$e.html&&(M(ve,$),M(_e,J)),!0===$e.svg&&(M(ve,V),M(_e,K),M(_e,Z)),!0===$e.svgFilters&&(M(ve,G),M(_e,K),M(_e,Z)),!0===$e.mathMl&&(M(ve,Y),M(_e,X),M(_e,Z))),e.ADD_TAGS&&("function"==typeof e.ADD_TAGS?Se.tagCheck=e.ADD_TAGS:(ve===xe&&(ve=H(ve)),M(ve,e.ADD_TAGS,lt))),e.ADD_ATTR&&("function"==typeof e.ADD_ATTR?Se.attributeCheck=e.ADD_ATTR:(_e===ke&&(_e=H(_e)),M(_e,e.ADD_ATTR,lt))),e.ADD_URI_SAFE_ATTR&&M(qe,e.ADD_URI_SAFE_ATTR,lt),e.FORBID_CONTENTS&&(Ve===Ge&&(Ve=H(Ve)),M(Ve,e.FORBID_CONTENTS,lt)),He&&(ve["#text"]=!0),Pe&&M(ve,["html","head","body"]),ve.table&&(M(ve,["tbody"]),delete je.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw R('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw R('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');D=e.TRUSTED_TYPES_POLICY,z=D.createHTML("")}else void 0===D&&(D=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let n=null;const r="data-tt-policy-suffix";t&&t.hasAttribute(r)&&(n=t.getAttribute(r));const o="dompurify"+(n?"#"+n:"");try{return e.createPolicy(o,{createHTML:e=>e,createScriptURL:e=>e})}catch(e){return console.warn("TrustedTypes policy "+o+" could not be created."),null}}(f,i)),null!==D&&"string"==typeof z&&(z=D.createHTML(""));y&&y(e),ct=e}},ht=M({},[...V,...G,...W]),mt=M({},[...Y,...q]),ft=function(e){S(n.removed,{element:e});try{I(e).removeChild(e)}catch(t){v(e)}},gt=function(e,t){try{S(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){S(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e)if(Re||Ie)try{ft(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},bt=function(e){let t=null,n=null;if(Le)e="<remove></remove>"+e;else{const t=F(e,/^[\r\n\t ]+/);n=t&&t[0]}"application/xhtml+xml"===at&&Ze===Xe&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const o=D?D.createHTML(e):e;if(Ze===Xe)try{t=(new m).parseFromString(o,at)}catch(e){}if(!t||!t.documentElement){t=ee.createDocument(Ze,"template",null);try{t.documentElement.innerHTML=et?z:o}catch(e){}}const i=t.body||t.documentElement;return e&&n&&i.insertBefore(r.createTextNode(n),i.childNodes[0]||null),Ze===Xe?re.call(t,Pe?"html":"body")[0]:Pe?t.documentElement:i},yt=function(e){return te.call(e.ownerDocument||e,e,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null)},vt=function(e){return e instanceof p&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof u)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},xt=function(e){return"function"==typeof l&&e instanceof l};function _t(e,t,r){w(e,e=>{e.call(n,t,r,ct)})}const kt=function(e){let t=null;if(_t(ae.beforeSanitizeElements,e,null),vt(e))return ft(e),!0;const r=lt(e.nodeName);if(_t(ae.uponSanitizeElement,e,{tagName:r,allowedTags:ve}),Be&&e.hasChildNodes()&&!xt(e.firstElementChild)&&L(/<[/\w!]/g,e.innerHTML)&&L(/<[/\w!]/g,e.textContent))return ft(e),!0;if(7===e.nodeType)return ft(e),!0;if(Be&&8===e.nodeType&&L(/<[/\w]/g,e.data))return ft(e),!0;if(!(Se.tagCheck instanceof Function&&Se.tagCheck(r))&&(!ve[r]||je[r])){if(!je[r]&&jt(r)){if(we.tagNameCheck instanceof RegExp&&L(we.tagNameCheck,r))return!1;if(we.tagNameCheck instanceof Function&&we.tagNameCheck(r))return!1}if(He&&!Ve[r]){const t=I(e)||e.parentNode,n=k(e)||e.childNodes;if(n&&t)for(let r=n.length-1;r>=0;--r){const o=b(n[r],!0);o.__removalCount=(e.__removalCount||0)+1,t.insertBefore(o,_(e))}}return ft(e),!0}return e instanceof c&&!function(e){let t=I(e);t&&t.tagName||(t={namespaceURI:Ze,tagName:"template"});const n=E(e.tagName),r=E(t.tagName);return!!tt[e.namespaceURI]&&(e.namespaceURI===Ke?t.namespaceURI===Xe?"svg"===n:t.namespaceURI===Je?"svg"===n&&("annotation-xml"===r||rt[r]):Boolean(ht[n]):e.namespaceURI===Je?t.namespaceURI===Xe?"math"===n:t.namespaceURI===Ke?"math"===n&&ot[r]:Boolean(mt[n]):e.namespaceURI===Xe?!(t.namespaceURI===Ke&&!ot[r])&&!(t.namespaceURI===Je&&!rt[r])&&!mt[n]&&(it[n]||!ht[n]):!("application/xhtml+xml"!==at||!tt[e.namespaceURI]))}(e)?(ft(e),!0):"noscript"!==r&&"noembed"!==r&&"noframes"!==r||!L(/<\/no(script|embed|frames)/i,e.innerHTML)?(Ae&&3===e.nodeType&&(t=e.textContent,w([se,ce,pe],e=>{t=A(t,e," ")}),e.textContent!==t&&(S(n.removed,{element:e.cloneNode()}),e.textContent=t)),_t(ae.afterSanitizeElements,e,null),!1):(ft(e),!0)},wt=function(e,t,n){if(Me&&("id"===t||"name"===t)&&(n in r||n in dt))return!1;if(Ee&&!Ce[t]&&L(he,t));else if(Te&&L(me,t));else if(Se.attributeCheck instanceof Function&&Se.attributeCheck(t,e));else if(!_e[t]||Ce[t]){if(!(jt(e)&&(we.tagNameCheck instanceof RegExp&&L(we.tagNameCheck,e)||we.tagNameCheck instanceof Function&&we.tagNameCheck(e))&&(we.attributeNameCheck instanceof RegExp&&L(we.attributeNameCheck,t)||we.attributeNameCheck instanceof Function&&we.attributeNameCheck(t,e))||"is"===t&&we.allowCustomizedBuiltInElements&&(we.tagNameCheck instanceof RegExp&&L(we.tagNameCheck,n)||we.tagNameCheck instanceof Function&&we.tagNameCheck(n))))return!1}else if(qe[t]);else if(L(ye,A(n,ge,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==B(n,"data:")||!We[e])if(Ne&&!L(fe,A(n,ge,"")));else if(n)return!1;return!0},jt=function(e){return"annotation-xml"!==e&&F(e,be)},Ct=function(e){_t(ae.beforeSanitizeAttributes,e,null);const{attributes:t}=e;if(!t||vt(e))return;const r={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:_e,forceKeepAttr:void 0};let o=t.length;for(;o--;){const i=t[o],{name:a,namespaceURI:s,value:l}=i,c=lt(a),d=l;let u="value"===a?d:P(d);if(r.attrName=c,r.attrValue=u,r.keepAttr=!0,r.forceKeepAttr=void 0,_t(ae.uponSanitizeAttribute,e,r),u=r.attrValue,!ze||"id"!==c&&"name"!==c||(gt(a,e),u="user-content-"+u),Be&&L(/((--!?|])>)|<\/(style|title|textarea)/i,u)){gt(a,e);continue}if("attributename"===c&&F(u,"href")){gt(a,e);continue}if(r.forceKeepAttr)continue;if(!r.keepAttr){gt(a,e);continue}if(!Fe&&L(/\/>/i,u)){gt(a,e);continue}Ae&&w([se,ce,pe],e=>{u=A(u,e," ")});const p=lt(e.nodeName);if(wt(p,c,u)){if(D&&"object"==typeof f&&"function"==typeof f.getAttributeType)if(s);else switch(f.getAttributeType(p,c)){case"TrustedHTML":u=D.createHTML(u);break;case"TrustedScriptURL":u=D.createScriptURL(u)}if(u!==d)try{s?e.setAttributeNS(s,a,u):e.setAttribute(a,u),vt(e)?ft(e):C(n.removed)}catch(t){gt(a,e)}}else gt(a,e)}_t(ae.afterSanitizeAttributes,e,null)},St=function e(t){let n=null;const r=yt(t);for(_t(ae.beforeSanitizeShadowDOM,t,null);n=r.nextNode();)_t(ae.uponSanitizeShadowNode,n,null),kt(n),Ct(n),n.content instanceof a&&e(n.content);_t(ae.afterSanitizeShadowDOM,t,null)};return n.sanitize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=null,i=null,s=null,c=null;if(et=!e,et&&(e="\x3c!--\x3e"),"string"!=typeof e&&!xt(e)){if("function"!=typeof e.toString)throw R("toString is not a function");if("string"!=typeof(e=e.toString()))throw R("dirty is not a string, aborting")}if(!n.isSupported)return e;if(Oe||pt(t),n.removed=[],"string"==typeof e&&(Ue=!1),Ue){if(e.nodeName){const t=lt(e.nodeName);if(!ve[t]||je[t])throw R("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof l)r=bt("\x3c!----\x3e"),i=r.ownerDocument.importNode(e,!0),1===i.nodeType&&"BODY"===i.nodeName||"HTML"===i.nodeName?r=i:r.appendChild(i);else{if(!Re&&!Ae&&!Pe&&-1===e.indexOf("<"))return D&&De?D.createHTML(e):e;if(r=bt(e),!r)return Re?null:De?z:""}r&&Le&&ft(r.firstChild);const d=yt(Ue?e:r);for(;s=d.nextNode();)kt(s),Ct(s),s.content instanceof a&&St(s.content);if(Ue)return e;if(Re){if(Ie)for(c=ne.call(r.ownerDocument);r.firstChild;)c.appendChild(r.firstChild);else c=r;return(_e.shadowroot||_e.shadowrootmode)&&(c=oe.call(o,c,!0)),c}let u=Pe?r.outerHTML:r.innerHTML;return Pe&&ve["!doctype"]&&r.ownerDocument&&r.ownerDocument.doctype&&r.ownerDocument.doctype.name&&L(le,r.ownerDocument.doctype.name)&&(u="<!DOCTYPE "+r.ownerDocument.doctype.name+">\n"+u),Ae&&w([se,ce,pe],e=>{u=A(u,e," ")}),D&&De?D.createHTML(u):u},n.setConfig=function(){pt(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),Oe=!0},n.clearConfig=function(){ct=null,Oe=!1},n.isValidAttribute=function(e,t,n){ct||pt({});const r=lt(e),o=lt(t);return wt(r,o,n)},n.addHook=function(e,t){"function"==typeof t&&S(ae[e],t)},n.removeHook=function(e,t){if(void 0!==t){const n=j(ae[e],t);return-1===n?void 0:T(ae[e],n,1)[0]}return C(ae[e])},n.removeHooks=function(e){ae[e]=[]},n.removeAllHooks=function(){ae={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},n}();const pe=window.wp.url,he=window.ReactJSXRuntime,me=window.wp.primitives;me.SVG,me.Path,me.SVG,me.Path,me.SVG,me.Path;const fe=window.wp.hooks,ge="Mobile",be="Tablet",ye="Desktop",ve={},xe=getComputedStyle(document.documentElement);ve[ge]=xe.getPropertyValue("--wp--custom--breakpoint--sm")||"576px",ve[be]=xe.getPropertyValue("--wp--custom--breakpoint--md")||"768px",ve[ye]=xe.getPropertyValue("--wp--custom--breakpoint--lg")||"1024px";const _e={};Object.keys(ve).map(e=>{_e[e]=e===ge?"":`@media (min-width: ${ve[e]})`}),(0,i.__)("Mobile","content-blocks-builder"),_e[ge],(0,i.__)("Tablet","content-blocks-builder"),_e[be],(0,i.__)("Desktop","content-blocks-builder"),_e[ye];const ke=(e,t="log")=>{e&&"development"===window?.BBLOG?.environmentType&&(["log","info","warn","error","debug","dir","table"].includes(t)?console[t](e):console.log(e))},we=(0,o.createContext)();class je{constructor(e=""){e||(e=window.location.href),this.parsedURL=new URL(e)}get(e,t=null){return this.parsedURL.searchParams.get(e)||t}set(e,t,n=!0){this.parsedURL.searchParams.set(e,t),n&&history.pushState&&history.pushState({},null,this.parsedURL.href)}delete(e,t=!0){this.parsedURL.searchParams.delete(e),t&&history.pushState&&history.pushState({},null,this.parsedURL.href)}reload(){history?.go?history.go():window.location.reload()}getHref(){return this.parsedURL.href}}function Ce(){return Ce=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ce.apply(null,arguments)}const Se=window.React;var Te=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(e){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),this.tags=[],this.ctr=0},e}(),Ee=Math.abs,Ne=String.fromCharCode,Fe=Object.assign;function Ae(e){return e.trim()}function Be(e,t,n){return e.replace(t,n)}function Pe(e,t){return e.indexOf(t)}function Oe(e,t){return 0|e.charCodeAt(t)}function Le(e,t,n){return e.slice(t,n)}function Re(e){return e.length}function Ie(e){return e.length}function De(e,t){return t.push(e),e}var Me=1,ze=1,He=0,Ue=0,$e=0,Ve="";function Ge(e,t,n,r,o,i,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Me,column:ze,length:a,return:""}}function We(e,t){return Fe(Ge("",null,null,"",null,null,0),e,{length:-e.length},t)}function Ye(){return $e=Ue>0?Oe(Ve,--Ue):0,ze--,10===$e&&(ze=1,Me--),$e}function qe(){return $e=Ue<He?Oe(Ve,Ue++):0,ze++,10===$e&&(ze=1,Me++),$e}function Qe(){return Oe(Ve,Ue)}function Je(){return Ue}function Ke(e,t){return Le(Ve,e,t)}function Xe(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ze(e){return Me=ze=1,He=Re(Ve=e),Ue=0,[]}function et(e){return Ve="",e}function tt(e){return Ae(Ke(Ue-1,ot(91===e?e+2:40===e?e+1:e)))}function nt(e){for(;($e=Qe())&&$e<33;)qe();return Xe(e)>2||Xe($e)>3?"":" "}function rt(e,t){for(;--t&&qe()&&!($e<48||$e>102||$e>57&&$e<65||$e>70&&$e<97););return Ke(e,Je()+(t<6&&32==Qe()&&32==qe()))}function ot(e){for(;qe();)switch($e){case e:return Ue;case 34:case 39:34!==e&&39!==e&&ot($e);break;case 40:41===e&&ot(e);break;case 92:qe()}return Ue}function it(e,t){for(;qe()&&e+$e!==57&&(e+$e!==84||47!==Qe()););return"/*"+Ke(t,Ue-1)+"*"+Ne(47===e?e:qe())}function at(e){for(;!Xe(Qe());)qe();return Ke(e,Ue)}var st="-ms-",lt="-moz-",ct="-webkit-",dt="comm",ut="rule",pt="decl",ht="@keyframes";function mt(e,t){for(var n="",r=Ie(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function ft(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case pt:return e.return=e.return||e.value;case dt:return"";case ht:return e.return=e.value+"{"+mt(e.children,r)+"}";case ut:e.value=e.props.join(",")}return Re(n=mt(e.children,r))?e.return=e.value+"{"+n+"}":""}function gt(e){return et(bt("",null,null,null,[""],e=Ze(e),0,[0],e))}function bt(e,t,n,r,o,i,a,s,l){for(var c=0,d=0,u=a,p=0,h=0,m=0,f=1,g=1,b=1,y=0,v="",x=o,_=i,k=r,w=v;g;)switch(m=y,y=qe()){case 40:if(108!=m&&58==Oe(w,u-1)){-1!=Pe(w+=Be(tt(y),"&","&\f"),"&\f")&&(b=-1);break}case 34:case 39:case 91:w+=tt(y);break;case 9:case 10:case 13:case 32:w+=nt(m);break;case 92:w+=rt(Je()-1,7);continue;case 47:switch(Qe()){case 42:case 47:De(vt(it(qe(),Je()),t,n),l);break;default:w+="/"}break;case 123*f:s[c++]=Re(w)*b;case 125*f:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+d:-1==b&&(w=Be(w,/\f/g,"")),h>0&&Re(w)-u&&De(h>32?xt(w+";",r,n,u-1):xt(Be(w," ","")+";",r,n,u-2),l);break;case 59:w+=";";default:if(De(k=yt(w,t,n,c,d,o,s,v,x=[],_=[],u),i),123===y)if(0===d)bt(w,t,k,k,x,i,u,s,_);else switch(99===p&&110===Oe(w,3)?100:p){case 100:case 108:case 109:case 115:bt(e,k,k,r&&De(yt(e,k,k,0,0,o,s,v,o,x=[],u),_),o,_,u,s,r?x:_);break;default:bt(w,k,k,k,[""],_,0,s,_)}}c=d=h=0,f=b=1,v=w="",u=a;break;case 58:u=1+Re(w),h=m;default:if(f<1)if(123==y)--f;else if(125==y&&0==f++&&125==Ye())continue;switch(w+=Ne(y),y*f){case 38:b=d>0?1:(w+="\f",-1);break;case 44:s[c++]=(Re(w)-1)*b,b=1;break;case 64:45===Qe()&&(w+=tt(qe())),p=Qe(),d=u=Re(v=w+=at(Je())),y++;break;case 45:45===m&&2==Re(w)&&(f=0)}}return i}function yt(e,t,n,r,o,i,a,s,l,c,d){for(var u=o-1,p=0===o?i:[""],h=Ie(p),m=0,f=0,g=0;m<r;++m)for(var b=0,y=Le(e,u+1,u=Ee(f=a[m])),v=e;b<h;++b)(v=Ae(f>0?p[b]+" "+y:Be(y,/&\f/g,p[b])))&&(l[g++]=v);return Ge(e,t,n,0===o?ut:s,l,c,d)}function vt(e,t,n){return Ge(e,t,n,dt,Ne($e),Le(e,2,-2),0)}function xt(e,t,n,r){return Ge(e,t,n,pt,Le(e,0,r),Le(e,r+1,-1),r)}var _t=function(e,t,n){for(var r=0,o=0;r=o,o=Qe(),38===r&&12===o&&(t[n]=1),!Xe(o);)qe();return Ke(e,Ue)},kt=new WeakMap,wt=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||kt.get(n))&&!r){kt.set(e,!0);for(var o=[],i=function(e,t){return et(function(e,t){var n=-1,r=44;do{switch(Xe(r)){case 0:38===r&&12===Qe()&&(t[n]=1),e[n]+=_t(Ue-1,t,n);break;case 2:e[n]+=tt(r);break;case 4:if(44===r){e[++n]=58===Qe()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=Ne(r)}}while(r=qe());return e}(Ze(e),t))}(t,o),a=n.props,s=0,l=0;s<i.length;s++)for(var c=0;c<a.length;c++,l++)e.props[l]=o[s]?i[s].replace(/&\f/g,a[c]):a[c]+" "+i[s]}}},jt=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function Ct(e,t){switch(function(e,t){return 45^Oe(e,0)?(((t<<2^Oe(e,0))<<2^Oe(e,1))<<2^Oe(e,2))<<2^Oe(e,3):0}(e,t)){case 5103:return ct+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ct+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ct+e+lt+e+st+e+e;case 6828:case 4268:return ct+e+st+e+e;case 6165:return ct+e+st+"flex-"+e+e;case 5187:return ct+e+Be(e,/(\w+).+(:[^]+)/,ct+"box-$1$2"+st+"flex-$1$2")+e;case 5443:return ct+e+st+"flex-item-"+Be(e,/flex-|-self/,"")+e;case 4675:return ct+e+st+"flex-line-pack"+Be(e,/align-content|flex-|-self/,"")+e;case 5548:return ct+e+st+Be(e,"shrink","negative")+e;case 5292:return ct+e+st+Be(e,"basis","preferred-size")+e;case 6060:return ct+"box-"+Be(e,"-grow","")+ct+e+st+Be(e,"grow","positive")+e;case 4554:return ct+Be(e,/([^-])(transform)/g,"$1"+ct+"$2")+e;case 6187:return Be(Be(Be(e,/(zoom-|grab)/,ct+"$1"),/(image-set)/,ct+"$1"),e,"")+e;case 5495:case 3959:return Be(e,/(image-set\([^]*)/,ct+"$1$`$1");case 4968:return Be(Be(e,/(.+:)(flex-)?(.*)/,ct+"box-pack:$3"+st+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ct+e+e;case 4095:case 3583:case 4068:case 2532:return Be(e,/(.+)-inline(.+)/,ct+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Re(e)-1-t>6)switch(Oe(e,t+1)){case 109:if(45!==Oe(e,t+4))break;case 102:return Be(e,/(.+:)(.+)-([^]+)/,"$1"+ct+"$2-$3$1"+lt+(108==Oe(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Pe(e,"stretch")?Ct(Be(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==Oe(e,t+1))break;case 6444:switch(Oe(e,Re(e)-3-(~Pe(e,"!important")&&10))){case 107:return Be(e,":",":"+ct)+e;case 101:return Be(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ct+(45===Oe(e,14)?"inline-":"")+"box$3$1"+ct+"$2$3$1"+st+"$2box$3")+e}break;case 5936:switch(Oe(e,t+11)){case 114:return ct+e+st+Be(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ct+e+st+Be(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ct+e+st+Be(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ct+e+st+e+e}return e}var St=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case pt:e.return=Ct(e.value,e.length);break;case ht:return mt([We(e,{value:Be(e.value,"@","@"+ct)})],r);case ut:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,function(t){switch(function(e){return(e=/(::plac\w+|:read-\w+)/.exec(e))?e[0]:e}(t)){case":read-only":case":read-write":return mt([We(e,{props:[Be(t,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return mt([We(e,{props:[Be(t,/:(plac\w+)/,":"+ct+"input-$1")]}),We(e,{props:[Be(t,/:(plac\w+)/,":-moz-$1")]}),We(e,{props:[Be(t,/:(plac\w+)/,st+"input-$1")]})],r)}return""})}}],Tt=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))})}var r,o,i=e.stylisPlugins||St,a={},s=[];r=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(e){for(var t=e.getAttribute("data-emotion").split(" "),n=1;n<t.length;n++)a[t[n]]=!0;s.push(e)});var l,c,d,u,p=[ft,(u=function(e){l.insert(e)},function(e){e.root||(e=e.return)&&u(e)})],h=(c=[wt,jt].concat(i,p),d=Ie(c),function(e,t,n,r){for(var o="",i=0;i<d;i++)o+=c[i](e,t,n,r)||"";return o});o=function(e,t,n,r){l=n,mt(gt(e?e+"{"+t.styles+"}":t.styles),h),r&&(m.inserted[t.name]=!0)};var m={key:t,sheet:new Te({key:t,container:r,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:a,registered:{},insert:o};return m.sheet.hydrate(s),m},Et={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Nt(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}var Ft=/[A-Z]|^ms/g,At=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Bt=function(e){return 45===e.charCodeAt(1)},Pt=function(e){return null!=e&&"boolean"!=typeof e},Ot=Nt(function(e){return Bt(e)?e:e.replace(Ft,"-$&").toLowerCase()}),Lt=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(At,function(e,t,n){return It={name:t,styles:n,next:It},t})}return 1===Et[e]||Bt(e)||"number"!=typeof t||0===t?t:t+"px"};function Rt(e,t,n){if(null==n)return"";var r=n;if(void 0!==r.__emotion_styles)return r;switch(typeof n){case"boolean":return"";case"object":var o=n;if(1===o.anim)return It={name:o.name,styles:o.styles,next:It},o.name;var i=n;if(void 0!==i.styles){var a=i.next;if(void 0!==a)for(;void 0!==a;)It={name:a.name,styles:a.styles,next:It},a=a.next;return i.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Rt(e,t,n[o])+";";else for(var i in n){var a=n[i];if("object"!=typeof a){var s=a;null!=t&&void 0!==t[s]?r+=i+"{"+t[s]+"}":Pt(s)&&(r+=Ot(i)+":"+Lt(i,s)+";")}else if(!Array.isArray(a)||"string"!=typeof a[0]||null!=t&&void 0!==t[a[0]]){var l=Rt(e,t,a);switch(i){case"animation":case"animationName":r+=Ot(i)+":"+l+";";break;default:r+=i+"{"+l+"}"}}else for(var c=0;c<a.length;c++)Pt(a[c])&&(r+=Ot(i)+":"+Lt(i,a[c])+";")}return r}(e,t,n);case"function":if(void 0!==e){var s=It,l=n(e);return It=s,Rt(e,t,l)}}var c=n;if(null==t)return c;var d=t[c];return void 0!==d?d:c}var It,Dt=/label:\s*([^\s;{]+)\s*(;|$)/g,Mt=!!Se.useInsertionEffect&&Se.useInsertionEffect,zt=Mt||function(e){return e()},Ht=(Mt||Se.useLayoutEffect,Se.createContext("undefined"!=typeof HTMLElement?Tt({key:"css"}):null)),Ut=(Ht.Provider,function(e){return(0,Se.forwardRef)(function(t,n){var r=(0,Se.useContext)(Ht);return e(t,r,n)})}),$t=Se.createContext({}),Vt=function(e,t,n){var r=e.key+"-"+t.name;!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles)},Gt=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Wt=Nt(function(e){return Gt.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}),Yt=function(e){return"theme"!==e},qt=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?Wt:Yt},Qt=function(e,t,n){var r;if(t){var o=t.shouldForwardProp;r=e.__emotion_forwardProp&&o?function(t){return e.__emotion_forwardProp(t)&&o(t)}:o}return"function"!=typeof r&&n&&(r=e.__emotion_forwardProp),r},Jt=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return Vt(t,n,r),zt(function(){return function(e,t,n){Vt(e,t,n);var r=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var o=t;do{e.insert(t===o?"."+r:"",o,e.sheet,!0),o=o.next}while(void 0!==o)}}(t,n,r)}),null},Kt=function e(t,n){var r,o,i=t.__emotion_real===t,a=i&&t.__emotion_base||t;void 0!==n&&(r=n.label,o=n.target);var s=Qt(t,n,i),l=s||qt(a),c=!l("as");return function(){var d=arguments,u=i&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==r&&u.push("label:"+r+";"),null==d[0]||void 0===d[0].raw)u.push.apply(u,d);else{var p=d[0];u.push(p[0]);for(var h=d.length,m=1;m<h;m++)u.push(d[m],p[m])}var f=Ut(function(e,t,n){var r,i,d,p,h=c&&e.as||a,m="",f=[],g=e;if(null==e.theme){for(var b in g={},e)g[b]=e[b];g.theme=Se.useContext($t)}"string"==typeof e.className?(r=t.registered,i=f,d=e.className,p="",d.split(" ").forEach(function(e){void 0!==r[e]?i.push(r[e]+";"):e&&(p+=e+" ")}),m=p):null!=e.className&&(m=e.className+" ");var y=function(e,t,n){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,o="";It=void 0;var i=e[0];null==i||void 0===i.raw?(r=!1,o+=Rt(n,t,i)):o+=i[0];for(var a=1;a<e.length;a++)o+=Rt(n,t,e[a]),r&&(o+=i[a]);Dt.lastIndex=0;for(var s,l="";null!==(s=Dt.exec(o));)l+="-"+s[1];var c=function(e){for(var t,n=0,r=0,o=e.length;o>=4;++r,o-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(o){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)}(o)+l;return{name:c,styles:o,next:It}}(u.concat(f),t.registered,g);m+=t.key+"-"+y.name,void 0!==o&&(m+=" "+o);var v=c&&void 0===s?qt(h):l,x={};for(var _ in e)c&&"as"===_||v(_)&&(x[_]=e[_]);return x.className=m,n&&(x.ref=n),Se.createElement(Se.Fragment,null,Se.createElement(Jt,{cache:t,serialized:y,isStringTag:"string"==typeof h}),Se.createElement(h,x))});return f.displayName=void 0!==r?r:"Styled("+("string"==typeof a?a:a.displayName||a.name||"Component")+")",f.defaultProps=t.defaultProps,f.__emotion_real=f,f.__emotion_base=a,f.__emotion_styles=u,f.__emotion_forwardProp=s,Object.defineProperty(f,"toString",{value:function(){return"."+o}}),f.withComponent=function(t,r){return e(t,Ce({},n,r,{shouldForwardProp:Qt(f,r,!0)})).apply(void 0,u)},f}}.bind(null);function Xt(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=Xt(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach(function(e){Kt[e]=Kt(e)}),Kt(a.BaseControl)`
  margin-bottom: 8px !important;

  &.is-bold {
    font-weight: 600;
  }

  &.h3 {
    font-size: 13px;
    font-weight: bold;
  }

  .components-base-control__field {
    display: flex;
    align-items: center;
    margin-bottom: 0;
  }

  .components-base-control__label {
    margin-bottom: 0;
  }

  div.components-dropdown {
    min-height: 30px;
    margin-bottom: 0;
    border: 0;

    &:first-of-type {
      margin-left: 10px;
    }

    .components-button {
      min-width: 36px;
      height: 30px;

      &.has-icon {
        min-width: 48px;
      }
    }
  }
`,Kt.div`
  padding-bottom: 4px;
  margin-bottom: 8px;
  border-bottom: 1px solid #ddd;

  > * {
    margin-bottom: 8px !important;
  }

  .repeater-group__item__actions {
    display: flex;
    align-items: center;
    gap: 0.2em;

    > *:first-of-type {
      margin-right: auto;
    }
  }
`,Kt(a.PanelBody)`
  margin-right: -16px;
  margin-left: -16px;
`;const Zt=function(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=Xt(e))&&(r&&(r+=" "),r+=t);return r},en=Kt.div`
  box-sizing: border-box;
  width: 100%;

  .group-control__body {
    gap: 4px;

    > * {
      max-width: 100%;
    }
  }

  &.is-2-columns {
    .group-control__body {
      > * {
        flex-basis: calc(50% - 4px);

        &:nth-of-type(n + 3) {
          margin-top: 8px !important;
        }
      }
    }
  }

  &.is-3-columns {
    .group-control__body {
      > * {
        flex-basis: calc(33.33333% - 4px);

        &:nth-of-type(n + 4) {
          margin-top: 8px !important;
        }
      }
    }
  }

  &.is-4-columns {
    .group-control__body {
      > * {
        flex-basis: calc(25% - 4px);

        &:nth-of-type(n + 5) {
          margin-top: 8px !important;
        }
      }
    }
  }
`,tn=Kt(a.Flex)`
  padding-bottom: 8px;

  .label-control {
    margin-bottom: 0 !important;
  }
`,nn=Kt(a.Flex)`
  flex-wrap: wrap;
  width: auto;
  gap: 4px;

  > * {
    flex: 1 0 auto;
    margin: 0 !important;
  }
`;var rn=(0,he.jsx)(me.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,he.jsx)(me.Path,{d:"M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"})}),on=(0,he.jsx)(me.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,he.jsx)(me.Path,{d:"M17.031 4.703 15.576 4l-1.56 3H14v.03l-2.324 4.47H9.5V13h1.396l-1.502 2.889h-.95a3.694 3.694 0 0 1 0-7.389H10V7H8.444a5.194 5.194 0 1 0 0 10.389h.17L7.5 19.53l1.416.719L15.049 8.5h.507a3.694 3.694 0 0 1 0 7.39H14v1.5h1.556a5.194 5.194 0 0 0 .273-10.383l1.202-2.304Z"})});function an({isLinked:e,...t}){const n=e?(0,i.__)("Unlink Sides","content-blocks-builder"):(0,i.__)("Link Sides","content-blocks-builder");return(0,he.jsx)(a.Tooltip,{text:n,children:(0,he.jsx)("span",{children:(0,he.jsx)(a.Button,{...t,className:"component-group-control__linked-button",variant:e?"primary":"secondary",size:"small",icon:e?rn:on,iconSize:16,"aria-label":n})})})}var sn=n(774),ln=n.n(sn);const cn=({values:t,fields:n})=>{const r=n.map(({name:e})=>{var n;return null!==(n=t[e])&&void 0!==n?n:void 0});return(o=r.filter(e=>e)).sort((t,n)=>(0,e.isObject)(t)?o.filter(e=>ln()(e,t)).length-o.filter(e=>ln()(e,n)).length:o.filter(e=>e===t).length-o.filter(e=>e===n).length).pop();var o},dn=({values:e,fields:t,renderControl:n,onChange:r,normalizeValue:i,...a})=>t.map(s=>{var l;const{name:c}=s;return(0,he.jsx)(o.Fragment,{children:n({value:null!==(l=e[c])&&void 0!==l?l:void 0,onChange:(d=c,t=>{t=i({side:d,value:t}),r({...e,[d]:t})}),fields:t,values:e,...s,...a})},`group-control-${c}`);var d}),un=({values:e,fields:t,renderControl:n,renderAllControl:r=null,onChange:o,normalizeValue:i,...a})=>(r||(r=n),r({value:cn({values:e,fields:t}),fields:t,values:e,onChange:n=>{n=i({side:"all",value:n});let r={...e};t.forEach(({name:e})=>{r={...r,[e]:n}}),o(r)},...a})),pn=({label:t,fields:n=[],values:r={},renderLabel:i=e.noop,renderControl:a=e.noop,onChange:s=e.noop,normalizeValue:l=({side:e,value:t})=>t,isLinkedGroup:c=!0,getInitialLinkedState:d=e.noop,className:u,columns:p,hideHeader:h=!1,...m})=>{const f={fields:n,values:r,renderControl:a,onChange:s,normalizeValue:l,...m},[g,b]=c?function(e){const[t,n]=(0,o.useState)(e);return(0,o.useEffect)(()=>n(e),[e]),[t,n]}(d(r)):[!1,e.noop];return(0,he.jsxs)(en,{className:Zt("group-control",u,{[`is-${p}-columns`]:p}),...m,children:[!h&&(0,he.jsxs)(tn,{className:"group-control__header",children:[i({label:t,isLinkedGroup:c,...m}),c&&(0,he.jsx)(an,{onClick:()=>{b(!g)},isLinked:g})]}),(0,he.jsxs)(nn,{className:"group-control__body",children:[g&&(0,he.jsx)(un,{...f}),!g&&(0,he.jsx)(dn,{...f})]})]})};Kt.fieldset`
  .components-range-control > .components-base-control__field {
    margin-bottom: 0;
  }
`,Kt(pn)`
  .group-control__body {
    > *:nth-of-type(3) {
      order: 2;
    }

    .components-input-control__input {
      height: 40px;
    }
  }
`,Kt(c.__experimentalPanelColorGradientSettings)`
  padding: 0 !important;
  margin-top: 0 !important;
  border-top: 0 !important;

  > .first {
    margin-top: 0 !important;
  }

  &.is-inner-control {
    .block-editor-panel-color-gradient-settings__dropdown {
      height: 32px;
      padding: 5px;
    }

    .block-editor-panel-color-gradient-settings__reset {
      margin-top: -4px;
    }

    .block-editor-panel-color-gradient-settings__color-name {
      overflow: visible;
    }
  }

  &.is-hidden-reset {
    .block-editor-panel-color-gradient-settings__reset {
      display: none;
    }
  }
`,Kt(pn)`
  /* .block-editor-panel-color-gradient-settings__item {
    padding: 8px !important;
  } */

  .components-toggle-control {
    > * {
      margin-bottom: 0;
    }
  }
`,Kt.div`
  .shadow-list__title {
    margin-bottom: 8px;
  }

  .shadow-list {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 12px;

    margin-bottom: 16px;
  }

  .shadow-item {
    height: 30px;
    cursor: pointer;
    background: #fff;
    border: 1px solid #ddd;

    &.is-selected {
      background: #ddd;
    }
  }
`,Kt(pn)`
  .components-base-control__field {
    margin-bottom: 0;
  }
`;const hn=window.wp.notices,mn=(Kt.div`
  .svg-input-control {
    &__label {
      font-size: 11px;
      font-weight: 500;
      text-transform: uppercase;
    }

    &__actions {
      display: flex;
      gap: 8px;
      margin: 6px 0;
    }

    &__input {
      margin: 8px 0 4px;

      > * {
        margin-bottom: 0;
      }
    }
  }
`,"#1e1e1e"),fn="2px",gn=(Kt.div`
  margin-top: 1px;
  margin-left: 1px;

  .components-button {
    margin: -1px 0 0 -1px;
    vertical-align: middle;
    border-radius: 0;
    display: inline-flex;
    box-shadow: inset 0 0 0 ${"1px"} ${mn};

    &:first-of-type {
      border-radius: ${fn} 0 0 ${fn};
    }

    &:last-of-type {
      border-radius: 0 ${fn} ${fn} 0;
    }

    // The active button should look pressed.
    &.is-primary {
      box-shadow: inset 0 0 0 ${"1px"} ${mn};
    }
  }
`,Kt.div`
  margin-top: 8px;
  margin-bottom: revert;
  font-size; 12px;
  color: #757575;

  &.no-margin {
    margin-top: 0;
  }
`,({onSave:e})=>{const[t,n]=(0,o.useState)(!1);return(0,he.jsxs)(he.Fragment,{children:[(0,he.jsx)(a.Button,{variant:"primary",onClick:t=>{t.preventDefault(),n(!0),e().finally(()=>{n(!1)})},children:(0,i.__)("Update Settings","content-blocks-builder")}),t&&(0,he.jsx)(a.Spinner,{})]})}),bn=e=>{const{saveEditedEntityRecord:t}=(0,l.useDispatch)(s.store),[n,r]=(0,o.useState)({type:"success",message:""});return{handleSave:()=>t("root","site").then(()=>{r({type:"success",message:e.Success})}).catch(t=>{log(t,"error"),r({type:"error",message:e.Error})}),MessageNotice:()=>n&&n?.message&&(0,he.jsx)(a.Notice,{status:n?.type,isDismissible:!1,children:n.message})}},yn=Kt.div`
  .settings-section__description {
    margin: 1em 0;
    font-size: 1.1em;
    font-weight: 500;
  }

  .settings-section__body {
    @media (min-width: 1080px) {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      align-items: start;
      gap: 1rem;

      .postbox {
        margin-bottom: 1rem;
      }
    }
  }
`,vn=({title:e,description:t,children:n,className:r})=>(0,he.jsxs)(yn,{className:Zt("settings-section meta-box-sortables",r),children:[e&&(0,he.jsx)("h3",{className:"settings-section__title",children:e}),t&&(0,he.jsx)("p",{className:"settings-section__description",children:t}),(0,he.jsx)("div",{className:"settings-section__body",children:n})]}),xn=Kt.div`
  &.is-full-row {
    grid-column: span 2;
  }

  &.is-header-hidden {
    .inside {
      padding: 12px;
    }

    @media (min-width: 1080px) {
      margin: 0;
    }
  }

  .postbox-header {
    .hndle {
      cursor: pointer;
    }
  }

  .inside {
    margin: 0;
  }

  .postbox-footer {
    padding: 12px;
    border-top: 1px solid #f0f0f1;
  }

  &.closed .postbox-footer {
    display: none;
  }

  .components-notice {
    width: 100%;
    padding-top: 0;
    padding-bottom: 0;
    margin-top: 8px;
    margin-right: 0;
    margin-left: 0;
    box-sizing: border-box;
  }
`,kn=Kt.div`
  padding: 12px 16px;
  margin-top: 12px;
  background-color: #fafafa;
  border: 1px solid #ebebeb;
  border-radius: 2px;

  .fieldset__label {
    margin-bottom: 12px;
  }

  .fieldset__list {
    margin-bottom: 0;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    column-gap: 1rem;
  }

  .file-upload {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1em;
  }

  .file-preview {
    display: flex;
    align-items: center;
    gap: 0.5em;

    .icon {
      width: 20px;
      height: 20px;
    }
  }
`,wn=({children:e})=>(0,he.jsx)("div",{className:"widgets-container",children:e}),jn=({title:t,settingsName:n="boldblocks-settings",children:r,renderFooter:i=null,isFullRow:a=!1,isHeaderHidden:s=!1,className:l,initialOpen:c=!0})=>{const d=`${n}-${(0,pe.cleanForSlug)(t)}`,[u,p]=((t,n=null)=>{const[r,i]=(0,o.useState)(()=>{try{const r=JSON.parse(localStorage.getItem(t));return(0,e.isNil)(r)?n:r}catch(e){return ke(e,"error"),n}});return[r,e=>{i(e),localStorage.setItem(t,JSON.stringify(e))}]})(d,!c);return(0,he.jsxs)(xn,{className:Zt("postbox",l,{closed:u,"is-full-row":a,"is-header-hidden":s}),children:[!s&&(0,he.jsxs)("div",{className:"postbox-header","aria-expanded":u?"false":"true",tabIndex:-1,onClick:e=>{e.preventDefault(),p(!u)},children:[(0,he.jsx)("h2",{className:"hndle",children:t}),(0,he.jsx)("div",{className:"handle-actions hide-if-no-js",children:(0,he.jsxs)("button",{type:"button",className:"handlediv","aria-expanded":u?"false":"true",onClick:e=>{e.preventDefault(),p(!u)},children:[(0,he.jsxs)("span",{className:"screen-reader-text",children:["Toggle panel: ",t]}),(0,he.jsx)("span",{className:"toggle-indicator","aria-hidden":u?"true":"false"})]})})]}),(0,he.jsx)("div",{className:"inside",children:r}),(0,e.isFunction)(i)&&(0,he.jsx)("div",{className:"postbox-footer",children:i()})]})};window.wp.blocks,Kt.div`
  flex-wrap: wrap;

  .block-editor-block-variation-picker__variations > li {
    margin-right: 8px;
  }

  .block-editor-block-variation-picker.has-many-variations
    .components-placeholder__fieldset {
    max-width: 100%;
  }

  .placeholder__footer {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    flex-basis: 100%;
    padding: 1em;
    background-color: #fff;
    box-shadow: inset 0 -1px 0 1px #1e1e1e;
  }
`,n(799),window.wp.keycodes,Kt(a.Modal)`
  // Modal content
  .components-modal__content {
    display: flex;
    flex-direction: column;
    padding: 0 20px 20px;
    margin-top: 50px;
    overflow: hidden;

    &::before {
      margin-bottom: 20px;
    }

    > :not(.components-modal__header, .icon-submit) {
      max-height: 100%;
      display: flex;
      flex-direction: column;
      flex: 1;
      overflow: auto;
    }
  }

  // Modal header
  .components-modal__header {
    height: 50px;
    padding: 0 20px;
  }

  .icon-library-wrapper {
    flex: 1;
    overflow: hidden;
    content-visibility: hidden;

    &.is-loading,
    &.show-library {
      content-visibility: visible;
    }
  }

  .icon-filter {
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 20px;

    &__search {
      min-width: 220px;
    }

    .keywords {
      display: flex;
      flex-wrap: wrap;
      margin: 0;
      font-size: 14px;

      > li {
        margin: 0;
      }

      .keyword-label {
        font-weight: 500;
      }

      span {
        display: block;
        padding: 3px 5px;
      }

      .keyword:not(.is-selected) {
        color: var(--wp-admin-theme-color, #007cba);
        cursor: pointer;
      }

      .is-selected {
        font-weight: 500;
        pointer-events: none;
      }
    }

    @media (max-width: 781px) {
      flex-wrap: wrap;

      &__search {
        width: 100%;
      }

      &__keywords {
        margin-top: 8px;
        margin-left: 0 !important;
      }
    }
  }

  .components-search-control > * {
    margin-bottom: 0;
  }

  // Icons list
  .icon-library {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(9em, 1fr));
    gap: 0.5em;
    max-height: calc(100% - 110px);
    overflow: auto;

    /* box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.4); */

    svg {
      width: 4em;
      height: 4em;
    }

    .title {
      max-height: 1.7em;
      font-size: 0.85em;
      line-height: 1.5;
      text-align: center;
      word-break: break-word;
    }

    > * {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1.5em 1em;
      overflow: hidden;
      border: 1px solid #ddd;
      border-radius: 4px;
      cursor: pointer;
    }

    .selected {
      background-color: #ccc;
    }

    &:empty::before {
      display: block;
      width: 100%;
      padding: 2rem;
      text-align: center;
      content: attr(data-empty);
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  }

  // Pagination
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8px 0;
    font-size: 1.5em;

    > li {
      margin: 0 5px;

      &:only-child {
        display: none;
      }

      &.active {
        a {
          color: #3c434a;
        }
      }

      &:not(.active) {
        a {
          cursor: pointer;
        }
      }
    }

    a {
      display: block;
      padding: 5px 10px;
    }
  }
`,Kt.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1rem 0 0;
  font-size: 1.5em;

  > li {
    margin-bottom: 0;

    > * {
      display: block;
      padding: 0.5rem;
    }

    > a {
      cursor: pointer;

      &:focus {
        box-shadow: none;
        outline: 1px solid transparent;
      }
      &:focus-visible {
        box-shadow: 0 0 0 1px #2271b1;
        outline: 1px solid transparent;
      }
    }
  }
`;const Cn=Kt(jn)`
  border-top: 0;
  color: #000 !important;

  a,
  ul,
  p {
    font-size: 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0 0 10px !important;
    font-weight: 500 !important;
  }

  h1 {
    padding: 0;
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.25rem;
  }

  h4 {
    font-size: 1.185rem;
  }

  h5 {
    font-size: 1rem;
  }

  ul {
    padding-left: 20px;
    list-style: disc;
  }

  .flex-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding-left: 0;
    list-style: none;
  }

  .leading {
    font-size: 1.45em;
  }

  .section-title {
    margin-top: 1em !important;
  }

  .section-summary {
    font-size: 1.35em;
  }

  .feature-line {
    font-size: 1.15em;
  }

  details {
    padding: 0 0.5rem;

    ul {
      margin: 0;
    }

    li {
      margin-bottom: 4px;
    }
  }

  details + details {
    border-top: none;
  }

  details[open] {
    padding-bottom: 1em;
  }

  summary {
    padding: 0.35rem 2em 0.35rem 0;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
  }

  .feature-summary {
    details {
      margin: 1rem 0;
    }
  }

  .technical-feature {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .video-tutorial {
    margin: 16px 0;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(20rem, 100%), 1fr));
    gap: 1rem;

    &-item {
      padding: 1rem;
      border: 1px solid #ddd;
      border-radius: 8px;

      h3 {
        margin: 0 0 0.5rem;
        font-weight: 700;
      }

      h4,
      h5 {
        margin: 16px 0 !important;
      }
    }
  }

  .grid--large {
    grid-template-columns: repeat(auto-fill, minmax(min(30rem, 100%), 1fr));
  }

  .video-frame {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    margin: 0;
    border: 1px solid #e1e1e1;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .video-caption {
    margin: 4px 0;
    font-size: 0.9rem;
  }

  .video-tutorials {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(15rem, 100%), 1fr));
    gap: 12px;
  }
`,Sn=({videoId:e})=>(0,he.jsx)("div",{className:"video-frame",children:(0,he.jsx)("iframe",{src:`https://www.youtube.com/embed/${e}`,srcDoc:`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img{position:absolute;width:100%;top:0;bottom:0;margin:auto}.btn-play{position: absolute;top: 50%;left: 50%;z-index: 1;display: block;width: 68px;height: 48px;margin:0;cursor: pointer;transform: translate3d(-50%, -50%, 0);background-color: transparent;background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 48"><path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="red"/><path d="M45 24 27 14v20" fill="white"/></svg>');filter: grayscale(100%);transition: filter .1s cubic-bezier(0, 0, 0.2, 1);border: none;}body:hover .btn-play,.btn-play:focus{filter:none}.visually-hidden{clip: rect(0 0 0 0);clip-path: inset(50%);height: 1px;overflow: hidden;position: absolute;white-space: nowrap;width: 1px;}</style><a href="https://www.youtube.com/embed/${e}?autoplay=1&enablejsapi=1&playsinline=1"><img src="https://img.youtube.com/vi/${e}/maxresdefault.jpg" alt="Video tutorial"><button type="button" class="btn-play"><span class="visually-hidden">Play</span></button></a>`,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),Tn=()=>{const{Docs:{loading:e,docs:t}={}}=(0,o.useContext)(we),n=[{title:"Carousel layouts",keyFeatures:"Ease to use, fast, clean, flexible, responsive, multiple effects, navigation, pagination, etc. Works on any devices with any kind of content,",worksWith:"Carousel repeater blocks, Post template inside Query Loop",builtWith:(0,he.jsxs)(he.Fragment,{children:["Based on the ",(0,he.jsx)(a.ExternalLink,{href:"https://swiperjs.com",children:"SwiperJS"})," carousel, and Vanilla JS, this is designed as a layout for repeater blocks. It can also work with the Query Loop block."]}),goodFor:"Banner slider, Posts carousel, Gallery, Carousel of features, testimonials, services, etc.",howToUse:(0,he.jsxs)("ul",{children:[(0,he.jsxs)("li",{children:[(0,he.jsx)("h5",{children:"Carousel repeater blocks"}),(0,he.jsxs)("ol",{children:[(0,he.jsx)("li",{children:"Add a carousel repeater block to the Block Editor"}),(0,he.jsx)("li",{children:"Add nested carousel item blocks"}),(0,he.jsx)("li",{children:"Choose preview mode and customize the settings"})]})]}),(0,he.jsxs)("li",{children:[(0,he.jsx)("h5",{children:"Query Loop"}),(0,he.jsxs)("ol",{children:[(0,he.jsx)("li",{children:"Choose the Post Template block inside a Query Loop"}),(0,he.jsx)("li",{children:"Choose the carousel layout"}),(0,he.jsx)("li",{children:"Choose preview mode and customize the settings"})]})]})]}),videoId:"Eh3kX-9_mDg",videoDesc:"How to create a banner slider",tutorials:[{url:(0,pe.addQueryArgs)("edit.php?post_type=boldblocks_block&page=cbb-block-library&s=carousel"),title:"Prebuilt carousel blocks from the block library",target:"_blank"},{url:"https://youtu.be/i8d8Pha921c",title:"[YouTube] How to create a carousel of posts ↗",target:"_blank"},{url:"https://youtu.be/EEk-kSa59VE",title:"[YouTube] How to create a custom banner slider block ↗",target:"_blank"},{url:"https://youtu.be/XfhgqvzRTRQ",title:"[YouTube] How to create another banner slider ↗",target:"_blank"},{url:"https://www.youtube.com/playlist?list=PLPuEwc7dZkleS_5ATLat8arnVUflXSfTk",title:"[YouTube] Watch all playlist ↗",target:"_blank"}]},{title:"Responsive grid layouts",keyFeatures:"Ease to use, flexible, responsive, grid template columns, gap, row, column, span, order",worksWith:"Grid repeater blocks, Post template inside Query Loop",builtWith:"Based on the CSS grid layout, this is designed as a layout for repeater blocks. It can also work with the Query Loop block.",goodFor:"Posts grid, blog page, Gallery, grid of features, testimonials, services, etc.",howToUse:(0,he.jsxs)("ul",{children:[(0,he.jsxs)("li",{children:[(0,he.jsx)("h5",{children:"Grid repeater blocks"}),(0,he.jsxs)("ol",{children:[(0,he.jsx)("li",{children:"Add a grid repeater block to the Block Editor"}),(0,he.jsx)("li",{children:"Add nested grid item blocks"}),(0,he.jsx)("li",{children:"Customize the settings for both grid and grid item blocks"})]})]}),(0,he.jsxs)("li",{children:[(0,he.jsx)("h5",{children:"Query Loop"}),(0,he.jsxs)("ol",{children:[(0,he.jsx)("li",{children:"Choose the Post Template block inside a Query Loop"}),(0,he.jsx)("li",{children:"Choose the responsive grid layout"}),(0,he.jsx)("li",{children:"Customize the grid settings, customize layout for each item to if you want a magazine layout"})]})]})]}),videoId:"awSC09tTnS8",videoDesc:"How to create a responsive grid",tutorials:[{url:(0,pe.addQueryArgs)("edit.php?post_type=boldblocks_block&page=cbb-block-library&s=grid"),title:"Prebuilt grid blocks from the block library",target:"_blank"},{url:"https://youtu.be/mICLfKkF6tU",title:"[YouTube] How to create a custom grid block ↗",target:"_blank"},{url:"https://youtu.be/AnCpVKxhBlM",title:"[YouTube] How to create a testimonial grid block ↗",target:"_blank"},{url:"https://www.youtube.com/playlist?list=PLPuEwc7dZklfsbrRAKe_iUywkjk0fPMUE",title:"[YouTube] Watch all playlist ↗",target:"_blank"}]},{title:"Accordion layouts",keyFeatures:"Ease to use, works with any content, multiple options",worksWith:"Accordion repeater blocks",builtWith:"Based on the CBB Collapse component and Vanilla JS, this is designed as a layout for repeater blocks.",goodFor:"FAQ section, long list of features",howToUse:(0,he.jsxs)("ol",{children:[(0,he.jsx)("li",{children:"Add an accordion repeater block to the Block Editor"}),(0,he.jsx)("li",{children:"Add nested accordion item blocks"}),(0,he.jsx)("li",{children:"Customize the settings"})]}),videoId:"YA4-duNF_w4",videoDesc:"How to create an accordion layout",tutorials:[{url:(0,pe.addQueryArgs)("edit.php?post_type=boldblocks_block&page=cbb-variation-library&s=accordion"),title:"Prebuilt accordion variations from the variation library",target:"_blank"}]},{title:"Modal, off-canvas, popover, toggle content layouts",keyFeatures:"Ease to use, works with any content, multiple options",worksWith:"All CBB blocks that have the toggle content support feature enabled.",builtWith:"Built with Vanilla JS, this is designed as an extended support feature for CBB blocks",goodFor:"Popup, Mega menu, off-canvas menu, popover, show/hide content, etc.",howToUse:(0,he.jsxs)("ol",{children:[(0,he.jsx)("li",{children:"Add a CBB block that has the toggle content feature enabled"}),(0,he.jsx)("li",{children:"Add inner blocks"}),(0,he.jsx)("li",{children:"Turn on the toggle content feature from the inspector settings"}),(0,he.jsx)("li",{children:"Customize the settings such as trigger element, show/hide on the first load, etc."})]}),videoId:"y31TAKHZOD0",videoDesc:"How to create a modal or off-canvas layout step by step",tutorials:[{url:"https://youtu.be/5QQRzhO9VJM",title:"[YouTube] How to create a toggle search box ↗",target:"_blank"},{url:"https://youtu.be/E4usfCydR7U",title:"[YouTube] How to create a responsive header with hamburger menu, toggle search box ↗",target:"_blank"},{url:"https://youtu.be/YnUt-zQXnCU",title:"[YouTube] How to create an off-canvas content ↗",target:"_blank"},{url:"https://youtu.be/g_KOCqvU0Ps",title:"[YouTube] How to create a notification, promotion bar ↗",target:"_blank"},{url:"https://youtu.be/52jD9eeBJ78",title:"[YouTube] How to create a video popup ↗",target:"_blank"},{url:"https://youtu.be/UEh_Da9Sozs",title:"[YouTube] How to create a cookies popup ↗",target:"_blank"}]},{title:"Background effects: parallax, zooming, infinite scrolling, video",keyFeatures:"Ease to use, fast, custom image, featured image, video",worksWith:"All CBB blocks that have the background media support feature enabled.",builtWith:"Built with Vanilla JS and CSS animations, this is designed as an extended support feature for CBB blocks",goodFor:"Hero section, zooming image on grid layout, etc.",howToUse:(0,he.jsxs)("ol",{children:[(0,he.jsx)("li",{children:"Add a CBB block that has the background media feature enabled"}),(0,he.jsx)("li",{children:"Input background media from the inspector settings"}),(0,he.jsx)("li",{children:"Choose background effect and customize the settings."})]}),videoId:"nDpeQbpu50s",videoDesc:"How to create a hero section with parallax background",tutorials:[{url:"https://youtu.be/mBleA20caGo",title:"[YouTube] How to add infinite scrolling effect to background ↗",target:"_blank"},{url:"https://youtu.be/0g1SLTq-lQ4",title:"[YouTube] How to create a page title bar with parallax background ↗",target:"_blank"}]},{title:"Query Loop: add carousel, responsive grid layout, extended filters and sorting",keyFeatures:"Responsive grid layout, carousel layout, filters by parent, postIds, meta fields, multiple post types, multiple sorting fields, etc.",worksWith:"The default Query Loop block",builtWith:"Using WordPress Core API, and responsive grid and carousel layouts",goodFor:"Blog page, post grid, post carousel",howToUse:(0,he.jsxs)("ul",{children:[(0,he.jsxs)("li",{children:[(0,he.jsx)("h5",{children:"Extended filters and sorting"}),(0,he.jsxs)("ol",{children:[(0,he.jsx)("li",{children:"Choose a Query Loop block"}),(0,he.jsx)("li",{children:"Customize the settings inside the Extended filters and sorting panel from the inspector setting"})]})]}),(0,he.jsxs)("li",{children:[(0,he.jsx)("h5",{children:"Set responsive grid and carousel layouts"}),(0,he.jsxs)("ol",{children:[(0,he.jsx)("li",{children:"Choose the Post Template block inside a Query Loop block"}),(0,he.jsx)("li",{children:"Choose responsive grid or carousel layout"}),(0,he.jsx)("li",{children:"Customize the settings inside the inspector settings"})]})]})]}),videoId:"aHy3spQVBGc",videoDesc:"How to create a blog page",tutorials:[{url:"https://youtu.be/bcK_k3IfW8g",title:"[YouTube] How to create a banner slider using the Query Loop block ↗",target:"_blank"},{url:"https://youtu.be/yDVaRm9Sehg",title:"[YouTube] How to create a related posts section ↗",target:"_blank"},{url:"https://youtu.be/paSXmpHU9K4",title:"[YouTube] How to create a card-style posts sections ↗",target:"_blank"},{url:"https://youtu.be/TSRKEFNwE8M",title:"[YouTube] How to create a magazine layout using just one Query Loop ↗",target:"_blank"},{url:(0,pe.addQueryArgs)("edit.php?post_type=boldblocks_block&page=cbb-variation-library&s=query+loop"),title:"Prebuilt query loop variations from the variation library",target:"_blank"},{url:"https://www.youtube.com/playlist?list=PLPuEwc7dZklchm8nVUOKqSOc6OgmRQyha",title:"[YouTube] View all playlist ↗",target:"_blank"}]},{title:"Sticky content: fixed and sticky with state awareness",keyFeatures:"Always fixed to viewport, sticky on scroll down, or sticky on scroll up",worksWith:"All CBB blocks that have the sticky content support feature enabled and the core/template-part block.",builtWith:"Built with VanilaJS, this is designed as an extended block support feature",goodFor:"Sticky header, sticky footer, two or more columns with one fixed on a side",howToUse:(0,he.jsxs)("ul",{children:[(0,he.jsxs)("li",{children:[(0,he.jsx)("h5",{children:"CBB blocks"}),(0,he.jsxs)("ol",{children:[(0,he.jsx)("li",{children:"Add a CBB block that has the sticky content feature enabled"}),(0,he.jsx)("li",{children:"Turn on the sticky content feature from the inspector settings"}),(0,he.jsx)("li",{children:"Customize the settings"})]})]}),(0,he.jsxs)("li",{children:[(0,he.jsx)("h5",{children:"Core template part block"}),(0,he.jsxs)("ol",{children:[(0,he.jsx)("li",{children:"Choose the core/template block"}),(0,he.jsx)("li",{children:"Turn on the sticky content feature from the inspector settings"}),(0,he.jsx)("li",{children:"Customize the settings"})]})]})]}),videoId:"KEryi1y1UZ4",videoDesc:"How to create a sticky header"},{title:"Reveal animation: Add stunning effects to blocks when they appear in the viewport",keyFeatures:"Easy to use, multiple effects in sequence",worksWith:"All CBB blocks that have the reveal animation support feature enabled. This feature can be combined with carousel and modal, off-canvas layouts.",builtWith:"Built with VanilaJS and CSS animations, this is designed as an extended block support feature",goodFor:"Add reveal animations to any CBB blocks when they appear in the viewport",howToUse:(0,he.jsxs)("ol",{children:[(0,he.jsx)("li",{children:"Add a CBB block that has the reveal animations feature enabled"}),(0,he.jsx)("li",{children:"Add effects from the inspector settings"}),(0,he.jsx)("li",{children:"Customize effect settings"})]})}],r=[{title:"CBB blocks",summary:(0,he.jsxs)(he.Fragment,{children:[(0,he.jsx)("p",{children:"The main idea of CBB is to enable you to easily create custom container blocks from other blocks. These container blocks are similar to core layout blocks but offer additional benefits. "}),(0,he.jsxs)("details",{children:[(0,he.jsx)("summary",{children:"Why CBB blocks?"}),(0,he.jsxs)("ul",{children:[(0,he.jsx)("li",{children:"They are as fast as core blocks, and have all core support features"}),(0,he.jsx)("li",{children:"They have extended support features from CBB"}),(0,he.jsx)("li",{children:"They are content blocks that have predefined content, format and style"}),(0,he.jsx)("li",{children:"The layout and style can be synchronized across multiple locations, while allowing for different content in each instance."}),(0,he.jsx)("li",{children:"You can customize the style, add interactivity to them with external JS/CSS or custom JS/CSS"})]})]}),(0,he.jsx)("a",{href:"https://contentblocksbuilder.com/documentation/custom-blocks/",target:"_blank",children:"[contentblocksbuilder.com] Learn more about CBB blocks ↗"}),(0,he.jsx)("h4",{children:"How to create CBB blocks"}),(0,he.jsx)("p",{children:"CBB blocks are stored as custom post types, making their creation as easy as creating a blog post. The most important part when creating a CBB block is setting up its block settings in the sidebar from the block edit screen. There are several methods to create CBB blocks. The fastest way is to navigate to the block list screen and copy an existing one. If you want more advanced prebuilt blocks, you can navigate to the CBB block library, find the one you need, and import it to your site. You can then copy or edit the existing one to fit your needs."}),(0,he.jsx)("h5",{children:"Helpful links:"}),(0,he.jsxs)("ul",{children:[(0,he.jsx)("li",{children:(0,he.jsx)("a",{href:"https://contentblocksbuilder.com/documentation/custom-blocks/how-to-create-a-gutenberg-block-with-cbb/",target:"_blank",children:"[contentblocksbuilder.com] How to create CBB blocks ↗"})}),(0,he.jsx)("li",{children:(0,he.jsx)("a",{href:(0,pe.addQueryArgs)("edit.php?post_type=boldblocks_block&page=cbb-block-library"),target:"_blank",children:"Visit CBB block library"})})]})]}),videoTutorials:[{videoId:"paSXmpHU9K4",videoCaption:"How to create a features posts section block"},{videoId:"kHmaZ2-8v1Q",videoCaption:"How to create a mega menu block"}],tutorials:[{url:"https://www.youtube.com/watch?v=1tmIWXHv4gE&list=PLPuEwc7dZklcFBm-hwtNGJmuB-J8nV-fD&index=5",title:"[YouTube] View all playlist"}]},{title:"CBB repeater blocks",summary:(0,he.jsxs)(he.Fragment,{children:[(0,he.jsx)("p",{children:"One of the best features of CBB is that it allows you to create repeater blocks that display repeating content, similar to repeater fields in meta field frameworks.\n            However, since they are just container blocks with built in layouts, they are much more flexible and easier to use."}),(0,he.jsxs)("details",{children:[(0,he.jsx)("summary",{children:"Supported layouts for CBB repeater blocks"}),(0,he.jsxs)("ul",{children:[(0,he.jsx)("li",{children:"Grid layout"}),(0,he.jsx)("li",{children:"Carousel layout"}),(0,he.jsx)("li",{children:"Accordion layout"}),(0,he.jsx)("li",{children:"Vertical stack layout"})]})]}),(0,he.jsx)("a",{href:"https://contentblocksbuilder.com/documentation/custom-blocks/#repeater-blocks",target:"_blank",children:"[contentblocksbuilder.com] Learn more about CBB repeater blocks ↗"}),(0,he.jsx)("h4",{children:"How to create CBB repeater blocks"}),(0,he.jsx)("p",{children:"To turn a CBB block into a repeater block, simply toggle on the 'Create a repeater parent block for this block' setting and input the block details."}),(0,he.jsx)("h5",{children:"Helpful links:"}),(0,he.jsxs)("ul",{children:[(0,he.jsx)("li",{children:(0,he.jsx)("a",{href:"https://contentblocksbuilder.com/documentation/custom-blocks/how-to-adjust-attributes-and-settings-for-cbb-blocks/#settings-for-parent-blocks",target:"_blank",children:"[contentblocksbuilder.com] How to turn a CBB block to a repeater block ↗"})}),(0,he.jsx)("li",{children:(0,he.jsx)("a",{href:(0,pe.addQueryArgs)("edit.php?post_type=boldblocks_block&page=cbb-block-library"),target:"_blank",children:"Visit CBB block library"})})]})]}),videoTutorials:[{videoId:"QKIPH5pmEWw",videoCaption:"How to create a repeater grid block"},{videoId:"EEk-kSa59VE",videoCaption:"How to create a banner slider"}],tutorials:[{url:"https://www.youtube.com/watch?v=1tmIWXHv4gE&list=PLPuEwc7dZklcFBm-hwtNGJmuB-J8nV-fD&index=5",title:"[YouTube] View all playlist"}]},{title:"Block variations, and styles",summary:(0,he.jsx)(he.Fragment,{children:(0,he.jsx)("p",{children:"Block variations and styles are really useful features. They help developers provide predefined options for their blocks, making it super easy for end users. However, it's not easy for non-developers to create them. CBB makes it super easy for everyone to create them directly in the Block Editor and apply them in their workflow. You don't need to set up and maintain source code for your block variations anymore."})}),videoTutorials:[{videoId:"rAWeQ2XLQJc",videoCaption:"How to create a variation for the core button block"},{videoId:"BAY8_evbyL0",videoCaption:"How to create a variation for the core image block"}]},{title:"A library of blocks, variations, and patterns",summary:(0,he.jsxs)(he.Fragment,{children:[(0,he.jsx)("p",{children:"CBB provides a library of prebuilt blocks, variations, and patterns, all created directly in the Block Editor. You can easily import them into your site with one click. You can use, clone, or edit them to suit your needs."}),(0,he.jsxs)("ul",{className:"flex-list",children:[(0,he.jsx)("li",{children:(0,he.jsx)("a",{href:(0,pe.addQueryArgs)("edit.php?post_type=boldblocks_block&page=cbb-block-library"),target:"_blank",children:"Visit CBB block library"})}),(0,he.jsx)("li",{children:(0,he.jsx)("a",{href:(0,pe.addQueryArgs)("edit.php?post_type=boldblocks_block&page=cbb-variation-library"),target:"_blank",children:"Visit CBB variation library"})})]})]}),videoTutorials:[{videoId:"TSRKEFNwE8M",videoCaption:"How to create a magazine layout using variations from the CBB variation library"},{videoId:"U-e6wbFGiYg",videoCaption:"How to create a animated arrow button"}]},{title:"Extended block supports",summary:(0,he.jsxs)(he.Fragment,{children:[(0,he.jsx)("p",{children:"Besides core support features, CBB adds a range of extended features to enhance the layout and style of CBB blocks. You can opt in or out of these features for your CBB blocks. You can also apply these extended features to other blocks by wrapping them with a CBB block."}),(0,he.jsxs)("details",{children:[(0,he.jsx)("summary",{children:"The full list of extended support features"}),(0,he.jsxs)("ul",{children:[(0,he.jsx)("li",{children:"Responsive width & height"}),(0,he.jsx)("li",{children:"Responsive spacing: padding, margin, block spacing"}),(0,he.jsx)("li",{children:"Responsive aspect ratio"}),(0,he.jsx)("li",{children:"Responsive border & radius"}),(0,he.jsx)("li",{children:"Background media"}),(0,he.jsx)("li",{children:"Background overlay"}),(0,he.jsx)("li",{children:"Responsive Text alignment"}),(0,he.jsx)("li",{children:"Responsive Vertical alignment"}),(0,he.jsx)("li",{children:"Responsive Justify alignment"}),(0,he.jsx)("li",{children:"Box shadow"}),(0,he.jsx)("li",{children:"Responsive Transform"}),(0,he.jsx)("li",{children:"Visibility"}),(0,he.jsx)("li",{children:"Toggle content"}),(0,he.jsx)("li",{children:"Sticky content"}),(0,he.jsx)("li",{children:"Custom attributes"}),(0,he.jsx)("li",{children:"Reveal animation (PRO)"}),(0,he.jsx)("li",{children:"Custom CSS (PRO)"}),(0,he.jsx)("li",{children:"Copy/Paste styles (PRO)"})]})]})]})}],i=({label:e,value:t})=>t?(0,he.jsxs)("details",{className:"feature-line",children:[(0,he.jsx)("summary",{className:"label",children:e}),(0,he.jsx)("div",{className:"value",children:t})]}):null;return(0,he.jsxs)(Cn,{isHeaderHidden:!0,isFullRow:!0,className:"welcome-widget welcome",children:[(0,he.jsx)("h1",{children:"Welcome to Content Blocks Builder (CBB)"}),(0,he.jsxs)("div",{className:"welcome__description",children:[(0,he.jsx)("p",{className:"leading",children:"Content Blocks Builder (CBB) adheres to Gutenberg and enhances it with practical and functional features.\n            Whether you are a beginner with no coding experience or a professional, with CBB you can create complex layouts for real-world websites directly in the Block Editor without using a code editor.\n            It works with any Gutenberg-ready themes."}),(0,he.jsx)("a",{href:"https://contentblocksbuilder.com",target:"_blank",children:"Visit contentblocksbuilder.com"}),(0,he.jsx)("h2",{className:"section-title",children:"CBB provides many practical features while remaining fast, clean, and bloat-free."}),(0,he.jsx)("p",{className:"section-summary",children:"With minimal effort, you can build most real-world features on your WordPress sites using CBB and core blocks, with any block theme, directly in the Block Editor."}),(0,he.jsx)("div",{className:"grid",children:n.map(({title:e,summary:t,keyFeatures:n,worksWith:r,builtWith:o,goodFor:a,howToUse:s,videoId:l,videoDesc:c,tutorials:d},u)=>(0,he.jsxs)("div",{className:"grid-item",children:[(0,he.jsxs)("div",{className:"feature",children:[(0,he.jsx)("h3",{children:e}),t?(0,he.jsx)("p",{children:t}):null,(0,he.jsx)(i,{label:"Key features",value:n}),(0,he.jsx)(i,{label:"Works with",value:r}),(0,he.jsx)(i,{label:"Good for",value:a}),(0,he.jsx)(i,{label:"How it's built",value:o}),(0,he.jsx)(i,{label:"How to use",value:s})]}),!!l&&(0,he.jsxs)("div",{className:"video-tutorial",children:[(0,he.jsx)("h4",{children:"Video tutorial"}),(0,he.jsx)(Sn,{videoId:l}),(0,he.jsx)("div",{className:"video-caption",children:c})]}),!!d?.length&&(0,he.jsxs)("div",{className:"more-resources",children:[(0,he.jsx)("h4",{children:"More resources"}),(0,he.jsx)("ul",{children:d.map(({title:e,url:t,target:n},r)=>(0,he.jsx)("li",{children:(0,he.jsx)("a",{href:t,target:n,children:e})},`tutorial-${u}-${r}`))})]})]},`feature-${u}`))}),(0,he.jsx)("h2",{className:"section-title",children:"How does CBB provide a lot of features and still remain super fast and bloat-free?"}),(0,he.jsx)("p",{className:"section-summary",children:"Unlike other multi-feature plugins, CBB doesn’t come bundled with a ton of blocks for specific needs. Instead, it offers extended block support features and an easy way to create container blocks. You can add any feature to any CBB block, and to apply those features to core or third-party blocks, you only need to wrap them with a CBB block."}),(0,he.jsx)("div",{className:"grid grid--large",children:r.map(({title:e,summary:t,videoTutorials:n=[],tutorials:r},o)=>(0,he.jsxs)("div",{className:"grid-item technical-feature",children:[(0,he.jsxs)("div",{className:"feature-details",children:[(0,he.jsx)("h3",{children:e}),(0,he.jsx)("div",{className:"feature-summary",children:t})]}),(0,he.jsxs)("div",{className:"feature-resource",children:[!!n?.length&&(0,he.jsxs)(he.Fragment,{children:[(0,he.jsx)("h4",{children:"Video tutorials"}),(0,he.jsx)("div",{className:"video-tutorials",children:n.map(({videoId:e,videoCaption:t})=>(0,he.jsxs)("div",{className:"video-item",children:[(0,he.jsx)(Sn,{videoId:e}),(0,he.jsx)("div",{className:"video-caption",children:t})]}))})]}),!!r?.length&&(0,he.jsxs)(he.Fragment,{children:[(0,he.jsx)("h4",{children:"More resources"}),(0,he.jsx)("ul",{children:r.map(({title:e,url:t},n)=>(0,he.jsx)("li",{children:(0,he.jsx)("a",{href:t,target:"_blank",children:e})},`tutorial-${o}-${n}`))})]})]})]},`feature-${o}`))}),(0,he.jsxs)("p",{className:"leading",children:["Thank you for choosing Content Blocks Builder (CBB) for your website. CBB sticks to Gutenberg and maintain the primary user experience of it, so if you are already familiar with the Block Editor, you will find it easy to use. If you need any help, contact us through the ",(0,he.jsx)("a",{target:"_blank",href:(0,pe.addQueryArgs)("edit.php?post_type=boldblocks_block&page=content-blocks-builder-contact"),children:"contact page"}),", visit the ",(0,he.jsx)("a",{target:"_blank",href:"https://wordpress.org/support/plugin/content-blocks-builder",children:"support forum ↗"})," ","or email us at"," ",(0,he.jsx)("a",{href:"mailto://hello@contentblocksbuilder.com?subject=Hello+CBB",children:"hello@contentblocksbuilder.com"}),"."," We’re sure to get back to you promptly."]})]})]})},En=()=>(0,he.jsx)(vn,{children:(0,he.jsx)(Tn,{})}),Nn=(window.wp.editor,window.wp.dataControls),Fn={},An={getPreviewMode(e,t){var n;return null!==(n=e.previewModes[t])&&void 0!==n?n:""}},Bn={fonts:{body:{fontFamily:"Nunito",genericFamily:"sans-serif",fontVariants:[]},headings:{fontFamily:"Roboto",genericFamily:"sans-serif",fontVariants:[]},additionalFonts:[]},fontsPresets:[{body:{fontFamily:"Nunito",genericFamily:"sans-serif"},headings:{fontFamily:"Roboto",genericFamily:"sans-serif"}},{body:{fontFamily:"Montserrat",genericFamily:"sans-serif"},headings:{fontFamily:"Oswald",genericFamily:"sans-serif"}},{body:{fontFamily:"Merriweather",genericFamily:"serif"},headings:{fontFamily:"Oswald",genericFamily:"sans-serif"}},{body:{fontFamily:"Montserrat",genericFamily:"sans-serif"},headings:{fontFamily:"Source Sans Pro",genericFamily:"sans-serif"}},{body:{fontFamily:"Source Sans Pro",genericFamily:"sans-serif"},headings:{fontFamily:"Libre Baskerville",genericFamily:"serif"}},{body:{fontFamily:"Fauna One",genericFamily:"serif"},headings:{fontFamily:"Playfair Display",genericFamily:"serif"}},{body:{fontFamily:"Josefin Slab",genericFamily:"serif"},headings:{fontFamily:"Six Caps",genericFamily:"sans-serif"}},{body:{fontFamily:"Source Sans Pro",genericFamily:"sans-serif"},headings:{fontFamily:"Playfair Display",genericFamily:"serif"}},{body:{fontFamily:"Quattrocento",genericFamily:"serif"},headings:{fontFamily:"Oswald",genericFamily:"sans-serif"}},{body:{fontFamily:"Alice",genericFamily:"serif"},headings:{fontFamily:"Sacramento",genericFamily:"cursive"}},{body:{fontFamily:"Lato",genericFamily:"sans-serif"},headings:{fontFamily:"Arvo",genericFamily:"serif"}},{body:{fontFamily:"Poppins",genericFamily:"sans-serif"},headings:{fontFamily:"Abril Fatface",genericFamily:"cursive"}},{body:{fontFamily:"Inconsolata",genericFamily:"monospace"},headings:{fontFamily:"Karla",genericFamily:"sans-serif"}},{body:{fontFamily:"Andika",genericFamily:"sans-serif"},headings:{fontFamily:"Amatic SC",genericFamily:"sans-serif"}},{body:{fontFamily:"Lato",genericFamily:"sans-serif"},headings:{fontFamily:"Lustria",genericFamily:"serif"}},{body:{fontFamily:"Proza Libre",genericFamily:"sans-serif"},headings:{fontFamily:"Cormorant Garamond",genericFamily:"serif"}},{body:{fontFamily:"EB Garamond",genericFamily:"serif"},headings:{fontFamily:"Oswald",genericFamily:"sans-serif"}},{body:{fontFamily:"Josefin Sans",genericFamily:"sans-serif"},headings:{fontFamily:"Yeseva One",genericFamily:"cursive"}},{body:{fontFamily:"Inter",genericFamily:"sans-serif"},headings:{fontFamily:"EB Garamond",genericFamily:"serif"}}],googleFonts:[]},Pn={fonts:null},On={getGoogleFonts:()=>async({dispatch:e})=>{const t=await u()({path:"boldblocks/v1/getGoogleFonts"});return t&&t.success&&e({type:"SET_GOOGLE_FONTS",payload:t.data}),t},getTypography:()=>async({dispatch:e})=>{const{CBBTypography:t}=await u()({path:"wp/v2/settings"});if(t)return Ln(t,e);{const{CBBTypography:t}=await u()({path:"wp/v2/settings",method:"POST",data:{CBBTypography:{fonts:JSON.stringify(Bn.fonts)}}});return Ln(t,e)}},getPostTypography:e=>async({dispatch:t})=>{if(!e)return;const{meta:{CBBTypography:n}={}}=await u()({path:e});return Rn(n,t)}},Ln=(e,t)=>{if(e&&e?.fonts){const n=JSON.parse(e.fonts);return t({type:"UPDATE_FONTS",payload:n}),n}return e},Rn=(e,t)=>{let n;return e&&e?.fonts&&(n=JSON.parse(e.fonts)),t({type:"UPDATE_POST_FONTS",payload:n}),n},In={updateFonts:e=>({type:"UPDATE_FONTS",payload:e}),updatePostFonts:e=>({type:"UPDATE_POST_FONTS",payload:e}),updateAndPersistFonts:e=>async({dispatch:t})=>{const{CBBTypography:n}=await u()({path:"wp/v2/settings",method:"POST",data:{CBBTypography:{fonts:e}}});return Ln(n,t)},updateAndPersistPostFonts:(e,t)=>async({dispatch:n})=>{const{meta:{CBBTypography:r}={}}=await u()({path:t,method:"POST",data:{meta:{CBBTypography:{fonts:e}}}});return Rn(r,n)}},Dn={blocks:{},statuses:{}},Mn={getMissingBlock(e,t){var n;return null!==(n=e.missingBlocks.blocks[t])&&void 0!==n&&n},getMissingBlockStatus(e,t){var n;return null!==(n=e.missingBlocks.statuses[t])&&void 0!==n&&n}},zn={setMissingBlockStatus:e=>({type:"SET_MISSING_BLOCK_STATUS",payload:e}),loadMissingBlock:e=>async({select:t,dispatch:n})=>{let r=t.getMissingBlock(e);var o;!1===r&&(r=null!==(o=(await u()({path:`wp/v2/block-directory/search?term=${e}`}))[0])&&void 0!==o?o:{},n({type:"SET_MISSING_BLOCK",payload:{[e]:r}}));return r}},Hn={},Un={getNavRef(e,t){var n;return null!==(n=e.navRefs[t])&&void 0!==n?n:""}};(e=>{const t=(0,l.createReduxStore)(e,{selectors:{getIconLibrary(e){var t;return null!==(t=e?.icons)&&void 0!==t?t:[]}},actions:{loadIconLibrary:e=>async({select:t,dispatch:n})=>{var r;if(!e)return;let o=t.getIconLibrary();if(o&&o.length)return o;const i=await u()({path:e});var a;return i?.success&&n({type:"UPDATE_ICONS",payload:null!==(a=i?.data)&&void 0!==a?a:[]}),null!==(r=i?.data)&&void 0!==r?r:[]}},reducer:(e={icons:[]},t)=>"UPDATE_ICONS"===t.type?{...e,icons:t.payload}:e});(0,l.select)(e)||(0,l.register)(t)})("boldblocks/cbb-icon-library");const $n=(0,l.createReduxStore)("boldblocks/data",{selectors:{getGoogleFonts:e=>e.typography.googleFonts,getTypography:e=>({fonts:e.typography.fonts,fontsPresets:e.typography.fontsPresets}),getPostTypography:(e,t)=>({fonts:e.postTypography.fonts,fontsPresets:e.typography.fontsPresets}),...An,...Mn,...Un},actions:{...In,setPreviewMode:e=>({type:"SET_PREVIEW_MODE",payload:e}),...zn,setNavRef:e=>({type:"SET_NAV_REF",payload:e})},controls:Nn.controls,reducer:(0,l.combineReducers)({previewModes:(e=Fn,t)=>"SET_PREVIEW_MODE"===t.type?{...e,[t.payload.clientId]:t.payload.previewMode}:e,typography:(e=Bn,t)=>{switch(t.type){case"SET_GOOGLE_FONTS":return{...e,googleFonts:t.payload};case"UPDATE_FONTS":return{...e,fonts:t.payload}}return e},postTypography:(e=Pn,t)=>"UPDATE_POST_FONTS"===t.type?{...e,fonts:t.payload}:e,missingBlocks:(e=Dn,t)=>{switch(t.type){case"SET_MISSING_BLOCK":return{...e,blocks:{...e.missingBlocks,...t.payload}};case"SET_MISSING_BLOCK_STATUS":return{...e,statuses:{...e.statuses,[t.payload]:!0}}}return e},navRefs:(e=Hn,t)=>"SET_NAV_REF"===t.type?{...e,[t.payload.ref]:t.payload.clientId}:e}),resolvers:{...On}});(0,l.register)($n);const Vn=(e,t=[])=>t.find(t=>t.label===e),Gn=(e,t="",n=[],r)=>{let o=`boldblocks-font-${e.replace(/\s/g,"-").toLowerCase()}`;t&&(o=`${o}-text`);let i=r.querySelector(`#${o}`);if(!i){const a=Vn(e,n);if(a){let{label:e,variants:n}=a,s=`https://fonts.googleapis.com/css2?family=${e.replace(/\s/g,"+")}`,l=[];n=n.map(e=>("regular"===e?e="400":"italic"===e&&(e="400italic"),e)),n.sort().forEach(e=>{-1!==e.indexOf("italic")?l.push(`1,${e.replace("italic","")}`):l.push(`0,${e}`)}),s=`${s}:ital,wght@${l.sort().join(";")}&display=swap`,t&&(s=`${s}&text=${encodeURIComponent(t)}`),i=r.createElement("link"),i.id=o,i.rel="stylesheet",i.href=s,r.head.appendChild(i)}return a}},Wn=(e,t,n)=>{Gn(e?.headings?.fontFamily,"",t,n),Gn(e?.body?.fontFamily,"",t,n)},Yn=(e,t)=>(e&&t&&t?.headings&&(e=e.map(e=>e.headings.fontFamily===t?.headings?.fontFamily&&e.body.fontFamily===t?.body?.fontFamily?{...e,isActive:!0}:e?.isActive?{...e,isActive:!1}:e)),e),qn=e=>e.map(e=>("regular"===e?e="400":"italic"===e&&(e="400italic"),e+"")).sort(),Qn=(e,t,n,r)=>(0,o.useMemo)(()=>{const o=n(e,t);return o?r(o.variants):[]},[e,t,n,r]),Jn=(e,t)=>{let n={};if(t){const{fontFamily:r,genericFamily:o}=t;r&&(n[`--cbb--${e}--font-family`]=`"${r}", ${o}`)}return n},Kn=(e,t)=>{let n=t.head.querySelector("#boldblocks-css-variables");n?n.innerHTML=e:(n=t.createElement("style"),n.id="boldblocks-css-variables",n.innerHTML=e,t.head.appendChild(n))},Xn=Kt.div`
  .fonts__actions {
    display: flex;
    gap: 8px;
    margin-top: 12px;
  }

  &.is-fullview {
    margin-top: 12px;

    .fonts__headings-body {
      display: grid;
      gap: 12px;

      .font__actions {
        margin-bottom: 0;
      }

      @media (min-width: 960px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));

        .font {
          display: flex;
          flex-direction: column;
        }

        .font__item {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .font__preview {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .font__preview__text {
          flex-grow: 1;
        }

        .font__family__value {
          height: 36px;
        }

        .font__variants__value {
          height: 40px;
        }

        .font__actions {
          margin-top: auto;
        }
      }
    }
  }
`,Zn=Kt.div`
  /*
  $break-huge: 1440px;
  $break-wide: 1280px;
  $break-xlarge: 1080px;
  $break-large: 960px;	// admin sidebar auto folds
  $break-medium: 782px;	// adminbar goes big
  $break-small: 600px;
  $break-mobile: 480px;
  $break-zoomed-in: 280px;
  */
  .components-combobox-control__suggestions-container,
  .components-form-token-field__input-container {
    width: auto;
  }

  label:empty {
    display: none;
  }

  h3 {
    margin-top: 16px;
    margin-bottom: 0.25em;
    font-size: 1.25em;
    text-transform: none;
  }

  .font {
    &__item {
      > * {
        margin-top: 0;
        margin-bottom: 8px;

        > * {
          margin-bottom: 4px;
        }
      }
    }

    &__label {
      padding-bottom: 4px;
      margin-top: 10;
      margin-bottom: 10px;
      border-bottom: 1px solid #ddd;
    }

    &__item__value {
      padding: 8px;
      border: 1px solid #ddd;
    }

    &__preview {
      &__text {
        font-size: 16px;
        line-height: 1.5;
      }
    }

    // Variants
    &__variants__edit {
      p {
        margin: 0;
      }
    }

    // Actions
    &__actions {
      display: flex;
      gap: 8px;
      margin: 10px 0;
    }
  }

  &.is-fullview {
    padding: 10px;
    border: 1px solid #ddd;

    .font__label {
      margin-top: 0;
    }
  }
`,er=({label:e,editLabel:t=(0,i.__)("Edit font","content-blocks-builder"),value:n,allFontFamilies:r,text:s,isInSidebar:l=!1,style:c={},isEditable:d,onChange:u})=>{const{fontFamily:p,fontVariants:h=[],allFontVariants:m=[]}=n,[f,g]=(0,o.useState)(!1);return(0,he.jsxs)(Zn,{className:Zt("font",{"is-edit":f,"is-view":!f,"is-fullview":!l}),children:[(0,he.jsx)("h3",{className:"font__label",children:(0,he.jsx)("strong",{children:e})}),(0,he.jsxs)("div",{className:"font__item",children:[(0,he.jsxs)("div",{className:"font__family",children:[(0,he.jsx)("div",{className:"font__item__label font__family__label",children:(0,i.__)("Family:","content-blocks-builder")}),f?(0,he.jsx)("div",{className:"font__family__edit",children:(0,he.jsx)(a.ComboboxControl,{value:p,options:r,onChange:e=>{const{genericFamily:t}=r.find(t=>t.value===e);u({...n,fontFamily:e,genericFamily:t})}})}):(0,he.jsx)("div",{className:"font__item__value font__family__value",style:{...c,fontFamily:p},children:p})]}),(0,he.jsxs)("div",{className:"font__variants",children:[(0,he.jsx)("div",{className:"font__item__label font__variants__label",children:(0,i.__)("Variants:","content-blocks-builder")}),f?(0,he.jsxs)("div",{className:"font__variants__edit",children:[(0,he.jsx)(a.FormTokenField,{label:"",value:h,suggestions:m,onChange:e=>{u({...n,fontVariants:e})},placeholder:(0,i.__)("Choose variants to load","content-blocks-builder"),__experimentalExpandOnFocus:!0,__experimentalShowHowTo:!1}),(0,he.jsxs)("p",{children:[(0,i.__)("Leave it blank to load all available variants: ","content-blocks-builder"),!!m.length&&m.map((e,t)=>(0,he.jsxs)("span",{className:"font__variant",children:[e,t<m.length-1?", ":""]},e))]})]}):(0,he.jsx)("div",{className:"font__item__value font__variants__value",children:h.length?h.map((e,t)=>(0,he.jsxs)("span",{className:"font__variant",children:[e,t<h.length-1?", ":""]},e)):!!m.length&&m.map((e,t)=>(0,he.jsxs)("span",{className:"font__variant",children:[e,t<m.length-1?", ":""]},e))})]}),(0,he.jsxs)("div",{className:"font__preview",children:[(0,he.jsx)("div",{className:"font__item__label font__preview__label",children:(0,i.__)("Font preview:","content-blocks-builder")}),(0,he.jsx)("div",{className:"font__item__value font__preview__text",style:{...c,fontFamily:p},children:s})]})]}),d&&(0,he.jsxs)("div",{className:"font__actions",children:[!f&&(0,he.jsx)(a.Button,{variant:"primary",size:"small",onClick:()=>{g(!0)},children:t}),f&&(0,he.jsx)(he.Fragment,{children:(0,he.jsx)(a.Button,{variant:"primary",size:"small",onClick:()=>{g(!1)},children:(0,i.__)("Back to preview","content-blocks-builder")})})]})]})},tr=({value:e,allFontFamilies:t,onChange:n,onReset:r,isInSidebar:o=!1,isEditable:s,isFontsChanged:l})=>{const{headings:c,body:d}=e;return(0,he.jsxs)(Xn,{className:Zt("fonts",{"is-fullview":!o}),children:[(0,he.jsxs)("div",{className:"fonts__headings-body",children:[(0,he.jsx)(er,{label:(0,i.__)("Headings font","content-blocks-builder"),editLabel:(0,i.__)("Edit headings font","content-blocks-builder"),value:c,onChange:t=>{n({...e,headings:t})},allFontFamilies:t,style:{fontWeight:"bold",fontSize:"1.25rem"},text:"The spectacle before us was indeed sublime.",isInSidebar:o,isEditable:s}),(0,he.jsx)(er,{label:(0,i.__)("Body font","content-blocks-builder"),editLabel:(0,i.__)("Edit body font","content-blocks-builder"),value:d,onChange:t=>{n({...e,body:t})},allFontFamilies:t,style:{fontSize:"1rem"},text:"By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver.",isInSidebar:o,isEditable:s})]}),(0,he.jsx)("div",{className:"fonts__others"}),s&&(0,he.jsxs)("div",{className:"fonts__actions",children:[(0,he.jsx)(a.Button,{variant:"primary",onClick:()=>{const t={...e};n({...t,headings:t.body,body:t.headings})},children:(0,i.__)("Swap fonts","content-blocks-builder")}),l&&(0,he.jsx)(a.Button,{variant:"secondary",onClick:r,children:(0,i.__)("Reset fonts","content-blocks-builder")})]})]})},nr=Kt.div`
  /*
  $break-huge: 1440px;
  $break-wide: 1280px;
  $break-xlarge: 1080px;
  $break-large: 960px;	// admin sidebar auto folds
  $break-medium: 782px;	// adminbar goes big
  $break-small: 600px;
  $break-mobile: 480px;
  $break-zoomed-in: 280px;
  */

  margin-top: 12px;

  .font-pair {
    position: relative;
    height: 100%;
    padding: 0.5rem;
    font-size: 1.25rem;
    line-height: 1.5;
    cursor: pointer;
    border: 1px solid #ddd;
    border-radius: 3px;
    box-sizing: border-box;

    &:hover {
      border: 1px solid #000;
    }

    &.is-active {
      border: 1px solid #000;
      box-shadow: 0 0 5px #000;
    }

    .button-remove {
      position: absolute;
      top: 0;
      right: 0;
      color: #ddd;
    }

    &:hover {
      .button-remove {
        color: #000;
      }
    }
  }

  h3 {
    margin-top: 0;
    margin-bottom: 0.25em;
    font-size: 1.25em;
    text-transform: none;
  }

  // Fonts presets
  .fonts-presets__list {
    margin: 0 -0.25rem;
    height: 260px;
    overflow-y: auto;

    > * {
      padding: 0.25rem;
      box-sizing: border-box;
    }
  }

  // Grid style
  &.is-grid {
    .fonts-presets__list {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -0.25rem;

      > * {
        flex: 0 0 100%;
        padding: 0.25rem;
        box-sizing: border-box;

        @media (min-width: 600px) {
          flex: 0 0 50%;
        }

        @media (min-width: 960px) {
          flex: 0 0 percentage(1 / 3);
        }
        @media (min-width: 1280px) {
          flex: 0 0 20%;
        }
      }
    }
  }
`,rr=({presets:t=[],onChange:n=e.noop,isGrid:r=!1})=>(0,he.jsxs)(nr,{className:Zt("fonts-presets",{"is-grid":r}),children:[(0,he.jsx)("h3",{className:"fonts-presets__label",children:(0,he.jsx)("strong",{children:(0,i.__)("Choose a predefined combination:","content-blocks-builder")})}),(0,he.jsx)("div",{className:"fonts-presets__list",children:t.map((e,t)=>(0,he.jsx)("div",{className:"fonts-preset",onClick:()=>{n(e)},children:(0,he.jsxs)("div",{className:Zt("font-pair",{"is-active":e?.isActive}),children:[(0,he.jsx)("div",{className:"font-pair__body",style:{fontFamily:e?.body?.fontFamily},children:e?.body?.fontFamily}),(0,he.jsx)("div",{className:"font-pair__headings",style:{fontFamily:e?.headings?.fontFamily,fontWeight:"bold"},children:e?.headings?.fontFamily})]})},t))})]}),or=window.wp.compose,ir=Kt.div`
  .components-notice {
    padding-right: 0;
    margin-right: 0;
    margin-left: 0;
  }
`,ar=e=>{const{googleFonts:t=[],fonts:n,editingFonts:r,setEditingFonts:i,fontsPresets:s,isFontsChanged:l,messageData:c,setMessageData:d,isInSidebar:u=!1,isEditable:p=!0,isLoadingData:h,deviceType:m="Desktop"}=e,f=(0,o.useMemo)(()=>t.map(({label:e,genericFamily:t})=>({label:e,value:e,genericFamily:t})),[t]),{headings:{fontFamily:g},body:{fontFamily:b}}=r,y=(0,or.usePrevious)(m),v="Desktop"!==m&&"Desktop"===y;((e,t)=>{(0,o.useEffect)(()=>{e.length&&t.length&&((e,t,n)=>{e.forEach(e=>{Gn(e?.body?.fontFamily,e?.body?.fontFamily,t,n),Gn(e?.headings?.fontFamily,e?.headings?.fontFamily,t,n)})})(e,t,document)},[e.length,t.length,Gn])})(s,t),((e,t,n,r=!1)=>{(0,o.useEffect)(()=>{if(e?.headings?.fontFamily&&e?.body?.fontFamily&&t.length){const n=document.querySelector('iframe[name="editor-canvas"]');if(n){const o=n.contentWindow.document;r?function(e,t,n){return new Promise(r=>{if(t.querySelector(e))return r(t);const o=new MutationObserver(()=>{(t=n.querySelector('iframe[name="editor-canvas"]').contentWindow.document).querySelector(e)&&(r(t),o.disconnect())});o.observe(t,{subtree:!0,childList:!0})})}("#boldblocks-custom-fonts-css",o,document).then(n=>{Wn(e,t,n)}).catch(e=>ke(e,"error")):Wn(e,t,o)}else Wn(e,t,document)}},[e?.headings.fontFamily,e?.body?.fontFamily,t.length,Gn,n,r])})(r,t,m,v),((e,t,n,r=!1)=>{(0,o.useEffect)(()=>{const t=document.querySelector('iframe[name="editor-canvas"]'),n=`.editor-styles-wrapper {${(e=>{const{body:t,headings:n}=e;let r={...Jn("body",t),...Jn("headings",n)};return Object.keys(r).reduce((e,t)=>`${e}${t}: ${r[t]};`,"")})(e)}}`;if(t){const e=t.contentWindow.document;r?t.addEventListener("load",()=>{Kn(n,e)}):Kn(n,e)}else Kn(n,document)},[e,t,n,r])})(r,h,m,v);const x=Qn(g,t,Vn,qn),_=Qn(b,t,Vn,qn),k={...r,headings:{...r.headings,allFontVariants:x},body:{...r.body,allFontVariants:_}};return h?(0,he.jsx)(a.Spinner,{}):(0,he.jsxs)(ir,{children:[(0,he.jsx)(tr,{value:k,allFontFamilies:f,isFontsChanged:l,onChange:e=>{i(e)},onReset:()=>{i(n)},isEditable:p,isInSidebar:u}),p&&(0,he.jsx)(rr,{presets:Yn(s,r),onChange:e=>{i(e)},isGrid:!u}),c&&c?.message&&(0,he.jsx)(a.Notice,{status:c?.type,isDismissible:!0,onDismiss:()=>{d({type:"success",message:""})},children:c.message})]})},sr=({href:e,label:t=(0,i.__)("Learn more","content-blocks-builder")})=>(0,he.jsx)(a.ExternalLink,{href:e,children:t}),lr=Kt(a.ToggleControl)`
  margin-top: 12px;
`,cr=()=>{const t=((t="")=>{const{updateFonts:n,updateAndPersistFonts:r,updatePostFonts:i,updateAndPersistPostFonts:a}=(0,l.useDispatch)($n),s=(0,l.useSelect)(e=>{const n=e($n).getGoogleFonts(),{fonts:r,fontsPresets:o}=e($n).getTypography(),i=e($n).hasFinishedResolution("getTypography");let a,s;t&&(a=e($n).getPostTypography(t),s=e($n).hasFinishedResolution("getPostTypography",[t]));let l={fonts:r,globalFonts:r,fontsPresets:o,googleFonts:n,isGlobalTypographyLoaded:i,isPostTypogrpahyLoaded:s};return a&&a?.fonts&&(l={...l,fonts:a.fonts,isPostFonts:!0}),l},[t]),{fonts:c,isGlobalTypographyLoaded:d,isPostTypogrpahyLoaded:u}=s,p=t?d&&u:d,[h,m]=(0,o.useState)(c);return(0,o.useEffect)(()=>{p&&m(c)},[p]),{...s,editingFonts:h,setEditingFonts:m,isDataLoaded:p,isFontsChanged:(0,o.useMemo)(()=>{var t,n,r,o;return!(0,e.isEqual)({headingsFontFamily:c?.headings?.fontFamily,headingsFontVariants:null!==(t=c?.headings?.fontVariants)&&void 0!==t?t:[],bodyFontFamily:c?.body?.fontFamily,bodyFontVariants:null!==(n=c?.body?.fontVariants)&&void 0!==n?n:[]},{headingsFontFamily:h?.headings?.fontFamily,headingsFontVariants:null!==(r=h?.headings?.fontVariants)&&void 0!==r?r:[],bodyFontFamily:h?.body?.fontFamily,bodyFontVariants:null!==(o=h?.body?.fontVariants)&&void 0!==o?o:[]})},[c,h]),updateFonts:n,updateAndPersistFonts:r,updatePostFonts:i,updateAndPersistPostFonts:a}})(),{isDataLoaded:n,isFontsChanged:r,editingFonts:s,setEditingFonts:c,updateAndPersistFonts:d}=t,[u,p]=(0,o.useState)(!1),[h,m]=(0,o.useState)({type:"success",message:""});return(0,he.jsx)(jn,{title:(0,i.__)("Google fonts settings","content-blocks-builder"),renderFooter:()=>(0,he.jsxs)(he.Fragment,{children:[(0,he.jsx)(a.Button,{variant:"primary",disabled:!r,onClick:e=>{e.preventDefault(),p(!0),d(JSON.stringify(s)).then(()=>{m({type:"success",message:(0,i.__)("Setttings saved!","content-blocks-builder")})}).catch(e=>{console.error(e),m({type:"error",message:(0,i.__)((0,i.__)("Something went wrong, please contact the author for support!","content-blocks-builder"))})}).finally(()=>{p(!1)})},children:(0,i.__)("Update typography","content-blocks-builder")}),u&&(0,he.jsx)(a.Spinner,{})]}),isFullRow:!0,children:(0,he.jsx)(ar,{...t,isLoadingData:!n,editingFonts:s,setEditingFonts:c,isFontsChanged:r,messageData:h,setMessageData:m})})},dr=()=>{const{createSuccessNotice:t,createErrorNotice:n}=(0,l.useDispatch)(hn.store),{saveEditedEntityRecord:r}=(0,l.useDispatch)(s.store),[c,d]=(0,s.useEntityProp)("root","site","EnableTypography"),[u,p]=(0,s.useEntityProp)("root","site","UseBunnyFonts"),[h,m]=(0,o.useState)(!1);return(0,he.jsxs)(vn,{description:(0,i.__)("Typography settings","content-blocks-builder"),children:[(0,he.jsxs)(jn,{isHeaderHidden:!0,isFullRow:!0,children:[(0,he.jsx)(a.ToggleControl,{checked:null!=c&&c,disabled:(0,e.isUndefined)(c),label:(0,he.jsxs)(he.Fragment,{children:[(0,he.jsx)("span",{children:(0,i.__)("Enable google fonts ","content-blocks-builder")}),(0,e.isUndefined)(c)||h&&(0,he.jsx)(a.Spinner,{style:{margin:"0 10px 0 0"}})]}),onChange:e=>{d(e),m(!0),r("root","site").then(()=>{t((0,i.__)("Setttings saved!","content-blocks-builder"),{type:"snackbar"})}).catch(e=>{console.error(e),n((0,i.__)("Something went wrong, please contact the author for support!","content-blocks-builder"),{type:"snackbar"})}).finally(()=>{m(!1)})}}),(0,he.jsxs)("p",{style:{margin:0},children:[(0,he.jsx)("strong",{children:(0,i.__)("Enable this setting will override font families from the theme.","content-blocks-builder")})," ",(0,he.jsx)("strong",{children:(0,i.__)("It also generates two CSS classes named: 'headings-font-family', 'body-font-family' and two CSS variables named '--cbb--headings--font-family', '--cbb--body--font-family'. You can use those to set the font family for your blocks.","content-blocks-builder")})]}),c&&(0,he.jsxs)(he.Fragment,{children:[(0,he.jsx)(lr,{checked:null!=u&&u,disabled:(0,e.isUndefined)(u),label:(0,he.jsxs)(he.Fragment,{children:[(0,he.jsx)("span",{children:(0,i.__)("Load Bunny Fonts instead of Google Fonts for GDPR compliance","content-blocks-builder")}),(0,e.isUndefined)(u)||h&&(0,he.jsx)(a.Spinner,{style:{margin:"0 10px 0 0"}})]}),onChange:e=>{p(e),m(!0),r("root","site").then(()=>{t((0,i.__)("Setttings saved!","content-blocks-builder"),{type:"snackbar"})}).catch(e=>{console.error(e),n((0,i.__)("Something went wrong, please contact the author for support!","content-blocks-builder"),{type:"snackbar"})}).finally(()=>{m(!1)})},className:"use-bunny-fonts"}),(0,he.jsx)("p",{children:(0,he.jsxs)("strong",{children:[(0,he.jsx)(sr,{href:"https://fonts.google.com/",label:"Google Fonts"}),","," ",(0,he.jsx)(sr,{href:"https://fonts.bunny.net/",label:"Bunny Fonts"})]})})]})]}),c&&(0,he.jsx)(cr,{})]})},ur=(e,t,n)=>{if(!t)return n;const r=t.find(t=>e===t?.prefix);return r&&r?.breakpoint?r.breakpoint:n},pr=()=>{const{Messages:e}=(0,o.useContext)(we),[t,n]=(0,s.useEntityProp)("root","site","CBBBreakpoints"),r=(e,t)=>r=>{const o=t.map(t=>t.prefix===e?{...t,breakpoint:r}:t);n(o)},l=(0,o.useMemo)(()=>ur("md",t,768),[t]),c=(0,o.useMemo)(()=>ur("lg",t,1024),[t]),{handleSave:d,MessageNotice:u}=bn(e);return(0,he.jsxs)(jn,{title:(0,i.__)("Manage reponsive breakpoints","content-blocks-builder"),renderFooter:()=>(0,he.jsx)(gn,{onSave:d}),children:[(0,he.jsxs)(kn,{className:"fieldset",children:[(0,he.jsx)("div",{className:"fieldset__label",children:(0,he.jsx)("strong",{children:(0,i.__)("Change the breakpoint values for phone, tablet and desktop. All values are in pixels (px).","content-blocks-builder")})}),t?(0,he.jsxs)(he.Fragment,{children:[(0,he.jsx)(a.RangeControl,{label:(0,i.__)("Tablet","content-blocks-builder"),value:l,onChange:r("md",t),min:600,max:1200}),(0,he.jsx)(a.RangeControl,{label:(0,i.__)("Desktop","content-blocks-builder"),value:c,onChange:r("lg",t),min:960,max:1920})]}):(0,he.jsx)(a.Spinner,{})]}),(0,he.jsx)(u,{})]})},hr={edit:(0,i.__)("Edit","content-blocks-builder"),editItem:(0,i.__)("Edit %s","content-blocks-builder"),save:(0,i.__)("Save","content-blocks-builder"),cancel:(0,i.__)("Cancel","content-blocks-builder"),delete:(0,i.__)("Delete","content-blocks-builder"),closeModal:(0,i.__)("Close modal","content-blocks-builder"),name:(0,i.__)("Name","content-blocks-builder"),label:(0,i.__)("Label","content-blocks-builder"),block:(0,i.__)("block","content-blocks-builder"),variation:(0,i.__)("variation","content-blocks-builder"),defaultVariation:(0,i.__)("default variation","content-blocks-builder"),pattern:(0,i.__)("pattern","content-blocks-builder"),blocks:(0,i.__)("Blocks","content-blocks-builder"),variations:(0,i.__)("Variations","content-blocks-builder"),patterns:(0,i.__)("Patterns","content-blocks-builder")},mr=({value:t,onChange:n,onDelete:r,validateData:i,isEdit:s=!1})=>{const[l,c]=(0,o.useState)(t),{name:d,label:u}=l,[p,h]=(0,o.useState)(""),[m,f]=(0,o.useState)(s||(0,e.isEmpty)(d)||(0,e.isEmpty)(u));return(0,he.jsx)(he.Fragment,{children:m?(0,he.jsxs)(he.Fragment,{children:[(0,he.jsx)(a.TextControl,{placeholder:hr.name,value:d,onChange:e=>{c({...l,name:e})},className:"category__name"}),(0,he.jsx)(a.TextControl,{placeholder:hr.label,value:u,onChange:e=>{c({...l,label:e})},className:"category__label"}),(0,he.jsxs)("div",{className:"fieldset__item__actions",children:[(0,he.jsx)(a.Button,{size:"small",variant:"secondary",onClick:()=>{const e=i(l);if("success"===e?.type){const{name:e,label:t}=l;n({name:e.trim(),label:t.trim()}),f(!1)}else h(e?.message)},children:hr.save}),t?.name&&t?.label&&(0,he.jsx)(a.Button,{size:"small",variant:"secondary",onClick:()=>{c(t),f(!1)},children:hr.cancel}),(0,he.jsx)(a.Button,{size:"small",variant:"secondary",isDestructive:!0,onClick:()=>{r()},children:hr.delete})]}),p&&(0,he.jsx)(a.Notice,{className:"message",status:"error",isDismissible:!1,children:p})]}):(0,he.jsxs)(he.Fragment,{children:[(0,he.jsx)("code",{children:d}),(0,he.jsx)("span",{children:" - "}),(0,he.jsx)("span",{children:u}),(0,he.jsxs)("div",{className:"fieldset__item__actions",children:[(0,he.jsx)(a.Button,{size:"small",variant:"secondary",onClick:()=>{f(!0)},children:hr.edit}),(0,he.jsx)(a.Button,{size:"small",variant:"secondary",isDestructive:!0,onClick:()=>{r()},children:hr.delete})]})]})})};(0,fe.addFilter)("boldblocks.settings.patternCategories","boldblocks/premium",(t,{Fieldset:n,CategoryList:r,customCategories:o,setCustomCategories:s,registeredCategories:l})=>{const c=e=>{let{name:t,label:n}=null!=e?e:{};return t=t.trim(),n=n.trim(),t&&n?l.find(({name:e,label:r})=>e===t||r===n)?{type:"error",message:(0,i.__)("Name and label should not be in the list of already registered categories.","content-blocks-builder")}:{type:"success"}:{type:"error",message:(0,i.__)("Both name and label are required!","content-blocks-builder")}};return(0,he.jsx)(he.Fragment,{children:(0,he.jsxs)(n,{className:"fieldset",children:[(0,he.jsxs)("div",{className:"fieldset__label",children:[(0,he.jsx)("strong",{children:(0,i.__)("Manage custom categories","content-blocks-builder")}),(0,he.jsx)("p",{children:(0,i.__)("Click the 'Update Settings' button to save data to the database.","content-blocks-builder")})]}),(0,he.jsxs)(r,{className:"category__list",children:[(0,e.isUndefined)(o)&&(0,he.jsx)(a.Spinner,{}),o&&o.length>0&&o.map((e,t)=>(0,he.jsx)("li",{children:(0,he.jsx)(mr,{value:e,validateData:c,onChange:e=>{const n=[...o];n[t]=e,s(n)},onDelete:()=>{const e=[...o];e.splice(t,1),s(e)}})},e?.name))]}),o&&(0,he.jsx)(a.Button,{variant:"primary",size:"small",onClick:()=>{s([...o,{name:"",label:""}])},children:(0,i.__)("Add category","content-blocks-builder")})]})})});const fr=Kt.ul`
  li {
    display: flex;
    align-items: center;
    align-self: start;
    flex-wrap: wrap;
    gap: 0.2em;
    padding: 6px 0;
    margin: 0;
    border-bottom: 1px solid #ddd;
  }

  .fieldset__item__actions {
    margin-left: auto;

    > * + * {
      margin-left: 8px;
    }
  }

  .components-base-control + .components-base-control {
    margin-left: 8px;
  }

  .components-base-control__field {
    margin-bottom: 0;
  }
`,gr=()=>{const{Messages:e}=(0,o.useContext)(we),[t,n]=(0,o.useState)(!0),[r,l]=(0,o.useState)([]),[c,d]=(0,s.useEntityProp)("root","site","cbb_pattern_categories"),[p,h]=(0,s.useEntityProp)("root","site","cbb_pattern_categories_all_label");(0,o.useEffect)(()=>{u()({path:"boldblocks/v1/getPatternCategories"}).then(e=>{l(e),n(!1)})},[]);const{handleSave:m,MessageNotice:f}=bn(e);return(0,he.jsxs)(jn,{title:(0,i.__)("Manage pattern categories","content-blocks-builder"),renderFooter:()=>(0,he.jsx)(gn,{onSave:m}),children:[(0,he.jsx)("p",{children:(0,i.__)("You can create custom pattern categories for this site such as 'Carousel', 'Hero'... Don't register new categories with the same name and label as those already registered.","content-blocks-builder")}),(0,he.jsx)("p",{children:(0,i.__)("Following pattern categories are already registered:","content-blocks-builder")}),(0,he.jsxs)(kn,{className:"fieldset",children:[t&&(0,he.jsx)(a.Spinner,{}),r.length>0&&(0,he.jsx)("ul",{className:"fieldset__list",children:r.map(({name:e,label:t})=>(0,he.jsxs)("li",{children:[(0,he.jsx)("code",{children:e}),(0,he.jsx)("span",{children:" - "}),(0,he.jsx)("span",{children:t})]},e))})]}),(0,fe.applyFilters)("boldblocks.settings.patternCategories",null,{Fieldset:kn,CategoryList:fr,customCategories:c,setCustomCategories:d,registeredCategories:r}),(0,he.jsxs)(kn,{className:"fieldset",children:[(0,he.jsx)("div",{className:"fieldset__label",children:(0,he.jsx)("strong",{children:(0,i.__)("Change the label for the 'all custom patterns' category.","content-blocks-builder")})}),(0,he.jsx)(a.TextControl,{value:null!=p?p:"",onChange:h})]}),(0,he.jsx)(f,{})]})},br=()=>(0,he.jsxs)(vn,{description:(0,i.__)("General settings","content-blocks-builder"),children:[(0,he.jsx)(pr,{}),(0,he.jsx)(gr,{})]});var yr=(0,he.jsx)(me.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,he.jsx)(me.Path,{d:"M18 11.3l-1-1.1-4 4V3h-1.5v11.3L7 10.2l-1 1.1 6.2 5.8 5.8-5.8zm.5 3.7v3.5h-13V15H4v5h16v-5h-1.5z"})});const vr=["boldblocks/group","boldblocks/grid-item","boldblocks/grid-item-repeater","boldblocks/carousel-item","boldblocks/carousel-item-repeater","boldblocks/stack-item","boldblocks/stack-item-repeater","boldblocks/accordion-item","boldblocks/accordion-item-repeater"],xr=t=>{const{records:n,isResolving:r,hasResolved:o}=(0,s.useEntityRecords)("postType",t,{per_page:-1,_cbb_load_all:!0});return[(0,e.isArray)(n)?n.map(e=>{const{id:t,title:{raw:n,rendered:r},content:{raw:o},slug:i,type:a,meta:s,...l}=e;return{id:t,title:n,content:o,slug:i,type:a,meta:s,renderedTitle:r,...l}}):[],r,o]},_r=(0,o.createContext)(),kr=({postType:e,title:t,value:n=[],setValue:r})=>{const s=(0,o.useContext)(_r),l=e.replace("boldblocks_",""),c=`${l}s`,d=`${l.charAt(0).toUpperCase()+l.slice(1)}s`,{[c]:u,[`isLoading${d}`]:p,[`hasFinishedResolution${d}`]:h}=s;let m=u;if("block"===l&&m?.length){const e=vr.map(e=>e.replace("boldblocks/",""));m=m.filter(({slug:t})=>!e.includes(t))}return(0,he.jsxs)(kn,{className:"fieldset",children:[(0,he.jsx)("div",{className:"fieldset__label",children:(0,he.jsx)("strong",{children:t})}),p&&(0,he.jsx)(a.Spinner,{}),m&&m.length>0?(0,he.jsxs)("fieldset",{children:[(0,he.jsx)(a.CheckboxControl,{label:(0,i.__)("Toggle All","content-blocks-builder"),checked:n.length===m.length,onChange:e=>{r(e?[...m]:[])}}),(0,he.jsx)("ul",{className:"fieldset__list",children:m.map(e=>{return(0,he.jsx)("li",{children:(0,he.jsx)(a.CheckboxControl,{onChange:t=>{let o=[];if(t){const t=m.find(({slug:t})=>t===e?.slug);o=[...n,t]}else o=n.filter(({slug:t})=>t!==e?.slug);r([...o])},checked:(o=e?.slug,n.find(({slug:e})=>e===o)),label:(0,he.jsx)("a",{href:(t=e.id,(0,pe.addQueryArgs)(`post.php?post=${t}&action=edit`)),target:"_blank",children:e?.title})})},e?.slug);var t,o})})]}):(0,he.jsx)(he.Fragment,{children:h&&(0,he.jsx)("div",{children:(0,i.__)("There is no data to export.","content-blocks-builder")})})]})},wr=()=>{const{isLoading:e}=(0,o.useContext)(_r),[t,n]=(0,o.useState)([]),[r,s]=(0,o.useState)([]),[l,c]=(0,o.useState)([]);return(0,he.jsxs)(jn,{title:(0,i.__)("Export data","content-blocks-builder"),renderFooter:()=>(0,he.jsx)(a.Button,{variant:"primary",disabled:0===t.length&&0===r.length&&0===l.length||e,icon:yr,iconSize:16,onClick:e=>{e.preventDefault();const n={};t.length&&(n.blocks=t.map(({title:e,content:t,slug:n,meta:r,keywords:o})=>({title:e,content:t,slug:n,meta:r,keywords:o}))),r.length&&(n.variations=r.map(({title:e,content:t,slug:n,meta:r})=>({title:e,content:t,slug:n,meta:r}))),l.length&&(n.patterns=l.map(({title:e,content:t,slug:n,meta:r,keywords:o})=>({title:e,content:t,slug:n,meta:r,keywords:o}))),((e,t)=>{const n=new Blob([JSON.stringify(t,null,2)],{type:"text/json"}),r=document.createElement("a");r.download=e,r.href=window.URL.createObjectURL(n),r.dataset.downloadurl=["text/json",r.download,r.href].join(":");const o=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0});r.dispatchEvent(o),r.remove()})(`cbb-${(new Date).toISOString().slice(0,10)}.json`,n)},children:(0,i.__)("Export data","content-blocks-builder")}),children:[(0,he.jsx)("p",{children:(0,i.__)("Select the blocks, variations, patterns to export a .json file which you can then import to another WordPress site. Be sure to export all dependent blocks and/or variations.","content-blocks-builder")}),(0,he.jsx)(kr,{postType:"boldblocks_block",title:(0,i.__)("Select Blocks","content-blocks-builder"),value:t,setValue:n}),(0,he.jsx)(kr,{postType:"boldblocks_variation",title:(0,i.__)("Select Variations","content-blocks-builder"),value:r,setValue:s}),(0,he.jsx)(kr,{postType:"boldblocks_pattern",title:(0,i.__)("Select Patterns","content-blocks-builder"),value:l,setValue:c})]})};var jr=(0,he.jsx)(me.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,he.jsx)(me.Path,{d:"M18.5 15v3.5H13V6.7l4.5 4.1 1-1.1-6.2-5.8-5.8 5.8 1 1.1 4-4v11.7h-6V15H4v5h16v-5z"})}),Cr=(0,he.jsx)(me.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,he.jsx)(me.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"M12.848 8a1 1 0 0 1-.914-.594l-.723-1.63a.5.5 0 0 0-.447-.276H5a.5.5 0 0 0-.5.5v11.5a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-9A.5.5 0 0 0 19 8h-6.152Zm.612-1.5a.5.5 0 0 1-.462-.31l-.445-1.084A2 2 0 0 0 10.763 4H5a2 2 0 0 0-2 2v11.5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-5.54Z"})});const Sr=Kt.div`
  margin-top: 12px;
`,Tr=({posts:t,title:n})=>(0,e.isArray)(t)&&(0,he.jsxs)(Sr,{className:"posts-preview",children:[(0,he.jsx)("div",{className:"fieldset__label",children:(0,he.jsx)("strong",{children:n})}),(0,he.jsx)("ul",{className:"fieldset__list",children:t.map(({slug:e})=>(0,he.jsx)("li",{children:`boldblocks/${e}`},e))})]}),Er=()=>{const{saveEditedEntityRecord:t}=(0,l.useDispatch)(s.store),n=(0,o.useContext)(_r),{isLoading:r,registeredCategories:c,customCategories:d,setCustomCategories:p,isLoadingPatternsCategories:h}=n,m=!h&&c.concat(d).concat([{name:"boldblocks"}]).map(({name:e})=>e),[f,g]=(0,o.useState)(""),[b,y]=(0,o.useState)({}),[v,x]=(0,o.useState)({}),[_,k]=(0,o.useState)("ignore");let w=e=>e?.blocks||e?.variations||e?.patterns;return(0,he.jsxs)(jn,{title:(0,i.__)("Import data","content-blocks-builder"),renderFooter:()=>{const[s,l]=(0,o.useState)(!1);return(0,he.jsxs)(he.Fragment,{children:[(0,he.jsx)(a.Button,{variant:"primary",disabled:!w(b)||!f||r,icon:jr,iconSize:16,onClick:()=>{l(!0);const r=(0,e.pick)(b,["blocks","variations","patterns"]);Promise.all(Object.keys(r).map(async t=>Promise.all(r[t].map(r=>((t,r)=>{const{[r]:o}=n;let i;return i="variations"===r?(0,e.isArray)(o)&&o.find(({meta:{boldblocks_variation_name:e}})=>e===t?.meta?.boldblocks_variation_name):(0,e.isArray)(o)&&o.find(({slug:e})=>e===t?.slug),i?"override"===_?u()({path:`wp/v2/boldblocks-${r}/${i.id}`,method:"POST",data:{...t,status:"publish"}}):void 0:"variations"===r?u()({path:"boldblocks/v1/createVariation",method:"POST",data:{...t,status:"publish",cbb_variation_nonce:CBBSettings?.variationNonce}}):u()({path:`wp/v2/boldblocks-${r}`,method:"POST",data:{...t,status:"publish"}})})(r,t))).then(e=>({key:t,response:e})))).then(n=>{const r=n.reduce((e,{key:t,response:n})=>({...e,[t]:n.filter(e=>e)}),{});if(r?.patterns&&r.patterns){const n=(0,e.uniqBy)(r.patterns.reduce((e,{meta:{boldblocks_pattern_categories:t=[]}})=>[...e,...t],[]),"name");if(n.length){const e=n.filter(({name:e})=>!m.find(t=>e===t));e.length&&(p([...d,...e]),t("root","site"))}}r?.blocks&&r.blocks.length||r?.variations&&r.variations.length||r?.patterns&&r.patterns.length?x({type:"success",message:(0,i.__)("Data has been imported successfully!","content-blocks-builder")}):x({type:"info",message:(0,i.__)("No items have been imported! Please change your settings or upload another JSON file.","content-blocks-builder")})}).catch(e=>{console.error(e),x({type:"error",message:(0,i.__)("Import failed. Please make sure your data is correct!","content-blocks-builder")})}).finally(()=>{l(!1),g(""),y({})})},children:(0,i.__)("Import data","content-blocks-builder")}),s&&(0,he.jsx)(a.Spinner,{})]})},children:[(0,he.jsx)("p",{children:(0,i.__)("Upload your json file and click the import button.","content-blocks-builder")}),(0,he.jsxs)(kn,{className:"fieldset",children:[(0,he.jsx)("div",{className:"fieldset__label",children:(0,he.jsx)("strong",{children:(0,i.__)("Select file","content-blocks-builder")})}),(0,he.jsxs)("div",{className:"file-upload",children:[(0,he.jsx)(a.FormFileUpload,{accept:"application/JSON",variant:"primary",onChange:e=>{g(e.target.files[0]);const t=new FileReader;t.onload=e=>{try{const t=JSON.parse(e.target.result);w(t)?(y(t),x({})):(y({}),x({type:"error",message:(0,i.__)("The uploaded file is in the wrong format. Please use a JSON file from the export functionality.","content-blocks-builder")}))}catch(e){y({}),console.error(e)}},t.readAsText(e.target.files[0]),e.target.value=""},children:(0,i.__)("Choose file to upload","content-blocks-builder")}),w(b)&&f&&(0,he.jsxs)(he.Fragment,{children:[(0,he.jsxs)("div",{className:"file-preview",children:[(0,he.jsx)("span",{className:"icon",children:Cr}),(0,he.jsx)("span",{className:"name",children:f?.name}),(0,he.jsx)(a.Button,{variant:"tertiary",className:"delete",onClick:()=>{g(""),y({})},children:hr.delete})]}),(0,he.jsxs)("div",{className:"data-preview",style:{flexBasis:"100%"},children:[(0,he.jsx)("p",{children:(0,i.__)("Following data will be imported.","content-blocks-builder")}),(0,he.jsx)(Tr,{posts:b?.blocks,title:`${hr.blocks}:`}),(0,he.jsx)(Tr,{posts:b?.variations,title:`${hr.variations}:`}),(0,he.jsx)(Tr,{posts:b?.patterns,title:`${hr.patterns}:`})]})]})]}),(0,he.jsx)("div",{className:"fieldset__label",style:{marginTop:"12px"},children:(0,he.jsx)("strong",{children:(0,i.__)("Import settings","content-blocks-builder")})}),(0,he.jsx)(a.RadioControl,{selected:_,onChange:k,options:[{value:"override",label:(0,i.__)("Replace old data.","content-blocks-builder")},{value:"ignore",label:(0,i.__)("Existing items are ignored.","content-blocks-builder")}]}),!(0,e.isEmpty)(v)&&(0,he.jsx)(he.Fragment,{children:(0,he.jsx)(a.Notice,{status:v?.type,isDismissible:!1,children:v?.message})})]})]})},Nr=()=>{const t=(()=>{const[t,n,r]=xr("boldblocks_block"),[i,a,l]=xr("boldblocks_variation"),[c,d,p]=xr("boldblocks_pattern"),{registeredCategories:h,customCategories:m,setCustomCategories:f,isLoading:g}=(()=>{const[t,n]=(0,o.useState)(!0),[r,i]=(0,o.useState)([]),[a,l]=(0,s.useEntityProp)("root","site","cbb_pattern_categories");return(0,o.useEffect)(()=>{u()({path:"boldblocks/v1/getPatternCategories"}).then(e=>{i(e),n(!1)})},[]),{registeredCategories:r,customCategories:a,setCustomCategories:l,isLoading:t||(0,e.isUndefined)(a)}})();return{blocks:t,isLoadingBlocks:n,hasFinishedResolutionBlocks:r,variations:i,isLoadingVariations:a,hasFinishedResolutionVariations:l,patterns:c,isLoadingPatterns:d,hasFinishedResolutionPatterns:p,registeredCategories:h,customCategories:m,setCustomCategories:f,isLoadingPatternsCategories:g,isLoading:n||a||d||g}})();return(0,he.jsx)(_r.Provider,{value:t,children:(0,he.jsxs)(vn,{description:(0,i.__)("Import/Export blocks, patterns and variations","content-blocks-builder"),children:[(0,he.jsx)(wr,{}),(0,he.jsx)(Er,{})]})})},Fr=Kt(jn)`
  .inside h2 {
    padding: 0;
    margin: 0 0 10px;
    font-size: 1.75em;
  }

  .dev__body {
    padding-top: 1em;
  }
`,Ar=()=>{const{Debug:{nonce:e,isPurged:t,setIsPurged:n}={}}=(0,o.useContext)(we);return(0,he.jsx)(Fr,{title:(0,i.__)("Purge the cache","content-blocks-builder"),className:"debug-widget debug",children:(0,he.jsxs)("div",{className:"dev__body debug__body",children:[(0,he.jsxs)(a.Flex,{justify:"flex-start",children:[(0,he.jsx)(a.Button,{variant:"primary",type:"button",href:(0,pe.addQueryArgs)(`edit.php?post_type=boldblocks_block&page=cbb-settings&tab=developer&_cbb_purge=${e}`),as:"a",children:(0,i.__)("Purge cache","content-blocks-builder")}),(0,he.jsx)("p",{children:(0,i.__)("Delete the entire cache contents for CBB Blocks, Variations and Patterns.","content-blocks-builder")})]}),!!t&&(0,he.jsx)(a.Notice,{status:"success",onRemove:()=>{n(!1),(new je).delete("_cbb_purge",!0)},children:(0,i.__)("Cache cleared.","content-blocks-builder")})]})})},Br=()=>{const{Messages:t,pages:n,isResolvingPages:r}=(0,o.useContext)(we),l=(0,o.useMemo)(()=>n?.length?n.map(({id:e,title:{rendered:t}={}})=>({label:t,value:e})):[],[r]),[c,d]=(0,s.useEntityProp)("root","site","IsMaintenance"),[u,p]=(0,s.useEntityProp)("root","site","MaintenanceSlug"),[h,m]=(0,s.useEntityProp)("root","site","MaintananceEnableCustomPage"),[f,g]=(0,s.useEntityProp)("root","site","MaintanancePageId"),{handleSave:b,MessageNotice:y}=bn(t);return(0,he.jsxs)(Fr,{title:(0,i.__)("Maintenance mode","content-blocks-builder"),renderFooter:()=>(0,he.jsx)(gn,{onSave:b}),className:"maintenance-widget maintenance",children:[(0,he.jsxs)(kn,{className:"fieldset",children:[(0,he.jsx)("div",{className:"fieldset__label",children:(0,he.jsx)("strong",{children:(0,i.__)("Turn on the maintenance mode.","content-blocks-builder")})}),(0,e.isUndefined)(u)?(0,he.jsx)(a.Spinner,{}):(0,he.jsxs)(he.Fragment,{children:[(0,he.jsx)(a.ToggleControl,{label:(0,i.__)("Enable maintenance mode","content-blocks-builder"),checked:null!=c&&c,disabled:(0,e.isUndefined)(c),onChange:d}),c&&(0,he.jsxs)(he.Fragment,{children:[(0,he.jsx)(a.TextareaControl,{label:(0,i.__)("Ignore slug","content-blocks-builder"),value:u,placeholder:"wp-login.php",onChange:p,help:(0,i.__)("Input the page slugs that will bypass the maintenance mode. Put each item on a new line. Don't add a slash '/' at the begining or the end.","content-blocks-builder"),rows:4}),(0,he.jsx)(a.ToggleControl,{label:(0,i.__)("Use a custom page as the maintenance page","content-blocks-builder"),checked:null!=h&&h,onChange:m}),h&&(0,he.jsx)(he.Fragment,{children:r||(0,e.isUndefined)(n)?(0,he.jsx)(a.Spinner,{}):(0,he.jsx)(a.SelectControl,{label:(0,i.__)("Custom maintenance page","content-blocks-builder"),value:f,onChange:g,options:l})})]})]})]}),(0,he.jsx)(y,{})]})},Pr=()=>{const{Messages:t}=(0,o.useContext)(we),[n,r]=(0,s.useEntityProp)("root","site","KeepDataOnUninstall"),{handleSave:l,MessageNotice:c}=bn(t);return(0,he.jsxs)(Fr,{title:(0,i.__)("Uninstall settings","content-blocks-builder"),renderFooter:()=>(0,he.jsx)(gn,{onSave:l}),className:"debug-widget debug",children:[(0,he.jsx)(kn,{className:"fieldset",children:(0,e.isUndefined)(n)?(0,he.jsx)(a.Spinner,{}):(0,he.jsx)(he.Fragment,{children:(0,he.jsx)(a.ToggleControl,{label:(0,i.__)("Keep blocks, variations, and patterns on uninstall","content-blocks-builder"),checked:null!=n&&n,disabled:(0,e.isUndefined)(n),onChange:r})})}),(0,he.jsx)(c,{})]})},Or=()=>(0,he.jsxs)(vn,{description:(0,i.__)("Settings for developer","content-blocks-builder"),children:[(0,he.jsxs)(wn,{children:[(0,he.jsx)(Ar,{}),(0,he.jsx)(Pr,{})]}),(0,he.jsx)(wn,{children:(0,he.jsx)(Br,{})})]}),Lr=({children:e})=>(0,he.jsx)("div",{className:"metabox-holder",children:e}),Rr=()=>{const t=[{name:"getting-started",title:(0,i.__)("Getting Started","content-blocks-builder"),className:"setting-tabs__getting-started"},{name:"general",title:(0,i.__)("General","content-blocks-builder"),className:"setting-tabs__general"},{name:"typography",title:(0,i.__)("Typography","content-blocks-builder"),className:"setting-tabs__typography"},{name:"tools",title:(0,i.__)("Tools","content-blocks-builder"),className:"setting-tabs__tools"},{name:"developer",title:(0,i.__)("Developer","content-blocks-builder"),className:"setting-tabs__developer"}],n=new je,r=n.get("tab"),l=(0,e.findKey)(t,["name",r])?r:"getting-started",c=(()=>{const{loading:e,error:t,data:{data:n}={}}=((e,t={},n=[])=>{const[r,i]=(0,o.useState)(!0),[a,s]=(0,o.useState)(),[l,c]=(0,o.useState)(),d=(0,o.useCallback)(()=>{i(!0),s(void 0),c(void 0),u()({path:e,...{...p,...t}}).then(c).catch(s).finally(()=>i(!1))},n);return(0,o.useEffect)(()=>{d()},[d]),{loading:r,error:a,data:l}})("boldblocks/v1/getDocs");let r="",a=!1;try{r=CBBSettings?.nonce,a=CBBSettings?.isPurgedCache}catch(t){log("The nonce is not defined!","error")}const[l,c]=(0,o.useState)(a),d={UpdateSettings:(0,i.__)("Update Settings","content-blocks-builder"),Success:(0,i.__)("Setting Saved!","content-blocks-builder"),Error:(0,i.__)("Something went wrong, please contact the author for support!","content-blocks-builder")},{records:h,isResolving:m}=(0,s.useEntityRecords)("postType","page",{per_page:100});return{Docs:{loading:e,error:t,docs:n},Debug:{nonce:r,isPurged:l,setIsPurged:c},Messages:d,pages:h,isResolvingPages:m}})();return(0,he.jsx)(we.Provider,{value:c,children:(0,he.jsx)(a.TabPanel,{tabs:t,className:"settings-tabs",activeClass:"is-active",initialTabName:l,onSelect:e=>{n.set("tab",e)},children:e=>{switch(e.name){case"getting-started":return(0,he.jsx)(Lr,{children:(0,he.jsx)(En,{})});case"general":return(0,he.jsx)(Lr,{children:(0,he.jsx)(br,{})});case"typography":return(0,he.jsx)(Lr,{children:(0,he.jsx)(dr,{})});case"tools":return(0,he.jsx)(Lr,{children:(0,he.jsx)(Nr,{})});case"developer":return(0,he.jsx)(Lr,{children:(0,he.jsx)(Or,{})})}}})})};r()(()=>{(0,o.createRoot)(document.querySelector(".js-boldblocks-settings-root")).render((0,he.jsx)(Rr,{}))})})()})();