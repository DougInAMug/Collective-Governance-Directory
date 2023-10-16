var lt=Object.defineProperty;var it=(r,e,t)=>e in r?lt(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var u=(r,e,t)=>(it(r,typeof e!="symbol"?e+"":e,t),t);import{E as re,s as Se,v as Je,f as w,a as E,g as v,h as C,d as f,c as L,j as p,F as me,k as _e,G as we,i as R,B as d,H as je,w as Ke,x as Ye,y as Ze,D as Qe,r as J,u as X,I as Ie,C as Le,J as tt,l as $,m as U,n as ne,K as ot,e as We,L as ct,M as ht}from"../chunks/scheduler.3f1c164c.js";import{S as Oe,i as Te,a as O,t as T,b as H,d as y,m as B,e as D}from"../chunks/index.88c13b21.js";import{g as at,a as rt,e as Xe}from"../chunks/spread.ad56f1ef.js";import{w as oe,d as ae}from"../chunks/index.425cbd8c.js";import{I as nt}from"../chunks/Icon.64a80baf.js";import{b as ut}from"../chunks/paths.dcf49503.js";const st=r=>r==null||r==="",ft=r=>!st(r),Ee=r=>{const e=r.toString();if(typeof r=="string")return{callback:t=>t[r],identifier:e,key:r};if(typeof r=="function")return{callback:r,identifier:e,key:void 0};throw new Error(`Invalid field argument: ${String(r)}`)},De={contains:(r,e)=>pe(r).indexOf(pe(e))>-1,startsWith:(r,e)=>pe(r).startsWith(pe(e)),endsWith:(r,e)=>pe(r).endsWith(pe(e)),isEqualTo:(r,e)=>pe(r)===pe(e),isGreaterThan:(r,e)=>ze(r)?!1:r>e,isGreaterThanOrEqualTo:(r,e)=>ze(r)?!1:r>=e,isLessThan:(r,e)=>ze(r)?!1:r<e,isLessThanOrEqualTo:(r,e)=>ze(r)?!1:r<=e,isBetween:(r,e)=>{if(ze(r))return!1;const[t,a]=e;return r>=t&&r<=a},isStrictlyBetween:(r,e)=>{if(ze(r))return!1;const[t,a]=e;return r>t&&r<a},isTrue:(r,e)=>r===!0,isFalse:(r,e)=>r===!1,isNull:(r,e)=>r==null,isNotNull:(r,e)=>r!=null,whereIn:(r,e=[])=>{if(ze(r)||e.length===0)return!1;for(const{value:t,comparator:a}of e)if(a(r,t))return!0;return!1}};function pe(r=null){return String(r).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")}function ze(r){if(r==null)return!0}class gt{constructor(){u(this,"events",{change:[],clearFilters:[],clearSearch:[]});u(this,"triggerChange",oe(0))}add(e,t){this.events[e].push(t)}trigger(e){for(const t of this.events[e])t();e==="change"&&this.triggerChange.update(t=>t+1)}}class dt{constructor(e,t){u(this,"event");u(this,"rowsPerPage");u(this,"pageNumber");u(this,"search");u(this,"filters");u(this,"filterCount");u(this,"rawRows");u(this,"filteredRows");u(this,"pagedRows");u(this,"rowCount");u(this,"pages");u(this,"pagesWithEllipsis");u(this,"pageCount");u(this,"sort");u(this,"selected");u(this,"selectScope");u(this,"isAllSelected");this.event=new gt,this.rowsPerPage=oe(t.rowsPerPage),this.pageNumber=oe(1),this.search=oe({}),this.filters=oe([]),this.filterCount=this.createFilterCount(),this.rawRows=oe(e),this.filteredRows=this.createFilteredRows(),this.pagedRows=this.createPagedRows(),this.rowCount=this.createRowCount(),this.pages=this.createPages(),this.pagesWithEllipsis=this.createPagesWithEllipsis(),this.pageCount=this.createPageCount(),this.sort=oe({}),this.selected=oe([]),this.selectScope=oe("all"),this.isAllSelected=this.createIsAllSelected()}createFilterCount(){return ae(this.filters,e=>e.length)}createFilteredRows(){return ae([this.rawRows,this.search,this.filters],([e,t,a])=>(t.value&&(e=e.filter(n=>(t.scope??Object.keys(n)).map(i=>{const{callback:m}=Ee(i);return m}).some(i=>this.match(i(n),t.value))),this.pageNumber.set(1),this.selected.set([]),this.event.trigger("change")),a.length>0&&(a.forEach(n=>e=e.filter(s=>{const l=n.callback(s);return this.match(l,n.value,n.comparator)})),this.pageNumber.set(1),this.selected.set([]),this.event.trigger("change")),e))}match(e,t,a=null){if(st(t))return!0;if(!e&&a)return a(e,t);if(e){if(typeof e=="object")return Object.keys(e).some(n=>this.match(e[n],t,a))}else return De.contains(e,t);return a?a(e,t):De.contains(e,t)}createPagedRows(){return ae([this.filteredRows,this.rowsPerPage,this.pageNumber],([e,t,a])=>t?e.slice((a-1)*t,a*t):e)}createRowCount(){return ae([this.filteredRows,this.pageNumber,this.rowsPerPage],([e,t,a])=>{const n=e.length;return a?{total:n,start:t*a-a+1,end:Math.min(t*a,e.length)}:{total:n,start:1,end:n}})}createPages(){return ae([this.rowsPerPage,this.filteredRows],([e,t])=>e?Array.from(Array(Math.ceil(t.length/e))).map((n,s)=>s+1):[1])}createPagesWithEllipsis(){return ae([this.pages,this.pageNumber],([e,t])=>{if(e.length<=7)return e;const a=null,n=1,s=e.length;return t<=4?[...e.slice(0,5),a,s]:t<e.length-3?[n,a,...e.slice(t-2,t+1),a,s]:[n,a,...e.slice(e.length-5,e.length)]})}createPageCount(){return ae(this.pages,e=>e.length)}createIsAllSelected(){return ae([this.selected,this.pagedRows,this.filteredRows,this.selectScope],([e,t,a,n])=>{const s=n==="currentPage"?t.length:a.length;return s===e.length&&s!==0})}}class mt{constructor(e){u(this,"rawRows");u(this,"event");u(this,"sort");u(this,"backup");this.rawRows=e.rawRows,this.event=e.event,this.sort=e.sort,this.backup=[]}set(e=null){if(!e)return;const t=re(this.sort),{identifier:a}=Ee(e);t.identifier!==a&&this.sort.update(n=>n.direction=null),t.direction===null||t.direction==="desc"?this.asc(e):t.direction==="asc"&&this.desc(e)}asc(e,t="asc"){if(!e)return;const{identifier:a,callback:n,key:s}=Ee(e);this.sort.set({identifier:a,callback:n,direction:t,key:s}),this.rawRows.update(l=>(l.sort((i,m)=>{const[h,g]=[n(i),n(m)];return h===g?0:h===null?1:g===null?-1:typeof h=="boolean"?h===!1?1:-1:typeof h=="string"?h.localeCompare(g):typeof h=="number"?h-g:typeof h=="object"?JSON.stringify(h).localeCompare(JSON.stringify(g)):String(h).localeCompare(String(g))}),l)),this.log({identifier:a,callback:n,direction:t}),this.event.trigger("change")}desc(e,t="desc"){if(!e)return;const{identifier:a,callback:n,key:s}=Ee(e);this.sort.set({identifier:a,callback:n,direction:t,key:s}),this.rawRows.update(l=>(l.sort((i,m)=>{const[h,g]=[n(i),n(m)];return h===g?0:h===null?1:g===null?-1:typeof g=="boolean"?g===!1?1:-1:typeof g=="string"?g.localeCompare(h):typeof g=="number"?g-h:typeof g=="object"?JSON.stringify(g).localeCompare(JSON.stringify(h)):String(g).localeCompare(String(h))}),l)),this.log({identifier:a,callback:n,direction:t}),this.event.trigger("change")}apply(e=null){if(e)switch(e.direction){case"asc":return this.asc(e.orderBy);case"desc":return this.desc(e.orderBy);default:return this.set(e.orderBy)}else this.restore()}clear(){this.backup=[],this.sort.set({})}define(e,t="asc"){if(!e)return;const{identifier:a,callback:n,key:s}=Ee(e);this.sort.set({identifier:a,callback:n,direction:t,key:s})}restore(){for(const e of this.backup){const{key:t,callback:a,direction:n}=e,s=t??a;this[n](s)}}log(e){if(this.backup=this.backup.filter(t=>t.identifier!==e.identifier),this.backup.length>=3){const[t,a,n]=this.backup;this.backup=[a,n,e]}else this.backup=[...this.backup,e]}}class pt{constructor(e){u(this,"filteredRows");u(this,"pagedRows");u(this,"selected");u(this,"scope");u(this,"isAllSelected");u(this,"event");this.filteredRows=e.filteredRows,this.pagedRows=e.pagedRows,this.selected=e.selected,this.scope=e.selectScope,this.isAllSelected=e.isAllSelected,this.event=e.event}set(e){const t=re(this.selected);t.includes(e)?this.selected.set(t.filter(a=>a!==e)):this.selected.set([e,...t])}all(e=null){if(re(this.isAllSelected))return this.clear();const a=re(this.scope),n=a==="currentPage"?re(this.pagedRows):re(this.filteredRows);a==="currentPage"&&this.event.add("change",()=>this.clear()),e?this.selected.set(n.map(s=>s[e])):this.selected.set(n)}clear(){this.selected.set([])}}class _t{constructor(e){u(this,"pageNumber");u(this,"rowCount");u(this,"rowsPerPage");u(this,"event");this.pageNumber=e.pageNumber,this.rowCount=e.rowCount,this.rowsPerPage=e.rowsPerPage,this.event=e.event}goto(e){this.pageNumber.update(t=>{const a=re(this.rowsPerPage);if(a){const n=re(this.rowCount).total;e>=1&&e<=Math.ceil(n/a)&&(t=e,this.event.trigger("change"))}return t})}previous(){const e=re(this.pageNumber)-1;this.goto(e)}next(){const e=re(this.pageNumber)+1;this.goto(e)}}class wt{constructor(e){u(this,"search");u(this,"event");this.search=e.search,this.event=e.event}set(e,t=null){this.search.update(a=>(a={value:e??"",scope:t??null},a))}clear(){this.search.set({value:null,scope:null}),this.event.trigger("change"),this.event.trigger("clearSearch")}}class vt{constructor(e){u(this,"filters");u(this,"event");u(this,"collection");this.filters=e.filters,this.event=e.event}set(e,t,a=null){const{callback:n,identifier:s,key:l}=Ee(t),i={value:e,identifier:s,callback:n,comparator:a,key:l};this.filters.update(m=>(m=m.filter(h=>h.identifier!==s),ft(e)&&m.push(i),m))}clear(){this.filters.set([]),this.event.trigger("change"),this.event.trigger("clearFilters")}get(){return this.collection?this.collection:(this.collection=this.createCollection(),this.collection)}createCollection(){return ae(this.filters,e=>e.map(({value:t,callback:a,key:n,comparator:s})=>({value:t,filterBy:n??a,check:s?s.name:"contains"})))}}class kt{constructor(e,t,a){u(this,"filterHandler");u(this,"filterBy");u(this,"comparator");u(this,"callback");this.filterHandler=e,this.filterBy=t,this.comparator=a??De.contains,this.callback=()=>null}set(e,t){t&&(this.comparator=t),this.filterHandler.set(e,this.filterBy,this.comparator)}clear(){this.callback(),this.filterHandler.set(void 0,this.filterBy)}on(e,t){this.callback=t}}class bt{constructor(e,t){u(this,"filterHandler");u(this,"criteria");u(this,"filterBy");u(this,"selected");this.filterHandler=e,this.filterBy=t,this.criteria=[],this.selected=oe([])}set(e,t=De.contains){if(this.criteria.find(a=>a.value===e)?this.criteria=this.criteria.filter(a=>a.value!==e):this.criteria=[{value:e,comparator:t},...this.criteria],this.criteria.length===0)return this.clear();this.filterHandler.set(this.criteria,this.filterBy,De.whereIn),this.selected.set(this.criteria.map(a=>a.value))}getSelected(){return this.selected}clear(){this.criteria=[],this.selected.set([]),this.filterHandler.set(void 0,this.filterBy,De.whereIn)}}class Ct{constructor(e,t,a){u(this,"rawRows");u(this,"filteredRows");u(this,"callback");u(this,"precision");this.rawRows=e.rawRows,this.filteredRows=e.filteredRows,this.callback=Ee(t).callback,this.precision=a.precision}distinct(e=null){const a=re(this.rawRows).map(l=>this.callback(l)),s=(e?e(a):a).reduce((l,i)=>(l[i]=(l[i]??0)+1,l),{});return Object.entries(s).map(([l,i])=>({value:l,count:i}))}avg(e=null){return ae(this.filteredRows,t=>{if(t.length===0)return 0;const a=t.map(s=>this.callback(s)).filter(Boolean),n=e?e(a):a;return this.round(n.reduce((s,l)=>s+l,0)/n.length)})}sum(e=null){return ae(this.filteredRows,t=>{const a=t.map(s=>this.callback(s)),n=e?e(a):a;return this.round(n.reduce((s,l)=>s+l,0))})}setPrecision(e){this.precision=e}round(e){if(this.precision===0)return Math.round(e);const t=Math.pow(10,this.precision);return Math.round((e+Number.EPSILON)*t)/t}}class Rt{constructor(e=[],t={rowsPerPage:null}){u(this,"context");u(this,"sortHandler");u(this,"selectHandler");u(this,"pageHandler");u(this,"searchHandler");u(this,"filterHandler");u(this,"i18n");this.i18n=this.translate(t.i18n),this.context=new dt(e,t),this.sortHandler=new mt(this.context),this.selectHandler=new pt(this.context),this.pageHandler=new _t(this.context),this.searchHandler=new wt(this.context),this.filterHandler=new vt(this.context)}setRows(e){this.context.rawRows.set(e),this.applySort()}getRows(){return this.context.pagedRows}getRowCount(){return this.context.rowCount}getRowsPerPage(){return this.context.rowsPerPage}getPages(e={ellipsis:!1}){return e.ellipsis?this.context.pagesWithEllipsis:this.context.pages}getPageCount(){return this.context.pageCount}getPageNumber(){return this.context.pageNumber}setPage(e){switch(e){case"previous":return this.pageHandler.previous();case"next":return this.pageHandler.next();default:return this.pageHandler.goto(e)}}search(e,t=null){this.searchHandler.set(e,t)}clearSearch(){this.searchHandler.clear()}sort(e){this.setPage(1),this.sortHandler.set(e)}sortAsc(e){this.setPage(1),this.sortHandler.asc(e)}sortDesc(e){this.setPage(1),this.sortHandler.desc(e)}getSort(){return this.context.sort}applySort(e=null){this.sortHandler.apply(e)}defineSort(e,t){this.sortHandler.define(e,t)}clearSort(){this.sortHandler.clear()}filter(e,t,a=null){this.filterHandler.set(e,t,a)}getFilters(){return this.filterHandler.get()}createFilter(e,t){return new kt(this.filterHandler,e,t)}createAdvancedFilter(e){return new bt(this.filterHandler,e)}getFilterCount(){return this.context.filterCount}clearFilters(){this.filterHandler.clear()}select(e){this.selectHandler.set(e)}getSelected(){return this.context.selected}selectAll(e={}){this.context.selectScope.set(e.scope==="currentPage"?"currentPage":"all"),this.selectHandler.all(e.selectBy??null)}isAllSelected(){return this.context.isAllSelected}on(e,t){this.context.event.add(e,t)}createCalculation(e,t=null){return new Ct(this.context,e,{precision:(t==null?void 0:t.precision)??2})}translate(e){return{search:"Search...",show:"Show",entries:"entries",filter:"Filter",rowCount:"Showing {start} to {end} of {total} entries",noRows:"No entries found",previous:"Previous",next:"Next",...e}}update(e){console.log("%c%s","color:#e65100;background:#fff3e0;font-size:12px;border-radius:4px;padding:4px;text-align:center;","DataHandler.update(data) method is deprecated. Please use DataHandler.setRows(data) instead"),this.context.rawRows.set(e)}applySorting(e=null){this.applySort(e)}getSorted(){return this.getSort()}getTriggerChange(){return this.context.event.triggerChange}}function Nt(r){let e,t,a,n,s,l,i,m,h;const g=r[8].default,k=Je(g,r,r[7],null);return{c(){e=w("th"),t=w("div"),a=w("strong"),k&&k.c(),n=E(),s=w("span"),this.h()},l(c){e=v(c,"TH",{class:!0});var _=C(e);t=v(_,"DIV",{class:!0});var S=C(t);a=v(S,"STRONG",{class:!0});var K=C(a);k&&k.l(K),K.forEach(f),n=L(S),s=v(S,"SPAN",{class:!0}),C(s).forEach(f),S.forEach(f),_.forEach(f),this.h()},h(){p(a,"class","svelte-1311rr9"),p(s,"class","svelte-1311rr9"),me(s,"asc",r[3].direction==="asc"),me(s,"desc",r[3].direction==="desc"),p(t,"class","flex svelte-1311rr9"),_e(t,"justify-content",r[2]==="left"?"flex-start":r[2]==="right"?"flex-end":"center"),p(e,"class",l=we(r[6].class??"")+" svelte-1311rr9"),me(e,"sortable",r[1]),me(e,"active",r[3].identifier===r[4])},m(c,_){R(c,e,_),d(e,t),d(t,a),k&&k.m(a,null),d(t,n),d(t,s),i=!0,m||(h=je(e,"click",r[9]),m=!0)},p(c,[_]){k&&k.p&&(!i||_&128)&&Ke(k,g,c,c[7],i?Ze(g,c[7],_,null):Ye(c[7]),null),(!i||_&8)&&me(s,"asc",c[3].direction==="asc"),(!i||_&8)&&me(s,"desc",c[3].direction==="desc"),_&4&&_e(t,"justify-content",c[2]==="left"?"flex-start":c[2]==="right"?"flex-end":"center"),(!i||_&64&&l!==(l=we(c[6].class??"")+" svelte-1311rr9"))&&p(e,"class",l),(!i||_&66)&&me(e,"sortable",c[1]),(!i||_&88)&&me(e,"active",c[3].identifier===c[4])},i(c){i||(O(k,c),i=!0)},o(c){T(k,c),i=!1},d(c){c&&f(e),k&&k.d(c),m=!1,h()}}}function zt(r,e,t){let a,{$$slots:n={},$$scope:s}=e,{handler:l}=e,{orderBy:i}=e,{align:m="left"}=e;const h=i==null?void 0:i.toString(),g=l.getSort();Qe(r,g,c=>t(3,a=c));const k=()=>l.sort(i);return r.$$set=c=>{t(6,e=J(J({},e),X(c))),"handler"in c&&t(0,l=c.handler),"orderBy"in c&&t(1,i=c.orderBy),"align"in c&&t(2,m=c.align),"$$scope"in c&&t(7,s=c.$$scope)},e=X(e),[l,i,m,a,h,g,e,s,n,k]}class ye extends Oe{constructor(e){super(),Te(this,e,zt,Nt,Se,{handler:0,orderBy:1,align:2})}}function Et(r){let e,t,a,n,s,l;return{c(){e=w("th"),t=w("input"),this.h()},l(i){e=v(i,"TH",{class:!0});var m=C(e);t=v(m,"INPUT",{type:!0,placeholder:!0,spellcheck:!0,class:!0}),m.forEach(f),this.h()},h(){p(t,"type","text"),p(t,"placeholder",a=r[0].i18n.filter),p(t,"spellcheck","false"),p(t,"class","svelte-11i3j5h"),_e(t,"text-align",r[2]),p(e,"class",n=we(r[5].class??"")+" svelte-11i3j5h")},m(i,m){R(i,e,m),d(e,t),Ie(t,r[4]),s||(l=[je(t,"input",r[6]),je(t,"input",r[7])],s=!0)},p(i,[m]){m&1&&a!==(a=i[0].i18n.filter)&&p(t,"placeholder",a),m&16&&t.value!==i[4]&&Ie(t,i[4]),m&4&&_e(t,"text-align",i[2]),m&32&&n!==(n=we(i[5].class??"")+" svelte-11i3j5h")&&p(e,"class",n)},i:Le,o:Le,d(i){i&&f(e),s=!1,tt(l)}}}function Lt(r,e,t){let{handler:a}=e,{filterBy:n}=e,{align:s="left"}=e,{comparator:l=null}=e,i="";a.on("clearFilters",()=>t(4,i=""));function m(){i=this.value,t(4,i)}const h=()=>a.filter(i,n,l);return r.$$set=g=>{t(5,e=J(J({},e),X(g))),"handler"in g&&t(0,a=g.handler),"filterBy"in g&&t(1,n=g.filterBy),"align"in g&&t(2,s=g.align),"comparator"in g&&t(3,l=g.comparator)},e=X(e),[a,n,s,l,i,e,m,h]}class Be extends Oe{constructor(e){super(),Te(this,e,Lt,Et,Se,{handler:0,filterBy:1,align:2,comparator:3})}}function St(r){let e=r[0].i18n.noRows+"",t;return{c(){t=$(e)},l(a){t=U(a,e)},m(a,n){R(a,t,n)},p(a,n){n&1&&e!==(e=a[0].i18n.noRows+"")&&ne(t,e)},d(a){a&&f(t)}}}function Ot(r){let e,t=r[0].i18n.rowCount.replace("{start}",`<b>${r[2].start}</b>`).replace("{end}",`<b>${r[2].end}</b>`).replace("{total}",`<b>${r[2].total}</b>`)+"",a;return{c(){e=new ot(!1),a=We(),this.h()},l(n){e=ct(n,!1),a=We(),this.h()},h(){e.a=a},m(n,s){e.m(t,n,s),R(n,a,s)},p(n,s){s&5&&t!==(t=n[0].i18n.rowCount.replace("{start}",`<b>${n[2].start}</b>`).replace("{end}",`<b>${n[2].end}</b>`).replace("{total}",`<b>${n[2].total}</b>`)+"")&&e.p(t)},d(n){n&&(f(a),e.d())}}}function Tt(r){let e;function t(s,l){return s[2].total>0?Ut:$t}let a=t(r),n=a(r);return{c(){n.c(),e=We()},l(s){n.l(s),e=We()},m(s,l){n.m(s,l),R(s,e,l)},p(s,l){a===(a=t(s))&&n?n.p(s,l):(n.d(1),n=a(s),n&&(n.c(),n.m(e.parentNode,e)))},d(s){s&&f(e),n.d(s)}}}function $t(r){let e=r[0].i18n.noRows+"",t;return{c(){t=$(e)},l(a){t=U(a,e)},m(a,n){R(a,t,n)},p(a,n){n&1&&e!==(e=a[0].i18n.noRows+"")&&ne(t,e)},d(a){a&&f(t)}}}function Ut(r){let e,t=r[2].start+"",a,n,s,l=r[2].end+"",i,m,h,g=r[2].total+"",k;return{c(){e=w("b"),a=$(t),n=$(`-\r
            `),s=w("b"),i=$(l),m=$(`/\r
            `),h=w("b"),k=$(g)},l(c){e=v(c,"B",{});var _=C(e);a=U(_,t),_.forEach(f),n=U(c,`-\r
            `),s=v(c,"B",{});var S=C(s);i=U(S,l),S.forEach(f),m=U(c,`/\r
            `),h=v(c,"B",{});var K=C(h);k=U(K,g),K.forEach(f)},m(c,_){R(c,e,_),d(e,a),R(c,n,_),R(c,s,_),d(s,i),R(c,m,_),R(c,h,_),d(h,k)},p(c,_){_&4&&t!==(t=c[2].start+"")&&ne(a,t),_&4&&l!==(l=c[2].end+"")&&ne(i,l),_&4&&g!==(g=c[2].total+"")&&ne(k,g)},d(c){c&&(f(e),f(n),f(s),f(m),f(h))}}}function Pt(r){let e,t;function a(l,i){return l[1]?Tt:l[2].total>0?Ot:St}let n=a(r),s=n(r);return{c(){e=w("aside"),s.c(),this.h()},l(l){e=v(l,"ASIDE",{class:!0});var i=C(e);s.l(i),i.forEach(f),this.h()},h(){p(e,"class",t=we(r[4].class??"")+" svelte-1tjrquk")},m(l,i){R(l,e,i),s.m(e,null)},p(l,[i]){n===(n=a(l))&&s?s.p(l,i):(s.d(1),s=n(l),s&&(s.c(),s.m(e,null))),i&16&&t!==(t=we(l[4].class??"")+" svelte-1tjrquk")&&p(e,"class",t)},i:Le,o:Le,d(l){l&&f(e),s.d()}}}function Ht(r,e,t){let a,{handler:n}=e,{small:s=!1}=e;const l=n.getRowCount();return Qe(r,l,i=>t(2,a=i)),r.$$set=i=>{t(4,e=J(J({},e),X(i))),"handler"in i&&t(0,n=i.handler),"small"in i&&t(1,s=i.small)},e=X(e),[n,s,a,l,e]}class yt extends Oe{constructor(e){super(),Te(this,e,Ht,Pt,Se,{handler:0,small:1})}}function Bt(r){let e,t,a,n,s;return{c(){e=w("input"),this.h()},l(l){e=v(l,"INPUT",{class:!0,placeholder:!0,spellcheck:!0}),this.h()},h(){p(e,"class",t=we(r[2].class??"")+" svelte-ykkz3r"),p(e,"placeholder",a=r[0].i18n.search),p(e,"spellcheck","false")},m(l,i){R(l,e,i),Ie(e,r[1]),n||(s=[je(e,"input",r[3]),je(e,"input",r[4])],n=!0)},p(l,[i]){i&4&&t!==(t=we(l[2].class??"")+" svelte-ykkz3r")&&p(e,"class",t),i&1&&a!==(a=l[0].i18n.search)&&p(e,"placeholder",a),i&2&&e.value!==l[1]&&Ie(e,l[1])},i:Le,o:Le,d(l){l&&f(e),n=!1,tt(s)}}}function Dt(r,e,t){let{handler:a}=e,n="";a.on("clearSearch",()=>t(1,n=""));function s(){n=this.value,t(1,n)}const l=()=>a.search(n);return r.$$set=i=>{t(2,e=J(J({},e),X(i))),"handler"in i&&t(0,a=i.handler)},e=X(e),[a,n,e,s,l]}class At extends Oe{constructor(e){super(),Te(this,e,Dt,Bt,Se,{handler:0})}}function jt(r){let e;const t=r[2].default,a=Je(t,r,r[3],null);return{c(){a&&a.c()},l(n){a&&a.l(n)},m(n,s){a&&a.m(n,s),e=!0},p(n,s){a&&a.p&&(!e||s&8)&&Ke(a,t,n,n[3],e?Ze(t,n[3],s,null):Ye(n[3]),null)},i(n){e||(O(a,n),e=!0)},o(n){T(a,n),e=!1},d(n){a&&a.d(n)}}}function Ft(r){let e,t;const a=[{name:"json"},r[1],{iconNode:r[0]}];let n={$$slots:{default:[jt]},$$scope:{ctx:r}};for(let s=0;s<a.length;s+=1)n=J(n,a[s]);return e=new nt({props:n}),{c(){H(e.$$.fragment)},l(s){y(e.$$.fragment,s)},m(s,l){B(e,s,l),t=!0},p(s,[l]){const i=l&3?at(a,[a[0],l&2&&rt(s[1]),l&1&&{iconNode:s[0]}]):{};l&8&&(i.$$scope={dirty:l,ctx:s}),e.$set(i)},i(s){t||(O(e.$$.fragment,s),t=!0)},o(s){T(e.$$.fragment,s),t=!1},d(s){D(e,s)}}}function Mt(r,e,t){let{$$slots:a={},$$scope:n}=e;const s=[["path",{d:"M20 16v-8l3 8v-8"}],["path",{d:"M15 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2z"}],["path",{d:"M1 8h3v6.5a1.5 1.5 0 0 1 -3 0v-.5"}],["path",{d:"M7 15a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h1a1 1 0 0 1 1 1"}]];return r.$$set=l=>{t(1,e=J(J({},e),X(l))),"$$scope"in l&&t(3,n=l.$$scope)},e=X(e),[s,e,a,n]}class It extends Oe{constructor(e){super(),Te(this,e,Mt,Ft,Se,{})}}const Wt=It;function Vt(r){let e;const t=r[2].default,a=Je(t,r,r[3],null);return{c(){a&&a.c()},l(n){a&&a.l(n)},m(n,s){a&&a.m(n,s),e=!0},p(n,s){a&&a.p&&(!e||s&8)&&Ke(a,t,n,n[3],e?Ze(t,n[3],s,null):Ye(n[3]),null)},i(n){e||(O(a,n),e=!0)},o(n){T(a,n),e=!1},d(n){a&&a.d(n)}}}function Gt(r){let e,t;const a=[{name:"download"},r[1],{iconNode:r[0]}];let n={$$slots:{default:[Vt]},$$scope:{ctx:r}};for(let s=0;s<a.length;s+=1)n=J(n,a[s]);return e=new nt({props:n}),{c(){H(e.$$.fragment)},l(s){y(e.$$.fragment,s)},m(s,l){B(e,s,l),t=!0},p(s,[l]){const i=l&3?at(a,[a[0],l&2&&rt(s[1]),l&1&&{iconNode:s[0]}]):{};l&8&&(i.$$scope={dirty:l,ctx:s}),e.$set(i)},i(s){t||(O(e.$$.fragment,s),t=!0)},o(s){T(e.$$.fragment,s),t=!1},d(s){D(e,s)}}}function qt(r,e,t){let{$$slots:a={},$$scope:n}=e;const s=[["path",{d:"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"}],["path",{d:"M7 11l5 5l5 -5"}],["path",{d:"M12 4l0 12"}]];return r.$$set=l=>{t(1,e=J(J({},e),X(l))),"$$scope"in l&&t(3,n=l.$$scope)},e=X(e),[s,e,a,n]}class Jt extends Oe{constructor(e){super(),Te(this,e,qt,Gt,Se,{})}}const Kt=Jt,Yt=[{organizationName:"Ökodorf Sieben Linden",organizationURL:"https://siebenlinden.org",artefactTitle:"Entscheidungsfindung",artefactURL:"https://siebenlinden.org/de/oekodorf/soziales/entscheidungsfindung/",language:"DE",numberOfCharacters:4400,lastChecked:"2023-09-19"},{organizationName:"Luftschlosserei",organizationURL:"https://luftschlosserei.org",artefactTitle:"Entscheidungsfindung",artefactURL:"https://luftschlosserei.org/wordpress/wp-content/uploads/2015/02/2014-04-03-konsens.pdf",language:"DE",numberOfCharacters:9e3,lastChecked:"2023-10-05"},{organizationName:"Luftschlosserei",organizationURL:"https://luftschlosserei.org",artefactTitle:"Soziales Miteinander",artefactURL:"https://luftschlosserei.org/wordpress/wp-content/uploads/2015/03/Luftschlosserei-Soziales-Miteinander.pdf",language:"DE",numberOfCharacters:7900,lastChecked:"2023-10-05"},{organizationName:"Luftschlosserei",organizationURL:"https://luftschlosserei.org",artefactTitle:"Gemeinsame Ökonomie",artefactURL:"https://luftschlosserei.org/wordpress/wp-content/uploads/2017/07/luftschlosserei-gemeinsame-%C3%B6konomie.pdf",language:"DE",numberOfCharacters:23200,lastChecked:"2023-10-05"},{organizationName:"East Lake Commons",organizationURL:"https://www.eastlakecommons.org",artefactTitle:"The Book of Commons",artefactURL:"https://www.eastlakecommons.org/Documents/Public/BOC_Public.pdf",language:"EN",numberOfCharacters:44900,lastChecked:"2023-09-19"},{organizationName:"Kanthaus",organizationURL:"https://kanthaus.online",artefactTitle:"Constitution",artefactURL:"https://kanthaus.online/en/governance/constitution",language:"EN",numberOfCharacters:15100,lastChecked:"2023-09-14"},{organizationName:"Kanthaus",organizationURL:"https://kanthaus.online",artefactTitle:"Verfassung",artefactURL:"https://kanthaus.online/de/governance/constitution",translationOf:"Constitution",translationOfLink:"https://kanthaus.online/en/governance/constitution",language:"DE",numberOfCharacters:17300,lastChecked:"2023-09-14"},{organizationName:"Kanthaus",organizationURL:"https://kanthaus.online",artefactTitle:"Collective Agreements",artefactURL:"https://kanthaus.online/en/governance/collectiveagreements",language:"EN",numberOfCharacters:4400,lastChecked:"2023-09-14"},{organizationName:"Kanthaus",organizationURL:"https://kanthaus.online",artefactTitle:"Gemeinschaftliche Vereinbarungen",artefactURL:"https://kanthaus.online/de/governance/collectiveagreements",translationOf:"Collective Agreements",translationOfLink:"https://kanthaus.online/en/governance/collectiveagreements",language:"DE",numberOfCharacters:5300,lastChecked:"2023-09-14"},{organizationName:"S14",organizationURL:"https://www.ooooo.be",artefactTitle:"(no title)",artefactURL:"https://www.ooooo.be/etherhtml/e2h.php?_=S14",language:"EN",numberOfCharacters:20300,lastChecked:"2023-09-14"},{organizationName:"Schwarz 10",organizationURL:"http://schwarz10.de",artefactTitle:"Task Auction",artefactURL:"http://schwarz10.de/taskauction/index.html",language:"EN",numberOfCharacters:5400,lastChecked:"2023-09-14"},{organizationName:"Schwarz 10",organizationURL:"http://schwarz10.de",artefactTitle:"Wahlbörse",artefactURL:"http://schwarz10.de/wahlboerse/index.html",language:"EN",numberOfCharacters:2700,lastChecked:"2023-09-14"},{organizationName:"Moulinage de Chirols",organizationURL:"https://lemoulinagedechirols.org",artefactTitle:"Charte",artefactURL:"https://lemoulinagedechirols.org/wp-content/uploads/2022/03/La-Charte-du-collectif-du-Moulinage-de-Chirols-06_03_2019.pdf",language:"FR",numberOfCharacters:8800,lastChecked:"2023-10-06"},{organizationName:"Earthsong Eco-Neighbourhood",organizationURL:"https://www.earthsong.org.nz",artefactTitle:"Membership Agreement",artefactURL:"https://drive.google.com/file/d/1Zc0kPcQeNrSTdZB-_lQt9HN_zwBilj4v/view",language:"EN",numberOfCharacters:9e3,lastChecked:"2023-10-11"},{organizationName:"Earthsong Eco-Neighbourhood",organizationURL:"https://www.earthsong.org.nz",artefactTitle:"Our Communication Agreements",artefactURL:"https://drive.google.com/file/d/0B83z3bYhMF_VWjZrc2ZuSk1CV0k/view?resourcekey=0-HsV_ktEAzt4ScILvxUEqww",language:"EN",numberOfCharacters:700,lastChecked:"2023-10-11"},{organizationName:"Earthsong Eco-Neighbourhood",organizationURL:"https://www.earthsong.org.nz",artefactTitle:"Coloured Cards Decision‐Making",artefactURL:"https://drive.google.com/file/d/0B83z3bYhMF_VWkw4RVQ0NW9BLU0/view?resourcekey=0-ws7k3Pi3Y4qMX2kipCyAKg",language:"EN",numberOfCharacters:3300,lastChecked:"2023-10-11"},{organizationName:"Funkwhale",organizationURL:"https://funkwhale.audio",artefactTitle:"Statuts de l'association",artefactURL:"https://funkwhale.audio/fr/collective",language:"FR",numberOfCharacters:18100,lastChecked:"2023-10-16"},{organizationName:"Funkwhale",organizationURL:"https://funkwhale.audio",artefactTitle:"Collective statutes",artefactURL:"https://funkwhale.audio/en_US/collective",translationOf:"Statuts de l'association",translationOfLink:"https://funkwhale.audio/fr/collective",language:"EN",numberOfCharacters:17e3,lastChecked:"2023-10-16"},{organizationName:"Funkwhale",organizationURL:"https://funkwhale.audio",artefactTitle:"Code of Conduct",artefactURL:"https://funkwhale.audio/en_US/code-of-conduct",language:"EN",numberOfCharacters:6900,lastChecked:"2023-10-16"},{organizationName:"Funkwhale",organizationURL:"https://funkwhale.audio",artefactTitle:"Code de conduite",artefactURL:"https://funkwhale.audio/fr/code-of-conduct",translationOf:"Code of Conduct",translationOfLink:"https://funkwhale.audio/en_US/code-of-conduct",language:"FR",numberOfCharacters:8300,lastChecked:"2023-10-16"},{organizationName:"Hackerspace Gent",organizationURL:"https://hackerspace.gent",artefactTitle:"The Hackerspace Blueprint",artefactURL:"https://hackerspace.design/",language:"EN",numberOfCharacters:46500,lastChecked:"2023-10-16"},{organizationName:"Omni Commons",organizationURL:"https://omnicommons.org",artefactTitle:"Founding Document",artefactURL:"https://omnicommons.org/wiki/Founding_Document",language:"EN",numberOfCharacters:6500,lastChecked:"2023-10-16"},{organizationName:"Omni Commons",organizationURL:"https://omnicommons.org",artefactTitle:"Rules",artefactURL:"https://omnicommons.org/wiki/Rules",language:"EN",numberOfCharacters:1e3,lastChecked:"2023-10-16"},{organizationName:"Omni Commons",organizationURL:"https://omnicommons.org",artefactTitle:"Safer Space Policy",artefactURL:"https://omnicommons.org/wiki/Safer_Space_Policy",language:"EN",numberOfCharacters:7500,lastChecked:"2023-10-16"},{organizationName:"Omni Commons",organizationURL:"https://omnicommons.org",artefactTitle:"Statement of Purpose",artefactURL:"https://omnicommons.org/wiki/Statement_of_Purpose",language:"EN",numberOfCharacters:400,lastChecked:"2023-10-16"},{organizationName:"Omni Commons",organizationURL:"https://omnicommons.org",artefactTitle:"Cops at the Door",artefactURL:"https://omnicommons.org/wiki/Cops_at_the_Door",language:"EN",numberOfCharacters:2e3,lastChecked:"2023-10-16"},{organizationName:"Omni Commons",organizationURL:"https://omnicommons.org",artefactTitle:"Conflict Resolution Policy",artefactURL:"https://omnicommons.org/wiki/Conflict_Resolution_Policy",language:"EN",numberOfCharacters:5200,lastChecked:"2023-10-16"},{organizationName:"Omni Commons",organizationURL:"https://omnicommons.org",artefactTitle:"Bylaws",artefactURL:"https://omnicommons.org/wiki/Bylaws",language:"EN",numberOfCharacters:33200,lastChecked:"2023-10-16"}],Zt={dataEntries:Yt};function xe(r,e,t){const a=r.slice();return a[4]=e[t],a}function Qt(r){let e;return{c(){e=$("Organization name")},l(t){e=U(t,"Organization name")},m(t,a){R(t,e,a)},d(t){t&&f(e)}}}function Xt(r){let e;return{c(){e=$("Artefact title")},l(t){e=U(t,"Artefact title")},m(t,a){R(t,e,a)},d(t){t&&f(e)}}}function xt(r){let e;return{c(){e=$("Translated from")},l(t){e=U(t,"Translated from")},m(t,a){R(t,e,a)},d(t){t&&f(e)}}}function ea(r){let e;return{c(){e=$("Language")},l(t){e=U(t,"Language")},m(t,a){R(t,e,a)},d(t){t&&f(e)}}}function ta(r){let e;return{c(){e=$("Number of characters")},l(t){e=U(t,"Number of characters")},m(t,a){R(t,e,a)},d(t){t&&f(e)}}}function aa(r){let e;return{c(){e=$("Last checked on")},l(t){e=U(t,"Last checked on")},m(t,a){R(t,e,a)},d(t){t&&f(e)}}}function ra(r){let e;return{c(){e=$("—")},l(t){e=U(t,"—")},m(t,a){R(t,e,a)},p:Le,d(t){t&&f(e)}}}function na(r){let e=r[4].translationOf+"",t;return{c(){t=$(e)},l(a){t=U(a,e)},m(a,n){R(a,t,n)},p(a,n){n&1&&e!==(e=a[4].translationOf+"")&&ne(t,e)},d(a){a&&f(t)}}}function et(r){let e,t,a,n=r[4].organizationName+"",s,l,i,m,h,g=r[4].artefactTitle+"",k,c,_,S,K,j,ce=r[4].language+"",Y,ve,F,he=r[4].numberOfCharacters.toLocaleString()+"",P,x,ee,Z=r[4].lastChecked+"",fe,te;function $e(N,b){return N[4].translationOf?na:ra}let Q=$e(r),M=Q(r);return{c(){e=w("tr"),t=w("td"),a=w("a"),s=$(n),i=E(),m=w("td"),h=w("a"),k=$(g),_=E(),S=w("td"),M.c(),K=E(),j=w("td"),Y=$(ce),ve=E(),F=w("td"),P=$(he),x=E(),ee=w("td"),fe=$(Z),te=E(),this.h()},l(N){e=v(N,"TR",{class:!0});var b=C(e);t=v(b,"TD",{class:!0});var se=C(t);a=v(se,"A",{href:!0});var Ue=C(a);s=U(Ue,n),Ue.forEach(f),se.forEach(f),i=L(b),m=v(b,"TD",{class:!0});var le=C(m);h=v(le,"A",{href:!0});var Pe=C(h);k=U(Pe,g),Pe.forEach(f),le.forEach(f),_=L(b),S=v(b,"TD",{class:!0});var ge=C(S);M.l(ge),ge.forEach(f),K=L(b),j=v(b,"TD",{class:!0});var ke=C(j);Y=U(ke,ce),ke.forEach(f),ve=L(b),F=v(b,"TD",{class:!0});var ue=C(F);P=U(ue,he),ue.forEach(f),x=L(b),ee=v(b,"TD",{style:!0,class:!0});var ie=C(ee);fe=U(ie,Z),ie.forEach(f),te=L(b),b.forEach(f),this.h()},h(){p(a,"href",l=r[4].organizationURL),p(t,"class","svelte-n4n5jp"),p(h,"href",c=r[4].artefactURL),p(m,"class","svelte-n4n5jp"),p(S,"class","svelte-n4n5jp"),p(j,"class","svelte-n4n5jp"),p(F,"class","svelte-n4n5jp"),_e(ee,"white-space","nowrap"),p(ee,"class","svelte-n4n5jp"),p(e,"class","svelte-n4n5jp")},m(N,b){R(N,e,b),d(e,t),d(t,a),d(a,s),d(e,i),d(e,m),d(m,h),d(h,k),d(e,_),d(e,S),M.m(S,null),d(e,K),d(e,j),d(j,Y),d(e,ve),d(e,F),d(F,P),d(e,x),d(e,ee),d(ee,fe),d(e,te)},p(N,b){b&1&&n!==(n=N[4].organizationName+"")&&ne(s,n),b&1&&l!==(l=N[4].organizationURL)&&p(a,"href",l),b&1&&g!==(g=N[4].artefactTitle+"")&&ne(k,g),b&1&&c!==(c=N[4].artefactURL)&&p(h,"href",c),Q===(Q=$e(N))&&M?M.p(N,b):(M.d(1),M=Q(N),M&&(M.c(),M.m(S,null))),b&1&&ce!==(ce=N[4].language+"")&&ne(Y,ce),b&1&&he!==(he=N[4].numberOfCharacters.toLocaleString()+"")&&ne(P,he),b&1&&Z!==(Z=N[4].lastChecked+"")&&ne(fe,Z)},d(N){N&&f(e),M.d()}}}function sa(r){let e,t,a,n,s,l,i,m,h,g,k,c,_,S,K,j,ce,Y,ve,F,he,P,x,ee,Z,fe,te,$e,Q,M,N,b,se,Ue,le,Pe,ge,ke,ue,ie,Fe,G,Ve,be,Ge,Ce,Me;t=new At({props:{handler:r[1],class:"searchBar"}}),g=new ye({props:{handler:r[1],orderBy:"organizationName",$$slots:{default:[Qt]},$$scope:{ctx:r}}}),c=new ye({props:{handler:r[1],orderBy:"artefactTitle",$$slots:{default:[Xt]},$$scope:{ctx:r}}}),S=new ye({props:{handler:r[1],orderBy:"translationOf",$$slots:{default:[xt]},$$scope:{ctx:r}}}),j=new ye({props:{handler:r[1],orderBy:"language",$$slots:{default:[ea]},$$scope:{ctx:r}}}),Y=new ye({props:{handler:r[1],orderBy:"numberOfCharacters",$$slots:{default:[ta]},$$scope:{ctx:r}}}),F=new ye({props:{handler:r[1],orderBy:"lastChecked",$$slots:{default:[aa]},$$scope:{ctx:r}}}),x=new Be({props:{handler:r[1],filterBy:"organizationName"}}),Z=new Be({props:{handler:r[1],filterBy:"artefactTitle"}}),te=new Be({props:{handler:r[1],filterBy:"translationOf"}}),Q=new Be({props:{handler:r[1],filterBy:"language"}}),N=new Be({props:{handler:r[1],filterBy:"numberOfCharacters"}}),se=new Be({props:{handler:r[1],filterBy:"lastChecked"}});let He=Xe(r[0]),A=[];for(let o=0;o<He.length;o+=1)A[o]=et(xe(r,He,o));return ie=new yt({props:{handler:r[1]}}),be=new Kt({props:{size:25}}),Ce=new Wt({props:{size:30}}),{c(){e=w("header"),H(t.$$.fragment),a=E(),n=w("div"),s=w("div"),l=E(),i=w("table"),m=w("thead"),h=w("tr"),H(g.$$.fragment),k=E(),H(c.$$.fragment),_=E(),H(S.$$.fragment),K=E(),H(j.$$.fragment),ce=E(),H(Y.$$.fragment),ve=E(),H(F.$$.fragment),he=E(),P=w("tr"),H(x.$$.fragment),ee=E(),H(Z.$$.fragment),fe=E(),H(te.$$.fragment),$e=E(),H(Q.$$.fragment),M=E(),H(N.$$.fragment),b=E(),H(se.$$.fragment),Ue=E(),le=w("tbody");for(let o=0;o<A.length;o+=1)A[o].c();Pe=E(),ge=w("div"),ke=E(),ue=w("footer"),H(ie.$$.fragment),Fe=E(),G=w("a"),Ve=$(`Download data 
  `),H(be.$$.fragment),Ge=E(),H(Ce.$$.fragment),this.h()},l(o){e=v(o,"HEADER",{class:!0});var z=C(e);y(t.$$.fragment,z),z.forEach(f),a=L(o),n=v(o,"DIV",{class:!0});var q=C(n);s=v(q,"DIV",{class:!0}),C(s).forEach(f),l=L(q),i=v(q,"TABLE",{class:!0});var Re=C(i);m=v(Re,"THEAD",{});var Ne=C(m);h=v(Ne,"TR",{});var I=C(h);y(g.$$.fragment,I),k=L(I),y(c.$$.fragment,I),_=L(I),y(S.$$.fragment,I),K=L(I),y(j.$$.fragment,I),ce=L(I),y(Y.$$.fragment,I),ve=L(I),y(F.$$.fragment,I),I.forEach(f),he=L(Ne),P=v(Ne,"TR",{});var W=C(P);y(x.$$.fragment,W),ee=L(W),y(Z.$$.fragment,W),fe=L(W),y(te.$$.fragment,W),$e=L(W),y(Q.$$.fragment,W),M=L(W),y(N.$$.fragment,W),b=L(W),y(se.$$.fragment,W),W.forEach(f),Ne.forEach(f),Ue=L(Re),le=v(Re,"TBODY",{class:!0});var Ae=C(le);for(let qe=0;qe<A.length;qe+=1)A[qe].l(Ae);Ae.forEach(f),Re.forEach(f),Pe=L(q),ge=v(q,"DIV",{class:!0}),C(ge).forEach(f),q.forEach(f),ke=L(o),ue=v(o,"FOOTER",{});var V=C(ue);y(ie.$$.fragment,V),V.forEach(f),Fe=L(o),G=v(o,"A",{href:!0,download:!0,style:!0});var de=C(G);Ve=U(de,`Download data 
  `),y(be.$$.fragment,de),Ge=L(de),y(Ce.$$.fragment,de),de.forEach(f),this.h()},h(){p(e,"class","mb1 svelte-n4n5jp"),p(s,"class","flexGrower svelte-n4n5jp"),p(le,"class","svelte-n4n5jp"),p(i,"class","mb1 svelte-n4n5jp"),p(ge,"class","flexGrower svelte-n4n5jp"),p(n,"class","tableContainer svelte-n4n5jp"),p(G,"href",ut+"/CollectiveGovernanceDirectoryData.json"),p(G,"download",""),_e(G,"display","flex"),_e(G,"align-items","center"),_e(G,"gap","0.5rem")},m(o,z){R(o,e,z),B(t,e,null),R(o,a,z),R(o,n,z),d(n,s),d(n,l),d(n,i),d(i,m),d(m,h),B(g,h,null),d(h,k),B(c,h,null),d(h,_),B(S,h,null),d(h,K),B(j,h,null),d(h,ce),B(Y,h,null),d(h,ve),B(F,h,null),d(m,he),d(m,P),B(x,P,null),d(P,ee),B(Z,P,null),d(P,fe),B(te,P,null),d(P,$e),B(Q,P,null),d(P,M),B(N,P,null),d(P,b),B(se,P,null),d(i,Ue),d(i,le);for(let q=0;q<A.length;q+=1)A[q]&&A[q].m(le,null);d(n,Pe),d(n,ge),R(o,ke,z),R(o,ue,z),B(ie,ue,null),R(o,Fe,z),R(o,G,z),d(G,Ve),B(be,G,null),d(G,Ge),B(Ce,G,null),Me=!0},p(o,[z]){const q={};z&128&&(q.$$scope={dirty:z,ctx:o}),g.$set(q);const Re={};z&128&&(Re.$$scope={dirty:z,ctx:o}),c.$set(Re);const Ne={};z&128&&(Ne.$$scope={dirty:z,ctx:o}),S.$set(Ne);const I={};z&128&&(I.$$scope={dirty:z,ctx:o}),j.$set(I);const W={};z&128&&(W.$$scope={dirty:z,ctx:o}),Y.$set(W);const Ae={};if(z&128&&(Ae.$$scope={dirty:z,ctx:o}),F.$set(Ae),z&1){He=Xe(o[0]);let V;for(V=0;V<He.length;V+=1){const de=xe(o,He,V);A[V]?A[V].p(de,z):(A[V]=et(de),A[V].c(),A[V].m(le,null))}for(;V<A.length;V+=1)A[V].d(1);A.length=He.length}},i(o){Me||(O(t.$$.fragment,o),O(g.$$.fragment,o),O(c.$$.fragment,o),O(S.$$.fragment,o),O(j.$$.fragment,o),O(Y.$$.fragment,o),O(F.$$.fragment,o),O(x.$$.fragment,o),O(Z.$$.fragment,o),O(te.$$.fragment,o),O(Q.$$.fragment,o),O(N.$$.fragment,o),O(se.$$.fragment,o),O(ie.$$.fragment,o),O(be.$$.fragment,o),O(Ce.$$.fragment,o),Me=!0)},o(o){T(t.$$.fragment,o),T(g.$$.fragment,o),T(c.$$.fragment,o),T(S.$$.fragment,o),T(j.$$.fragment,o),T(Y.$$.fragment,o),T(F.$$.fragment,o),T(x.$$.fragment,o),T(Z.$$.fragment,o),T(te.$$.fragment,o),T(Q.$$.fragment,o),T(N.$$.fragment,o),T(se.$$.fragment,o),T(ie.$$.fragment,o),T(be.$$.fragment,o),T(Ce.$$.fragment,o),Me=!1},d(o){o&&(f(e),f(a),f(n),f(ke),f(ue),f(Fe),f(G)),D(t),D(g),D(c),D(S),D(j),D(Y),D(F),D(x),D(Z),D(te),D(Q),D(N),D(se),ht(A,o),D(ie),D(be),D(Ce)}}}function la(r,e,t){let a;const n=Zt.dataEntries,s=new Rt(n,{rowsPerPage:50}),l=s.getRows();return Qe(r,l,i=>t(0,a=i)),[a,s,l]}class da extends Oe{constructor(e){super(),Te(this,e,la,sa,Se,{})}}export{da as component};
