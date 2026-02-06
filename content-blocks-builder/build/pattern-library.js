(()=>{var e={195:(e,t,n)=>{var r=n(981),i=n(332),a=n(799);e.exports=function(e){var t=!1,n=function(n,i){if(e.page<1)return e.listContainer.style.display="none",void(t=!0);t&&(e.listContainer.style.display="block");var a,s=e.matchingItems.length,l=e.i,c=e.page,d=Math.ceil(s/c),u=Math.ceil(l/c),p=i.innerWindow||2,m=i.left||i.outerWindow||0,f=i.right||i.outerWindow||0;f=d-f,n.clear();for(var h=1;h<=d;h++){var g=u===h?"active":"";o.number(h,m,f,u,p)?(a=n.add({page:h,dotted:!1})[0],g&&r(a.elm).add(g),a.elm.firstChild.setAttribute("data-i",h),a.elm.firstChild.setAttribute("data-page",c)):o.dotted(n,h,m,f,u,p,n.size())&&(a=n.add({page:"...",dotted:!0})[0],r(a.elm).add("disabled"))}},o={number:function(e,t,n,r,i){return this.left(e,t)||this.right(e,n)||this.innerWindow(e,r,i)},left:function(e,t){return e<=t},right:function(e,t){return e>t},innerWindow:function(e,t,n){return e>=t-n&&e<=t+n},dotted:function(e,t,n,r,i,a,o){return this.dottedLeft(e,t,n,r,i,a)||this.dottedRight(e,t,n,r,i,a,o)},dottedLeft:function(e,t,n,r,i,a){return t==n+1&&!this.innerWindow(t,i,a)&&!this.right(t,r)},dottedRight:function(e,t,n,r,i,a,o){return!e.items[o-1].values().dotted&&t==r&&!this.innerWindow(t,i,a)&&!this.right(t,r)}};return function(t){var r=new a(e.listContainer.id,{listClass:t.paginationClass||"pagination",item:t.item||"<li><a class='page' href='#'></a></li>",valueNames:["page","dotted"],searchClass:"pagination-search-that-is-not-supposed-to-exist",sortClass:"pagination-sort-that-is-not-supposed-to-exist"});i.bind(r.listContainer,"click",function(t){var n=t.target||t.srcElement,r=e.utils.getAttribute(n,"data-page"),i=e.utils.getAttribute(n,"data-i");i&&e.show((i-1)*r+1,r)}),e.on("updated",function(){n(r,t)}),n(r,t)}}},200:e=>{e.exports=function(e,t){var n=e.getAttribute&&e.getAttribute(t)||null;if(!n)for(var r=e.attributes,i=r.length,a=0;a<i;a++)void 0!==r[a]&&r[a].nodeName===t&&(n=r[a].nodeValue);return n}},212:e=>{e.exports=function(e){if(void 0===e)return[];if(null===e)return[null];if(e===window)return[window];if("string"==typeof e)return[e];if(function(e){return"[object Array]"===Object.prototype.toString.call(e)}(e))return e;if("number"!=typeof e.length)return[e];if("function"==typeof e&&e instanceof Function)return[e];for(var t=[],n=0,r=e.length;n<r;n++)(Object.prototype.hasOwnProperty.call(e,n)||n in e)&&t.push(e[n]);return t.length?t:[]}},249:e=>{e.exports=function(e){return e.handlers.filterStart=e.handlers.filterStart||[],e.handlers.filterComplete=e.handlers.filterComplete||[],function(t){if(e.trigger("filterStart"),e.i=1,e.reset.filter(),void 0===t)e.filtered=!1;else{e.filtered=!0;for(var n=e.items,r=0,i=n.length;r<i;r++){var a=n[r];t(a)?a.filtered=!0:a.filtered=!1}}return e.update(),e.trigger("filterComplete"),e.visibleItems}}},252:e=>{"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,i,a;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(i=r;0!==i--;)if(!e(t[i],n[i]))return!1;return!0}if(t instanceof Map&&n instanceof Map){if(t.size!==n.size)return!1;for(i of t.entries())if(!n.has(i[0]))return!1;for(i of t.entries())if(!e(i[1],n.get(i[0])))return!1;return!0}if(t instanceof Set&&n instanceof Set){if(t.size!==n.size)return!1;for(i of t.entries())if(!n.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(n)){if((r=t.length)!=n.length)return!1;for(i=r;0!==i--;)if(t[i]!==n[i])return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(a=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(i=r;0!==i--;)if(!Object.prototype.hasOwnProperty.call(n,a[i]))return!1;for(i=r;0!==i--;){var o=a[i];if(!e(t[o],n[o]))return!1}return!0}return t!=t&&n!=n}},332:(e,t,n)=>{var r=window.addEventListener?"addEventListener":"attachEvent",i=window.removeEventListener?"removeEventListener":"detachEvent",a="addEventListener"!==r?"on":"",o=n(212);t.bind=function(e,t,n,i){for(var s=0,l=(e=o(e)).length;s<l;s++)e[s][r](a+t,n,i||!1)},t.unbind=function(e,t,n,r){for(var s=0,l=(e=o(e)).length;s<l;s++)e[s][i](a+t,n,r||!1)},t.debounce=function(e,t,n){var r;return t?function(){var i=this,a=arguments,o=n&&!r;clearTimeout(r),r=setTimeout(function(){r=null,n||e.apply(i,a)},t),o&&e.apply(i,a)}:e}},340:e=>{e.exports=function(e){return(e=null===(e=void 0===e?"":e)?"":e).toString()}},343:e=>{e.exports=function(e){var t={els:void 0,clear:function(){for(var n=0,r=t.els.length;n<r;n++)e.utils.classes(t.els[n]).remove("asc"),e.utils.classes(t.els[n]).remove("desc")},getOrder:function(t){var n=e.utils.getAttribute(t,"data-order");return"asc"==n||"desc"==n?n:e.utils.classes(t).has("desc")?"asc":e.utils.classes(t).has("asc")?"desc":"asc"},getInSensitive:function(t,n){var r=e.utils.getAttribute(t,"data-insensitive");n.insensitive="false"!==r},setOrder:function(n){for(var r=0,i=t.els.length;r<i;r++){var a=t.els[r];if(e.utils.getAttribute(a,"data-sort")===n.valueName){var o=e.utils.getAttribute(a,"data-order");"asc"==o||"desc"==o?o==n.order&&e.utils.classes(a).add(n.order):e.utils.classes(a).add(n.order)}}}},n=function(){e.trigger("sortStart");var n={},r=arguments[0].currentTarget||arguments[0].srcElement||void 0;r?(n.valueName=e.utils.getAttribute(r,"data-sort"),t.getInSensitive(r,n),n.order=t.getOrder(r)):((n=arguments[1]||n).valueName=arguments[0],n.order=n.order||"asc",n.insensitive=void 0===n.insensitive||n.insensitive),t.clear(),t.setOrder(n);var i,a=n.sortFunction||e.sortFunction||null,o="desc"===n.order?-1:1;i=a?function(e,t){return a(e,t,n)*o}:function(t,r){var i=e.utils.naturalSort;return i.alphabet=e.alphabet||n.alphabet||void 0,!i.alphabet&&n.insensitive&&(i=e.utils.naturalSort.caseInsensitive),i(t.values()[n.valueName],r.values()[n.valueName])*o},e.items.sort(i),e.update(),e.trigger("sortComplete")};return e.handlers.sortStart=e.handlers.sortStart||[],e.handlers.sortComplete=e.handlers.sortComplete||[],t.els=e.utils.getByClass(e.listContainer,e.sortClass),e.utils.events.bind(t.els,"click",n),e.on("searchStart",t.clear),e.on("filterStart",t.clear),n}},378:e=>{e.exports=function(e,t,n,r){return(r=r||{}).test&&r.getElementsByClassName||!r.test&&document.getElementsByClassName?function(e,t,n){return n?e.getElementsByClassName(t)[0]:e.getElementsByClassName(t)}(e,t,n):r.test&&r.querySelector||!r.test&&document.querySelector?function(e,t,n){return t="."+t,n?e.querySelector(t):e.querySelectorAll(t)}(e,t,n):function(e,t,n){for(var r=[],i=e.getElementsByTagName("*"),a=i.length,o=new RegExp("(^|\\s)"+t+"(\\s|$)"),s=0,l=0;s<a;s++)if(o.test(i[s].className)){if(n)return i[s];r[l]=i[s],l++}return r}(e,t,n)}},433:e=>{e.exports=function(e){for(var t,n=Array.prototype.slice.call(arguments,1),r=0;t=n[r];r++)if(t)for(var i in t)e[i]=t[i];return e}},481:e=>{e.exports=function(e,t,n){var r=n.location||0,i=n.distance||100,a=n.threshold||.4;if(t===e)return!0;if(t.length>32)return!1;var o=r,s=function(){var e,n={};for(e=0;e<t.length;e++)n[t.charAt(e)]=0;for(e=0;e<t.length;e++)n[t.charAt(e)]|=1<<t.length-e-1;return n}();function l(e,n){var r=e/t.length,a=Math.abs(o-n);return i?r+a/i:a?1:r}var c=a,d=e.indexOf(t,o);-1!=d&&(c=Math.min(l(0,d),c),-1!=(d=e.lastIndexOf(t,o+t.length))&&(c=Math.min(l(0,d),c)));var u,p,m=1<<t.length-1;d=-1;for(var f,h=t.length+e.length,g=0;g<t.length;g++){for(u=0,p=h;u<p;)l(g,o+p)<=c?u=p:h=p,p=Math.floor((h-u)/2+u);h=p;var b=Math.max(1,o-p+1),v=Math.min(o+p,e.length)+t.length,y=Array(v+2);y[v+1]=(1<<g)-1;for(var _=v;_>=b;_--){var x=s[e.charAt(_-1)];if(y[_]=0===g?(y[_+1]<<1|1)&x:(y[_+1]<<1|1)&x|(f[_+1]|f[_])<<1|1|f[_+1],y[_]&m){var w=l(g,_-1);if(w<=c){if(c=w,!((d=_-1)>o))break;b=Math.max(1,2*o-d)}}}if(l(g+1,o)>c)break;f=y}return!(d<0)}},531:function(e,t){var n,r;void 0===(r="function"==typeof(n=e=>{"use strict";var t=e=>{"number"==typeof e?e=""+e:"string"!=typeof e&&(e="");var t=m(e);return i(e,{_targetLower:t._lower,_targetLowerCodes:t.lowerCodes,_bitflags:t.bitflags})};class n{get indexes(){return this._indexes.slice(0,this._indexes.len).sort((e,t)=>e-t)}set indexes(e){return this._indexes=e}highlight(e,t){return((e,t="<b>",n="</b>")=>{for(var r="function"==typeof t?t:void 0,i=e.target,a=i.length,o=e.indexes,s="",l=0,c=0,d=!1,u=[],p=0;p<a;++p){var m=i[p];if(o[c]===p){if(++c,d||(d=!0,r?(u.push(s),s=""):s+=t),c===o.length){r?(s+=m,u.push(r(s,l++)),s="",u.push(i.substr(p+1))):s+=m+n+i.substr(p+1);break}}else d&&(d=!1,r?(u.push(r(s,l++)),s=""):s+=n);s+=m}return r?u:s})(this,e,t)}get score(){return a(this._score)}set score(e){this._score=o(e)}}class r extends Array{get score(){return a(this._score)}set score(e){this._score=o(e)}}var i=(e,t)=>{const r=new n;return r.target=e,r.obj=t.obj??L,r._score=t._score??C,r._indexes=t._indexes??[],r._targetLower=t._targetLower??"",r._targetLowerCodes=t._targetLowerCodes??L,r._nextBeginningIndexes=t._nextBeginningIndexes??L,r._bitflags=t._bitflags??0,r},a=e=>e===C?0:e>1?e:Math.E**(-2*((1-e)**.04307-1)),o=e=>0===e?C:e>1?e:1-Math.pow(Math.log(e)/-2+1,1/.04307),s=e=>{"number"==typeof e?e=""+e:"string"!=typeof e&&(e=""),e=e.trim();var t=m(e),n=[];if(t.containsSpace){var r=e.split(/\s+/);r=[...new Set(r)];for(var i=0;i<r.length;i++)if(""!==r[i]){var a=m(r[i]);n.push({lowerCodes:a.lowerCodes,_lower:r[i].toLowerCase(),containsSpace:!1})}}return{lowerCodes:t.lowerCodes,_lower:t._lower,containsSpace:t.containsSpace,bitflags:t.bitflags,spaceSearches:n}},l=e=>{if(e.length>999)return t(e);var n=h.get(e);return void 0!==n||(n=t(e),h.set(e,n)),n},c=e=>{if(e.length>999)return s(e);var t=g.get(e);return void 0!==t||(t=s(e),g.set(e,t)),t},d=(e,t,r=!1,i=!1)=>{if(!1===r&&e.containsSpace)return u(e,t,i);for(var a=e._lower,o=e.lowerCodes,s=o[0],l=t._targetLowerCodes,c=o.length,d=l.length,p=0,m=0,h=0;;){if(s===l[m]){if(b[h++]=m,++p===c)break;s=o[p]}if(++m>=d)return L}p=0;var g=!1,y=0,_=t._nextBeginningIndexes;_===L&&(_=t._nextBeginningIndexes=f(t.target));var x=0;if((m=0===b[0]?0:_[b[0]-1])!==d)for(;;)if(m>=d){if(p<=0)break;if(++x>200)break;--p;var w=v[--y];m=_[w]}else if(o[p]===l[m]){if(v[y++]=m,++p===c){g=!0;break}++m}else m=_[m];var k=c<=1?-1:t._targetLower.indexOf(a,b[0]),S=!!~k,T=!!S&&(0===k||t._nextBeginningIndexes[k-1]===k);if(S&&!T)for(var A=0;A<_.length;A=_[A])if(!(A<=k)){for(var C=0;C<c&&o[C]===t._targetLowerCodes[A+C];C++);if(C===c){k=A,T=!0;break}}var E=e=>{for(var t=0,n=0,r=1;r<c;++r)e[r]-e[r-1]!==1&&(t-=e[r],++n);if(t-=(e[c-1]-e[0]-(c-1)+12)*n,0!==e[0]&&(t-=e[0]*e[0]*.2),g){var i=1;for(r=_[0];r<d;r=_[r])++i;i>24&&(t*=10*(i-24))}else t*=1e3;return t-=(d-c)/2,S&&(t/=1+c*c*1),T&&(t/=1+c*c*1),t-(d-c)/2};if(g)if(T){for(A=0;A<c;++A)b[A]=k+A;N=b,P=E(b)}else N=v,P=E(v);else{if(S)for(A=0;A<c;++A)b[A]=k+A;var N,P=E(N=b)}for(t._score=P,A=0;A<c;++A)t._indexes[A]=N[A];t._indexes.len=c;const I=new n;return I.target=t.target,I._score=t._score,I._indexes=t._indexes,I},u=(e,t,n)=>{for(var r=new Set,i=0,a=L,o=0,s=e.spaceSearches,l=s.length,c=0,u=()=>{for(let e=c-1;e>=0;e--)t._nextBeginningIndexes[y[2*e+0]]=y[2*e+1]},p=!1,m=0;m<l;++m){x[m]=C;var f=s[m];if(a=d(f,t),n){if(a===L)continue;p=!0}else if(a===L)return u(),L;if(m!==l-1){var h=a._indexes,g=!0;for(let e=0;e<h.len-1;e++)if(h[e+1]-h[e]!==1){g=!1;break}if(g){var b=h[h.len-1]+1,v=t._nextBeginningIndexes[b-1];for(let e=b-1;e>=0&&v===t._nextBeginningIndexes[e];e--)t._nextBeginningIndexes[e]=b,y[2*c+0]=e,y[2*c+1]=v,c++}}i+=a._score/l,x[m]=a._score/l,a._indexes[0]<o&&(i-=2*(o-a._indexes[0])),o=a._indexes[0];for(var _=0;_<a._indexes.len;++_)r.add(a._indexes[_])}if(n&&!p)return L;u();var w=d(e,t,!0);if(w!==L&&w._score>i){if(n)for(m=0;m<l;++m)x[m]=w._score/l;return w}n&&(a=t),a._score=i,m=0;for(let e of r)a._indexes[m++]=e;return a._indexes.len=m,a},p=e=>e.replace(/\p{Script=Latin}+/gu,e=>e.normalize("NFD")).replace(/[\u0300-\u036f]/g,""),m=e=>{for(var t=(e=p(e)).length,n=e.toLowerCase(),r=[],i=0,a=!1,o=0;o<t;++o){var s=r[o]=n.charCodeAt(o);32!==s?i|=1<<(s>=97&&s<=122?s-97:s>=48&&s<=57?26:s<=127?30:31):a=!0}return{lowerCodes:r,bitflags:i,containsSpace:a,_lower:n}},f=e=>{for(var t=(e=p(e)).length,n=(e=>{for(var t=e.length,n=[],r=0,i=!1,a=!1,o=0;o<t;++o){var s=e.charCodeAt(o),l=s>=65&&s<=90,c=l||s>=97&&s<=122||s>=48&&s<=57,d=l&&!i||!a||!c;i=l,a=c,d&&(n[r++]=o)}return n})(e),r=[],i=n[0],a=0,o=0;o<t;++o)i>o?r[o]=i:(i=n[++a],r[o]=void 0===i?t:i);return r},h=new Map,g=new Map,b=[],v=[],y=[],_=[],x=[],w=[],k=[],S=(e,t)=>{var n=e[t];if(void 0!==n)return n;if("function"==typeof t)return t(e);var r=t;Array.isArray(t)||(r=t.split("."));for(var i=r.length,a=-1;e&&++a<i;)e=e[r[a]];return e},T=e=>"object"==typeof e&&"number"==typeof e._bitflags,A=1/0,C=-A,E=[];E.total=0;var N,P,I,O,L=null,R=t(""),j=(N=[],P=0,O=e=>{for(var t=0,n=N[t],r=1;r<P;){var i=r+1;t=r,i<P&&N[i]._score<N[r]._score&&(t=i),N[t-1>>1]=N[t],r=1+(t<<1)}for(var a=t-1>>1;t>0&&n._score<N[a]._score;a=(t=a)-1>>1)N[t]=N[a];N[t]=n},(I={}).add=e=>{var t=P;N[P++]=e;for(var n=t-1>>1;t>0&&e._score<N[n]._score;n=(t=n)-1>>1)N[t]=N[n];N[t]=e},I.poll=e=>{if(0!==P){var t=N[0];return N[0]=N[--P],O(),t}},I.peek=e=>{if(0!==P)return N[0]},I.replaceTop=e=>{N[0]=e,O()},I);return{single:(e,t)=>{if(!e||!t)return L;var n=c(e);T(t)||(t=l(t));var r=n.bitflags;return(r&t._bitflags)!==r?L:d(n,t)},go:(e,t,n)=>{if(!e)return n?.all?((e,t)=>{var n=[];n.total=e.length;var a=t?.limit||A;if(t?.key)for(var o=0;o<e.length;o++){var s=e[o];if((p=S(s,t.key))!=L){T(p)||(p=l(p));var c=i(p.target,{_score:p._score,obj:s});if(n.push(c),n.length>=a)return n}}else if(t?.keys)for(o=0;o<e.length;o++){s=e[o];for(var d=new r(t.keys.length),u=t.keys.length-1;u>=0;--u)(p=S(s,t.keys[u]))?(T(p)||(p=l(p)),p._score=C,p._indexes.len=0,d[u]=p):d[u]=R;if(d.obj=s,d._score=C,n.push(d),n.length>=a)return n}else for(o=0;o<e.length;o++){var p;if((p=e[o])!=L&&(T(p)||(p=l(p)),p._score=C,p._indexes.len=0,n.push(p),n.length>=a))return n}return n})(t,n):E;var a=c(e),s=a.bitflags,u=a.containsSpace,p=o(n?.threshold||0),m=n?.limit||A,f=0,h=0,g=t.length;function b(e){f<m?(j.add(e),++f):(++h,e._score>j.peek()._score&&j.replaceTop(e))}if(n?.key)for(var v=n.key,y=0;y<g;++y){var N=t[y];(U=S(N,v))&&(T(U)||(U=l(U)),(s&U._bitflags)===s&&(H=d(a,U))!==L&&(H._score<p||(H.obj=N,b(H))))}else if(n?.keys){var P=n.keys,I=P.length;e:for(y=0;y<g;++y){N=t[y];for(var O=0,D=0;D<I;++D)v=P[D],(U=S(N,v))?(T(U)||(U=l(U)),w[D]=U,O|=U._bitflags):w[D]=R;if((s&O)===s){if(u)for(let e=0;e<a.spaceSearches.length;e++)_[e]=C;for(D=0;D<I;++D)if((U=w[D])!==R)if(k[D]=d(a,U,!1,u),k[D]!==L){if(u)for(let e=0;e<a.spaceSearches.length;e++)x[e]>-1e3&&_[e]>C&&(F=(_[e]+x[e])/4)>_[e]&&(_[e]=F),x[e]>_[e]&&(_[e]=x[e])}else k[D]=R;else k[D]=R;if(u){for(let e=0;e<a.spaceSearches.length;e++)if(_[e]===C)continue e}else{var M=!1;for(let e=0;e<I;e++)if(k[e]._score!==C){M=!0;break}if(!M)continue}var B=new r(I);for(let e=0;e<I;e++)B[e]=k[e];if(u){var z=0;for(let e=0;e<a.spaceSearches.length;e++)z+=_[e]}else{z=C;for(let e=0;e<I;e++){var F;(H=B[e])._score>-1e3&&z>C&&(F=(z+H._score)/4)>z&&(z=F),H._score>z&&(z=H._score)}}if(B.obj=N,B._score=z,n?.scoreFn){if(!(z=n.scoreFn(B)))continue;z=o(z),B._score=z}z<p||b(B)}}}else for(y=0;y<g;++y){var U,H;(U=t[y])&&(T(U)||(U=l(U)),(s&U._bitflags)===s&&(H=d(a,U))!==L&&(H._score<p||b(H)))}if(0===f)return E;var $=new Array(f);for(y=f-1;y>=0;--y)$[y]=j.poll();return $.total=f+h,$},prepare:t,cleanup:()=>{h.clear(),g.clear()}}})?n.apply(t,[]):n)||(e.exports=r)},608:e=>{e.exports=function(e){return function(t,n,r){var i=this;this._values={},this.found=!1,this.filtered=!1,this.values=function(t,n){if(void 0===t)return i._values;for(var r in t)i._values[r]=t[r];!0!==n&&e.templater.set(i,i.values())},this.show=function(){e.templater.show(i)},this.hide=function(){e.templater.hide(i)},this.matching=function(){return e.filtered&&e.searched&&i.found&&i.filtered||e.filtered&&!e.searched&&i.filtered||!e.filtered&&e.searched&&i.found||!e.filtered&&!e.searched},this.visible=function(){return!(!i.elm||i.elm.parentNode!=e.list)},function(t,n,r){if(void 0===n)r?i.values(t,r):i.values(t);else{i.elm=n;var a=e.templater.get(i,t);i.values(a)}}(t,n,r)}}},647:e=>{e.exports=function(e){var t,n,r,i={resetList:function(){e.i=1,e.templater.clear(),r=void 0},setOptions:function(e){2==e.length&&e[1]instanceof Array?t=e[1]:2==e.length&&"function"==typeof e[1]?(t=void 0,r=e[1]):3==e.length?(t=e[1],r=e[2]):t=void 0},setColumns:function(){0!==e.items.length&&void 0===t&&(t=void 0===e.searchColumns?i.toArray(e.items[0].values()):e.searchColumns)},setSearchString:function(t){t=(t=e.utils.toString(t).toLowerCase()).replace(/[-[\]{}()*+?.,\\^$|#]/g,"\\$&"),n=t},toArray:function(e){var t=[];for(var n in e)t.push(n);return t}},a=function(a){return e.trigger("searchStart"),i.resetList(),i.setSearchString(a),i.setOptions(arguments),i.setColumns(),""===n?(e.reset.search(),e.searched=!1):(e.searched=!0,r?r(n,t):function(){for(var r,i=[],a=n;null!==(r=a.match(/"([^"]+)"/));)i.push(r[1]),a=a.substring(0,r.index)+a.substring(r.index+r[0].length);(a=a.trim()).length&&(i=i.concat(a.split(/\s+/)));for(var o=0,s=e.items.length;o<s;o++){var l=e.items[o];if(l.found=!1,i.length){for(var c=0,d=i.length;c<d;c++){for(var u=!1,p=0,m=t.length;p<m;p++){var f=l.values(),h=t[p];if(f.hasOwnProperty(h)&&void 0!==f[h]&&null!==f[h]&&-1!==("string"!=typeof f[h]?f[h].toString():f[h]).toLowerCase().indexOf(i[c])){u=!0;break}}if(!u)break}l.found=u}}}()),e.update(),e.trigger("searchComplete"),e.visibleItems};return e.handlers.searchStart=e.handlers.searchStart||[],e.handlers.searchComplete=e.handlers.searchComplete||[],e.utils.events.bind(e.utils.getByClass(e.listContainer,e.searchClass),"keyup",e.utils.events.debounce(function(t){var n=t.target||t.srcElement;""===n.value&&!e.searched||a(n.value)},e.searchDelay)),e.utils.events.bind(e.utils.getByClass(e.listContainer,e.searchClass),"input",function(e){""===(e.target||e.srcElement).value&&a("")}),a}},672:(e,t,n)=>{e.exports=function(e){var t=n(608)(e),r=function(n,r){for(var i=0,a=n.length;i<a;i++)e.items.push(new t(r,n[i]))},i=function(t,n){var a=t.splice(0,50);r(a,n),t.length>0?setTimeout(function(){i(t,n)},1):(e.update(),e.trigger("parseComplete"))};return e.handlers.parseComplete=e.handlers.parseComplete||[],function(){var t=function(e){for(var t=e.childNodes,n=[],r=0,i=t.length;r<i;r++)void 0===t[r].data&&n.push(t[r]);return n}(e.list),n=e.valueNames;e.indexAsync?i(t,n):r(t,n)}}},717:e=>{e.exports=function(e){var t=function(n,r,i){var a=n.splice(0,50);i=(i=i||[]).concat(e.add(a)),n.length>0?setTimeout(function(){t(n,r,i)},1):(e.update(),r(i))};return t}},774:e=>{"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,i,a;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(i=r;0!==i--;)if(!e(t[i],n[i]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(a=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(i=r;0!==i--;)if(!Object.prototype.hasOwnProperty.call(n,a[i]))return!1;for(i=r;0!==i--;){var o=a[i];if(!("_owner"===o&&t.$$typeof||e(t[o],n[o])))return!1}return!0}return t!=t&&n!=n}},799:(e,t,n)=>{var r=n(813),i=n(378),a=n(433),o=n(859),s=n(332),l=n(340),c=n(981),d=n(200),u=n(212);e.exports=function(e,t,p){var m,f=this,h=n(608)(f),g=n(717)(f),b=n(195)(f);m={start:function(){f.listClass="list",f.searchClass="search",f.sortClass="sort",f.page=1e4,f.i=1,f.items=[],f.visibleItems=[],f.matchingItems=[],f.searched=!1,f.filtered=!1,f.searchColumns=void 0,f.searchDelay=0,f.handlers={updated:[]},f.valueNames=[],f.utils={getByClass:i,extend:a,indexOf:o,events:s,toString:l,naturalSort:r,classes:c,getAttribute:d,toArray:u},f.utils.extend(f,t),f.listContainer="string"==typeof e?document.getElementById(e):e,f.listContainer&&(f.list=i(f.listContainer,f.listClass,!0),f.parse=n(672)(f),f.templater=n(939)(f),f.search=n(647)(f),f.filter=n(249)(f),f.sort=n(343)(f),f.fuzzySearch=n(844)(f,t.fuzzySearch),this.handlers(),this.items(),this.pagination(),f.update())},handlers:function(){for(var e in f.handlers)f[e]&&f.handlers.hasOwnProperty(e)&&f.on(e,f[e])},items:function(){f.parse(f.list),void 0!==p&&f.add(p)},pagination:function(){if(void 0!==t.pagination){!0===t.pagination&&(t.pagination=[{}]),void 0===t.pagination[0]&&(t.pagination=[t.pagination]);for(var e=0,n=t.pagination.length;e<n;e++)b(t.pagination[e])}}},this.reIndex=function(){f.items=[],f.visibleItems=[],f.matchingItems=[],f.searched=!1,f.filtered=!1,f.parse(f.list)},this.toJSON=function(){for(var e=[],t=0,n=f.items.length;t<n;t++)e.push(f.items[t].values());return e},this.add=function(e,t){if(0!==e.length){if(!t){var n=[],r=!1;void 0===e[0]&&(e=[e]);for(var i=0,a=e.length;i<a;i++){var o;r=f.items.length>f.page,o=new h(e[i],void 0,r),f.items.push(o),n.push(o)}return f.update(),n}g(e.slice(0),t)}},this.show=function(e,t){return this.i=e,this.page=t,f.update(),f},this.remove=function(e,t,n){for(var r=0,i=0,a=f.items.length;i<a;i++)f.items[i].values()[e]==t&&(f.templater.remove(f.items[i],n),f.items.splice(i,1),a--,i--,r++);return f.update(),r},this.get=function(e,t){for(var n=[],r=0,i=f.items.length;r<i;r++){var a=f.items[r];a.values()[e]==t&&n.push(a)}return n},this.size=function(){return f.items.length},this.clear=function(){return f.templater.clear(),f.items=[],f},this.on=function(e,t){return f.handlers[e].push(t),f},this.off=function(e,t){var n=f.handlers[e],r=o(n,t);return r>-1&&n.splice(r,1),f},this.trigger=function(e){for(var t=f.handlers[e].length;t--;)f.handlers[e][t](f);return f},this.reset={filter:function(){for(var e=f.items,t=e.length;t--;)e[t].filtered=!1;return f},search:function(){for(var e=f.items,t=e.length;t--;)e[t].found=!1;return f}},this.update=function(){var e=f.items,t=e.length;f.visibleItems=[],f.matchingItems=[],f.templater.clear();for(var n=0;n<t;n++)e[n].matching()&&f.matchingItems.length+1>=f.i&&f.visibleItems.length<f.page?(e[n].show(),f.visibleItems.push(e[n]),f.matchingItems.push(e[n])):e[n].matching()?(f.matchingItems.push(e[n]),e[n].hide()):e[n].hide();return f.trigger("updated"),f},m.start()}},813:e=>{"use strict";var t,n,r=0;function i(e){return e>=48&&e<=57}function a(e,t){for(var a=(e+="").length,o=(t+="").length,s=0,l=0;s<a&&l<o;){var c=e.charCodeAt(s),d=t.charCodeAt(l);if(i(c)){if(!i(d))return c-d;for(var u=s,p=l;48===c&&++u<a;)c=e.charCodeAt(u);for(;48===d&&++p<o;)d=t.charCodeAt(p);for(var m=u,f=p;m<a&&i(e.charCodeAt(m));)++m;for(;f<o&&i(t.charCodeAt(f));)++f;var h=m-u-f+p;if(h)return h;for(;u<m;)if(h=e.charCodeAt(u++)-t.charCodeAt(p++))return h;s=m,l=f}else{if(c!==d)return c<r&&d<r&&-1!==n[c]&&-1!==n[d]?n[c]-n[d]:c-d;++s,++l}}return s>=a&&l<o&&a>=o?-1:l>=o&&s<a&&o>=a?1:a-o}a.caseInsensitive=a.i=function(e,t){return a((""+e).toLowerCase(),(""+t).toLowerCase())},Object.defineProperties(a,{alphabet:{get:function(){return t},set:function(e){n=[];var i=0;if(t=e)for(;i<t.length;i++)n[t.charCodeAt(i)]=i;for(r=n.length,i=0;i<r;i++)void 0===n[i]&&(n[i]=-1)}}}),e.exports=a},844:(e,t,n)=>{n(981);var r=n(332),i=n(433),a=n(340),o=n(378),s=n(481);e.exports=function(e,t){t=i({location:0,distance:100,threshold:.4,multiSearch:!0,searchClass:"fuzzy-search"},t=t||{});var n={search:function(r,i){for(var a=t.multiSearch?r.replace(/ +$/,"").split(/ +/):[r],o=0,s=e.items.length;o<s;o++)n.item(e.items[o],i,a)},item:function(e,t,r){for(var i=!0,a=0;a<r.length;a++){for(var o=!1,s=0,l=t.length;s<l;s++)n.values(e.values(),t[s],r[a])&&(o=!0);o||(i=!1)}e.found=i},values:function(e,n,r){if(e.hasOwnProperty(n)){var i=a(e[n]).toLowerCase();if(s(i,r,t))return!0}return!1}};return r.bind(o(e.listContainer,t.searchClass),"keyup",e.utils.events.debounce(function(t){var r=t.target||t.srcElement;e.search(r.value,n.search)},e.searchDelay)),function(t,r){e.search(t,r,n.search)}}},859:e=>{var t=[].indexOf;e.exports=function(e,n){if(t)return e.indexOf(n);for(var r=0,i=e.length;r<i;++r)if(e[r]===n)return r;return-1}},939:e=>{var t=function(e){var t,n=this,r=function(e){if("string"==typeof e){if(/<tr[\s>]/g.exec(e)){var t=document.createElement("tbody");return t.innerHTML=e,t.firstElementChild}if(-1!==e.indexOf("<")){var n=document.createElement("div");return n.innerHTML=e,n.firstElementChild}}},i=function(t,n,r){var i=void 0,a=function(t){for(var n=0,r=e.valueNames.length;n<r;n++){var i=e.valueNames[n];if(i.data){for(var a=i.data,o=0,s=a.length;o<s;o++)if(a[o]===t)return{data:t}}else{if(i.attr&&i.name&&i.name==t)return i;if(i===t)return t}}}(n);a&&(a.data?t.elm.setAttribute("data-"+a.data,r):a.attr&&a.name?(i=e.utils.getByClass(t.elm,a.name,!0))&&i.setAttribute(a.attr,r):(i=e.utils.getByClass(t.elm,a,!0))&&(i.innerHTML=r))};this.get=function(t,r){n.create(t);for(var i={},a=0,o=r.length;a<o;a++){var s=void 0,l=r[a];if(l.data)for(var c=0,d=l.data.length;c<d;c++)i[l.data[c]]=e.utils.getAttribute(t.elm,"data-"+l.data[c]);else l.attr&&l.name?(s=e.utils.getByClass(t.elm,l.name,!0),i[l.name]=s?e.utils.getAttribute(s,l.attr):""):(s=e.utils.getByClass(t.elm,l,!0),i[l]=s?s.innerHTML:"")}return i},this.set=function(e,t){if(!n.create(e))for(var r in t)t.hasOwnProperty(r)&&i(e,r,t[r])},this.create=function(e){return void 0===e.elm&&(e.elm=t(e.values()),n.set(e,e.values()),!0)},this.remove=function(t){t.elm.parentNode===e.list&&e.list.removeChild(t.elm)},this.show=function(t){n.create(t),e.list.appendChild(t.elm)},this.hide=function(t){void 0!==t.elm&&t.elm.parentNode===e.list&&e.list.removeChild(t.elm)},this.clear=function(){if(e.list.hasChildNodes())for(;e.list.childNodes.length>=1;)e.list.removeChild(e.list.firstChild)},function(){var n;if("function"!=typeof e.item){if(!(n="string"==typeof e.item?-1===e.item.indexOf("<")?document.getElementById(e.item):r(e.item):function(){for(var t=e.list.childNodes,n=0,r=t.length;n<r;n++)if(void 0===t[n].data)return t[n].cloneNode(!0)}()))throw new Error("The list needs to have at least one item on init otherwise you'll have to add a template.");n=function(t,n){var r=t.cloneNode(!0);r.removeAttribute("id");for(var i=0,a=n.length;i<a;i++){var o=void 0,s=n[i];if(s.data)for(var l=0,c=s.data.length;l<c;l++)r.setAttribute("data-"+s.data[l],"");else s.attr&&s.name?(o=e.utils.getByClass(r,s.name,!0))&&o.setAttribute(s.attr,""):(o=e.utils.getByClass(r,s,!0))&&(o.innerHTML="")}return r}(n,e.valueNames),t=function(){return n.cloneNode(!0)}}else t=function(t){var n=e.item(t);return r(n)}}()};e.exports=function(e){return new t(e)}},981:(e,t,n)=>{var r=n(859),i=/\s+/;function a(e){if(!e||!e.nodeType)throw new Error("A DOM element reference is required");this.el=e,this.list=e.classList}Object.prototype.toString,e.exports=function(e){return new a(e)},a.prototype.add=function(e){if(this.list)return this.list.add(e),this;var t=this.array();return~r(t,e)||t.push(e),this.el.className=t.join(" "),this},a.prototype.remove=function(e){if(this.list)return this.list.remove(e),this;var t=this.array(),n=r(t,e);return~n&&t.splice(n,1),this.el.className=t.join(" "),this},a.prototype.toggle=function(e,t){return this.list?(void 0!==t?t!==this.list.toggle(e,t)&&this.list.toggle(e):this.list.toggle(e),this):(void 0!==t?t?this.add(e):this.remove(e):this.has(e)?this.remove(e):this.add(e),this)},a.prototype.array=function(){var e=(this.el.getAttribute("class")||"").replace(/^\s+|\s+$/g,"").split(i);return""===e[0]&&e.shift(),e},a.prototype.has=a.prototype.contains=function(e){return this.list?this.list.contains(e):!!~r(this.array(),e)}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.data,t=window.wp.dataControls,r=window.wp.apiFetch;var i=n.n(r);const a=window.wp.url,o={state:{},blocks:[],blockKeywords:[]},s={getBlocks:()=>async({dispatch:e})=>{const t=await i()({path:"boldblocks/v1/getBlocks"});return t&&t.length&&e({type:"SET_BLOCKS",payload:t}),t},getBlockKeywords:()=>async({dispatch:e})=>{const t=await i()({path:"boldblocks/v1/getBlockKeywords"});return t&&t.length&&e({type:"SET_BLOCKS_KEYWORDS",payload:t}),t}},l={loadFullBlocks:e=>async({dispatch:t})=>{if(!e.length)return;const n=await i()({path:(0,a.addQueryArgs)("boldblocks/v1/getFullBlockData",{blockIds:e.join(",")})});return n&&n.length&&t({type:"UPDATE_BLOCKS",payload:n}),n},setBlockLibraryState:e=>({type:"UPDATE_BLOCK_LIBRARY_STATE",payload:e})},c={state:{},variations:[],variationKeywords:[]},d={getVariations:()=>async({dispatch:e})=>{const t=await i()({path:"boldblocks/v1/getVariations"});return t&&t.length&&e({type:"SET_VARIATIONS",payload:t}),t},getVariationKeywords:()=>async({dispatch:e})=>{const t=await i()({path:"boldblocks/v1/getVariationKeywords"});return t&&t.length&&e({type:"SET_VARIATIONS_KEYWORDS",payload:t}),t}},u={loadFullVariations:e=>async({dispatch:t})=>{if(!e.length)return;const n=await i()({path:(0,a.addQueryArgs)("boldblocks/v1/getFullVariationData",{variationIds:e.join(",")})});return n&&n.length&&t({type:"UPDATE_VARIATIONS",payload:n}),n},setVariationLibraryState:e=>({type:"UPDATE_VARIATION_LIBRARY_STATE",payload:e})},p={status:!1,state:{},patterns:[],patternKeywords:[],plugins:[]},m={getPatterns:()=>async({dispatch:e})=>{const t=await i()({path:"boldblocks/v1/getPatterns"});return t&&t.length&&e({type:"SET_PATTERNS",payload:t}),t},getPatternKeywords:()=>async({dispatch:e})=>{const t=await i()({path:"boldblocks/v1/getPatternKeywords"});return t&&t.length&&e({type:"SET_PATTERN_KEYWORDS",payload:t}),t},getPlugins:()=>async({dispatch:e})=>{let t=await i()({path:"wp/v2/plugins"});t=t.map(e=>{const{plugin:t}=e,n=t.split("/")[0];return{...e,slug:n}}),e({type:"SET_PLUGINS",payload:t})}},f={setPatternInserterModalStatus:e=>({type:"SET_PATTERN_INSERTER_MODAL_STATUS",payload:e}),loadFullPatterns:e=>async({dispatch:t})=>{if(!e.length)return;const n=await i()({path:(0,a.addQueryArgs)("boldblocks/v1/getFullPatternData",{patternIds:e.join(",")})});return n&&n.length&&t({type:"UPDATE_PATTERNS",payload:n}),n},setPatternLibraryState:e=>({type:"UPDATE_PATTERN_INSERTER_MODAL_STATE",payload:e})},h="boldblocks/block-library",g=(0,e.createReduxStore)(h,{selectors:{getBlocks:e=>e.blockLibrary.blocks,getBlockLibraryState:e=>e.blockLibrary.state,getBlockKeywords:e=>e.blockLibrary.blockKeywords,getVariations:e=>e.variationLibrary.variations,getVariationLibraryState:e=>e.variationLibrary.state,getVariationKeywords:e=>e.variationLibrary.variationKeywords,getPatternInserterModalStatus:e=>e.patternLibrary.status,getPatterns:e=>e.patternLibrary.patterns,getPatternLibraryState:e=>e.patternLibrary.state,getPatternKeywords:e=>e.patternLibrary.patternKeywords,getPlugins:e=>e.patternLibrary.plugins},actions:{...l,...u,...f},controls:t.controls,reducer:(0,e.combineReducers)({blockLibrary:(e=o,t)=>{switch(t.type){case"SET_BLOCKS":return{...e,blocks:[...t.payload]};case"UPDATE_BLOCKS":const n=t.payload.map(({id:e})=>e),r=e.blocks.map(e=>{if(n.includes(e.id)){const n=t.payload.find(({id:t})=>t===e.id);if(n)return n}return e});return{...e,blocks:r};case"UPDATE_BLOCK_LIBRARY_STATE":return{...e,state:{...t.payload}};case"SET_BLOCKS_KEYWORDS":return{...e,blockKeywords:[...t.payload]}}return e},variationLibrary:(e=c,t)=>{switch(t.type){case"SET_VARIATIONS":return{...e,variations:[...t.payload]};case"UPDATE_VARIATIONS":const n=t.payload.map(({id:e})=>e),r=e.variations.map(e=>{if(n.includes(e.id)){const n=t.payload.find(({id:t})=>t===e.id);if(n)return n}return e});return{...e,variations:r};case"UPDATE_VARIATION_LIBRARY_STATE":return{...e,state:{...t.payload}};case"SET_VARIATIONS_KEYWORDS":return{...e,variationKeywords:[...t.payload]}}return e},patternLibrary:(e=p,t)=>{switch(t.type){case"SET_PATTERN_INSERTER_MODAL_STATUS":return{...e,status:t.payload};case"SET_PATTERNS":return{...e,patterns:[...t.payload]};case"UPDATE_PATTERNS":const n=t.payload.map(({id:e})=>e),r=e.patterns.map(e=>{if(n.includes(e.id)){const n=t.payload.find(({id:t})=>t===e.id);if(n)return n}return e});return{...e,patterns:r};case"UPDATE_PATTERN_INSERTER_MODAL_STATE":return{...e,state:{...t.payload}};case"SET_PATTERN_KEYWORDS":return{...e,patternKeywords:[...t.payload]};case"SET_PLUGINS":return{...e,plugins:[...t.payload]}}return e}}),resolvers:{...s,...d,...m}});(0,e.register)(g);const b=window.wp.i18n,v=window.wp.plugins,y=window.wp.element,_=window.wp.editor,x=window.wp.components,w=window.React;var k,S;function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},T.apply(null,arguments)}var A=function(e){return w.createElement("svg",T({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256"},e),k||(k=w.createElement("path",{d:"m79 138 16 5q-4 13-12 19-9 7-22 7-15 0-26-11-10-11-10-30 0-20 10-31 11-11 27-11 15 0 24 9 6 5 8 15l-16 3q-1-6-5-9-5-4-11-4-9 0-15 6-5 7-5 21 0 15 5 22 6 6 14 6 7 0 11-4 5-4 7-13m17-50h46q5 1 8 4 4 2 6 6 3 5 3 10t-3 10-8 7q7 2 11 7t4 12q0 6-3 11-2 5-7 8-4 3-10 4H96zm16 13v18h22q5 0 7-3 2-2 2-6t-2-6l-6-3h-14zm0 32v21h15l11-1q4 0 6-3 2-2 2-7l-2-6q-1-2-5-3l-14-1zm52-45h46q5 1 8 4 4 2 6 6 3 5 3 10t-3 10-8 7q7 2 11 7t4 12q0 6-3 11-2 5-7 8-4 3-10 4h-47zm16 13v18h22q5 0 7-3 2-2 2-6t-2-6l-6-3h-14zm0 32v21h15l11-1q4 0 6-3 2-2 2-7l-2-6q-1-2-5-3l-14-1z"})),S||(S=w.createElement("path",{d:"M33 74c-7 0-12 1-16 3-3 3-5 7-5 13v23c0 8-3 12-9 13v3c6 1 9 6 9 13v23c0 5 2 9 4 12 3 2 9 4 17 4h1v-4l-12-2c-2-2-3-5-3-10v-23c0-7-4-12-11-15 7-2 11-7 11-14V90l2-9c3-2 7-3 13-3v-4zm189 0v4c6 0 10 1 13 3l2 9v23c0 7 4 12 11 14-7 3-11 8-11 15v23c0 5-1 8-3 10l-12 2v4h1c8 0 14-2 17-4 2-3 4-7 4-12v-23c0-7 3-12 9-13v-3c-6-1-9-5-9-13V90c0-6-2-10-5-13-4-2-9-3-16-3z"})))};function C(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=C(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}const E=function(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=C(e))&&(r&&(r+=" "),r+=t);return r},N=window.lodash;function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(null,arguments)}var I=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(e){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),this.tags=[],this.ctr=0},e}(),O=Math.abs,L=String.fromCharCode,R=Object.assign;function j(e){return e.trim()}function D(e,t,n){return e.replace(t,n)}function M(e,t){return e.indexOf(t)}function B(e,t){return 0|e.charCodeAt(t)}function z(e,t,n){return e.slice(t,n)}function F(e){return e.length}function U(e){return e.length}function H(e,t){return t.push(e),e}var $=1,V=1,q=0,K=0,W=0,G="";function Y(e,t,n,r,i,a,o){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:$,column:V,length:o,return:""}}function X(e,t){return R(Y("",null,null,"",null,null,0),e,{length:-e.length},t)}function Z(){return W=K>0?B(G,--K):0,V--,10===W&&(V=1,$--),W}function J(){return W=K<q?B(G,K++):0,V++,10===W&&(V=1,$++),W}function Q(){return B(G,K)}function ee(){return K}function te(e,t){return z(G,e,t)}function ne(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function re(e){return $=V=1,q=F(G=e),K=0,[]}function ie(e){return G="",e}function ae(e){return j(te(K-1,le(91===e?e+2:40===e?e+1:e)))}function oe(e){for(;(W=Q())&&W<33;)J();return ne(e)>2||ne(W)>3?"":" "}function se(e,t){for(;--t&&J()&&!(W<48||W>102||W>57&&W<65||W>70&&W<97););return te(e,ee()+(t<6&&32==Q()&&32==J()))}function le(e){for(;J();)switch(W){case e:return K;case 34:case 39:34!==e&&39!==e&&le(W);break;case 40:41===e&&le(e);break;case 92:J()}return K}function ce(e,t){for(;J()&&e+W!==57&&(e+W!==84||47!==Q()););return"/*"+te(t,K-1)+"*"+L(47===e?e:J())}function de(e){for(;!ne(Q());)J();return te(e,K)}var ue="-ms-",pe="-moz-",me="-webkit-",fe="comm",he="rule",ge="decl",be="@keyframes";function ve(e,t){for(var n="",r=U(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function ye(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case ge:return e.return=e.return||e.value;case fe:return"";case be:return e.return=e.value+"{"+ve(e.children,r)+"}";case he:e.value=e.props.join(",")}return F(n=ve(e.children,r))?e.return=e.value+"{"+n+"}":""}function _e(e){return ie(xe("",null,null,null,[""],e=re(e),0,[0],e))}function xe(e,t,n,r,i,a,o,s,l){for(var c=0,d=0,u=o,p=0,m=0,f=0,h=1,g=1,b=1,v=0,y="",_=i,x=a,w=r,k=y;g;)switch(f=v,v=J()){case 40:if(108!=f&&58==B(k,u-1)){-1!=M(k+=D(ae(v),"&","&\f"),"&\f")&&(b=-1);break}case 34:case 39:case 91:k+=ae(v);break;case 9:case 10:case 13:case 32:k+=oe(f);break;case 92:k+=se(ee()-1,7);continue;case 47:switch(Q()){case 42:case 47:H(ke(ce(J(),ee()),t,n),l);break;default:k+="/"}break;case 123*h:s[c++]=F(k)*b;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+d:-1==b&&(k=D(k,/\f/g,"")),m>0&&F(k)-u&&H(m>32?Se(k+";",r,n,u-1):Se(D(k," ","")+";",r,n,u-2),l);break;case 59:k+=";";default:if(H(w=we(k,t,n,c,d,i,s,y,_=[],x=[],u),a),123===v)if(0===d)xe(k,t,w,w,_,a,u,s,x);else switch(99===p&&110===B(k,3)?100:p){case 100:case 108:case 109:case 115:xe(e,w,w,r&&H(we(e,w,w,0,0,i,s,y,i,_=[],u),x),i,x,u,s,r?_:x);break;default:xe(k,w,w,w,[""],x,0,s,x)}}c=d=m=0,h=b=1,y=k="",u=o;break;case 58:u=1+F(k),m=f;default:if(h<1)if(123==v)--h;else if(125==v&&0==h++&&125==Z())continue;switch(k+=L(v),v*h){case 38:b=d>0?1:(k+="\f",-1);break;case 44:s[c++]=(F(k)-1)*b,b=1;break;case 64:45===Q()&&(k+=ae(J())),p=Q(),d=u=F(y=k+=de(ee())),v++;break;case 45:45===f&&2==F(k)&&(h=0)}}return a}function we(e,t,n,r,i,a,o,s,l,c,d){for(var u=i-1,p=0===i?a:[""],m=U(p),f=0,h=0,g=0;f<r;++f)for(var b=0,v=z(e,u+1,u=O(h=o[f])),y=e;b<m;++b)(y=j(h>0?p[b]+" "+v:D(v,/&\f/g,p[b])))&&(l[g++]=y);return Y(e,t,n,0===i?he:s,l,c,d)}function ke(e,t,n){return Y(e,t,n,fe,L(W),z(e,2,-2),0)}function Se(e,t,n,r){return Y(e,t,n,ge,z(e,0,r),z(e,r+1,-1),r)}var Te=function(e,t,n){for(var r=0,i=0;r=i,i=Q(),38===r&&12===i&&(t[n]=1),!ne(i);)J();return te(e,K)},Ae=new WeakMap,Ce=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||Ae.get(n))&&!r){Ae.set(e,!0);for(var i=[],a=function(e,t){return ie(function(e,t){var n=-1,r=44;do{switch(ne(r)){case 0:38===r&&12===Q()&&(t[n]=1),e[n]+=Te(K-1,t,n);break;case 2:e[n]+=ae(r);break;case 4:if(44===r){e[++n]=58===Q()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=L(r)}}while(r=J());return e}(re(e),t))}(t,i),o=n.props,s=0,l=0;s<a.length;s++)for(var c=0;c<o.length;c++,l++)e.props[l]=i[s]?a[s].replace(/&\f/g,o[c]):o[c]+" "+a[s]}}},Ee=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function Ne(e,t){switch(function(e,t){return 45^B(e,0)?(((t<<2^B(e,0))<<2^B(e,1))<<2^B(e,2))<<2^B(e,3):0}(e,t)){case 5103:return me+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return me+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return me+e+pe+e+ue+e+e;case 6828:case 4268:return me+e+ue+e+e;case 6165:return me+e+ue+"flex-"+e+e;case 5187:return me+e+D(e,/(\w+).+(:[^]+)/,me+"box-$1$2"+ue+"flex-$1$2")+e;case 5443:return me+e+ue+"flex-item-"+D(e,/flex-|-self/,"")+e;case 4675:return me+e+ue+"flex-line-pack"+D(e,/align-content|flex-|-self/,"")+e;case 5548:return me+e+ue+D(e,"shrink","negative")+e;case 5292:return me+e+ue+D(e,"basis","preferred-size")+e;case 6060:return me+"box-"+D(e,"-grow","")+me+e+ue+D(e,"grow","positive")+e;case 4554:return me+D(e,/([^-])(transform)/g,"$1"+me+"$2")+e;case 6187:return D(D(D(e,/(zoom-|grab)/,me+"$1"),/(image-set)/,me+"$1"),e,"")+e;case 5495:case 3959:return D(e,/(image-set\([^]*)/,me+"$1$`$1");case 4968:return D(D(e,/(.+:)(flex-)?(.*)/,me+"box-pack:$3"+ue+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+me+e+e;case 4095:case 3583:case 4068:case 2532:return D(e,/(.+)-inline(.+)/,me+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(F(e)-1-t>6)switch(B(e,t+1)){case 109:if(45!==B(e,t+4))break;case 102:return D(e,/(.+:)(.+)-([^]+)/,"$1"+me+"$2-$3$1"+pe+(108==B(e,t+3)?"$3":"$2-$3"))+e;case 115:return~M(e,"stretch")?Ne(D(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==B(e,t+1))break;case 6444:switch(B(e,F(e)-3-(~M(e,"!important")&&10))){case 107:return D(e,":",":"+me)+e;case 101:return D(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+me+(45===B(e,14)?"inline-":"")+"box$3$1"+me+"$2$3$1"+ue+"$2box$3")+e}break;case 5936:switch(B(e,t+11)){case 114:return me+e+ue+D(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return me+e+ue+D(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return me+e+ue+D(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return me+e+ue+e+e}return e}var Pe=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ge:e.return=Ne(e.value,e.length);break;case be:return ve([X(e,{value:D(e.value,"@","@"+me)})],r);case he:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,function(t){switch(function(e){return(e=/(::plac\w+|:read-\w+)/.exec(e))?e[0]:e}(t)){case":read-only":case":read-write":return ve([X(e,{props:[D(t,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return ve([X(e,{props:[D(t,/:(plac\w+)/,":"+me+"input-$1")]}),X(e,{props:[D(t,/:(plac\w+)/,":-moz-$1")]}),X(e,{props:[D(t,/:(plac\w+)/,ue+"input-$1")]})],r)}return""})}}],Ie=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))})}var r,i,a=e.stylisPlugins||Pe,o={},s=[];r=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(e){for(var t=e.getAttribute("data-emotion").split(" "),n=1;n<t.length;n++)o[t[n]]=!0;s.push(e)});var l,c,d,u,p=[ye,(u=function(e){l.insert(e)},function(e){e.root||(e=e.return)&&u(e)})],m=(c=[Ce,Ee].concat(a,p),d=U(c),function(e,t,n,r){for(var i="",a=0;a<d;a++)i+=c[a](e,t,n,r)||"";return i});i=function(e,t,n,r){l=n,ve(_e(e?e+"{"+t.styles+"}":t.styles),m),r&&(f.inserted[t.name]=!0)};var f={key:t,sheet:new I({key:t,container:r,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:i};return f.sheet.hydrate(s),f},Oe={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Le(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}var Re=/[A-Z]|^ms/g,je=/_EMO_([^_]+?)_([^]*?)_EMO_/g,De=function(e){return 45===e.charCodeAt(1)},Me=function(e){return null!=e&&"boolean"!=typeof e},Be=Le(function(e){return De(e)?e:e.replace(Re,"-$&").toLowerCase()}),ze=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(je,function(e,t,n){return Ue={name:t,styles:n,next:Ue},t})}return 1===Oe[e]||De(e)||"number"!=typeof t||0===t?t:t+"px"};function Fe(e,t,n){if(null==n)return"";var r=n;if(void 0!==r.__emotion_styles)return r;switch(typeof n){case"boolean":return"";case"object":var i=n;if(1===i.anim)return Ue={name:i.name,styles:i.styles,next:Ue},i.name;var a=n;if(void 0!==a.styles){var o=a.next;if(void 0!==o)for(;void 0!==o;)Ue={name:o.name,styles:o.styles,next:Ue},o=o.next;return a.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Fe(e,t,n[i])+";";else for(var a in n){var o=n[a];if("object"!=typeof o){var s=o;null!=t&&void 0!==t[s]?r+=a+"{"+t[s]+"}":Me(s)&&(r+=Be(a)+":"+ze(a,s)+";")}else if(!Array.isArray(o)||"string"!=typeof o[0]||null!=t&&void 0!==t[o[0]]){var l=Fe(e,t,o);switch(a){case"animation":case"animationName":r+=Be(a)+":"+l+";";break;default:r+=a+"{"+l+"}"}}else for(var c=0;c<o.length;c++)Me(o[c])&&(r+=Be(a)+":"+ze(a,o[c])+";")}return r}(e,t,n);case"function":if(void 0!==e){var s=Ue,l=n(e);return Ue=s,Fe(e,t,l)}}var c=n;if(null==t)return c;var d=t[c];return void 0!==d?d:c}var Ue,He=/label:\s*([^\s;{]+)\s*(;|$)/g,$e=!!w.useInsertionEffect&&w.useInsertionEffect,Ve=$e||function(e){return e()},qe=($e||w.useLayoutEffect,w.createContext("undefined"!=typeof HTMLElement?Ie({key:"css"}):null)),Ke=(qe.Provider,function(e){return(0,w.forwardRef)(function(t,n){var r=(0,w.useContext)(qe);return e(t,r,n)})}),We=w.createContext({}),Ge=function(e,t,n){var r=e.key+"-"+t.name;!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles)},Ye=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Xe=Le(function(e){return Ye.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}),Ze=function(e){return"theme"!==e},Je=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?Xe:Ze},Qe=function(e,t,n){var r;if(t){var i=t.shouldForwardProp;r=e.__emotion_forwardProp&&i?function(t){return e.__emotion_forwardProp(t)&&i(t)}:i}return"function"!=typeof r&&n&&(r=e.__emotion_forwardProp),r},et=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return Ge(t,n,r),Ve(function(){return function(e,t,n){Ge(e,t,n);var r=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var i=t;do{e.insert(t===i?"."+r:"",i,e.sheet,!0),i=i.next}while(void 0!==i)}}(t,n,r)}),null},tt=function e(t,n){var r,i,a=t.__emotion_real===t,o=a&&t.__emotion_base||t;void 0!==n&&(r=n.label,i=n.target);var s=Qe(t,n,a),l=s||Je(o),c=!l("as");return function(){var d=arguments,u=a&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==r&&u.push("label:"+r+";"),null==d[0]||void 0===d[0].raw)u.push.apply(u,d);else{var p=d[0];u.push(p[0]);for(var m=d.length,f=1;f<m;f++)u.push(d[f],p[f])}var h=Ke(function(e,t,n){var r,a,d,p,m=c&&e.as||o,f="",h=[],g=e;if(null==e.theme){for(var b in g={},e)g[b]=e[b];g.theme=w.useContext(We)}"string"==typeof e.className?(r=t.registered,a=h,d=e.className,p="",d.split(" ").forEach(function(e){void 0!==r[e]?a.push(r[e]+";"):e&&(p+=e+" ")}),f=p):null!=e.className&&(f=e.className+" ");var v=function(e,t,n){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,i="";Ue=void 0;var a=e[0];null==a||void 0===a.raw?(r=!1,i+=Fe(n,t,a)):i+=a[0];for(var o=1;o<e.length;o++)i+=Fe(n,t,e[o]),r&&(i+=a[o]);He.lastIndex=0;for(var s,l="";null!==(s=He.exec(i));)l+="-"+s[1];var c=function(e){for(var t,n=0,r=0,i=e.length;i>=4;++r,i-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(i){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)}(i)+l;return{name:c,styles:i,next:Ue}}(u.concat(h),t.registered,g);f+=t.key+"-"+v.name,void 0!==i&&(f+=" "+i);var y=c&&void 0===s?Je(m):l,_={};for(var x in e)c&&"as"===x||y(x)&&(_[x]=e[x]);return _.className=f,n&&(_.ref=n),w.createElement(w.Fragment,null,w.createElement(et,{cache:t,serialized:v,isStringTag:"string"==typeof m}),w.createElement(m,_))});return h.displayName=void 0!==r?r:"Styled("+("string"==typeof o?o:o.displayName||o.name||"Component")+")",h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=o,h.__emotion_styles=u,h.__emotion_forwardProp=s,Object.defineProperty(h,"toString",{value:function(){return"."+i}}),h.withComponent=function(t,r){return e(t,P({},n,r,{shouldForwardProp:Qe(h,r,!0)})).apply(void 0,u)},h}}.bind(null);["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach(function(e){tt[e]=tt(e)});const nt=window.wp.blocks,rt=window.wp.coreData,it=window.wp.blockEditor;n(252);const at=(e,t=null)=>{const[n,r]=(0,y.useState)(()=>{try{const n=JSON.parse(localStorage.getItem(e));return(0,N.isNil)(n)?t:n}catch(e){return hn(e,"error"),t}});return[n,t=>{r(t),localStorage.setItem(e,JSON.stringify(t))}]},{entries:ot,setPrototypeOf:st,isFrozen:lt,getPrototypeOf:ct,getOwnPropertyDescriptor:dt}=Object;let{freeze:ut,seal:pt,create:mt}=Object,{apply:ft,construct:ht}="undefined"!=typeof Reflect&&Reflect;ut||(ut=function(e){return e}),pt||(pt=function(e){return e}),ft||(ft=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return e.apply(t,r)}),ht||(ht=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new e(...n)});const gt=It(Array.prototype.forEach),bt=It(Array.prototype.lastIndexOf),vt=It(Array.prototype.pop),yt=It(Array.prototype.push),_t=It(Array.prototype.splice),xt=It(String.prototype.toLowerCase),wt=It(String.prototype.toString),kt=It(String.prototype.match),St=It(String.prototype.replace),Tt=It(String.prototype.indexOf),At=It(String.prototype.trim),Ct=It(Object.prototype.hasOwnProperty),Et=It(RegExp.prototype.test),Nt=(Pt=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return ht(Pt,t)});var Pt;function It(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return ft(e,t,r)}}function Ot(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:xt;st&&st(e,null);let r=t.length;for(;r--;){let i=t[r];if("string"==typeof i){const e=n(i);e!==i&&(lt(t)||(t[r]=e),i=e)}e[i]=!0}return e}function Lt(e){for(let t=0;t<e.length;t++)Ct(e,t)||(e[t]=null);return e}function Rt(e){const t=mt(null);for(const[n,r]of ot(e))Ct(e,n)&&(Array.isArray(r)?t[n]=Lt(r):r&&"object"==typeof r&&r.constructor===Object?t[n]=Rt(r):t[n]=r);return t}function jt(e,t){for(;null!==e;){const n=dt(e,t);if(n){if(n.get)return It(n.get);if("function"==typeof n.value)return It(n.value)}e=ct(e)}return function(){return null}}const Dt=ut(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Mt=ut(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Bt=ut(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),zt=ut(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Ft=ut(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Ut=ut(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Ht=ut(["#text"]),$t=ut(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Vt=ut(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),qt=ut(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Kt=ut(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Wt=pt(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Gt=pt(/<%[\w\W]*|[\w\W]*%>/gm),Yt=pt(/\$\{[\w\W]*/gm),Xt=pt(/^data-[\-\w.\u00B7-\uFFFF]+$/),Zt=pt(/^aria-[\-\w]+$/),Jt=pt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Qt=pt(/^(?:\w+script|data):/i),en=pt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),tn=pt(/^html$/i),nn=pt(/^[a-z][.\w]*(-[.\w]+)+$/i);var rn=Object.freeze({__proto__:null,ARIA_ATTR:Zt,ATTR_WHITESPACE:en,CUSTOM_ELEMENT:nn,DATA_ATTR:Xt,DOCTYPE_NAME:tn,ERB_EXPR:Gt,IS_ALLOWED_URI:Jt,IS_SCRIPT_OR_DATA:Qt,MUSTACHE_EXPR:Wt,TMPLIT_EXPR:Yt});const an=function(){return"undefined"==typeof window?null:window};!function e(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:an();const n=t=>e(t);if(n.version="3.3.0",n.removed=[],!t||!t.document||9!==t.document.nodeType||!t.Element)return n.isSupported=!1,n;let{document:r}=t;const i=r,a=i.currentScript,{DocumentFragment:o,HTMLTemplateElement:s,Node:l,Element:c,NodeFilter:d,NamedNodeMap:u=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:p,DOMParser:m,trustedTypes:f}=t,h=c.prototype,g=jt(h,"cloneNode"),b=jt(h,"remove"),v=jt(h,"nextSibling"),y=jt(h,"childNodes"),_=jt(h,"parentNode");if("function"==typeof s){const e=r.createElement("template");e.content&&e.content.ownerDocument&&(r=e.content.ownerDocument)}let x,w="";const{implementation:k,createNodeIterator:S,createDocumentFragment:T,getElementsByTagName:A}=r,{importNode:C}=i;let E={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]};n.isSupported="function"==typeof ot&&"function"==typeof _&&k&&void 0!==k.createHTMLDocument;const{MUSTACHE_EXPR:N,ERB_EXPR:P,TMPLIT_EXPR:I,DATA_ATTR:O,ARIA_ATTR:L,IS_SCRIPT_OR_DATA:R,ATTR_WHITESPACE:j,CUSTOM_ELEMENT:D}=rn;let{IS_ALLOWED_URI:M}=rn,B=null;const z=Ot({},[...Dt,...Mt,...Bt,...Ft,...Ht]);let F=null;const U=Ot({},[...$t,...Vt,...qt,...Kt]);let H=Object.seal(mt(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),$=null,V=null;const q=Object.seal(mt(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let K=!0,W=!0,G=!1,Y=!0,X=!1,Z=!0,J=!1,Q=!1,ee=!1,te=!1,ne=!1,re=!1,ie=!0,ae=!1,oe=!0,se=!1,le={},ce=null;const de=Ot({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let ue=null;const pe=Ot({},["audio","video","img","source","image","track"]);let me=null;const fe=Ot({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),he="http://www.w3.org/1998/Math/MathML",ge="http://www.w3.org/2000/svg",be="http://www.w3.org/1999/xhtml";let ve=be,ye=!1,_e=null;const xe=Ot({},[he,ge,be],wt);let we=Ot({},["mi","mo","mn","ms","mtext"]),ke=Ot({},["annotation-xml"]);const Se=Ot({},["title","style","font","a","script"]);let Te=null;const Ae=["application/xhtml+xml","text/html"];let Ce=null,Ee=null;const Ne=r.createElement("form"),Pe=function(e){return e instanceof RegExp||e instanceof Function},Ie=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!Ee||Ee!==e){if(e&&"object"==typeof e||(e={}),e=Rt(e),Te=-1===Ae.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,Ce="application/xhtml+xml"===Te?wt:xt,B=Ct(e,"ALLOWED_TAGS")?Ot({},e.ALLOWED_TAGS,Ce):z,F=Ct(e,"ALLOWED_ATTR")?Ot({},e.ALLOWED_ATTR,Ce):U,_e=Ct(e,"ALLOWED_NAMESPACES")?Ot({},e.ALLOWED_NAMESPACES,wt):xe,me=Ct(e,"ADD_URI_SAFE_ATTR")?Ot(Rt(fe),e.ADD_URI_SAFE_ATTR,Ce):fe,ue=Ct(e,"ADD_DATA_URI_TAGS")?Ot(Rt(pe),e.ADD_DATA_URI_TAGS,Ce):pe,ce=Ct(e,"FORBID_CONTENTS")?Ot({},e.FORBID_CONTENTS,Ce):de,$=Ct(e,"FORBID_TAGS")?Ot({},e.FORBID_TAGS,Ce):Rt({}),V=Ct(e,"FORBID_ATTR")?Ot({},e.FORBID_ATTR,Ce):Rt({}),le=!!Ct(e,"USE_PROFILES")&&e.USE_PROFILES,K=!1!==e.ALLOW_ARIA_ATTR,W=!1!==e.ALLOW_DATA_ATTR,G=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Y=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,X=e.SAFE_FOR_TEMPLATES||!1,Z=!1!==e.SAFE_FOR_XML,J=e.WHOLE_DOCUMENT||!1,te=e.RETURN_DOM||!1,ne=e.RETURN_DOM_FRAGMENT||!1,re=e.RETURN_TRUSTED_TYPE||!1,ee=e.FORCE_BODY||!1,ie=!1!==e.SANITIZE_DOM,ae=e.SANITIZE_NAMED_PROPS||!1,oe=!1!==e.KEEP_CONTENT,se=e.IN_PLACE||!1,M=e.ALLOWED_URI_REGEXP||Jt,ve=e.NAMESPACE||be,we=e.MATHML_TEXT_INTEGRATION_POINTS||we,ke=e.HTML_INTEGRATION_POINTS||ke,H=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&Pe(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(H.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&Pe(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(H.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(H.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),X&&(W=!1),ne&&(te=!0),le&&(B=Ot({},Ht),F=[],!0===le.html&&(Ot(B,Dt),Ot(F,$t)),!0===le.svg&&(Ot(B,Mt),Ot(F,Vt),Ot(F,Kt)),!0===le.svgFilters&&(Ot(B,Bt),Ot(F,Vt),Ot(F,Kt)),!0===le.mathMl&&(Ot(B,Ft),Ot(F,qt),Ot(F,Kt))),e.ADD_TAGS&&("function"==typeof e.ADD_TAGS?q.tagCheck=e.ADD_TAGS:(B===z&&(B=Rt(B)),Ot(B,e.ADD_TAGS,Ce))),e.ADD_ATTR&&("function"==typeof e.ADD_ATTR?q.attributeCheck=e.ADD_ATTR:(F===U&&(F=Rt(F)),Ot(F,e.ADD_ATTR,Ce))),e.ADD_URI_SAFE_ATTR&&Ot(me,e.ADD_URI_SAFE_ATTR,Ce),e.FORBID_CONTENTS&&(ce===de&&(ce=Rt(ce)),Ot(ce,e.FORBID_CONTENTS,Ce)),oe&&(B["#text"]=!0),J&&Ot(B,["html","head","body"]),B.table&&(Ot(B,["tbody"]),delete $.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw Nt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw Nt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');x=e.TRUSTED_TYPES_POLICY,w=x.createHTML("")}else void 0===x&&(x=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let n=null;const r="data-tt-policy-suffix";t&&t.hasAttribute(r)&&(n=t.getAttribute(r));const i="dompurify"+(n?"#"+n:"");try{return e.createPolicy(i,{createHTML:e=>e,createScriptURL:e=>e})}catch(e){return console.warn("TrustedTypes policy "+i+" could not be created."),null}}(f,a)),null!==x&&"string"==typeof w&&(w=x.createHTML(""));ut&&ut(e),Ee=e}},Oe=Ot({},[...Mt,...Bt,...zt]),Le=Ot({},[...Ft,...Ut]),Re=function(e){yt(n.removed,{element:e});try{_(e).removeChild(e)}catch(t){b(e)}},je=function(e,t){try{yt(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){yt(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e)if(te||ne)try{Re(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},De=function(e){let t=null,n=null;if(ee)e="<remove></remove>"+e;else{const t=kt(e,/^[\r\n\t ]+/);n=t&&t[0]}"application/xhtml+xml"===Te&&ve===be&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const i=x?x.createHTML(e):e;if(ve===be)try{t=(new m).parseFromString(i,Te)}catch(e){}if(!t||!t.documentElement){t=k.createDocument(ve,"template",null);try{t.documentElement.innerHTML=ye?w:i}catch(e){}}const a=t.body||t.documentElement;return e&&n&&a.insertBefore(r.createTextNode(n),a.childNodes[0]||null),ve===be?A.call(t,J?"html":"body")[0]:J?t.documentElement:a},Me=function(e){return S.call(e.ownerDocument||e,e,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null)},Be=function(e){return e instanceof p&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof u)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},ze=function(e){return"function"==typeof l&&e instanceof l};function Fe(e,t,r){gt(e,e=>{e.call(n,t,r,Ee)})}const Ue=function(e){let t=null;if(Fe(E.beforeSanitizeElements,e,null),Be(e))return Re(e),!0;const r=Ce(e.nodeName);if(Fe(E.uponSanitizeElement,e,{tagName:r,allowedTags:B}),Z&&e.hasChildNodes()&&!ze(e.firstElementChild)&&Et(/<[/\w!]/g,e.innerHTML)&&Et(/<[/\w!]/g,e.textContent))return Re(e),!0;if(7===e.nodeType)return Re(e),!0;if(Z&&8===e.nodeType&&Et(/<[/\w]/g,e.data))return Re(e),!0;if(!(q.tagCheck instanceof Function&&q.tagCheck(r))&&(!B[r]||$[r])){if(!$[r]&&$e(r)){if(H.tagNameCheck instanceof RegExp&&Et(H.tagNameCheck,r))return!1;if(H.tagNameCheck instanceof Function&&H.tagNameCheck(r))return!1}if(oe&&!ce[r]){const t=_(e)||e.parentNode,n=y(e)||e.childNodes;if(n&&t)for(let r=n.length-1;r>=0;--r){const i=g(n[r],!0);i.__removalCount=(e.__removalCount||0)+1,t.insertBefore(i,v(e))}}return Re(e),!0}return e instanceof c&&!function(e){let t=_(e);t&&t.tagName||(t={namespaceURI:ve,tagName:"template"});const n=xt(e.tagName),r=xt(t.tagName);return!!_e[e.namespaceURI]&&(e.namespaceURI===ge?t.namespaceURI===be?"svg"===n:t.namespaceURI===he?"svg"===n&&("annotation-xml"===r||we[r]):Boolean(Oe[n]):e.namespaceURI===he?t.namespaceURI===be?"math"===n:t.namespaceURI===ge?"math"===n&&ke[r]:Boolean(Le[n]):e.namespaceURI===be?!(t.namespaceURI===ge&&!ke[r])&&!(t.namespaceURI===he&&!we[r])&&!Le[n]&&(Se[n]||!Oe[n]):!("application/xhtml+xml"!==Te||!_e[e.namespaceURI]))}(e)?(Re(e),!0):"noscript"!==r&&"noembed"!==r&&"noframes"!==r||!Et(/<\/no(script|embed|frames)/i,e.innerHTML)?(X&&3===e.nodeType&&(t=e.textContent,gt([N,P,I],e=>{t=St(t,e," ")}),e.textContent!==t&&(yt(n.removed,{element:e.cloneNode()}),e.textContent=t)),Fe(E.afterSanitizeElements,e,null),!1):(Re(e),!0)},He=function(e,t,n){if(ie&&("id"===t||"name"===t)&&(n in r||n in Ne))return!1;if(W&&!V[t]&&Et(O,t));else if(K&&Et(L,t));else if(q.attributeCheck instanceof Function&&q.attributeCheck(t,e));else if(!F[t]||V[t]){if(!($e(e)&&(H.tagNameCheck instanceof RegExp&&Et(H.tagNameCheck,e)||H.tagNameCheck instanceof Function&&H.tagNameCheck(e))&&(H.attributeNameCheck instanceof RegExp&&Et(H.attributeNameCheck,t)||H.attributeNameCheck instanceof Function&&H.attributeNameCheck(t,e))||"is"===t&&H.allowCustomizedBuiltInElements&&(H.tagNameCheck instanceof RegExp&&Et(H.tagNameCheck,n)||H.tagNameCheck instanceof Function&&H.tagNameCheck(n))))return!1}else if(me[t]);else if(Et(M,St(n,j,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==Tt(n,"data:")||!ue[e])if(G&&!Et(R,St(n,j,"")));else if(n)return!1;return!0},$e=function(e){return"annotation-xml"!==e&&kt(e,D)},Ve=function(e){Fe(E.beforeSanitizeAttributes,e,null);const{attributes:t}=e;if(!t||Be(e))return;const r={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:F,forceKeepAttr:void 0};let i=t.length;for(;i--;){const a=t[i],{name:o,namespaceURI:s,value:l}=a,c=Ce(o),d=l;let u="value"===o?d:At(d);if(r.attrName=c,r.attrValue=u,r.keepAttr=!0,r.forceKeepAttr=void 0,Fe(E.uponSanitizeAttribute,e,r),u=r.attrValue,!ae||"id"!==c&&"name"!==c||(je(o,e),u="user-content-"+u),Z&&Et(/((--!?|])>)|<\/(style|title|textarea)/i,u)){je(o,e);continue}if("attributename"===c&&kt(u,"href")){je(o,e);continue}if(r.forceKeepAttr)continue;if(!r.keepAttr){je(o,e);continue}if(!Y&&Et(/\/>/i,u)){je(o,e);continue}X&&gt([N,P,I],e=>{u=St(u,e," ")});const p=Ce(e.nodeName);if(He(p,c,u)){if(x&&"object"==typeof f&&"function"==typeof f.getAttributeType)if(s);else switch(f.getAttributeType(p,c)){case"TrustedHTML":u=x.createHTML(u);break;case"TrustedScriptURL":u=x.createScriptURL(u)}if(u!==d)try{s?e.setAttributeNS(s,o,u):e.setAttribute(o,u),Be(e)?Re(e):vt(n.removed)}catch(t){je(o,e)}}else je(o,e)}Fe(E.afterSanitizeAttributes,e,null)},qe=function e(t){let n=null;const r=Me(t);for(Fe(E.beforeSanitizeShadowDOM,t,null);n=r.nextNode();)Fe(E.uponSanitizeShadowNode,n,null),Ue(n),Ve(n),n.content instanceof o&&e(n.content);Fe(E.afterSanitizeShadowDOM,t,null)};return n.sanitize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=null,a=null,s=null,c=null;if(ye=!e,ye&&(e="\x3c!--\x3e"),"string"!=typeof e&&!ze(e)){if("function"!=typeof e.toString)throw Nt("toString is not a function");if("string"!=typeof(e=e.toString()))throw Nt("dirty is not a string, aborting")}if(!n.isSupported)return e;if(Q||Ie(t),n.removed=[],"string"==typeof e&&(se=!1),se){if(e.nodeName){const t=Ce(e.nodeName);if(!B[t]||$[t])throw Nt("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof l)r=De("\x3c!----\x3e"),a=r.ownerDocument.importNode(e,!0),1===a.nodeType&&"BODY"===a.nodeName||"HTML"===a.nodeName?r=a:r.appendChild(a);else{if(!te&&!X&&!J&&-1===e.indexOf("<"))return x&&re?x.createHTML(e):e;if(r=De(e),!r)return te?null:re?w:""}r&&ee&&Re(r.firstChild);const d=Me(se?e:r);for(;s=d.nextNode();)Ue(s),Ve(s),s.content instanceof o&&qe(s.content);if(se)return e;if(te){if(ne)for(c=T.call(r.ownerDocument);r.firstChild;)c.appendChild(r.firstChild);else c=r;return(F.shadowroot||F.shadowrootmode)&&(c=C.call(i,c,!0)),c}let u=J?r.outerHTML:r.innerHTML;return J&&B["!doctype"]&&r.ownerDocument&&r.ownerDocument.doctype&&r.ownerDocument.doctype.name&&Et(tn,r.ownerDocument.doctype.name)&&(u="<!DOCTYPE "+r.ownerDocument.doctype.name+">\n"+u),X&&gt([N,P,I],e=>{u=St(u,e," ")}),x&&re?x.createHTML(u):u},n.setConfig=function(){Ie(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),Q=!0},n.clearConfig=function(){Ee=null,Q=!1},n.isValidAttribute=function(e,t,n){Ee||Ie({});const r=Ce(e),i=Ce(t);return He(r,i,n)},n.addHook=function(e,t){"function"==typeof t&&yt(E[e],t)},n.removeHook=function(e,t){if(void 0!==t){const n=bt(E[e],t);return-1===n?void 0:_t(E[e],n,1)[0]}return vt(E[e])},n.removeHooks=function(e){E[e]=[]},n.removeAllHooks=function(){E={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},n}();const on=window.ReactJSXRuntime,sn=window.wp.primitives;sn.SVG,sn.Path,sn.SVG,sn.Path,sn.SVG,sn.Path;const ln=window.wp.hooks,cn="Mobile",dn="Tablet",un="Desktop",pn={},mn=getComputedStyle(document.documentElement);pn[cn]=mn.getPropertyValue("--wp--custom--breakpoint--sm")||"576px",pn[dn]=mn.getPropertyValue("--wp--custom--breakpoint--md")||"768px",pn[un]=mn.getPropertyValue("--wp--custom--breakpoint--lg")||"1024px";const fn={};Object.keys(pn).map(e=>{fn[e]=e===cn?"":`@media (min-width: ${pn[e]})`}),(0,b.__)("Mobile","content-blocks-builder"),fn[cn],(0,b.__)("Tablet","content-blocks-builder"),fn[dn],(0,b.__)("Desktop","content-blocks-builder"),fn[un];const hn=(e,t="log")=>{e&&"development"===window?.BBLOG?.environmentType&&(["log","info","warn","error","debug","dir","table"].includes(t)?console[t](e):console.log(e))},gn=window.wp.a11y,bn=window.wp.notices;var vn=n(531),yn=n.n(vn);class xn{constructor(e=""){e||(e=window.location.href),this.parsedURL=new URL(e)}get(e,t=null){return this.parsedURL.searchParams.get(e)||t}set(e,t,n=!0){this.parsedURL.searchParams.set(e,t),n&&history.pushState&&history.pushState({},null,this.parsedURL.href)}delete(e,t=!0){this.parsedURL.searchParams.delete(e),t&&history.pushState&&history.pushState({},null,this.parsedURL.href)}reload(){history?.go?history.go():window.location.reload()}getHref(){return this.parsedURL.href}}const wn=(0,y.createContext)(),kn={pageSize:6,currentPage:1,sortType:"featured",selectedKeywords:(()=>{let e=(new xn).get("keywordIds","");return e=e?e.split(",").map(e=>({id:parseInt(e)})):[],e})(),isOpenHelp:!1,searchTerm:(new xn).get("s",""),insertingItem:"",isReloading:!1,installingPlugins:[],activatingPlugins:[]},Sn=(e,t)=>"UPDATE_STATE"===t.type?{...e,...t.payload}:e,Tn=(e,t)=>{let n=[];if(!e.length||!t.length)return t;const[r,...i]=e;return n=t.filter(({keywordIds:e})=>e.indexOf(r.id)>-1),Tn(i,n)},An={limit:60,threshold:-100,keys:["title","keywords","description"]},Cn=(e="block")=>{let t;switch(e){case"block":t=window?.CBBBlockLibrary?.URL;break;case"variation":t=window?.CBBVariationLibrary?.URL;break;case"pattern":t=window?.CBBPatternLibrary?.URL;break;default:t="https://boldpatterns.net"}return t||(t="https://boldpatterns.net"),t},En=(t,n=[],r=h)=>(0,e.useSelect)(e=>e(r).isResolving(t,n),[]),Nn=(t,n=[],r=h)=>(0,e.useSelect)(e=>e(r).hasFinishedResolution(t,n),[]),Pn=tt.div`
  .scrollbar {
    overflow: auto;

    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    &::-webkit-scrollbar-thumb,
    &::-webkit-scrollbar-track {
      border-radius: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #b9b9b9;
    }

    &::-webkit-scrollbar-track {
      background-color: #e2e2e2;
    }
  }

  // Header notices
  .cbb-library__notices {
    .cbb-library-notice {
      margin: 0 0 10px 0;
      padding-right: 10px;
    }

    .components-notice__content {
      display: flex;
      flex-wrap: wrap;
    }

    .notice-message {
      margin-right: 12px;
    }

    .components-notice__actions {
      gap: 12px;

      > .components-notice__action {
        margin-left: 0 !important;
      }
    }
  }

  .template-list-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
    max-height: 100%;
    margin-bottom: 0;
    overflow: auto;

    .pagination-links {
      padding-top: 0.5rem;
      margin: auto 0 0;
    }
  }

  .template-list-not-found {
    padding: 0.5rem;
    background-color: #fff;
    border: 1px solid #ddd;
  }

  &.is-locked {
    pointer-events: none;
  }

  &.is-library-page {
    margin-top: 20px;
  }
`,In=tt(x.SearchControl)`
  > * {
    margin-bottom: 0;
  }
`,On=tt.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;

  .is-library-page > & {
    padding: 6px 8px;
    background-color: #fff;
    border: 1px solid #ddd;
  }

  .search-box {
    flex-grow: 1;

    > * {
      margin-bottom: 0;
    }
  }

  .keywords-filter {
    flex: 1 0 100%;
    order: 2;
    align-self: center;
  }

  .template-header__actions {
    margin-left: auto;
  }

  // $break-wide
  @media (min-width: 1280px) {
    // Force the header in one line.
    flex-wrap: nowrap;

    // Don't shink search ans sort
    .search-box,
    .sort-box {
      flex: 0 0 auto;
    }

    .search-box {
      width: 320px;
    }

    // Grow and shink filter
    .keywords-filter {
      flex: 1 1 auto;
      order: 0;
    }
  }
`,Ln=tt(x.Notice)`
  margin: auto 0 1rem;
  font-size: 1.2em;

  p {
    margin: 0;
  }
`,Rn=({className:e})=>{const{libraryState:t,updateLibraryState:n,itemsData:r,filteredFullItemsData:i,itemKeywords:a,isLoadingKeywords:o,isFinishedLoadingItemsData:s,closeModal:l=null,isModalOpen:c,contentType:d}=(0,y.useContext)(wn),{searchTerm:u,sortType:p,selectedKeywords:m,isOpenHelp:f}=t,h=(0,N.debounce)(e=>{e.length>=3?n({searchTerm:e,currentPage:1}):n({searchTerm:e})},500),g=(0,y.useRef)(null);return(0,y.useEffect)(()=>{s&&g.current&&g.current.focus()},[c,s]),(0,on.jsxs)(on.Fragment,{children:[(0,on.jsxs)(On,{className:E("template-header",e),children:[(0,on.jsx)(In,{className:"search-box",label:(0,b.__)("Search...","content-blocks-builder"),value:u,onChange:h,ref:g}),(0,on.jsx)(Kn,{onChange:e=>{n({sortType:e,currentPage:1})},value:p}),(0,on.jsx)(Yn,{items:i.length!==r.length?i:[],keywords:a,isLoading:o,selectedKeywords:m,onChange:e=>{n({selectedKeywords:e,currentPage:1})}}),(0,on.jsx)(zn,{isOpenHelp:f,onToggleHelp:()=>{n({isOpenHelp:!f})},onCloseModal:l})]}),f&&(0,on.jsxs)(Ln,{status:"info",className:"library__help",isDismissible:!1,children:[(0,on.jsx)("p",{children:(0,on.jsx)("strong",{children:"pattern"===d?(0,b.__)("Click on the preview to insert.","content-blocks-builder"):(0,b.__)("Click on the preview to import.","content-blocks-builder")})}),(0,on.jsx)("p",{children:(0,b.__)("Items with Pro features like parallax, animations... require the Pro version to work full-functional. They will still work perfectly fine on the Free version but without Pro features.","content-blocks-builder")}),(0,on.jsx)("p",{children:(0,b.__)("Some items require additional blocks, variations from the library. These dependent blocks or variations must be imported first in order to use these items.","content-blocks-builder")}),(0,on.jsx)("p",{children:(0,b.__)("Some items require blocks in external plugins. You have to install and activate those required plugins to use these items. All external plugins are developed and maintained by us, so they are safe to use.","content-blocks-builder")})]})]})};var jn=(0,on.jsx)(sn.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,on.jsx)(sn.Path,{d:"m13.06 12 6.47-6.47-1.06-1.06L12 10.94 5.53 4.47 4.47 5.53 10.94 12l-6.47 6.47 1.06 1.06L12 13.06l6.47 6.47 1.06-1.06L13.06 12Z"})}),Dn=(0,on.jsx)(sn.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,on.jsx)(sn.Path,{d:"M12 4a8 8 0 1 1 .001 16.001A8 8 0 0 1 12 4Zm0 1.5a6.5 6.5 0 1 0-.001 13.001A6.5 6.5 0 0 0 12 5.5Zm.75 11h-1.5V15h1.5v1.5Zm-.445-9.234a3 3 0 0 1 .445 5.89V14h-1.5v-1.25c0-.57.452-.958.917-1.01A1.5 1.5 0 0 0 12 8.75a1.5 1.5 0 0 0-1.5 1.5H9a3 3 0 0 1 3.305-2.984Z"})});const Mn={edit:(0,b.__)("Edit","content-blocks-builder"),editItem:(0,b.__)("Edit %s","content-blocks-builder"),save:(0,b.__)("Save","content-blocks-builder"),cancel:(0,b.__)("Cancel","content-blocks-builder"),delete:(0,b.__)("Delete","content-blocks-builder"),closeModal:(0,b.__)("Close modal","content-blocks-builder"),name:(0,b.__)("Name","content-blocks-builder"),label:(0,b.__)("Label","content-blocks-builder"),block:(0,b.__)("block","content-blocks-builder"),variation:(0,b.__)("variation","content-blocks-builder"),defaultVariation:(0,b.__)("default variation","content-blocks-builder"),pattern:(0,b.__)("pattern","content-blocks-builder"),blocks:(0,b.__)("Blocks","content-blocks-builder"),variations:(0,b.__)("Variations","content-blocks-builder"),patterns:(0,b.__)("Patterns","content-blocks-builder")},Bn=tt.div`
  display: flex;

  button {
    width: 40px;
    height: 40px;
  }
`,zn=({isOpenHelp:e,onToggleHelp:t,onCloseModal:n})=>(0,on.jsxs)(Bn,{className:"template-header__actions",children:[(0,on.jsx)(x.Button,{className:"template-header__help",onClick:t,icon:e?jn:Dn,iconSize:40,label:(0,b.__)("Toggle help","content-blocks-builder"),"aria-expanded":e}),n&&(0,on.jsx)(x.Button,{className:"template-header__close",onClick:n,icon:jn,iconSize:40,label:Mn.closeModal})]});var Fn;function Un(){return Un=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Un.apply(null,arguments)}var Hn=function(e){return w.createElement("svg",Un({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 16 16"},e),Fn||(Fn=w.createElement("path",{d:"M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"})))};const $n=[{value:"featured",title:(0,b.__)("Featured","content-blocks-builder")},{value:"latest",title:(0,b.__)("Latest","content-blocks-builder")},{value:"30_days",title:(0,b.__)("Most downloads last 30 days","content-blocks-builder"),shortTitle:(0,b.__)("Last 30 days","content-blocks-builder")},{value:"7_days",title:(0,b.__)("Most downloads last 7 days","content-blocks-builder"),shortTitle:(0,b.__)("Last 7 days","content-blocks-builder")}],Vn=tt(x.MenuGroup)`
  .is-active {
    color: #fff;
    background-color: var(--wp-admin-theme-color, #007cba);
  }
`,qn=tt.div`
  width: 120px;
  background-color: #f0f0f0;

  .components-dropdown {
    width: 100%;
  }

  .components-button.has-icon {
    width: 100%;
    padding: 8px;
    height: 40px;
  }

  @media (max-width: 599px) {
    /* $break-medium: 600px */
    width: 40px;

    .text {
      display: none;
    }

    .components-button.has-icon.has-text svg {
      margin-right: 0;
    }
  }

  @media (max-width: 1279px) {
    align-self: flex-start;
  }
`;function Kn({sortTypes:e=$n,value:t,onChange:n}){t=t||"featured";const r=(0,N.find)(e,e=>e.value===t);return(0,on.jsx)(qn,{className:"sort-box",children:(0,on.jsx)(x.Dropdown,{renderToggle:({onToggle:e})=>{var t;return(0,on.jsx)(x.Button,{onClick:e,icon:Hn,children:(0,on.jsx)("span",{className:"text",children:null!==(t=r?.shortTitle)&&void 0!==t?t:r.title})})},popoverProps:{placement:"bottom-end",__unstableSlotName:"sortType"},renderContent:({onClose:r})=>(0,on.jsx)(Vn,{children:e.map(e=>(0,on.jsx)(x.MenuItem,{className:e.value===t?"is-active":"",onClick:()=>{n(e.value),r(!0)},children:e.title},e.value))})})})}var Wn=(0,on.jsxs)(sn.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[(0,on.jsx)(sn.Path,{d:"m19 7.5h-7.628c-.3089-.87389-1.1423-1.5-2.122-1.5-.97966 0-1.81309.62611-2.12197 1.5h-2.12803v1.5h2.12803c.30888.87389 1.14231 1.5 2.12197 1.5.9797 0 1.8131-.62611 2.122-1.5h7.628z"}),(0,on.jsx)(sn.Path,{d:"m19 15h-2.128c-.3089-.8739-1.1423-1.5-2.122-1.5s-1.8131.6261-2.122 1.5h-7.628v1.5h7.628c.3089.8739 1.1423 1.5 2.122 1.5s1.8131-.6261 2.122-1.5h2.128z"})]});const Gn=tt.div`
  .keywords-filter__label {
    display: flex;
    margin-right: 0.5em;
    font-weight: 500;

    svg {
      margin-right: 5px;
    }
  }

  .keywords-filter__clear {
    font-size: 14px;
    font-weight: 700;
  }

  ul {
    display: inline-flex;
    flex-wrap: wrap;
    margin: 0;

    li {
      margin: 0;

      span {
        display: inline-block;
        padding-top: 0.2em;
        padding-bottom: 0.2em;
        margin-right: 0.3em;
      }

      .keyword {
        cursor: pointer;
      }

      .keyword:not(.is-selected) {
        color: var(--wp-admin-theme-color, #007cba);
      }

      .is-selected {
        font-weight: 500;
      }

      .clear-filter {
        margin-right: 0;
        margin-left: 0.5em;
        text-decoration: underline;
      }
    }
  }
`;function Yn({items:e=[],keywords:t,isLoading:n,selectedKeywords:r,onChange:i}){let a;if(e.length){const n=[];e.forEach(({keywordIds:e})=>{n.push(...e)});const r=[...new Set(n)];a=t.filter(({id:e})=>r.includes(e))}else a=t;const o=e=>{let t=[];if(r.length){t=[...r];const n=r.findIndex(({id:t})=>t===e.id);n>-1?t.splice(n,1):t.push(e),t.sort((e,t)=>e.count-t.count)}else t.push(e);i(t)};return(0,on.jsxs)(Gn,{className:E("keywords-filter",{"has-keywords":a&&!!a.length}),children:[n&&(0,on.jsx)(x.Spinner,{}),a&&!!a.length&&(0,on.jsx)("div",{className:"keywords-filter__keywords",children:(0,on.jsxs)("ul",{className:"",children:[(0,on.jsxs)("li",{className:"keywords-filter__label",children:[(0,on.jsx)(x.Icon,{icon:Wn}),(0,on.jsx)("span",{className:"",children:(0,b.__)(" Keywords:","content-blocks-builder")})]}),a.map((e,t)=>(0,on.jsx)("li",{onClick:()=>o(e),onKeyDown:t=>{"Enter"===t.key&&o(e)},tabIndex:0,children:(0,on.jsxs)("span",{className:E("keyword",{"is-selected":r.findIndex(({id:t})=>t===e.id)>-1}),children:[e.name,t!==a.length-1?",":""]})},t)),!!r.length&&(0,on.jsx)("li",{className:"keywords-filter__clear",onClick:()=>{i([])},onKeyDown:e=>{"Enter"===e.key&&i([])},tabIndex:0,children:(0,on.jsx)("span",{className:"keyword clear-filter",title:(0,b.__)("Clear filtered keywords","content-blocks-builder"),children:(0,b.__)("Clear all","content-blocks-builder")})})]})})]})}tt(x.BaseControl)`
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
`,tt.div`
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
`,tt(x.PanelBody)`
  margin-right: -16px;
  margin-left: -16px;
`;const Xn=tt.div`
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
`,Zn=tt(x.Flex)`
  padding-bottom: 8px;

  .label-control {
    margin-bottom: 0 !important;
  }
`,Jn=tt(x.Flex)`
  flex-wrap: wrap;
  width: auto;
  gap: 4px;

  > * {
    flex: 1 0 auto;
    margin: 0 !important;
  }
`;var Qn=(0,on.jsx)(sn.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,on.jsx)(sn.Path,{d:"M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"})}),er=(0,on.jsx)(sn.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,on.jsx)(sn.Path,{d:"M17.031 4.703 15.576 4l-1.56 3H14v.03l-2.324 4.47H9.5V13h1.396l-1.502 2.889h-.95a3.694 3.694 0 0 1 0-7.389H10V7H8.444a5.194 5.194 0 1 0 0 10.389h.17L7.5 19.53l1.416.719L15.049 8.5h.507a3.694 3.694 0 0 1 0 7.39H14v1.5h1.556a5.194 5.194 0 0 0 .273-10.383l1.202-2.304Z"})});function tr({isLinked:e,...t}){const n=e?(0,b.__)("Unlink Sides","content-blocks-builder"):(0,b.__)("Link Sides","content-blocks-builder");return(0,on.jsx)(x.Tooltip,{text:n,children:(0,on.jsx)("span",{children:(0,on.jsx)(x.Button,{...t,className:"component-group-control__linked-button",variant:e?"primary":"secondary",size:"small",icon:e?Qn:er,iconSize:16,"aria-label":n})})})}var nr=n(774),rr=n.n(nr);const ir=({values:e,fields:t})=>{const n=t.map(({name:t})=>{var n;return null!==(n=e[t])&&void 0!==n?n:void 0});return(r=n.filter(e=>e)).sort((e,t)=>(0,N.isObject)(e)?r.filter(t=>rr()(t,e)).length-r.filter(e=>rr()(e,t)).length:r.filter(t=>t===e).length-r.filter(e=>e===t).length).pop();var r},ar=({values:e,fields:t,renderControl:n,onChange:r,normalizeValue:i,...a})=>t.map(o=>{var s;const{name:l}=o;return(0,on.jsx)(y.Fragment,{children:n({value:null!==(s=e[l])&&void 0!==s?s:void 0,onChange:(c=l,t=>{t=i({side:c,value:t}),r({...e,[c]:t})}),fields:t,values:e,...o,...a})},`group-control-${l}`);var c}),or=({values:e,fields:t,renderControl:n,renderAllControl:r=null,onChange:i,normalizeValue:a,...o})=>(r||(r=n),r({value:ir({values:e,fields:t}),fields:t,values:e,onChange:n=>{n=a({side:"all",value:n});let r={...e};t.forEach(({name:e})=>{r={...r,[e]:n}}),i(r)},...o})),sr=({label:e,fields:t=[],values:n={},renderLabel:r=N.noop,renderControl:i=N.noop,onChange:a=N.noop,normalizeValue:o=({side:e,value:t})=>t,isLinkedGroup:s=!0,getInitialLinkedState:l=N.noop,className:c,columns:d,hideHeader:u=!1,...p})=>{const m={fields:t,values:n,renderControl:i,onChange:a,normalizeValue:o,...p},[f,h]=s?function(e){const[t,n]=(0,y.useState)(e);return(0,y.useEffect)(()=>n(e),[e]),[t,n]}(l(n)):[!1,N.noop];return(0,on.jsxs)(Xn,{className:E("group-control",c,{[`is-${d}-columns`]:d}),...p,children:[!u&&(0,on.jsxs)(Zn,{className:"group-control__header",children:[r({label:e,isLinkedGroup:s,...p}),s&&(0,on.jsx)(tr,{onClick:()=>{h(!f)},isLinked:f})]}),(0,on.jsxs)(Jn,{className:"group-control__body",children:[f&&(0,on.jsx)(or,{...m}),!f&&(0,on.jsx)(ar,{...m})]})]})};tt.fieldset`
  .components-range-control > .components-base-control__field {
    margin-bottom: 0;
  }
`,tt(sr)`
  .group-control__body {
    > *:nth-of-type(3) {
      order: 2;
    }

    .components-input-control__input {
      height: 40px;
    }
  }
`,tt(it.__experimentalPanelColorGradientSettings)`
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
`,tt(sr)`
  /* .block-editor-panel-color-gradient-settings__item {
    padding: 8px !important;
  } */

  .components-toggle-control {
    > * {
      margin-bottom: 0;
    }
  }
`,tt.div`
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
`,tt(sr)`
  .components-base-control__field {
    margin-bottom: 0;
  }
`,tt.div`
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
`;const lr="#1e1e1e",cr="2px";tt.div`
  margin-top: 1px;
  margin-left: 1px;

  .components-button {
    margin: -1px 0 0 -1px;
    vertical-align: middle;
    border-radius: 0;
    display: inline-flex;
    box-shadow: inset 0 0 0 ${"1px"} ${lr};

    &:first-of-type {
      border-radius: ${cr} 0 0 ${cr};
    }

    &:last-of-type {
      border-radius: 0 ${cr} ${cr} 0;
    }

    // The active button should look pressed.
    &.is-primary {
      box-shadow: inset 0 0 0 ${"1px"} ${lr};
    }
  }
`,tt.div`
  margin-top: 8px;
  margin-bottom: revert;
  font-size; 12px;
  color: #757575;

  &.no-margin {
    margin-top: 0;
  }
`,tt.div`
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
`,tt.div`
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
`,tt.div`
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
`,tt.div`
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
`,n(799),window.wp.keycodes,tt(x.Modal)`
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
`;const dr=tt.ul`
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
`,ur=({total:e,current:t=1,midSize:n=2,endSize:r=1,onChange:i,showAll:a=!1,nextPrev:o=!0})=>{if(e<2)return null;const s=[];let l=!1;o&&t&&t>1&&s.push((0,on.jsx)("a",{className:"pagination-link pagination-link--prev",onClick:()=>i(t-1),onKeyDown:e=>{"Enter"===e.key&&i(t-1)},tabIndex:0,children:(0,b.__)("Prev","content-blocks-builder")}));for(let o=1;o<=e;o++)o===t?(s.push((0,on.jsx)("span",{"aria-current":"page",className:"pagination-link is-active",children:o})),l=!0):a||o<=r||o>=t-n&&o<=t+n||o>e-r?(s.push((0,on.jsx)("a",{className:"pagination-link",onClick:()=>i(o),onKeyDown:e=>{"Enter"===e.key&&i(o)},tabIndex:0,children:o})),l=!0):l&&!a&&(s.push((0,on.jsx)("span",{className:"pagination-link dots",children:"…"})),l=!1);return o&&t&&t<e&&s.push((0,on.jsx)("a",{className:"pagination-link pagination-link--next",onClick:()=>i(t+1),onKeyDown:e=>{"Enter"===e.key&&i(t+1)},tabIndex:0,children:(0,b.__)("Next","content-blocks-builder")})),(0,on.jsx)(dr,{className:"pagination-links",children:s.map((e,t)=>(0,on.jsx)("li",{children:e},t))})},pr=tt.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;

  @media (min-width: 782px) {
    // $break-medium
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1280px) {
    // $break-wide
    grid-template-columns: repeat(3, 1fr);
  }
`,mr=tt.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #fff;
  border: 1px solid #ddd;
  transition: border-color 0.15s ease-in-out;

  .components-spinner {
    position: absolute;
    margin: 10px;
  }

  // The item preview
  .template-item__preview {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    min-height: 10rem;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;

    .template-item__thumbnail {
      max-height: 18rem;
      min-height: 11rem;
      margin: 0 0.5rem;

      img {
        width: 100%;
      }
    }
  }

  // Notices on the preview
  .item-notices {
    position: absolute;
    bottom: 0;
    left: 0;

    .item-notice {
      width: 100%;
      padding: 4px 10px;
      margin: 0;
    }

    .components-notice__actions {
      gap: 8px;

      > .components-notice__action {
        margin: 4px 0 0 !important;
      }
    }
  }

  // Pro badges
  .template-item__badges {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;

    > * {
      display: inline-block;
      padding: 3px 6px;
      color: #fff;
      background-color: var(--wp-admin-theme-color, #007cba);
      border-radius: 2px;

      + * {
        margin-left: 4px;
      }
    }
  }

  // Footer
  .template-item__footer {
    padding: 12px !important;
    overflow: auto;
    background-color: #f0f0f0;
    border-top: 1px solid #ddd;

    > * {
      margin: 0 0 0.5rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  // Wrapper of title(s)
  .template-item__title-wrapper {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 4px !important;

    .template-item__title {
      width: 100%;
      margin-top: 0;
      margin-bottom: 4px !important;
      overflow: hidden;
      font-size: 1rem;
      line-height: 1.4;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    // With view details link
    &.is-pattern-title {
      align-items: center;
      .template-item__title {
        max-width: calc(100% - 80px);
      }

      .template-item__details {
        margin-left: auto;
      }
    }
  }

  // Make long description scrollable
  .template-item__description {
    max-height: 90px;
  }

  // Tutorials, resource links
  .template-item__links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem 0.5rem;
    width: 100%;
    margin: 0;

    li {
      margin-bottom: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .template-item__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;

    > *:not(button) {
      flex-basis: 100%;
    }
  }

  // Ready
  &.is-ready {
    .template-item__preview {
      cursor: pointer;

      &:focus {
        border: 1px solid var(--wp-admin-theme-color, #007cba);
      }
    }

    &:hover {
      border-color: var(--wp-admin-theme-color, #007cba);
    }
  }

  // Is inserting
  &.is-inserting {
    .template-item__preview {
      opacity: 0.6;
    }

    .components-spinner {
      top: calc(50% - 16px);
      left: calc(50% - 16px);
    }
  }

  // Has missing blocks
  &.has-missing-blocks {
    .template-item__preview {
      padding: 1.25rem;
    }
  }
`,fr=({items:e,allItems:t,onChangePage:n,currentPage:r=1,pageSize:i=6,TemplateItemControl:a})=>t.length?(0,on.jsxs)(on.Fragment,{children:[(0,on.jsx)(pr,{className:"template-list",children:e.map(e=>(0,on.jsx)(a,{item:e},e.id))}),(0,on.jsx)(ur,{current:r,total:Math.ceil(t.length/i),onChange:n})]}):(0,on.jsx)("div",{className:"template-list-not-found",children:(0,b.__)("There is no items found.","content-blocks-builder")}),hr=["boldblocks/svg-block","boldblocks/icon-separator","boldblocks/youtube-block","boldblocks/breadcrumb-block","boldblocks/counting-number"],gr=(e,t=[])=>{if(!e.length)return t;for(let n=0;n<e.length;n++){const{name:r,innerBlocks:i=[],attributes:{originalName:a=""}={}}=e[n];let o="core/missing"===r?a:r;-1===t.indexOf(o)&&t.push(o),t=gr(i,t)}return t},br=(0,ln.applyFilters)("boldblocks.CBB.isPremium",!1),vr={installPlugin:(0,b.__)("Install %s","content-blocks-builder"),installAllPlugins:(0,b.__)("Install all plugins","content-blocks-builder"),activatePlugin:(0,b.__)("Activate %s","content-blocks-builder"),blockName:(0,b.__)("Block name: %s","content-blocks-builder"),parentBlockName:(0,b.__)("Parent block: %s","content-blocks-builder"),variationName:(0,b.__)("Variation name: %s","content-blocks-builder"),warningRequiresOtherCBBItems:(0,b.__)("This item requires additional blocks or variations from the library.","content-blocks-builder"),warningRequiresExternalBlocks:(0,b.__)("This item requires the following external block(s): %s. You must install and/or activate the required plugin(s) to use it.","content-blocks-builder"),warningRequiresPro:(0,b.__)("This item requires the Pro version of the plugin.","content-blocks-builder"),warningInstallActivatePlugins:(0,b.__)("You must install and/or activate the required plugin(s) to use this item.","content-blocks-builder"),warningManagePluginsPermission:(0,b.__)("You don't have permission to manage plugins, please contact the administrator for help.","content-blocks-builder"),successInstalledActivatedPlugin:(0,b.__)("The plugin %s has been installed and activated.","content-blocks-builder"),successInstalledActivatedAllPlugins:(0,b.__)("%s plugins have been installed and activated.","content-blocks-builder"),successActivatedPlugin:(0,b.__)("The plugin %s has been activated.","content-blocks-builder"),successReloadPage:(0,b.__)("Reloading the page.","content-blocks-builder"),actionImportAllCBBItems:(0,b.__)("Import all required item(s)","content-blocks-builder"),labelTutorials:(0,b.__)("Tutorials:","content-blocks-builder"),labelResources:(0,b.__)("Resources:","content-blocks-builder"),labelDependencies:(0,b.__)("Dependencies:","content-blocks-builder"),labelCBBBlocks:(0,b.__)("CBB blocks","content-blocks-builder"),labelCBBVariations:(0,b.__)("CBB variations","content-blocks-builder")},yr=({isPro:e,hasProFeatures:t})=>(0,on.jsx)(on.Fragment,{children:(e||t)&&(0,on.jsxs)("div",{className:"template-item__badges",children:[e&&(0,on.jsx)("span",{className:"pro-item",children:(0,b.__)("Pro","content-blocks-builder")}),t&&(0,on.jsx)("span",{className:"pro-features-item",children:(0,b.__)("Has pro features","content-blocks-builder")})]})}),_r=({links:e,label:t})=>(0,on.jsx)(on.Fragment,{children:!!e?.length&&(0,on.jsxs)("ul",{className:"template-item__links",children:[(0,on.jsx)("li",{className:"template-item__label",children:(0,on.jsx)("strong",{children:t})}),e.map(({url:e,title:t},n)=>(0,on.jsx)("li",{className:"template-item__link",children:(0,on.jsx)("a",{href:e,target:"_blank",children:t})},n))]})}),xr=({notices:e})=>(0,on.jsx)(on.Fragment,{children:!!e?.length&&(0,on.jsx)("div",{className:"item-notices",children:e.map(({type:e,message:t,actions:n=[],customActions:r=null},i)=>(0,on.jsxs)(x.Notice,{className:"item-notice",status:e,isDismissible:!1,actions:n,children:[t,r]},`notice-${i}`))})}),wr=({items:e,label:t,type:n,isLink:r})=>{const i=`edit.php?post_type=boldblocks_block&page=cbb-${n}-library`;return(0,on.jsx)(on.Fragment,{children:!!e?.length&&(0,on.jsxs)("ul",{className:"template-item__links",children:[!!t&&(0,on.jsx)("li",{className:"template-item__label",children:(0,on.jsx)("strong",{children:t})}),e.map(({title:e,id:t,isPublic:o=!1},s)=>(0,on.jsx)("li",{className:"template-item__link",children:r&&o?(0,on.jsx)("a",{href:(0,a.addQueryArgs)(`${i}&s=id%3A${t}`),target:"_blank",children:e}):(0,on.jsx)("code",{children:e})},`${n}-${s}`))]})})},kr=({missingPlugins:e,inactivePlugins:t,libraryState:n,updateLibraryState:r,onPluginInstalled:a,onAllPluginsInstalled:o,onPluginActivated:s})=>{const{activatingPlugins:l=[],installingPlugins:c=[]}=n,d=e=>r({activatingPlugins:e}),u=e=>r({installingPlugins:e});return(0,on.jsx)(on.Fragment,{children:(!!e?.length||!!t?.length)&&(0,on.jsxs)("div",{className:"template-item__actions",children:[e.length>1&&!n?.isReloading&&(0,on.jsx)(x.Button,{variant:"primary",size:"small",disabled:!!c.length,isBusy:!!c.length,onClick:t=>{t.preventDefault(),e.map(({slug:e})=>e).reduce((e,t)=>e.then(e=>(u([...c,t]),i()({path:"wp/v2/plugins",method:"POST",data:{slug:t,status:"active"}}).then(t=>(e.push(t),e)).catch(e=>hn(e,"error")).finally(()=>u(c.filter(e=>e!==t))))),Promise.resolve([])).then(e=>{o(e.length)})},children:vr.installAllPlugins},"all"),!!e.length&&e.map(({name:e,slug:t})=>!n?.isReloading&&(0,on.jsx)(x.Button,{variant:"primary",size:"small",disabled:!!c.length,isBusy:!!c.length&&-1!==c.indexOf(t),onClick:n=>{n.preventDefault(),u([...c,t]),i()({path:"wp/v2/plugins",method:"POST",data:{slug:t,status:"active"}}).then(()=>{a(e)}).catch(e=>hn(e,"error")).finally(()=>u(c.filter(e=>e!==t)))},children:(0,b.sprintf)(vr.installPlugin,e)},t)),!!t.length&&t.map(({name:e,plugin:t,slug:r})=>!n?.isReloading&&(0,on.jsx)(x.Button,{variant:"primary",size:"small",disabled:!!l.length,isBusy:!!l.length&&-1!==l.indexOf(r),onClick:n=>{n.preventDefault(),d([...l,r]),i()({path:`wp/v2/plugins/${t}`,method:"POST",data:{status:"active"}}).then(()=>{s(e)}).catch(e=>hn(e,"error")).finally(()=>{d(l.filter(e=>e!==r))})},children:(0,b.sprintf)(vr.activatePlugin,e)},r))]})})},Sr=({label:e,handleClick:t})=>{const[n,r]=(0,y.useState)(!1),[i,a]=(0,y.useState)(!1);return(0,on.jsx)("div",{className:"components-notice__actions",children:(0,on.jsx)(x.Button,{variant:"primary",size:"small",className:"components-notice__action",disabled:n||i,isBusy:n,onClick:e=>{e.preventDefault(),r(!0),t({setIsImported:a,setIsImporting:r})},children:e})})},Tr=({href:e,label:t=(0,b.__)("Learn more","content-blocks-builder")})=>(0,on.jsx)(x.ExternalLink,{href:e,children:t}),Ar=({item:e,canManagePlugins:t,plugins:n,availableBlockNames:r,localBlocks:o,localVariations:s,isPremium:l,setItemNotices:c,isItemLoadingData:d,reload:u})=>(0,y.useMemo)(()=>{var p,m;if(!e?.slug||d||(0,N.isUndefined)(t))return{};let f=[];const h=null!==(p=e?.libraryVariations)&&void 0!==p?p:[];if(h?.length){const e=(0,N.map)(s,"slug");f=h.filter(({slug:t})=>-1===e.indexOf(t))}const g=null!==(m=e?.libraryBlocks)&&void 0!==m?m:[];let v,y=[];if(g?.length){const e=(0,N.map)(o,"slug");y=g.filter(({slug:t})=>-1===e.indexOf(t))}let _=(e=>{let t;if((e=(null!=e?e:"").replaceAll(/\w+:\/\/\S*(w=(\d*))&(h=(\d*))&\w+\S*"/g,(e,t,n,r,i)=>n>800?e.replace(t,"w="+Math.floor(Number(n)/2)).replace(r,"h="+Math.floor(Number(i)/2)):e))&&(t=JSON.parse(e),t.length)){var n;const{attributes:{boldblocks:{height:e}={}}={}}=null!==(n=t[0])&&void 0!==n?n:{};if((0,N.isObject)(e)&&!(0,N.isEmpty)(e)){let{lg:{value:{value:n}}={}}=e;"100vh"===n&&(t[0]={...t[0],attributes:{...t[0].attributes,boldblocks:{...t[0].attributes.boldblocks,height:{...e,lg:{value:{height:"96vh",value:"96vh"}}}}}})}}return t})(e.meta?.blocks),x=e.meta?.dependent_blocks;e?.thumbnail||(0,N.isArray)(x)&&x.length||!_||(x=gr(_,[])),(0,N.isArray)(x)&&x.length&&(v=((e,t)=>{let n=[];t=t.filter(e=>0!==e.indexOf("core/")),e=(e=e.filter(e=>0!==e.indexOf("core/"))).filter(e=>0!==e.indexOf("boldblocks/")||-1!==hr.indexOf(e));for(let r=0;r<e.length;r++)-1===t.indexOf(e[r])&&n.push(e[r]);return n})(x,r));const w=v?.length||y?.length||f?.length;!w&&_&&(_=(0,nt.createBlocksFromInnerBlocksTemplate)(_));const k=e?.meta?.tutorials,S=e?.meta?.external_resources,T=e.meta?.dependencies,A=t&&n.length&&T?T.filter(({slug:e})=>!(0,N.find)(n,["slug",e])):[],C=t&&n.length&&T?T.map(({slug:e})=>{const t=(0,N.find)(n,["slug",e]);return!(!t||"inactive"!==t?.status)&&t}).filter(e=>e):[],E=e?.meta?.is_pro,P=e?.meta?.has_pro_features;let I=[];return w?((y?.length||f?.length)&&I.push({type:"warning",message:(0,on.jsxs)(on.Fragment,{children:[vr.warningRequiresOtherCBBItems,t&&(0,on.jsxs)(on.Fragment,{children:[" ",(0,on.jsx)(Tr,{href:(0,a.addQueryArgs)("edit.php?post_type=boldblocks_block&page=cbb-block-library"),label:(0,b.__)("Browse block library","content-blocks-builder")})," ",(0,on.jsx)(Tr,{href:(0,a.addQueryArgs)("edit.php?post_type=boldblocks_block&page=cbb-variation-library"),label:(0,b.__)("Browse variation library","content-blocks-builder")})]})]}),customActions:(0,on.jsx)(on.Fragment,{children:t&&(0,on.jsx)(Sr,{label:vr.actionImportAllCBBItems,handleClick:({setIsImported:e,setIsImporting:t})=>{Promise.all([Promise.all(y.map(async e=>(async({item:e,existingId:t=!1,localVariations:n,finishCallback:r=N.noop})=>{const{title:a,slug:o,content:s,keywords:l,variations:c,parentVariations:d,meta:{boldblocks_is_pro:u,boldblocks_has_pro_features:p,boldblocks_download_count:m,boldblocks_download_7_count:f,boldblocks_download_30_count:h,boldblocks_download_stats:g,boldblocks_tutorials:v,boldblocks_external_resources:y,is_pro:_,has_pro_features:x,download_count:w,download_7_count:k,download_30_count:S,download_stats:T,tutorials:A,external_resources:C,...E}={}}=e,P={title:a,slug:o,content:s,meta:E,keywords:l},I=[];c&&c?.length&&I.push(...c.map(({title:e,content:t,slug:n,meta:r})=>({title:e,content:t,slug:n,meta:r}))),d&&d?.length&&I.push(...d.map(({title:e,content:t,slug:n,meta:r})=>({title:e,content:t,slug:n,meta:r})));let O=[];return i()({path:t?`wp/v2/boldblocks-blocks/${t}`:"wp/v2/boldblocks-blocks",method:"POST",data:{...P,status:"publish"}}).then(e=>(O.push({id:e.id,slug:P.slug,type:"success",message:(0,b.sprintf)((0,b.__)("The block '%s' has been imported successfully.","content-blocks-builder"),P.title)}),I.length?Promise.all(I.map(async e=>{const t=((e,t)=>t.find(t=>e===t.slug))(e.slug,n);return i()({path:t?`wp/v2/boldblocks-variations/${t.id}`:"boldblocks/v1/createVariation",method:"POST",data:{...e,status:"publish",...t?{}:{cbb_variation_nonce:CBBBlocks?.variationNonce}}}).then(n=>({id:t?n.id:n?.post?.id,slug:e.slug,type:"success",message:(0,b.sprintf)((0,b.__)("The variation '%s' has been imported successfully.","content-blocks-builder"),e.title)})).catch(t=>(console.error(t),{slug:e.slug,type:"error",message:(0,b.sprintf)((0,b.__)("Failed to import variation: '%s'.","content-blocks-builder"),e.title)}))})).then(e=>{O.push(...e),r(O)}):r(O),O)).catch(e=>(console.error(e),O.push({slug:P.slug,type:"error",message:(0,b.sprintf)((0,b.__)("Failed to import block: '%s'.","content-blocks-builder"),P.title)}),r(O),O))})({item:e}))).then(e=>{const t=[];return e.forEach(e=>e.forEach(e=>t.push(e))),t}),Promise.all(f.map(async e=>(async({item:e,existingId:t=!1,finishCallback:n=N.noop})=>{const{title:r,slug:a,content:o,meta:{boldblocks_is_pro:s,boldblocks_has_pro_features:l,boldblocks_download_count:c,boldblocks_download_7_count:d,boldblocks_download_30_count:u,boldblocks_download_stats:p,boldblocks_tutorials:m,boldblocks_external_resources:f,is_pro:h,has_pro_features:g,download_count:v,download_7_count:y,download_30_count:_,download_stats:x,tutorials:w,external_resources:k,boldblocks_is_queryable:S,...T}={}}=e,A={title:r,slug:a,content:o,meta:T};let C=[];return i()({path:t?`wp/v2/boldblocks-variations/${t}`:"boldblocks/v1/createVariation",method:"POST",data:{...A,status:"publish",...t?{}:{cbb_variation_nonce:CBBBlocks?.variationNonce}}}).then(e=>(C.push({id:t?e.id:e?.post?.id,slug:A.slug,type:"success",message:(0,b.sprintf)((0,b.__)("The variation '%s' has been imported successfully.","content-blocks-builder"),A.title)}),n(C),C)).catch(e=>(console.error(e),C.push({slug:A.slug,type:"error",message:(0,b.sprintf)((0,b.__)("Failed to import variation: '%s'.","content-blocks-builder"),A.title)}),n(C),C))})({item:e}))).then(e=>{const t=[];return e.forEach(e=>e.forEach(e=>t.push(e))),t})]).then(n=>{t(!1),e(!0);let r=[];n.forEach(e=>{r=[...r,...e]}),r=[...r,{type:"success",message:vr.successReloadPage}],c([...I,...r]),u()})}})})}),v?.length&&I.push({type:"warning",message:(0,b.sprintf)(vr.warningRequiresExternalBlocks,v.join(", "))}),!v?.length||(0,N.isUndefined)(t)||t||I.push({type:"warning",message:vr.warningManagePluginsPermission})):(A.length||C.length)&&I.push({type:"warning",message:vr.warningInstallActivatePlugins}),!l&&E&&I.push({type:"warning",message:vr.warningRequiresPro}),c([...I]),{blocks:_,isMissingBlocks:w,tutorials:k,externalResources:S,dependentPlugins:T,customVariations:h,customBlocks:g,missingPlugins:A,inactivePlugins:C,isPro:E,hasProFeatures:P}},[e?.slug,t,n,l,d,s]),Cr=({item:e})=>{const{libraryState:t,stateCacheKey:n,updateLibraryState:r,onInsertPattern:i,availableBlockNames:a,plugins:o,canManagePlugins:s,localBlocks:l,localVariations:c,isResolvingLocalData:d,contentType:u}=(0,y.useContext)(wn),[,p]=at(n),m=()=>((e,t,n,r=500)=>{n({isReloading:!0}),setTimeout(()=>{t(e);const n=new xn;n.set("bb-template-modal",1),n.reload()},r)})(t,p,r),f=(e=>{var t=document.createElement("textarea");return t.innerHTML=e,t.value})(e.title),h=e?.loadingFullData||d,[g,v]=(0,y.useState)([]),{blocks:_,isMissingBlocks:w,tutorials:k,externalResources:S,dependentPlugins:T=[],customVariations:A,customBlocks:C,missingPlugins:N,inactivePlugins:P,isPro:I,hasProFeatures:O}=Ar({item:e,canManagePlugins:s,plugins:o,availableBlockNames:a,localBlocks:l,localVariations:c,setItemNotices:v,isItemLoadingData:h,reload:m}),L=!h&&!w&&!N?.length&&!P?.length&&(!I||br),R=(0,y.useCallback)(()=>{L&&!t?.insertingItem&&(r({insertingItem:e.id}),setTimeout(()=>{i({id:e.id,title:f},_)},0))},[L,t?.insertingItem,e.id,f,_]),j=(0,y.useMemo)(()=>e?.slug?(0,on.jsxs)("div",{className:"template-item__preview",onClick:R,onKeyDown:e=>{"Enter"===e.key&&R()},tabIndex:0,children:[e?.thumbnail?(0,on.jsx)("div",{className:"template-item__thumbnail scrollbar",dangerouslySetInnerHTML:{__html:e?.thumbnail}}):!w&&(0,on.jsx)(it.BlockPreview,{blocks:_,viewportWidth:1400}),(0,on.jsx)(yr,{isPro:I,hasProFeatures:O}),(0,on.jsx)(xr,{notices:g})]}):(0,on.jsx)("div",{className:"template-item__preview"}),[e?.slug,R,I,O,g]);return(0,on.jsx)(on.Fragment,{children:(0,on.jsxs)(mr,{className:E("template-item",{"is-ready":L,"is-pro":I,"has-pro-features":O,"has-missing-blocks":w,"require-pro":!br&&I,"is-loading-data":h,"is-inserting":t?.insertingItem===e.id}),children:[(h||t?.insertingItem===e.id)&&(0,on.jsx)(x.Spinner,{}),j,(0,on.jsxs)("div",{className:"template-item__footer",children:[(0,on.jsxs)("div",{className:"template-item__title-wrapper is-pattern-title",children:[(0,on.jsx)("h3",{className:"template-item__title",children:f}),e?.slug&&(0,on.jsx)("a",{href:`${Cn(u)}/pattern/${e?.slug}?utm_source=CBB&utm_campaign=pattern-inserter&utm_medium=link&utm_content=view-pattern`,className:"template-item__details",target:"_blank",children:(0,b.__)("View details","content-blocks-builder")})]}),(0,on.jsxs)("div",{className:"template-item__actions",children:[(0,on.jsx)(wr,{items:C,label:`${vr.labelCBBBlocks}:`,type:"block",isLink:!0}),(0,on.jsx)(wr,{items:A,label:`${vr.labelCBBVariations}:`,type:"variation",isLink:!0}),(0,on.jsx)(_r,{links:k,label:vr.labelTutorials}),(0,on.jsx)(_r,{links:S,label:vr.labelResources}),(0,on.jsx)(_r,{links:T.map(({slug:e,name:t})=>({url:`https://wordpress.org/plugins/${e}`,title:t})),label:vr.labelDependencies})]}),(0,on.jsx)(kr,{missingPlugins:N,inactivePlugins:P,libraryState:t,updateLibraryState:r,onPluginInstalled:e=>{v([...g,{type:"success",message:(0,b.sprintf)(vr.successInstalledActivatedPlugin,e)},{type:"success",message:vr.successReloadPage}]),m()},onAllPluginsInstalled:e=>{v([...g,{type:"success",message:(0,b.sprintf)(vr.successInstalledActivatedAllPlugins,e)},{type:"success",message:vr.successReloadPage}]),m()},onPluginActivated:e=>{v([...g,{type:"success",message:(0,b.sprintf)(vr.successActivatedPlugin,e)},{type:"success",message:vr.successReloadPage}]),m()}})]})]})})},Er=tt(x.Modal)`
  .components-modal__content {
    display: flex;
    padding: 1rem;
    background-color: #f9f9f9;

    > div {
      width: 100%;
    }
  }

  .cbb-library {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
  }

  &.is-locked {
    pointer-events: none;
  }
`;function Nr({isModalOpen:t=!1,setIsModalOpen:n,onCancel:r=N.noop,className:i}){const a="pattern",o=(0,N.capitalize)(a),s=`get${o}s`,l=`loadFull${o}s`,c=`get${o}Keywords`,d=`get${o}LibraryState`,u=`set${o}LibraryState`,p=`bb-library-state-${a}`,m={...kn,contentType:a},{[s]:f,[c]:g,[d]:v,getPlugins:_}=(0,e.useSelect)(e=>e(h),[]),{[u]:w}=(0,e.useDispatch)(h),k=()=>{n(!1),w({...z,insertingItem:""}),r()},S=(T="create",A="users",(0,e.useSelect)(e=>e(rt.store).canUser(T,A),[T,A]));var T,A;let C=_();const P=En("getPlugins");let I=Nn("getPlugins");(0,N.isUndefined)(S)||S||(I=!0);const O=f(),L=En(s),R=Nn(s),j=g(),D=En(c),[M,B]=at(p),[z,F]=(0,y.useReducer)(Sn,m,()=>{const e=Object.assign(m,v(),null!=M?M:{});return B(null),e}),{currentPage:U=1,pageSize:H=6}=z,$=e=>((e,t)=>e({type:"UPDATE_STATE",payload:t}))(F,e),{[l]:V}=(0,e.useDispatch)(h),[q,K]=((e,t,n)=>{const{pageSize:r,currentPage:i,sortType:a,selectedKeywords:o,searchTerm:s}=e,l=o.join(","),c=(0,y.useMemo)(()=>Tn(o,t),[l,t]),d=(0,y.useMemo)(()=>s&&s.length>=3?((e,t)=>{let n=[];if(!e||e.length<3)n=t;else if(e.startsWith("id:")){const r=parseInt(e.replace("id:",""));!isNaN(r)&&r&&(n=t.filter(({id:e})=>e===r))}else{const r=yn().go(e,t,An);r.length&&(n=r.map(({obj:e})=>e))}return n})(s,c):c,[s,c]),u=(0,y.useMemo)(()=>d.sort(((e,t={"30_days":"count_30","7_days":"count_7"})=>{let n;return"featured"===e?n=(e,t)=>t.order-e.order:"latest"===e?n=(e,t)=>t.id-e.id:"30_days"===e?n=(e,n)=>n.meta[t["30_days"]]-e.meta[t["30_days"]]:"7_days"===e&&(n=(e,n)=>n.meta[t["7_days"]]-e.meta[t["7_days"]]),n})(a)),[d,a]);let p=u.slice((i-1)*r,r*i);p=p.map(e=>({...e,loadingFullData:!e?.slug}));let m=p.map(({id:e,loadingFullData:t})=>!!t&&e).filter(e=>e);const[,f]=(0,y.useReducer)(()=>({}));return m.length&&n(m).then(()=>{f()}),[p,u]})(z,O,V),W=L||P||(0,N.isUndefined)(S),G=R&&I,Y=(0,nt.getBlockTypes)(),X=(0,N.map)(Y,"name"),[,Z]=function({shouldFocusBlock:t=!0}){const{getSelectedBlock:n}=(0,e.useSelect)(it.store),{destinationRootClientId:r,destinationIndex:i}=(0,e.useSelect)(e=>{const{getSelectedBlockClientId:t,getBlockRootClientId:n,getBlockIndex:r,getBlockOrder:i}=e(it.store),a=t();let o,s;return a?(o=n(a),s=r(a)+1):s=i(o).length,{destinationRootClientId:o,destinationIndex:s}},[]),{replaceBlocks:a,insertBlocks:o}=(0,e.useDispatch)(it.store),s=(0,y.useCallback)((e,s,l=!1)=>{const c=n();c&&(0,nt.isUnmodifiedDefaultBlock)(c)?a(c.clientId,e,null,t||l?0:null,s):o(e,i,r,!0,t||l?0:null,s);const d=Array.isArray(e)?e.length:1,u=(0,b.sprintf)(
// translators: %d: the name of the block that has been added
// translators: %d: the name of the block that has been added
(0,b._n)("%d block added.","%d blocks added.",d),d);(0,gn.speak)(u)},[n,a,o,r,i,t]),{createSuccessNotice:l}=(0,e.useDispatch)(bn.store),c=(0,y.useCallback)((e,t)=>{s((null!=t?t:[]).map(e=>(0,nt.cloneBlock)(e)),e.title),l((0,b.sprintf)(/* translators: %s: block pattern title. */ /* translators: %s: block pattern title. */
(0,b.__)('Block pattern "%s" inserted.',"content-blocks-builder"),e.title),{type:"snackbar"})},[l,s]);return[r,c]}({shouldFocusBlock:!0}),J=(e,t)=>{Z(e,t),$({insertingItem:""}),fetch(`${Cn(a)}/wp-json/boldblocks/v1/submitDownload${o}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.id}),credentials:"omit"}),k()},{records:Q,isResolving:ee}=(0,rt.useEntityRecords)("postType","boldblocks_block",{per_page:-1,_cbb_load_all:!0}),{records:te,isResolving:ne}=(0,rt.useEntityRecords)("postType","boldblocks_variation",{per_page:-1,_cbb_load_all:!0}),re=(0,y.useMemo)(()=>({libraryState:z,stateCacheKey:p,updateLibraryState:$,availableBlockNames:X,plugins:C,canManagePlugins:S,onInsertPattern:J,localBlocks:Q,localVariations:te,isResolvingLocalData:ee||ne,isFinishedLoadingItemsData:R,itemsData:O,filteredFullItemsData:K,itemKeywords:j,isLoadingKeywords:D,closeModal:k,isModalOpen:t,contentType:a}),[z,p,$,X,C,S,J,Q,ee,te,ne,R,O,K,j,D,k,t,a]);return(0,on.jsx)(wn.Provider,{value:re,children:(0,on.jsx)(Er,{onRequestClose:()=>k(),className:E("template-modal",i,{"is-locked":z?.installingPlugins?.length||z?.activatingPlugins?.length||z?.insertingItem||z?.isReloading}),isFullScreen:!0,__experimentalHideHeader:!0,children:(0,on.jsxs)(Pn,{className:"cbb-library",children:[(0,on.jsx)(Rn,{}),W&&(0,on.jsx)(x.Spinner,{}),(0,on.jsx)("div",{className:"template-list-wrapper scrollbar",children:G&&(0,on.jsx)(on.Fragment,{children:(0,on.jsx)(fr,{items:q,allItems:K,onChangePage:e=>{$({currentPage:e})},currentPage:U,pageSize:H,TemplateItemControl:Cr})})})]})})})}(0,v.registerPlugin)("boldblocks-block-templates",{render:()=>{const t=(0,e.useSelect)(e=>e(_.store).getCurrentPostType(),[]),n=(0,e.useSelect)(e=>e(h).getPatternInserterModalStatus(),[]),r=function(){const{setPatternInserterModalStatus:t}=(0,e.useDispatch)(h);return t}();if(["boldblocks_block","boldblocks_variation"].includes(t))return null;const i=new xn;i.get("bb-template-modal")&&(r(!0),i.delete("bb-template-modal"));const a=Object.assign(document.createElement("div"),{id:"boldblocks-templates-inserter"});return(0,y.createRoot)(a).render((0,on.jsx)(x.Button,{variant:"secondary",className:"button-insert-template",icon:A,onClick:()=>{r(!0)},children:(0,on.jsx)("span",{className:"button-insert-template__text",children:(0,b.__)("Pattern","content-blocks-builder")})})),(0,e.subscribe)(()=>{setTimeout(()=>{const e=document.querySelector(".edit-post-header-toolbar");e&&!e.querySelector("#boldblocks-templates-inserter")&&(e.append(a),e.classList.add("has-cbb-pattern-button"))},1)}),(0,on.jsx)(on.Fragment,{children:!!n&&(0,on.jsx)(Nr,{isModalOpen:n,setIsModalOpen:r})})}})})()})();