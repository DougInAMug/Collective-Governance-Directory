var E=Object.defineProperty;var O=(t,e,n)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var _=(t,e,n)=>(O(t,typeof e!="symbol"?e+"":e,n),n);import{O as $,H as c,X as p,h as b,d as C,Y as I,S as v,Z as j,_ as x,$ as B,a0 as H,a1 as w,a2 as L,a3 as M,a4 as N,a5 as P,a6 as R}from"./scheduler.28c7d542.js";const u=new Set;let d;function D(){d={r:0,c:[],p:d}}function F(){d.r||$(d.c),d=d.p}function U(t,e){t&&t.i&&(u.delete(t),t.i(e))}function G(t,e,n,s){if(t&&t.o){if(u.has(t))return;u.add(t),d.c.push(()=>{u.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function J(t){t&&t.c()}function K(t,e){t&&t.l(e)}function V(t,e,n){const{fragment:s,after_update:i}=t.$$;s&&s.m(e,n),x(()=>{const f=t.$$.on_mount.map(L).filter(v);t.$$.on_destroy?t.$$.on_destroy.push(...f):$(f),t.$$.on_mount=[]}),i.forEach(x)}function X(t,e){const n=t.$$;n.fragment!==null&&(B(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Y(t,e){t.$$.dirty[0]===-1&&(M.push(t),N(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Q(t,e,n,s,i,f,h,S=[-1]){const o=H;w(t);const a=t.$$={fragment:null,ctx:[],props:f,update:c,not_equal:i,bound:p(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:p(),dirty:S,skip_bound:!1,root:e.target||o.$$.root};h&&h(a.root);let l=!1;if(a.ctx=n?n(t,e.props||{},(r,g,...m)=>{const y=m.length?m[0]:g;return a.ctx&&i(a.ctx[r],a.ctx[r]=y)&&(!a.skip_bound&&a.bound[r]&&a.bound[r](y),l&&Y(t,r)),g}):[],a.update(),l=!0,$(a.before_update),a.fragment=s?s(a.ctx):!1,e.target){if(e.hydrate){P();const r=b(e.target);a.fragment&&a.fragment.l(r),r.forEach(C)}else a.fragment&&a.fragment.c();e.intro&&U(t.$$.fragment),V(t,e.target,e.anchor),R(),I()}w(o)}class T{constructor(){_(this,"$$");_(this,"$$set")}$destroy(){X(this,1),this.$destroy=c}$on(e,n){if(!v(n))return c;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!j(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Z="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Z);export{T as S,U as a,J as b,F as c,K as d,X as e,D as g,Q as i,V as m,G as t};