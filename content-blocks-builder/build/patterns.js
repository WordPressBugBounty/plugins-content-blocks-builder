(()=>{var e={195:(e,t,n)=>{var r=n(981),i=n(332),o=n(799);e.exports=function(e){var t=!1,n=function(n,i){if(e.page<1)return e.listContainer.style.display="none",void(t=!0);t&&(e.listContainer.style.display="block");var o,s=e.matchingItems.length,l=e.i,c=e.page,u=Math.ceil(s/c),d=Math.ceil(l/c),p=i.innerWindow||2,f=i.left||i.outerWindow||0,m=i.right||i.outerWindow||0;m=u-m,n.clear();for(var h=1;h<=u;h++){var g=d===h?"active":"";a.number(h,f,m,d,p)?(o=n.add({page:h,dotted:!1})[0],g&&r(o.elm).add(g),o.elm.firstChild.setAttribute("data-i",h),o.elm.firstChild.setAttribute("data-page",c)):a.dotted(n,h,f,m,d,p,n.size())&&(o=n.add({page:"...",dotted:!0})[0],r(o.elm).add("disabled"))}},a={number:function(e,t,n,r,i){return this.left(e,t)||this.right(e,n)||this.innerWindow(e,r,i)},left:function(e,t){return e<=t},right:function(e,t){return e>t},innerWindow:function(e,t,n){return e>=t-n&&e<=t+n},dotted:function(e,t,n,r,i,o,a){return this.dottedLeft(e,t,n,r,i,o)||this.dottedRight(e,t,n,r,i,o,a)},dottedLeft:function(e,t,n,r,i,o){return t==n+1&&!this.innerWindow(t,i,o)&&!this.right(t,r)},dottedRight:function(e,t,n,r,i,o,a){return!e.items[a-1].values().dotted&&t==r&&!this.innerWindow(t,i,o)&&!this.right(t,r)}};return function(t){var r=new o(e.listContainer.id,{listClass:t.paginationClass||"pagination",item:t.item||"<li><a class='page' href='#'></a></li>",valueNames:["page","dotted"],searchClass:"pagination-search-that-is-not-supposed-to-exist",sortClass:"pagination-sort-that-is-not-supposed-to-exist"});i.bind(r.listContainer,"click",function(t){var n=t.target||t.srcElement,r=e.utils.getAttribute(n,"data-page"),i=e.utils.getAttribute(n,"data-i");i&&e.show((i-1)*r+1,r)}),e.on("updated",function(){n(r,t)}),n(r,t)}}},200:e=>{e.exports=function(e,t){var n=e.getAttribute&&e.getAttribute(t)||null;if(!n)for(var r=e.attributes,i=r.length,o=0;o<i;o++)void 0!==r[o]&&r[o].nodeName===t&&(n=r[o].nodeValue);return n}},212:e=>{e.exports=function(e){if(void 0===e)return[];if(null===e)return[null];if(e===window)return[window];if("string"==typeof e)return[e];if(function(e){return"[object Array]"===Object.prototype.toString.call(e)}(e))return e;if("number"!=typeof e.length)return[e];if("function"==typeof e&&e instanceof Function)return[e];for(var t=[],n=0,r=e.length;n<r;n++)(Object.prototype.hasOwnProperty.call(e,n)||n in e)&&t.push(e[n]);return t.length?t:[]}},249:e=>{e.exports=function(e){return e.handlers.filterStart=e.handlers.filterStart||[],e.handlers.filterComplete=e.handlers.filterComplete||[],function(t){if(e.trigger("filterStart"),e.i=1,e.reset.filter(),void 0===t)e.filtered=!1;else{e.filtered=!0;for(var n=e.items,r=0,i=n.length;r<i;r++){var o=n[r];t(o)?o.filtered=!0:o.filtered=!1}}return e.update(),e.trigger("filterComplete"),e.visibleItems}}},252:e=>{"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,i,o;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(i=r;0!==i--;)if(!e(t[i],n[i]))return!1;return!0}if(t instanceof Map&&n instanceof Map){if(t.size!==n.size)return!1;for(i of t.entries())if(!n.has(i[0]))return!1;for(i of t.entries())if(!e(i[1],n.get(i[0])))return!1;return!0}if(t instanceof Set&&n instanceof Set){if(t.size!==n.size)return!1;for(i of t.entries())if(!n.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(n)){if((r=t.length)!=n.length)return!1;for(i=r;0!==i--;)if(t[i]!==n[i])return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(o=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(i=r;0!==i--;)if(!Object.prototype.hasOwnProperty.call(n,o[i]))return!1;for(i=r;0!==i--;){var a=o[i];if(!e(t[a],n[a]))return!1}return!0}return t!=t&&n!=n}},332:(e,t,n)=>{var r=window.addEventListener?"addEventListener":"attachEvent",i=window.removeEventListener?"removeEventListener":"detachEvent",o="addEventListener"!==r?"on":"",a=n(212);t.bind=function(e,t,n,i){for(var s=0,l=(e=a(e)).length;s<l;s++)e[s][r](o+t,n,i||!1)},t.unbind=function(e,t,n,r){for(var s=0,l=(e=a(e)).length;s<l;s++)e[s][i](o+t,n,r||!1)},t.debounce=function(e,t,n){var r;return t?function(){var i=this,o=arguments,a=n&&!r;clearTimeout(r),r=setTimeout(function(){r=null,n||e.apply(i,o)},t),a&&e.apply(i,o)}:e}},340:e=>{e.exports=function(e){return(e=null===(e=void 0===e?"":e)?"":e).toString()}},343:e=>{e.exports=function(e){var t={els:void 0,clear:function(){for(var n=0,r=t.els.length;n<r;n++)e.utils.classes(t.els[n]).remove("asc"),e.utils.classes(t.els[n]).remove("desc")},getOrder:function(t){var n=e.utils.getAttribute(t,"data-order");return"asc"==n||"desc"==n?n:e.utils.classes(t).has("desc")?"asc":e.utils.classes(t).has("asc")?"desc":"asc"},getInSensitive:function(t,n){var r=e.utils.getAttribute(t,"data-insensitive");n.insensitive="false"!==r},setOrder:function(n){for(var r=0,i=t.els.length;r<i;r++){var o=t.els[r];if(e.utils.getAttribute(o,"data-sort")===n.valueName){var a=e.utils.getAttribute(o,"data-order");"asc"==a||"desc"==a?a==n.order&&e.utils.classes(o).add(n.order):e.utils.classes(o).add(n.order)}}}},n=function(){e.trigger("sortStart");var n={},r=arguments[0].currentTarget||arguments[0].srcElement||void 0;r?(n.valueName=e.utils.getAttribute(r,"data-sort"),t.getInSensitive(r,n),n.order=t.getOrder(r)):((n=arguments[1]||n).valueName=arguments[0],n.order=n.order||"asc",n.insensitive=void 0===n.insensitive||n.insensitive),t.clear(),t.setOrder(n);var i,o=n.sortFunction||e.sortFunction||null,a="desc"===n.order?-1:1;i=o?function(e,t){return o(e,t,n)*a}:function(t,r){var i=e.utils.naturalSort;return i.alphabet=e.alphabet||n.alphabet||void 0,!i.alphabet&&n.insensitive&&(i=e.utils.naturalSort.caseInsensitive),i(t.values()[n.valueName],r.values()[n.valueName])*a},e.items.sort(i),e.update(),e.trigger("sortComplete")};return e.handlers.sortStart=e.handlers.sortStart||[],e.handlers.sortComplete=e.handlers.sortComplete||[],t.els=e.utils.getByClass(e.listContainer,e.sortClass),e.utils.events.bind(t.els,"click",n),e.on("searchStart",t.clear),e.on("filterStart",t.clear),n}},378:e=>{e.exports=function(e,t,n,r){return(r=r||{}).test&&r.getElementsByClassName||!r.test&&document.getElementsByClassName?function(e,t,n){return n?e.getElementsByClassName(t)[0]:e.getElementsByClassName(t)}(e,t,n):r.test&&r.querySelector||!r.test&&document.querySelector?function(e,t,n){return t="."+t,n?e.querySelector(t):e.querySelectorAll(t)}(e,t,n):function(e,t,n){for(var r=[],i=e.getElementsByTagName("*"),o=i.length,a=new RegExp("(^|\\s)"+t+"(\\s|$)"),s=0,l=0;s<o;s++)if(a.test(i[s].className)){if(n)return i[s];r[l]=i[s],l++}return r}(e,t,n)}},433:e=>{e.exports=function(e){for(var t,n=Array.prototype.slice.call(arguments,1),r=0;t=n[r];r++)if(t)for(var i in t)e[i]=t[i];return e}},481:e=>{e.exports=function(e,t,n){var r=n.location||0,i=n.distance||100,o=n.threshold||.4;if(t===e)return!0;if(t.length>32)return!1;var a=r,s=function(){var e,n={};for(e=0;e<t.length;e++)n[t.charAt(e)]=0;for(e=0;e<t.length;e++)n[t.charAt(e)]|=1<<t.length-e-1;return n}();function l(e,n){var r=e/t.length,o=Math.abs(a-n);return i?r+o/i:o?1:r}var c=o,u=e.indexOf(t,a);-1!=u&&(c=Math.min(l(0,u),c),-1!=(u=e.lastIndexOf(t,a+t.length))&&(c=Math.min(l(0,u),c)));var d,p,f=1<<t.length-1;u=-1;for(var m,h=t.length+e.length,g=0;g<t.length;g++){for(d=0,p=h;d<p;)l(g,a+p)<=c?d=p:h=p,p=Math.floor((h-d)/2+d);h=p;var v=Math.max(1,a-p+1),b=Math.min(a+p,e.length)+t.length,y=Array(b+2);y[b+1]=(1<<g)-1;for(var x=b;x>=v;x--){var w=s[e.charAt(x-1)];if(y[x]=0===g?(y[x+1]<<1|1)&w:(y[x+1]<<1|1)&w|(m[x+1]|m[x])<<1|1|m[x+1],y[x]&f){var _=l(g,x-1);if(_<=c){if(c=_,!((u=x-1)>a))break;v=Math.max(1,2*a-u)}}}if(l(g+1,a)>c)break;m=y}return!(u<0)}},608:e=>{e.exports=function(e){return function(t,n,r){var i=this;this._values={},this.found=!1,this.filtered=!1,this.values=function(t,n){if(void 0===t)return i._values;for(var r in t)i._values[r]=t[r];!0!==n&&e.templater.set(i,i.values())},this.show=function(){e.templater.show(i)},this.hide=function(){e.templater.hide(i)},this.matching=function(){return e.filtered&&e.searched&&i.found&&i.filtered||e.filtered&&!e.searched&&i.filtered||!e.filtered&&e.searched&&i.found||!e.filtered&&!e.searched},this.visible=function(){return!(!i.elm||i.elm.parentNode!=e.list)},function(t,n,r){if(void 0===n)r?i.values(t,r):i.values(t);else{i.elm=n;var o=e.templater.get(i,t);i.values(o)}}(t,n,r)}}},647:e=>{e.exports=function(e){var t,n,r,i={resetList:function(){e.i=1,e.templater.clear(),r=void 0},setOptions:function(e){2==e.length&&e[1]instanceof Array?t=e[1]:2==e.length&&"function"==typeof e[1]?(t=void 0,r=e[1]):3==e.length?(t=e[1],r=e[2]):t=void 0},setColumns:function(){0!==e.items.length&&void 0===t&&(t=void 0===e.searchColumns?i.toArray(e.items[0].values()):e.searchColumns)},setSearchString:function(t){t=(t=e.utils.toString(t).toLowerCase()).replace(/[-[\]{}()*+?.,\\^$|#]/g,"\\$&"),n=t},toArray:function(e){var t=[];for(var n in e)t.push(n);return t}},o=function(o){return e.trigger("searchStart"),i.resetList(),i.setSearchString(o),i.setOptions(arguments),i.setColumns(),""===n?(e.reset.search(),e.searched=!1):(e.searched=!0,r?r(n,t):function(){for(var r,i=[],o=n;null!==(r=o.match(/"([^"]+)"/));)i.push(r[1]),o=o.substring(0,r.index)+o.substring(r.index+r[0].length);(o=o.trim()).length&&(i=i.concat(o.split(/\s+/)));for(var a=0,s=e.items.length;a<s;a++){var l=e.items[a];if(l.found=!1,i.length){for(var c=0,u=i.length;c<u;c++){for(var d=!1,p=0,f=t.length;p<f;p++){var m=l.values(),h=t[p];if(m.hasOwnProperty(h)&&void 0!==m[h]&&null!==m[h]&&-1!==("string"!=typeof m[h]?m[h].toString():m[h]).toLowerCase().indexOf(i[c])){d=!0;break}}if(!d)break}l.found=d}}}()),e.update(),e.trigger("searchComplete"),e.visibleItems};return e.handlers.searchStart=e.handlers.searchStart||[],e.handlers.searchComplete=e.handlers.searchComplete||[],e.utils.events.bind(e.utils.getByClass(e.listContainer,e.searchClass),"keyup",e.utils.events.debounce(function(t){var n=t.target||t.srcElement;""===n.value&&!e.searched||o(n.value)},e.searchDelay)),e.utils.events.bind(e.utils.getByClass(e.listContainer,e.searchClass),"input",function(e){""===(e.target||e.srcElement).value&&o("")}),o}},672:(e,t,n)=>{e.exports=function(e){var t=n(608)(e),r=function(n,r){for(var i=0,o=n.length;i<o;i++)e.items.push(new t(r,n[i]))},i=function(t,n){var o=t.splice(0,50);r(o,n),t.length>0?setTimeout(function(){i(t,n)},1):(e.update(),e.trigger("parseComplete"))};return e.handlers.parseComplete=e.handlers.parseComplete||[],function(){var t=function(e){for(var t=e.childNodes,n=[],r=0,i=t.length;r<i;r++)void 0===t[r].data&&n.push(t[r]);return n}(e.list),n=e.valueNames;e.indexAsync?i(t,n):r(t,n)}}},717:e=>{e.exports=function(e){var t=function(n,r,i){var o=n.splice(0,50);i=(i=i||[]).concat(e.add(o)),n.length>0?setTimeout(function(){t(n,r,i)},1):(e.update(),r(i))};return t}},774:e=>{"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,i,o;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(i=r;0!==i--;)if(!e(t[i],n[i]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(o=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(i=r;0!==i--;)if(!Object.prototype.hasOwnProperty.call(n,o[i]))return!1;for(i=r;0!==i--;){var a=o[i];if(!("_owner"===a&&t.$$typeof||e(t[a],n[a])))return!1}return!0}return t!=t&&n!=n}},799:(e,t,n)=>{var r=n(813),i=n(378),o=n(433),a=n(859),s=n(332),l=n(340),c=n(981),u=n(200),d=n(212);e.exports=function(e,t,p){var f,m=this,h=n(608)(m),g=n(717)(m),v=n(195)(m);f={start:function(){m.listClass="list",m.searchClass="search",m.sortClass="sort",m.page=1e4,m.i=1,m.items=[],m.visibleItems=[],m.matchingItems=[],m.searched=!1,m.filtered=!1,m.searchColumns=void 0,m.searchDelay=0,m.handlers={updated:[]},m.valueNames=[],m.utils={getByClass:i,extend:o,indexOf:a,events:s,toString:l,naturalSort:r,classes:c,getAttribute:u,toArray:d},m.utils.extend(m,t),m.listContainer="string"==typeof e?document.getElementById(e):e,m.listContainer&&(m.list=i(m.listContainer,m.listClass,!0),m.parse=n(672)(m),m.templater=n(939)(m),m.search=n(647)(m),m.filter=n(249)(m),m.sort=n(343)(m),m.fuzzySearch=n(844)(m,t.fuzzySearch),this.handlers(),this.items(),this.pagination(),m.update())},handlers:function(){for(var e in m.handlers)m[e]&&m.handlers.hasOwnProperty(e)&&m.on(e,m[e])},items:function(){m.parse(m.list),void 0!==p&&m.add(p)},pagination:function(){if(void 0!==t.pagination){!0===t.pagination&&(t.pagination=[{}]),void 0===t.pagination[0]&&(t.pagination=[t.pagination]);for(var e=0,n=t.pagination.length;e<n;e++)v(t.pagination[e])}}},this.reIndex=function(){m.items=[],m.visibleItems=[],m.matchingItems=[],m.searched=!1,m.filtered=!1,m.parse(m.list)},this.toJSON=function(){for(var e=[],t=0,n=m.items.length;t<n;t++)e.push(m.items[t].values());return e},this.add=function(e,t){if(0!==e.length){if(!t){var n=[],r=!1;void 0===e[0]&&(e=[e]);for(var i=0,o=e.length;i<o;i++){var a;r=m.items.length>m.page,a=new h(e[i],void 0,r),m.items.push(a),n.push(a)}return m.update(),n}g(e.slice(0),t)}},this.show=function(e,t){return this.i=e,this.page=t,m.update(),m},this.remove=function(e,t,n){for(var r=0,i=0,o=m.items.length;i<o;i++)m.items[i].values()[e]==t&&(m.templater.remove(m.items[i],n),m.items.splice(i,1),o--,i--,r++);return m.update(),r},this.get=function(e,t){for(var n=[],r=0,i=m.items.length;r<i;r++){var o=m.items[r];o.values()[e]==t&&n.push(o)}return n},this.size=function(){return m.items.length},this.clear=function(){return m.templater.clear(),m.items=[],m},this.on=function(e,t){return m.handlers[e].push(t),m},this.off=function(e,t){var n=m.handlers[e],r=a(n,t);return r>-1&&n.splice(r,1),m},this.trigger=function(e){for(var t=m.handlers[e].length;t--;)m.handlers[e][t](m);return m},this.reset={filter:function(){for(var e=m.items,t=e.length;t--;)e[t].filtered=!1;return m},search:function(){for(var e=m.items,t=e.length;t--;)e[t].found=!1;return m}},this.update=function(){var e=m.items,t=e.length;m.visibleItems=[],m.matchingItems=[],m.templater.clear();for(var n=0;n<t;n++)e[n].matching()&&m.matchingItems.length+1>=m.i&&m.visibleItems.length<m.page?(e[n].show(),m.visibleItems.push(e[n]),m.matchingItems.push(e[n])):e[n].matching()?(m.matchingItems.push(e[n]),e[n].hide()):e[n].hide();return m.trigger("updated"),m},f.start()}},813:e=>{"use strict";var t,n,r=0;function i(e){return e>=48&&e<=57}function o(e,t){for(var o=(e+="").length,a=(t+="").length,s=0,l=0;s<o&&l<a;){var c=e.charCodeAt(s),u=t.charCodeAt(l);if(i(c)){if(!i(u))return c-u;for(var d=s,p=l;48===c&&++d<o;)c=e.charCodeAt(d);for(;48===u&&++p<a;)u=t.charCodeAt(p);for(var f=d,m=p;f<o&&i(e.charCodeAt(f));)++f;for(;m<a&&i(t.charCodeAt(m));)++m;var h=f-d-m+p;if(h)return h;for(;d<f;)if(h=e.charCodeAt(d++)-t.charCodeAt(p++))return h;s=f,l=m}else{if(c!==u)return c<r&&u<r&&-1!==n[c]&&-1!==n[u]?n[c]-n[u]:c-u;++s,++l}}return s>=o&&l<a&&o>=a?-1:l>=a&&s<o&&a>=o?1:o-a}o.caseInsensitive=o.i=function(e,t){return o((""+e).toLowerCase(),(""+t).toLowerCase())},Object.defineProperties(o,{alphabet:{get:function(){return t},set:function(e){n=[];var i=0;if(t=e)for(;i<t.length;i++)n[t.charCodeAt(i)]=i;for(r=n.length,i=0;i<r;i++)void 0===n[i]&&(n[i]=-1)}}}),e.exports=o},844:(e,t,n)=>{n(981);var r=n(332),i=n(433),o=n(340),a=n(378),s=n(481);e.exports=function(e,t){t=i({location:0,distance:100,threshold:.4,multiSearch:!0,searchClass:"fuzzy-search"},t=t||{});var n={search:function(r,i){for(var o=t.multiSearch?r.replace(/ +$/,"").split(/ +/):[r],a=0,s=e.items.length;a<s;a++)n.item(e.items[a],i,o)},item:function(e,t,r){for(var i=!0,o=0;o<r.length;o++){for(var a=!1,s=0,l=t.length;s<l;s++)n.values(e.values(),t[s],r[o])&&(a=!0);a||(i=!1)}e.found=i},values:function(e,n,r){if(e.hasOwnProperty(n)){var i=o(e[n]).toLowerCase();if(s(i,r,t))return!0}return!1}};return r.bind(a(e.listContainer,t.searchClass),"keyup",e.utils.events.debounce(function(t){var r=t.target||t.srcElement;e.search(r.value,n.search)},e.searchDelay)),function(t,r){e.search(t,r,n.search)}}},859:e=>{var t=[].indexOf;e.exports=function(e,n){if(t)return e.indexOf(n);for(var r=0,i=e.length;r<i;++r)if(e[r]===n)return r;return-1}},939:e=>{var t=function(e){var t,n=this,r=function(e){if("string"==typeof e){if(/<tr[\s>]/g.exec(e)){var t=document.createElement("tbody");return t.innerHTML=e,t.firstElementChild}if(-1!==e.indexOf("<")){var n=document.createElement("div");return n.innerHTML=e,n.firstElementChild}}},i=function(t,n,r){var i=void 0,o=function(t){for(var n=0,r=e.valueNames.length;n<r;n++){var i=e.valueNames[n];if(i.data){for(var o=i.data,a=0,s=o.length;a<s;a++)if(o[a]===t)return{data:t}}else{if(i.attr&&i.name&&i.name==t)return i;if(i===t)return t}}}(n);o&&(o.data?t.elm.setAttribute("data-"+o.data,r):o.attr&&o.name?(i=e.utils.getByClass(t.elm,o.name,!0))&&i.setAttribute(o.attr,r):(i=e.utils.getByClass(t.elm,o,!0))&&(i.innerHTML=r))};this.get=function(t,r){n.create(t);for(var i={},o=0,a=r.length;o<a;o++){var s=void 0,l=r[o];if(l.data)for(var c=0,u=l.data.length;c<u;c++)i[l.data[c]]=e.utils.getAttribute(t.elm,"data-"+l.data[c]);else l.attr&&l.name?(s=e.utils.getByClass(t.elm,l.name,!0),i[l.name]=s?e.utils.getAttribute(s,l.attr):""):(s=e.utils.getByClass(t.elm,l,!0),i[l]=s?s.innerHTML:"")}return i},this.set=function(e,t){if(!n.create(e))for(var r in t)t.hasOwnProperty(r)&&i(e,r,t[r])},this.create=function(e){return void 0===e.elm&&(e.elm=t(e.values()),n.set(e,e.values()),!0)},this.remove=function(t){t.elm.parentNode===e.list&&e.list.removeChild(t.elm)},this.show=function(t){n.create(t),e.list.appendChild(t.elm)},this.hide=function(t){void 0!==t.elm&&t.elm.parentNode===e.list&&e.list.removeChild(t.elm)},this.clear=function(){if(e.list.hasChildNodes())for(;e.list.childNodes.length>=1;)e.list.removeChild(e.list.firstChild)},function(){var n;if("function"!=typeof e.item){if(!(n="string"==typeof e.item?-1===e.item.indexOf("<")?document.getElementById(e.item):r(e.item):function(){for(var t=e.list.childNodes,n=0,r=t.length;n<r;n++)if(void 0===t[n].data)return t[n].cloneNode(!0)}()))throw new Error("The list needs to have at least one item on init otherwise you'll have to add a template.");n=function(t,n){var r=t.cloneNode(!0);r.removeAttribute("id");for(var i=0,o=n.length;i<o;i++){var a=void 0,s=n[i];if(s.data)for(var l=0,c=s.data.length;l<c;l++)r.setAttribute("data-"+s.data[l],"");else s.attr&&s.name?(a=e.utils.getByClass(r,s.name,!0))&&a.setAttribute(s.attr,""):(a=e.utils.getByClass(r,s,!0))&&(a.innerHTML="")}return r}(n,e.valueNames),t=function(){return n.cloneNode(!0)}}else t=function(t){var n=e.item(t);return r(n)}}()};e.exports=function(e){return new t(e)}},981:(e,t,n)=>{var r=n(859),i=/\s+/;function o(e){if(!e||!e.nodeType)throw new Error("A DOM element reference is required");this.el=e,this.list=e.classList}Object.prototype.toString,e.exports=function(e){return new o(e)},o.prototype.add=function(e){if(this.list)return this.list.add(e),this;var t=this.array();return~r(t,e)||t.push(e),this.el.className=t.join(" "),this},o.prototype.remove=function(e){if(this.list)return this.list.remove(e),this;var t=this.array(),n=r(t,e);return~n&&t.splice(n,1),this.el.className=t.join(" "),this},o.prototype.toggle=function(e,t){return this.list?(void 0!==t?t!==this.list.toggle(e,t)&&this.list.toggle(e):this.list.toggle(e),this):(void 0!==t?t?this.add(e):this.remove(e):this.has(e)?this.remove(e):this.add(e),this)},o.prototype.array=function(){var e=(this.el.getAttribute("class")||"").replace(/^\s+|\s+$/g,"").split(i);return""===e[0]&&e.shift(),e},o.prototype.has=o.prototype.contains=function(e){return this.list?this.list.contains(e):!!~r(this.array(),e)}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.i18n,t=window.wp.data,r=window.wp.plugins,i=window.wp.element,o=window.wp.blocks,a=window.wp.components,s=window.wp.blockEditor,l=window.wp.notices,c=window.wp.apiFetch;var u=n.n(c);const d=window.wp.url,p=window.wp.coreData,f=(e,n)=>(0,t.useSelect)(t=>t(p.store).canUser(e,n),[e,n]),m=()=>f("update","settings"),h=window.lodash,g={edit:(0,e.__)("Edit","content-blocks-builder"),editItem:(0,e.__)("Edit %s","content-blocks-builder"),save:(0,e.__)("Save","content-blocks-builder"),cancel:(0,e.__)("Cancel","content-blocks-builder"),delete:(0,e.__)("Delete","content-blocks-builder"),closeModal:(0,e.__)("Close modal","content-blocks-builder"),name:(0,e.__)("Name","content-blocks-builder"),label:(0,e.__)("Label","content-blocks-builder"),block:(0,e.__)("block","content-blocks-builder"),variation:(0,e.__)("variation","content-blocks-builder"),defaultVariation:(0,e.__)("default variation","content-blocks-builder"),pattern:(0,e.__)("pattern","content-blocks-builder"),blocks:(0,e.__)("Blocks","content-blocks-builder"),variations:(0,e.__)("Variations","content-blocks-builder"),patterns:(0,e.__)("Patterns","content-blocks-builder")},v=window.ReactJSXRuntime;function b({modalTitle:e,title:t,titleHelp:n,setIsModalOpen:r,onSubmit:o=h.noop,onCancel:s=h.noop,className:l}){const[c,u]=(0,i.useState)(t),d=()=>{r(!1),u(""),s()};return(0,v.jsx)(a.Modal,{title:e,closeLabel:g.closeModal,onRequestClose:()=>d(),overlayClassName:"reusable-blocks-menu-items__convert-modal",className:l,children:(0,v.jsxs)("form",{onSubmit:e=>{e.preventDefault(),o(c),d()},children:[(0,v.jsx)(a.TextControl,{label:g.name,value:c,onChange:u,help:n,className:"title-input"}),(0,v.jsxs)(a.Flex,{className:"reusable-blocks-menu-items__convert-modal-actions",justify:"flex-end",children:[(0,v.jsx)(a.FlexItem,{children:(0,v.jsx)(a.Button,{variant:"secondary",onClick:()=>d(),children:g.cancel})}),(0,v.jsx)(a.FlexItem,{children:(0,v.jsx)(a.Button,{variant:"primary",type:"submit",disabled:!c,children:g.save})})]})]})})}(0,r.registerPlugin)("boldblocks-create-block-pattern",{render:()=>{const{getBlocksByClientId:n,getBlockName:r}=(0,t.useSelect)(e=>e(s.store),[]),{createSuccessNotice:c}=(0,t.useDispatch)(l.store),[p,m]=(0,i.useState)({isModalOpen:!1,clientIds:[]}),{isModalOpen:h,clientIds:y}=p;if(!f("update","settings"))return null;const x=(0,e.__)("Create block pattern","content-blocks-builder");return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(s.BlockSettingsMenuControls,{children:({selectedClientIds:e})=>e?.length>0&&((e,t)=>{var n;if(!e?.length)return!1;const r=t(e[0]),i=(0,o.getBlockSupport)(r,"boldblocks"),a=i&&null!==(n=i.layoutType)&&void 0!==n?n:"";return!["gridItem","carouselItem","accordionItem","vstackItem"].includes(a)})(e,r)?(0,v.jsx)(a.MenuItem,{label:x,icon:"plus-alt2",onClick:()=>m({isModalOpen:!0,clientIds:e}),children:x}):null}),h&&(0,v.jsx)(b,{modalTitle:x,title:(0,e.__)("CBB - A new pattern","content-blocks-builder"),titleHelp:(0,e.__)("You could name your pattern with a prefix that indicates it is a white label, such as ‘Awesome Project - Hero’.","content-blocks-builder"),setIsModalOpen:e=>m({...p,isModalOpen:e}),onSubmit:t=>{(({title:t,clientIds:r})=>{const i=n(r),a=(0,o.serialize)(i);u()({path:"wp/v2/boldblocks-patterns",method:"POST",data:{title:t,content:a,status:"publish"}}).then(t=>{var n;c("The new pattern has been created!",{type:"snackbar",actions:[{label:(0,e.sprintf)(g.editItem,g.pattern),url:(n=t.id,(0,d.addQueryArgs)(`post.php?post=${n}&action=edit`))}]})})})({title:t,clientIds:y})},className:"cbb-block-modal"})]})}});const y=window.wp.editor,x=window.wp.hooks,w="boldblocks_pattern",_=({href:t,label:n=(0,e.__)("Learn more","content-blocks-builder")})=>(0,v.jsx)(a.ExternalLink,{href:t,children:n});function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},k.apply(null,arguments)}const C=window.React;var S=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(e){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),this.tags=[],this.ctr=0},e}(),A=Math.abs,T=String.fromCharCode,E=Object.assign;function N(e){return e.trim()}function O(e,t,n){return e.replace(t,n)}function I(e,t){return e.indexOf(t)}function L(e,t){return 0|e.charCodeAt(t)}function M(e,t,n){return e.slice(t,n)}function R(e){return e.length}function D(e){return e.length}function P(e,t){return t.push(e),e}var z=1,j=1,H=0,F=0,B=0,U="";function $(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:z,column:j,length:a,return:""}}function G(e,t){return E($("",null,null,"",null,null,0),e,{length:-e.length},t)}function W(){return B=F>0?L(U,--F):0,j--,10===B&&(j=1,z--),B}function q(){return B=F<H?L(U,F++):0,j++,10===B&&(j=1,z++),B}function V(){return L(U,F)}function Y(){return F}function X(e,t){return M(U,e,t)}function Z(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function K(e){return z=j=1,H=R(U=e),F=0,[]}function J(e){return U="",e}function Q(e){return N(X(F-1,ne(91===e?e+2:40===e?e+1:e)))}function ee(e){for(;(B=V())&&B<33;)q();return Z(e)>2||Z(B)>3?"":" "}function te(e,t){for(;--t&&q()&&!(B<48||B>102||B>57&&B<65||B>70&&B<97););return X(e,Y()+(t<6&&32==V()&&32==q()))}function ne(e){for(;q();)switch(B){case e:return F;case 34:case 39:34!==e&&39!==e&&ne(B);break;case 40:41===e&&ne(e);break;case 92:q()}return F}function re(e,t){for(;q()&&e+B!==57&&(e+B!==84||47!==V()););return"/*"+X(t,F-1)+"*"+T(47===e?e:q())}function ie(e){for(;!Z(V());)q();return X(e,F)}var oe="-ms-",ae="-moz-",se="-webkit-",le="comm",ce="rule",ue="decl",de="@keyframes";function pe(e,t){for(var n="",r=D(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function fe(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case ue:return e.return=e.return||e.value;case le:return"";case de:return e.return=e.value+"{"+pe(e.children,r)+"}";case ce:e.value=e.props.join(",")}return R(n=pe(e.children,r))?e.return=e.value+"{"+n+"}":""}function me(e){return J(he("",null,null,null,[""],e=K(e),0,[0],e))}function he(e,t,n,r,i,o,a,s,l){for(var c=0,u=0,d=a,p=0,f=0,m=0,h=1,g=1,v=1,b=0,y="",x=i,w=o,_=r,k=y;g;)switch(m=b,b=q()){case 40:if(108!=m&&58==L(k,d-1)){-1!=I(k+=O(Q(b),"&","&\f"),"&\f")&&(v=-1);break}case 34:case 39:case 91:k+=Q(b);break;case 9:case 10:case 13:case 32:k+=ee(m);break;case 92:k+=te(Y()-1,7);continue;case 47:switch(V()){case 42:case 47:P(ve(re(q(),Y()),t,n),l);break;default:k+="/"}break;case 123*h:s[c++]=R(k)*v;case 125*h:case 59:case 0:switch(b){case 0:case 125:g=0;case 59+u:-1==v&&(k=O(k,/\f/g,"")),f>0&&R(k)-d&&P(f>32?be(k+";",r,n,d-1):be(O(k," ","")+";",r,n,d-2),l);break;case 59:k+=";";default:if(P(_=ge(k,t,n,c,u,i,s,y,x=[],w=[],d),o),123===b)if(0===u)he(k,t,_,_,x,o,d,s,w);else switch(99===p&&110===L(k,3)?100:p){case 100:case 108:case 109:case 115:he(e,_,_,r&&P(ge(e,_,_,0,0,i,s,y,i,x=[],d),w),i,w,d,s,r?x:w);break;default:he(k,_,_,_,[""],w,0,s,w)}}c=u=f=0,h=v=1,y=k="",d=a;break;case 58:d=1+R(k),f=m;default:if(h<1)if(123==b)--h;else if(125==b&&0==h++&&125==W())continue;switch(k+=T(b),b*h){case 38:v=u>0?1:(k+="\f",-1);break;case 44:s[c++]=(R(k)-1)*v,v=1;break;case 64:45===V()&&(k+=Q(q())),p=V(),u=d=R(y=k+=ie(Y())),b++;break;case 45:45===m&&2==R(k)&&(h=0)}}return o}function ge(e,t,n,r,i,o,a,s,l,c,u){for(var d=i-1,p=0===i?o:[""],f=D(p),m=0,h=0,g=0;m<r;++m)for(var v=0,b=M(e,d+1,d=A(h=a[m])),y=e;v<f;++v)(y=N(h>0?p[v]+" "+b:O(b,/&\f/g,p[v])))&&(l[g++]=y);return $(e,t,n,0===i?ce:s,l,c,u)}function ve(e,t,n){return $(e,t,n,le,T(B),M(e,2,-2),0)}function be(e,t,n,r){return $(e,t,n,ue,M(e,0,r),M(e,r+1,-1),r)}var ye=function(e,t,n){for(var r=0,i=0;r=i,i=V(),38===r&&12===i&&(t[n]=1),!Z(i);)q();return X(e,F)},xe=new WeakMap,we=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||xe.get(n))&&!r){xe.set(e,!0);for(var i=[],o=function(e,t){return J(function(e,t){var n=-1,r=44;do{switch(Z(r)){case 0:38===r&&12===V()&&(t[n]=1),e[n]+=ye(F-1,t,n);break;case 2:e[n]+=Q(r);break;case 4:if(44===r){e[++n]=58===V()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=T(r)}}while(r=q());return e}(K(e),t))}(t,i),a=n.props,s=0,l=0;s<o.length;s++)for(var c=0;c<a.length;c++,l++)e.props[l]=i[s]?o[s].replace(/&\f/g,a[c]):a[c]+" "+o[s]}}},_e=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function ke(e,t){switch(function(e,t){return 45^L(e,0)?(((t<<2^L(e,0))<<2^L(e,1))<<2^L(e,2))<<2^L(e,3):0}(e,t)){case 5103:return se+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return se+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return se+e+ae+e+oe+e+e;case 6828:case 4268:return se+e+oe+e+e;case 6165:return se+e+oe+"flex-"+e+e;case 5187:return se+e+O(e,/(\w+).+(:[^]+)/,se+"box-$1$2"+oe+"flex-$1$2")+e;case 5443:return se+e+oe+"flex-item-"+O(e,/flex-|-self/,"")+e;case 4675:return se+e+oe+"flex-line-pack"+O(e,/align-content|flex-|-self/,"")+e;case 5548:return se+e+oe+O(e,"shrink","negative")+e;case 5292:return se+e+oe+O(e,"basis","preferred-size")+e;case 6060:return se+"box-"+O(e,"-grow","")+se+e+oe+O(e,"grow","positive")+e;case 4554:return se+O(e,/([^-])(transform)/g,"$1"+se+"$2")+e;case 6187:return O(O(O(e,/(zoom-|grab)/,se+"$1"),/(image-set)/,se+"$1"),e,"")+e;case 5495:case 3959:return O(e,/(image-set\([^]*)/,se+"$1$`$1");case 4968:return O(O(e,/(.+:)(flex-)?(.*)/,se+"box-pack:$3"+oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+se+e+e;case 4095:case 3583:case 4068:case 2532:return O(e,/(.+)-inline(.+)/,se+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(R(e)-1-t>6)switch(L(e,t+1)){case 109:if(45!==L(e,t+4))break;case 102:return O(e,/(.+:)(.+)-([^]+)/,"$1"+se+"$2-$3$1"+ae+(108==L(e,t+3)?"$3":"$2-$3"))+e;case 115:return~I(e,"stretch")?ke(O(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==L(e,t+1))break;case 6444:switch(L(e,R(e)-3-(~I(e,"!important")&&10))){case 107:return O(e,":",":"+se)+e;case 101:return O(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+se+(45===L(e,14)?"inline-":"")+"box$3$1"+se+"$2$3$1"+oe+"$2box$3")+e}break;case 5936:switch(L(e,t+11)){case 114:return se+e+oe+O(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return se+e+oe+O(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return se+e+oe+O(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return se+e+oe+e+e}return e}var Ce=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ue:e.return=ke(e.value,e.length);break;case de:return pe([G(e,{value:O(e.value,"@","@"+se)})],r);case ce:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,function(t){switch(function(e){return(e=/(::plac\w+|:read-\w+)/.exec(e))?e[0]:e}(t)){case":read-only":case":read-write":return pe([G(e,{props:[O(t,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return pe([G(e,{props:[O(t,/:(plac\w+)/,":"+se+"input-$1")]}),G(e,{props:[O(t,/:(plac\w+)/,":-moz-$1")]}),G(e,{props:[O(t,/:(plac\w+)/,oe+"input-$1")]})],r)}return""})}}],Se=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))})}var r,i,o=e.stylisPlugins||Ce,a={},s=[];r=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(e){for(var t=e.getAttribute("data-emotion").split(" "),n=1;n<t.length;n++)a[t[n]]=!0;s.push(e)});var l,c,u,d,p=[fe,(d=function(e){l.insert(e)},function(e){e.root||(e=e.return)&&d(e)})],f=(c=[we,_e].concat(o,p),u=D(c),function(e,t,n,r){for(var i="",o=0;o<u;o++)i+=c[o](e,t,n,r)||"";return i});i=function(e,t,n,r){l=n,pe(me(e?e+"{"+t.styles+"}":t.styles),f),r&&(m.inserted[t.name]=!0)};var m={key:t,sheet:new S({key:t,container:r,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:a,registered:{},insert:i};return m.sheet.hydrate(s),m},Ae={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Te(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}var Ee=/[A-Z]|^ms/g,Ne=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Oe=function(e){return 45===e.charCodeAt(1)},Ie=function(e){return null!=e&&"boolean"!=typeof e},Le=Te(function(e){return Oe(e)?e:e.replace(Ee,"-$&").toLowerCase()}),Me=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(Ne,function(e,t,n){return De={name:t,styles:n,next:De},t})}return 1===Ae[e]||Oe(e)||"number"!=typeof t||0===t?t:t+"px"};function Re(e,t,n){if(null==n)return"";var r=n;if(void 0!==r.__emotion_styles)return r;switch(typeof n){case"boolean":return"";case"object":var i=n;if(1===i.anim)return De={name:i.name,styles:i.styles,next:De},i.name;var o=n;if(void 0!==o.styles){var a=o.next;if(void 0!==a)for(;void 0!==a;)De={name:a.name,styles:a.styles,next:De},a=a.next;return o.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Re(e,t,n[i])+";";else for(var o in n){var a=n[o];if("object"!=typeof a){var s=a;null!=t&&void 0!==t[s]?r+=o+"{"+t[s]+"}":Ie(s)&&(r+=Le(o)+":"+Me(o,s)+";")}else if(!Array.isArray(a)||"string"!=typeof a[0]||null!=t&&void 0!==t[a[0]]){var l=Re(e,t,a);switch(o){case"animation":case"animationName":r+=Le(o)+":"+l+";";break;default:r+=o+"{"+l+"}"}}else for(var c=0;c<a.length;c++)Ie(a[c])&&(r+=Le(o)+":"+Me(o,a[c])+";")}return r}(e,t,n);case"function":if(void 0!==e){var s=De,l=n(e);return De=s,Re(e,t,l)}}var c=n;if(null==t)return c;var u=t[c];return void 0!==u?u:c}var De,Pe=/label:\s*([^\s;{]+)\s*(;|$)/g,ze=!!C.useInsertionEffect&&C.useInsertionEffect,je=ze||function(e){return e()},He=(ze||C.useLayoutEffect,C.createContext("undefined"!=typeof HTMLElement?Se({key:"css"}):null)),Fe=(He.Provider,function(e){return(0,C.forwardRef)(function(t,n){var r=(0,C.useContext)(He);return e(t,r,n)})}),Be=C.createContext({}),Ue=function(e,t,n){var r=e.key+"-"+t.name;!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles)},$e=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Ge=Te(function(e){return $e.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}),We=function(e){return"theme"!==e},qe=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?Ge:We},Ve=function(e,t,n){var r;if(t){var i=t.shouldForwardProp;r=e.__emotion_forwardProp&&i?function(t){return e.__emotion_forwardProp(t)&&i(t)}:i}return"function"!=typeof r&&n&&(r=e.__emotion_forwardProp),r},Ye=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return Ue(t,n,r),je(function(){return function(e,t,n){Ue(e,t,n);var r=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var i=t;do{e.insert(t===i?"."+r:"",i,e.sheet,!0),i=i.next}while(void 0!==i)}}(t,n,r)}),null},Xe=function e(t,n){var r,i,o=t.__emotion_real===t,a=o&&t.__emotion_base||t;void 0!==n&&(r=n.label,i=n.target);var s=Ve(t,n,o),l=s||qe(a),c=!l("as");return function(){var u=arguments,d=o&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==r&&d.push("label:"+r+";"),null==u[0]||void 0===u[0].raw)d.push.apply(d,u);else{var p=u[0];d.push(p[0]);for(var f=u.length,m=1;m<f;m++)d.push(u[m],p[m])}var h=Fe(function(e,t,n){var r,o,u,p,f=c&&e.as||a,m="",h=[],g=e;if(null==e.theme){for(var v in g={},e)g[v]=e[v];g.theme=C.useContext(Be)}"string"==typeof e.className?(r=t.registered,o=h,u=e.className,p="",u.split(" ").forEach(function(e){void 0!==r[e]?o.push(r[e]+";"):e&&(p+=e+" ")}),m=p):null!=e.className&&(m=e.className+" ");var b=function(e,t,n){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,i="";De=void 0;var o=e[0];null==o||void 0===o.raw?(r=!1,i+=Re(n,t,o)):i+=o[0];for(var a=1;a<e.length;a++)i+=Re(n,t,e[a]),r&&(i+=o[a]);Pe.lastIndex=0;for(var s,l="";null!==(s=Pe.exec(i));)l+="-"+s[1];var c=function(e){for(var t,n=0,r=0,i=e.length;i>=4;++r,i-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(i){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)}(i)+l;return{name:c,styles:i,next:De}}(d.concat(h),t.registered,g);m+=t.key+"-"+b.name,void 0!==i&&(m+=" "+i);var y=c&&void 0===s?qe(f):l,x={};for(var w in e)c&&"as"===w||y(w)&&(x[w]=e[w]);return x.className=m,n&&(x.ref=n),C.createElement(C.Fragment,null,C.createElement(Ye,{cache:t,serialized:b,isStringTag:"string"==typeof f}),C.createElement(f,x))});return h.displayName=void 0!==r?r:"Styled("+("string"==typeof a?a:a.displayName||a.name||"Component")+")",h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=a,h.__emotion_styles=d,h.__emotion_forwardProp=s,Object.defineProperty(h,"toString",{value:function(){return"."+i}}),h.withComponent=function(t,r){return e(t,k({},n,r,{shouldForwardProp:Ve(h,r,!0)})).apply(void 0,d)},h}}.bind(null);["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach(function(e){Xe[e]=Xe(e)}),n(252);const{entries:Ze,setPrototypeOf:Ke,isFrozen:Je,getPrototypeOf:Qe,getOwnPropertyDescriptor:et}=Object;let{freeze:tt,seal:nt,create:rt}=Object,{apply:it,construct:ot}="undefined"!=typeof Reflect&&Reflect;tt||(tt=function(e){return e}),nt||(nt=function(e){return e}),it||(it=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return e.apply(t,r)}),ot||(ot=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new e(...n)});const at=wt(Array.prototype.forEach),st=wt(Array.prototype.lastIndexOf),lt=wt(Array.prototype.pop),ct=wt(Array.prototype.push),ut=wt(Array.prototype.splice),dt=wt(String.prototype.toLowerCase),pt=wt(String.prototype.toString),ft=wt(String.prototype.match),mt=wt(String.prototype.replace),ht=wt(String.prototype.indexOf),gt=wt(String.prototype.trim),vt=wt(Object.prototype.hasOwnProperty),bt=wt(RegExp.prototype.test),yt=(xt=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return ot(xt,t)});var xt;function wt(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return it(e,t,r)}}function _t(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:dt;Ke&&Ke(e,null);let r=t.length;for(;r--;){let i=t[r];if("string"==typeof i){const e=n(i);e!==i&&(Je(t)||(t[r]=e),i=e)}e[i]=!0}return e}function kt(e){for(let t=0;t<e.length;t++)vt(e,t)||(e[t]=null);return e}function Ct(e){const t=rt(null);for(const[n,r]of Ze(e))vt(e,n)&&(Array.isArray(r)?t[n]=kt(r):r&&"object"==typeof r&&r.constructor===Object?t[n]=Ct(r):t[n]=r);return t}function St(e,t){for(;null!==e;){const n=et(e,t);if(n){if(n.get)return wt(n.get);if("function"==typeof n.value)return wt(n.value)}e=Qe(e)}return function(){return null}}const At=tt(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Tt=tt(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Et=tt(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Nt=tt(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Ot=tt(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),It=tt(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Lt=tt(["#text"]),Mt=tt(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Rt=tt(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Dt=tt(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Pt=tt(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),zt=nt(/\{\{[\w\W]*|[\w\W]*\}\}/gm),jt=nt(/<%[\w\W]*|[\w\W]*%>/gm),Ht=nt(/\$\{[\w\W]*/gm),Ft=nt(/^data-[\-\w.\u00B7-\uFFFF]+$/),Bt=nt(/^aria-[\-\w]+$/),Ut=nt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),$t=nt(/^(?:\w+script|data):/i),Gt=nt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Wt=nt(/^html$/i),qt=nt(/^[a-z][.\w]*(-[.\w]+)+$/i);var Vt=Object.freeze({__proto__:null,ARIA_ATTR:Bt,ATTR_WHITESPACE:Gt,CUSTOM_ELEMENT:qt,DATA_ATTR:Ft,DOCTYPE_NAME:Wt,ERB_EXPR:jt,IS_ALLOWED_URI:Ut,IS_SCRIPT_OR_DATA:$t,MUSTACHE_EXPR:zt,TMPLIT_EXPR:Ht});const Yt=function(){return"undefined"==typeof window?null:window};!function e(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Yt();const n=t=>e(t);if(n.version="3.3.0",n.removed=[],!t||!t.document||9!==t.document.nodeType||!t.Element)return n.isSupported=!1,n;let{document:r}=t;const i=r,o=i.currentScript,{DocumentFragment:a,HTMLTemplateElement:s,Node:l,Element:c,NodeFilter:u,NamedNodeMap:d=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:p,DOMParser:f,trustedTypes:m}=t,h=c.prototype,g=St(h,"cloneNode"),v=St(h,"remove"),b=St(h,"nextSibling"),y=St(h,"childNodes"),x=St(h,"parentNode");if("function"==typeof s){const e=r.createElement("template");e.content&&e.content.ownerDocument&&(r=e.content.ownerDocument)}let w,_="";const{implementation:k,createNodeIterator:C,createDocumentFragment:S,getElementsByTagName:A}=r,{importNode:T}=i;let E={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]};n.isSupported="function"==typeof Ze&&"function"==typeof x&&k&&void 0!==k.createHTMLDocument;const{MUSTACHE_EXPR:N,ERB_EXPR:O,TMPLIT_EXPR:I,DATA_ATTR:L,ARIA_ATTR:M,IS_SCRIPT_OR_DATA:R,ATTR_WHITESPACE:D,CUSTOM_ELEMENT:P}=Vt;let{IS_ALLOWED_URI:z}=Vt,j=null;const H=_t({},[...At,...Tt,...Et,...Ot,...Lt]);let F=null;const B=_t({},[...Mt,...Rt,...Dt,...Pt]);let U=Object.seal(rt(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),$=null,G=null;const W=Object.seal(rt(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let q=!0,V=!0,Y=!1,X=!0,Z=!1,K=!0,J=!1,Q=!1,ee=!1,te=!1,ne=!1,re=!1,ie=!0,oe=!1,ae=!0,se=!1,le={},ce=null;const ue=_t({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let de=null;const pe=_t({},["audio","video","img","source","image","track"]);let fe=null;const me=_t({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),he="http://www.w3.org/1998/Math/MathML",ge="http://www.w3.org/2000/svg",ve="http://www.w3.org/1999/xhtml";let be=ve,ye=!1,xe=null;const we=_t({},[he,ge,ve],pt);let _e=_t({},["mi","mo","mn","ms","mtext"]),ke=_t({},["annotation-xml"]);const Ce=_t({},["title","style","font","a","script"]);let Se=null;const Ae=["application/xhtml+xml","text/html"];let Te=null,Ee=null;const Ne=r.createElement("form"),Oe=function(e){return e instanceof RegExp||e instanceof Function},Ie=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!Ee||Ee!==e){if(e&&"object"==typeof e||(e={}),e=Ct(e),Se=-1===Ae.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,Te="application/xhtml+xml"===Se?pt:dt,j=vt(e,"ALLOWED_TAGS")?_t({},e.ALLOWED_TAGS,Te):H,F=vt(e,"ALLOWED_ATTR")?_t({},e.ALLOWED_ATTR,Te):B,xe=vt(e,"ALLOWED_NAMESPACES")?_t({},e.ALLOWED_NAMESPACES,pt):we,fe=vt(e,"ADD_URI_SAFE_ATTR")?_t(Ct(me),e.ADD_URI_SAFE_ATTR,Te):me,de=vt(e,"ADD_DATA_URI_TAGS")?_t(Ct(pe),e.ADD_DATA_URI_TAGS,Te):pe,ce=vt(e,"FORBID_CONTENTS")?_t({},e.FORBID_CONTENTS,Te):ue,$=vt(e,"FORBID_TAGS")?_t({},e.FORBID_TAGS,Te):Ct({}),G=vt(e,"FORBID_ATTR")?_t({},e.FORBID_ATTR,Te):Ct({}),le=!!vt(e,"USE_PROFILES")&&e.USE_PROFILES,q=!1!==e.ALLOW_ARIA_ATTR,V=!1!==e.ALLOW_DATA_ATTR,Y=e.ALLOW_UNKNOWN_PROTOCOLS||!1,X=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,Z=e.SAFE_FOR_TEMPLATES||!1,K=!1!==e.SAFE_FOR_XML,J=e.WHOLE_DOCUMENT||!1,te=e.RETURN_DOM||!1,ne=e.RETURN_DOM_FRAGMENT||!1,re=e.RETURN_TRUSTED_TYPE||!1,ee=e.FORCE_BODY||!1,ie=!1!==e.SANITIZE_DOM,oe=e.SANITIZE_NAMED_PROPS||!1,ae=!1!==e.KEEP_CONTENT,se=e.IN_PLACE||!1,z=e.ALLOWED_URI_REGEXP||Ut,be=e.NAMESPACE||ve,_e=e.MATHML_TEXT_INTEGRATION_POINTS||_e,ke=e.HTML_INTEGRATION_POINTS||ke,U=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&Oe(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(U.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&Oe(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(U.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(U.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Z&&(V=!1),ne&&(te=!0),le&&(j=_t({},Lt),F=[],!0===le.html&&(_t(j,At),_t(F,Mt)),!0===le.svg&&(_t(j,Tt),_t(F,Rt),_t(F,Pt)),!0===le.svgFilters&&(_t(j,Et),_t(F,Rt),_t(F,Pt)),!0===le.mathMl&&(_t(j,Ot),_t(F,Dt),_t(F,Pt))),e.ADD_TAGS&&("function"==typeof e.ADD_TAGS?W.tagCheck=e.ADD_TAGS:(j===H&&(j=Ct(j)),_t(j,e.ADD_TAGS,Te))),e.ADD_ATTR&&("function"==typeof e.ADD_ATTR?W.attributeCheck=e.ADD_ATTR:(F===B&&(F=Ct(F)),_t(F,e.ADD_ATTR,Te))),e.ADD_URI_SAFE_ATTR&&_t(fe,e.ADD_URI_SAFE_ATTR,Te),e.FORBID_CONTENTS&&(ce===ue&&(ce=Ct(ce)),_t(ce,e.FORBID_CONTENTS,Te)),ae&&(j["#text"]=!0),J&&_t(j,["html","head","body"]),j.table&&(_t(j,["tbody"]),delete $.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw yt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw yt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');w=e.TRUSTED_TYPES_POLICY,_=w.createHTML("")}else void 0===w&&(w=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let n=null;const r="data-tt-policy-suffix";t&&t.hasAttribute(r)&&(n=t.getAttribute(r));const i="dompurify"+(n?"#"+n:"");try{return e.createPolicy(i,{createHTML:e=>e,createScriptURL:e=>e})}catch(e){return console.warn("TrustedTypes policy "+i+" could not be created."),null}}(m,o)),null!==w&&"string"==typeof _&&(_=w.createHTML(""));tt&&tt(e),Ee=e}},Le=_t({},[...Tt,...Et,...Nt]),Me=_t({},[...Ot,...It]),Re=function(e){ct(n.removed,{element:e});try{x(e).removeChild(e)}catch(t){v(e)}},De=function(e,t){try{ct(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){ct(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e)if(te||ne)try{Re(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},Pe=function(e){let t=null,n=null;if(ee)e="<remove></remove>"+e;else{const t=ft(e,/^[\r\n\t ]+/);n=t&&t[0]}"application/xhtml+xml"===Se&&be===ve&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const i=w?w.createHTML(e):e;if(be===ve)try{t=(new f).parseFromString(i,Se)}catch(e){}if(!t||!t.documentElement){t=k.createDocument(be,"template",null);try{t.documentElement.innerHTML=ye?_:i}catch(e){}}const o=t.body||t.documentElement;return e&&n&&o.insertBefore(r.createTextNode(n),o.childNodes[0]||null),be===ve?A.call(t,J?"html":"body")[0]:J?t.documentElement:o},ze=function(e){return C.call(e.ownerDocument||e,e,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT|u.SHOW_PROCESSING_INSTRUCTION|u.SHOW_CDATA_SECTION,null)},je=function(e){return e instanceof p&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof d)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},He=function(e){return"function"==typeof l&&e instanceof l};function Fe(e,t,r){at(e,e=>{e.call(n,t,r,Ee)})}const Be=function(e){let t=null;if(Fe(E.beforeSanitizeElements,e,null),je(e))return Re(e),!0;const r=Te(e.nodeName);if(Fe(E.uponSanitizeElement,e,{tagName:r,allowedTags:j}),K&&e.hasChildNodes()&&!He(e.firstElementChild)&&bt(/<[/\w!]/g,e.innerHTML)&&bt(/<[/\w!]/g,e.textContent))return Re(e),!0;if(7===e.nodeType)return Re(e),!0;if(K&&8===e.nodeType&&bt(/<[/\w]/g,e.data))return Re(e),!0;if(!(W.tagCheck instanceof Function&&W.tagCheck(r))&&(!j[r]||$[r])){if(!$[r]&&$e(r)){if(U.tagNameCheck instanceof RegExp&&bt(U.tagNameCheck,r))return!1;if(U.tagNameCheck instanceof Function&&U.tagNameCheck(r))return!1}if(ae&&!ce[r]){const t=x(e)||e.parentNode,n=y(e)||e.childNodes;if(n&&t)for(let r=n.length-1;r>=0;--r){const i=g(n[r],!0);i.__removalCount=(e.__removalCount||0)+1,t.insertBefore(i,b(e))}}return Re(e),!0}return e instanceof c&&!function(e){let t=x(e);t&&t.tagName||(t={namespaceURI:be,tagName:"template"});const n=dt(e.tagName),r=dt(t.tagName);return!!xe[e.namespaceURI]&&(e.namespaceURI===ge?t.namespaceURI===ve?"svg"===n:t.namespaceURI===he?"svg"===n&&("annotation-xml"===r||_e[r]):Boolean(Le[n]):e.namespaceURI===he?t.namespaceURI===ve?"math"===n:t.namespaceURI===ge?"math"===n&&ke[r]:Boolean(Me[n]):e.namespaceURI===ve?!(t.namespaceURI===ge&&!ke[r])&&!(t.namespaceURI===he&&!_e[r])&&!Me[n]&&(Ce[n]||!Le[n]):!("application/xhtml+xml"!==Se||!xe[e.namespaceURI]))}(e)?(Re(e),!0):"noscript"!==r&&"noembed"!==r&&"noframes"!==r||!bt(/<\/no(script|embed|frames)/i,e.innerHTML)?(Z&&3===e.nodeType&&(t=e.textContent,at([N,O,I],e=>{t=mt(t,e," ")}),e.textContent!==t&&(ct(n.removed,{element:e.cloneNode()}),e.textContent=t)),Fe(E.afterSanitizeElements,e,null),!1):(Re(e),!0)},Ue=function(e,t,n){if(ie&&("id"===t||"name"===t)&&(n in r||n in Ne))return!1;if(V&&!G[t]&&bt(L,t));else if(q&&bt(M,t));else if(W.attributeCheck instanceof Function&&W.attributeCheck(t,e));else if(!F[t]||G[t]){if(!($e(e)&&(U.tagNameCheck instanceof RegExp&&bt(U.tagNameCheck,e)||U.tagNameCheck instanceof Function&&U.tagNameCheck(e))&&(U.attributeNameCheck instanceof RegExp&&bt(U.attributeNameCheck,t)||U.attributeNameCheck instanceof Function&&U.attributeNameCheck(t,e))||"is"===t&&U.allowCustomizedBuiltInElements&&(U.tagNameCheck instanceof RegExp&&bt(U.tagNameCheck,n)||U.tagNameCheck instanceof Function&&U.tagNameCheck(n))))return!1}else if(fe[t]);else if(bt(z,mt(n,D,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==ht(n,"data:")||!de[e])if(Y&&!bt(R,mt(n,D,"")));else if(n)return!1;return!0},$e=function(e){return"annotation-xml"!==e&&ft(e,P)},Ge=function(e){Fe(E.beforeSanitizeAttributes,e,null);const{attributes:t}=e;if(!t||je(e))return;const r={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:F,forceKeepAttr:void 0};let i=t.length;for(;i--;){const o=t[i],{name:a,namespaceURI:s,value:l}=o,c=Te(a),u=l;let d="value"===a?u:gt(u);if(r.attrName=c,r.attrValue=d,r.keepAttr=!0,r.forceKeepAttr=void 0,Fe(E.uponSanitizeAttribute,e,r),d=r.attrValue,!oe||"id"!==c&&"name"!==c||(De(a,e),d="user-content-"+d),K&&bt(/((--!?|])>)|<\/(style|title|textarea)/i,d)){De(a,e);continue}if("attributename"===c&&ft(d,"href")){De(a,e);continue}if(r.forceKeepAttr)continue;if(!r.keepAttr){De(a,e);continue}if(!X&&bt(/\/>/i,d)){De(a,e);continue}Z&&at([N,O,I],e=>{d=mt(d,e," ")});const p=Te(e.nodeName);if(Ue(p,c,d)){if(w&&"object"==typeof m&&"function"==typeof m.getAttributeType)if(s);else switch(m.getAttributeType(p,c)){case"TrustedHTML":d=w.createHTML(d);break;case"TrustedScriptURL":d=w.createScriptURL(d)}if(d!==u)try{s?e.setAttributeNS(s,a,d):e.setAttribute(a,d),je(e)?Re(e):lt(n.removed)}catch(t){De(a,e)}}else De(a,e)}Fe(E.afterSanitizeAttributes,e,null)},We=function e(t){let n=null;const r=ze(t);for(Fe(E.beforeSanitizeShadowDOM,t,null);n=r.nextNode();)Fe(E.uponSanitizeShadowNode,n,null),Be(n),Ge(n),n.content instanceof a&&e(n.content);Fe(E.afterSanitizeShadowDOM,t,null)};return n.sanitize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=null,o=null,s=null,c=null;if(ye=!e,ye&&(e="\x3c!--\x3e"),"string"!=typeof e&&!He(e)){if("function"!=typeof e.toString)throw yt("toString is not a function");if("string"!=typeof(e=e.toString()))throw yt("dirty is not a string, aborting")}if(!n.isSupported)return e;if(Q||Ie(t),n.removed=[],"string"==typeof e&&(se=!1),se){if(e.nodeName){const t=Te(e.nodeName);if(!j[t]||$[t])throw yt("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof l)r=Pe("\x3c!----\x3e"),o=r.ownerDocument.importNode(e,!0),1===o.nodeType&&"BODY"===o.nodeName||"HTML"===o.nodeName?r=o:r.appendChild(o);else{if(!te&&!Z&&!J&&-1===e.indexOf("<"))return w&&re?w.createHTML(e):e;if(r=Pe(e),!r)return te?null:re?_:""}r&&ee&&Re(r.firstChild);const u=ze(se?e:r);for(;s=u.nextNode();)Be(s),Ge(s),s.content instanceof a&&We(s.content);if(se)return e;if(te){if(ne)for(c=S.call(r.ownerDocument);r.firstChild;)c.appendChild(r.firstChild);else c=r;return(F.shadowroot||F.shadowrootmode)&&(c=T.call(i,c,!0)),c}let d=J?r.outerHTML:r.innerHTML;return J&&j["!doctype"]&&r.ownerDocument&&r.ownerDocument.doctype&&r.ownerDocument.doctype.name&&bt(Wt,r.ownerDocument.doctype.name)&&(d="<!DOCTYPE "+r.ownerDocument.doctype.name+">\n"+d),Z&&at([N,O,I],e=>{d=mt(d,e," ")}),w&&re?w.createHTML(d):d},n.setConfig=function(){Ie(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),Q=!0},n.clearConfig=function(){Ee=null,Q=!1},n.isValidAttribute=function(e,t,n){Ee||Ie({});const r=Te(e),i=Te(t);return Ue(r,i,n)},n.addHook=function(e,t){"function"==typeof t&&ct(E[e],t)},n.removeHook=function(e,t){if(void 0!==t){const n=st(E[e],t);return-1===n?void 0:ut(E[e],n,1)[0]}return lt(E[e])},n.removeHooks=function(e){E[e]=[]},n.removeAllHooks=function(){E={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},n}();const Xt=window.wp.primitives;Xt.SVG,Xt.Path,Xt.SVG,Xt.Path,Xt.SVG,Xt.Path;const Zt="Mobile",Kt="Tablet",Jt="Desktop",Qt={},en=getComputedStyle(document.documentElement);Qt[Zt]=en.getPropertyValue("--wp--custom--breakpoint--sm")||"576px",Qt[Kt]=en.getPropertyValue("--wp--custom--breakpoint--md")||"768px",Qt[Jt]=en.getPropertyValue("--wp--custom--breakpoint--lg")||"1024px";const tn={};function nn(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=nn(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}Object.keys(Qt).map(e=>{tn[e]=e===Zt?"":`@media (min-width: ${Qt[e]})`}),(0,e.__)("Mobile","content-blocks-builder"),tn[Zt],(0,e.__)("Tablet","content-blocks-builder"),tn[Kt],(0,e.__)("Desktop","content-blocks-builder"),tn[Jt],Xe(a.BaseControl)`
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
`,Xe.div`
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
`,Xe(a.PanelBody)`
  margin-right: -16px;
  margin-left: -16px;
`;const rn=function(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=nn(e))&&(r&&(r+=" "),r+=t);return r},on=Xe.div`
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
`,an=Xe(a.Flex)`
  padding-bottom: 8px;

  .label-control {
    margin-bottom: 0 !important;
  }
`,sn=Xe(a.Flex)`
  flex-wrap: wrap;
  width: auto;
  gap: 4px;

  > * {
    flex: 1 0 auto;
    margin: 0 !important;
  }
`;var ln=(0,v.jsx)(Xt.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,v.jsx)(Xt.Path,{d:"M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"})}),cn=(0,v.jsx)(Xt.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,v.jsx)(Xt.Path,{d:"M17.031 4.703 15.576 4l-1.56 3H14v.03l-2.324 4.47H9.5V13h1.396l-1.502 2.889h-.95a3.694 3.694 0 0 1 0-7.389H10V7H8.444a5.194 5.194 0 1 0 0 10.389h.17L7.5 19.53l1.416.719L15.049 8.5h.507a3.694 3.694 0 0 1 0 7.39H14v1.5h1.556a5.194 5.194 0 0 0 .273-10.383l1.202-2.304Z"})});function un({isLinked:t,...n}){const r=t?(0,e.__)("Unlink Sides","content-blocks-builder"):(0,e.__)("Link Sides","content-blocks-builder");return(0,v.jsx)(a.Tooltip,{text:r,children:(0,v.jsx)("span",{children:(0,v.jsx)(a.Button,{...n,className:"component-group-control__linked-button",variant:t?"primary":"secondary",size:"small",icon:t?ln:cn,iconSize:16,"aria-label":r})})})}var dn=n(774),pn=n.n(dn);const fn=({values:e,fields:t})=>{const n=t.map(({name:t})=>{var n;return null!==(n=e[t])&&void 0!==n?n:void 0});return(r=n.filter(e=>e)).sort((e,t)=>(0,h.isObject)(e)?r.filter(t=>pn()(t,e)).length-r.filter(e=>pn()(e,t)).length:r.filter(t=>t===e).length-r.filter(e=>e===t).length).pop();var r},mn=({values:e,fields:t,renderControl:n,onChange:r,normalizeValue:o,...a})=>t.map(s=>{var l;const{name:c}=s;return(0,v.jsx)(i.Fragment,{children:n({value:null!==(l=e[c])&&void 0!==l?l:void 0,onChange:(u=c,t=>{t=o({side:u,value:t}),r({...e,[u]:t})}),fields:t,values:e,...s,...a})},`group-control-${c}`);var u}),hn=({values:e,fields:t,renderControl:n,renderAllControl:r=null,onChange:i,normalizeValue:o,...a})=>(r||(r=n),r({value:fn({values:e,fields:t}),fields:t,values:e,onChange:n=>{n=o({side:"all",value:n});let r={...e};t.forEach(({name:e})=>{r={...r,[e]:n}}),i(r)},...a})),gn=({label:e,fields:t=[],values:n={},renderLabel:r=h.noop,renderControl:o=h.noop,onChange:a=h.noop,normalizeValue:s=({side:e,value:t})=>t,isLinkedGroup:l=!0,getInitialLinkedState:c=h.noop,className:u,columns:d,hideHeader:p=!1,...f})=>{const m={fields:t,values:n,renderControl:o,onChange:a,normalizeValue:s,...f},[g,b]=l?function(e){const[t,n]=(0,i.useState)(e);return(0,i.useEffect)(()=>n(e),[e]),[t,n]}(c(n)):[!1,h.noop];return(0,v.jsxs)(on,{className:rn("group-control",u,{[`is-${d}-columns`]:d}),...f,children:[!p&&(0,v.jsxs)(an,{className:"group-control__header",children:[r({label:e,isLinkedGroup:l,...f}),l&&(0,v.jsx)(un,{onClick:()=>{b(!g)},isLinked:g})]}),(0,v.jsxs)(sn,{className:"group-control__body",children:[g&&(0,v.jsx)(hn,{...m}),!g&&(0,v.jsx)(mn,{...m})]})]})};Xe.fieldset`
  .components-range-control > .components-base-control__field {
    margin-bottom: 0;
  }
`,Xe(gn)`
  .group-control__body {
    > *:nth-of-type(3) {
      order: 2;
    }

    .components-input-control__input {
      height: 40px;
    }
  }
`,Xe(s.__experimentalPanelColorGradientSettings)`
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
`,Xe(gn)`
  /* .block-editor-panel-color-gradient-settings__item {
    padding: 8px !important;
  } */

  .components-toggle-control {
    > * {
      margin-bottom: 0;
    }
  }
`,Xe.div`
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
`,Xe(gn)`
  .components-base-control__field {
    margin-bottom: 0;
  }
`,Xe.div`
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
`;const vn="#1e1e1e",bn="2px";Xe.div`
  margin-top: 1px;
  margin-left: 1px;

  .components-button {
    margin: -1px 0 0 -1px;
    vertical-align: middle;
    border-radius: 0;
    display: inline-flex;
    box-shadow: inset 0 0 0 ${"1px"} ${vn};

    &:first-of-type {
      border-radius: ${bn} 0 0 ${bn};
    }

    &:last-of-type {
      border-radius: 0 ${bn} ${bn} 0;
    }

    // The active button should look pressed.
    &.is-primary {
      box-shadow: inset 0 0 0 ${"1px"} ${vn};
    }
  }
`,Xe.div`
  margin-top: 8px;
  margin-bottom: revert;
  font-size; 12px;
  color: #757575;

  &.no-margin {
    margin-top: 0;
  }
`,Xe.div`
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
`,Xe.div`
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
`,Xe.div`
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
`,Xe.div`
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
`,n(799),window.wp.keycodes,Xe(a.Modal)`
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
`,Xe.ul`
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
`,(e=>{const n=(0,t.createReduxStore)(e,{selectors:{getIconLibrary(e){var t;return null!==(t=e?.icons)&&void 0!==t?t:[]}},actions:{loadIconLibrary:e=>async({select:t,dispatch:n})=>{var r;if(!e)return;let i=t.getIconLibrary();if(i&&i.length)return i;const o=await u()({path:e});var a;return o?.success&&n({type:"UPDATE_ICONS",payload:null!==(a=o?.data)&&void 0!==a?a:[]}),null!==(r=o?.data)&&void 0!==r?r:[]}},reducer:(e={icons:[]},t)=>"UPDATE_ICONS"===t.type?{...e,icons:t.payload}:e});(0,t.select)(e)||(0,t.register)(n)})("boldblocks/cbb-icon-library"),Xe.div`
  .boldblocks-block-icon__input,
  .boldblocks-block-icon__preview {
    margin-bottom: 12px;
  }

  .boldblocks-block-icon__preview {
    h3 {
      margin-bottom: 8px;
    }

    svg {
      width: 100%;
      height: auto;
      outline: 1px solid #ddd;
    }
  }
`;const yn=(0,v.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",children:[(0,v.jsx)("path",{fill:"#d20962",d:"m79 138 16 5q-4 13-12 19-9 7-22 7-15 0-26-11-10-11-10-30 0-20 10-31 11-11 27-11 15 0 24 9 6 5 8 15l-16 3q-1-6-5-9-5-4-11-4-9 0-15 6-5 7-5 21 0 15 5 22 6 6 14 6 7 0 11-4 5-4 7-13zm17-50h46q5 1 8 4 4 2 6 6 3 5 3 10t-3 10q-3 5-8 7 7 2 11 7t4 12q0 6-3 11-2 5-7 8-4 3-10 4H96zm16 13v18h22q5 0 7-3 2-2 2-6t-2-6l-6-3h-14zm0 32v21h15l11-1q4 0 6-3 2-2 2-7l-2-6q-1-2-5-3l-14-1zm52-45h46q5 1 8 4 4 2 6 6 3 5 3 10t-3 10q-3 5-8 7 7 2 11 7t4 12q0 6-3 11-2 5-7 8-4 3-10 4h-47zm16 13v18h22q5 0 7-3 2-2 2-6t-2-6l-6-3h-14zm0 32v21h15l11-1q4 0 6-3 2-2 2-7l-2-6q-1-2-5-3l-14-1z"}),(0,v.jsx)("path",{fill:"#d20962",d:"M33 74c-7 0-12 1-16 3-3 3-5 7-5 13v23c0 8-3 12-9 13v3c6 1 9 6 9 13v23c0 5 2 9 4 12 3 2 9 4 17 4h1v-4l-12-2c-2-2-3-5-3-10v-23c0-7-4-12-11-15 7-2 11-7 11-14V90l2-9c3-2 7-3 13-3v-4zm189 0v4c6 0 10 1 13 3l2 9v23c0 7 4 12 11 14-7 3-11 8-11 15v23c0 5-1 8-3 10l-12 2v4h1c8 0 14-2 17-4 2-3 4-7 4-12v-23c0-7 3-12 9-13v-3c-6-1-9-5-9-13V90c0-6-2-10-5-13-4-2-9-3-16-3z"})]});(0,r.registerPlugin)("boldblocks-pattern-meta",{render:()=>{const{getCurrentPostType:n}=(0,t.useSelect)(e=>e(y.store),[]),[r,o]=(0,i.useState)(!0),[s,l]=(0,i.useState)([]);if(n()!==w)return null;(0,i.useEffect)(()=>{u()({path:"boldblocks/v1/getPatternCategories"}).then(e=>{l(e),o(!1)})},[]);const[c,f]=(0,p.useEntityProp)("postType",w,"meta"),h=e=>t=>{f({...c,[e]:t})},{boldblocks_pattern_categories:g=[],boldblocks_pattern_description:b="",boldblocks_pattern_disabled_inserter:k=!1}=c,C=(0,e.__)("Pattern settings","content-blocks-builder"),S=(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a.TextareaControl,{label:(0,e.__)("Pattern description","content-blocks-builder"),value:b,onChange:h("boldblocks_pattern_description"),rows:4}),(0,v.jsx)(a.ToggleControl,{checked:k,label:(0,e.__)("Don't show this pattern in the inserter","content-blocks-builder"),onChange:h("boldblocks_pattern_disabled_inserter")}),(0,v.jsx)(a.BaseControl,{label:(0,e.__)("Select pattern categories","content-blocks-builder")}),s.length?(0,v.jsxs)(v.Fragment,{children:[s.filter(({name:e})=>"cbb"!==e).map(({name:e,label:t})=>(0,v.jsx)(a.CheckboxControl,{label:t,checked:g.find(({name:t})=>t===e),onChange:n=>{let r=[];r=n?[...g,{name:e,label:t}]:g.filter(({name:t})=>t!==e),h("boldblocks_pattern_categories")(r)}},e)),m&&(0,v.jsx)("p",{children:(0,v.jsx)(_,{href:(0,d.addQueryArgs)("edit.php?post_type=boldblocks_block&page=cbb-settings&tab=general"),label:(0,e.__)("Manage custom categories","content-blocks-builder")})})]}):(0,v.jsx)(v.Fragment,{children:r&&(0,v.jsx)(a.Spinner,{})}),(0,x.applyFilters)("boldblocks.patternSettings.additionalSettings",null,{meta:c,setMeta:f})]});return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(y.PluginDocumentSettingPanel,{name:"content-block-settings",title:C,initialOpen:!0,children:S}),(0,v.jsx)(y.PluginSidebarMoreMenuItem,{target:"pattern-settings",children:C}),(0,v.jsx)(y.PluginSidebar,{name:"pattern-settings",title:C,icon:yn,children:(0,v.jsx)(a.PanelBody,{children:S})})]})}})})()})();