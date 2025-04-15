import{g as We,v as Xe,u as _e,a as qe,Q as G,d as Ye,e as Je,R as Ze,f as ge,h as et,i as tt,j as nt,k as ie,l as ot,m as at}from"./use-dark--QpuOZkF.js";import{Q as lt}from"./QPage-BuVxylR6.js";import{b as Qe,d as he,e as H,p as pe,n as it,f as ae,k as re,i as we,l as rt,g as X,r as P,a as f,w as M,h as m,T as ye,U as st,c as z,V as ut,q as xe,u as ue,W as Se,X as ct,Y as dt,t as ft,Z as Pe,D as vt,$ as mt,a0 as gt,E as Me,F as ze,P as Q,H as S,J as B,I as L,R as $e,S as Be,G as oe,Q as I,L as ee,O as K,K as be,v as ht}from"./index-PBuB9DoH.js";import{g as Te,c as pt,s as Ee,b as Oe,u as bt,a as yt,d as _t,e as qt,f as xt}from"./selection-CitqN5zT.js";import{h as Y,a as je,c as kt,d as Ct}from"./render-BjjW5Hat.js";import{r as De,a as wt,b as St}from"./focus-manager-DhdJisJs.js";import{S as Pt}from"./SectionContainer-DBX8KBok.js";function $t(e){const t=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((o,l)=>{const a=parseFloat(o);a&&(t[l]=a)}),t}const Bt=Qe({name:"touch-swipe",beforeMount(e,{value:t,arg:o,modifiers:l}){if(l.mouse!==!0&&H.has.touch!==!0)return;const a=l.mouseCapture===!0?"Capture":"",n={handler:t,sensitivity:$t(o),direction:Te(l),noop:it,mouseStart(i){Ee(i,n)&&rt(i)&&(ae(n,"temp",[[document,"mousemove","move",`notPassive${a}`],[document,"mouseup","end","notPassiveCapture"]]),n.start(i,!0))},touchStart(i){if(Ee(i,n)){const r=i.target;ae(n,"temp",[[r,"touchmove","move","notPassiveCapture"],[r,"touchcancel","end","notPassiveCapture"],[r,"touchend","end","notPassiveCapture"]]),n.start(i)}},start(i,r){H.is.firefox===!0&&pe(e,!0);const s=we(i);n.event={x:s.left,y:s.top,time:Date.now(),mouse:r===!0,dir:!1}},move(i){if(n.event===void 0)return;if(n.event.dir!==!1){re(i);return}const r=Date.now()-n.event.time;if(r===0)return;const s=we(i),v=s.left-n.event.x,d=Math.abs(v),h=s.top-n.event.y,p=Math.abs(h);if(n.event.mouse!==!0){if(d<n.sensitivity[1]&&p<n.sensitivity[1]){n.end(i);return}}else if(window.getSelection().toString()!==""){n.end(i);return}else if(d<n.sensitivity[2]&&p<n.sensitivity[2])return;const _=d/r,q=p/r;n.direction.vertical===!0&&d<p&&d<100&&q>n.sensitivity[0]&&(n.event.dir=h<0?"up":"down"),n.direction.horizontal===!0&&d>p&&p<100&&_>n.sensitivity[0]&&(n.event.dir=v<0?"left":"right"),n.direction.up===!0&&d<p&&h<0&&d<100&&q>n.sensitivity[0]&&(n.event.dir="up"),n.direction.down===!0&&d<p&&h>0&&d<100&&q>n.sensitivity[0]&&(n.event.dir="down"),n.direction.left===!0&&d>p&&v<0&&p<100&&_>n.sensitivity[0]&&(n.event.dir="left"),n.direction.right===!0&&d>p&&v>0&&p<100&&_>n.sensitivity[0]&&(n.event.dir="right"),n.event.dir!==!1?(re(i),n.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),pt(),n.styleCleanup=T=>{n.styleCleanup=void 0,document.body.classList.remove("non-selectable");const c=()=>{document.body.classList.remove("no-pointer-events--children")};T===!0?setTimeout(c,50):c()}),n.handler({evt:i,touch:n.event.mouse!==!0,mouse:n.event.mouse,direction:n.event.dir,duration:r,distance:{x:d,y:p}})):n.end(i)},end(i){n.event!==void 0&&(he(n,"temp"),H.is.firefox===!0&&pe(e,!1),n.styleCleanup?.(!0),i!==void 0&&n.event.dir!==!1&&re(i),n.event=void 0)}};if(e.__qtouchswipe=n,l.mouse===!0){const i=l.mouseCapture===!0||l.mousecapture===!0?"Capture":"";ae(n,"main",[[e,"mousedown","mouseStart",`passive${i}`]])}H.has.touch===!0&&ae(n,"main",[[e,"touchstart","touchStart",`passive${l.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const o=e.__qtouchswipe;o!==void 0&&(t.oldValue!==t.value&&(typeof t.value!="function"&&o.end(),o.handler=t.value),o.direction=Te(t.modifiers))},beforeUnmount(e){const t=e.__qtouchswipe;t!==void 0&&(he(t,"main"),he(t,"temp"),H.is.firefox===!0&&pe(e,!1),t.styleCleanup?.(),delete e.__qtouchswipe)}});function Tt(){let e=Object.create(null);return{getCache:(t,o)=>e[t]===void 0?e[t]=typeof o=="function"?o():o:e[t],setCache(t,o){e[t]=o},hasCache(t){return Object.hasOwnProperty.call(e,t)},clearCache(t){t!==void 0?delete e[t]:e=Object.create(null)}}}const Et={name:{required:!0},disable:Boolean},Ae={setup(e,{slots:t}){return()=>m("div",{class:"q-panel scroll",role:"tabpanel"},Y(t.default))}},Dt={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},At=["update:modelValue","beforeTransition","transition"];function It(){const{props:e,emit:t,proxy:o}=X(),{getCache:l}=Tt(),{registerTimeout:a}=Oe();let n,i;const r=P(null),s={value:null};function v(u){const b=e.vertical===!0?"up":"left";w((o.$q.lang.rtl===!0?-1:1)*(u.direction===b?1:-1))}const d=f(()=>[[Bt,v,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),h=f(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),p=f(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),_=f(()=>`--q-transition-duration: ${e.transitionDuration}ms`),q=f(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),T=f(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),c=f(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);M(()=>e.modelValue,(u,b)=>{const C=E(u)===!0?V(u):-1;i!==!0&&N(C===-1?0:C<V(b)?-1:1),s.value!==C&&(s.value=C,t("beforeTransition",u,b),a(()=>{t("transition",u,b)},e.transitionDuration))});function $(){w(1)}function O(){w(-1)}function j(u){t("update:modelValue",u)}function E(u){return u!=null&&u!==""}function V(u){return n.findIndex(b=>b.props.name===u&&b.props.disable!==""&&b.props.disable!==!0)}function R(){return n.filter(u=>u.props.disable!==""&&u.props.disable!==!0)}function N(u){const b=u!==0&&e.animated===!0&&s.value!==-1?"q-transition--"+(u===-1?h.value:p.value):null;r.value!==b&&(r.value=b)}function w(u,b=s.value){let C=b+u;for(;C!==-1&&C<n.length;){const A=n[C];if(A!==void 0&&A.props.disable!==""&&A.props.disable!==!0){N(u),i=!0,t("update:modelValue",A.props.name),setTimeout(()=>{i=!1});return}C+=u}e.infinite===!0&&n.length!==0&&b!==-1&&b!==n.length&&w(u,u===-1?n.length:-1)}function J(){const u=V(e.modelValue);return s.value!==u&&(s.value=u),!0}function y(){const u=E(e.modelValue)===!0&&J()&&n[s.value];return e.keepAlive===!0?[m(st,T.value,[m(c.value===!0?l(q.value,()=>({...Ae,name:q.value})):Ae,{key:q.value,style:_.value},()=>u)])]:[m("div",{class:"q-panel scroll",style:_.value,key:q.value,role:"tabpanel"},[u])]}function F(){if(n.length!==0)return e.animated===!0?[m(ye,{name:r.value},y)]:y()}function D(u){return n=We(Y(u.default,[])).filter(b=>b.props!==null&&b.props.slot===void 0&&E(b.props.name)===!0),n.length}function x(){return n}return Object.assign(o,{next:$,previous:O,goTo:j}),{panelIndex:s,panelDirectives:d,updatePanelsList:D,updatePanelIndex:J,getPanelContent:F,getEnabledPanels:R,getPanels:x,isValidPanelName:E,keepAliveProps:T,needsUniqueKeepAliveWrapper:c,goToPanelByOffset:w,goToPanel:j,nextPanel:$,previousPanel:O}}const Ft=z({name:"QCarouselSlide",props:{...Et,imgSrc:String},setup(e,{slots:t}){const o=f(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>m("div",{class:"q-carousel__slide",style:o.value},Y(t.default))}});let ne=0;const Lt={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Vt=["update:fullscreen","fullscreen"];function Nt(){const e=X(),{props:t,emit:o,proxy:l}=e;let a,n,i;const r=P(!1);Xe(e)===!0&&M(()=>l.$route.fullPath,()=>{t.noRouteFullscreenExit!==!0&&d()}),M(()=>t.fullscreen,h=>{r.value!==h&&s()}),M(r,h=>{o("update:fullscreen",h),o("fullscreen",h)});function s(){r.value===!0?d():v()}function v(){r.value!==!0&&(r.value=!0,i=l.$el.parentNode,i.replaceChild(n,l.$el),document.body.appendChild(l.$el),ne++,ne===1&&document.body.classList.add("q-body--fullscreen-mixin"),a={handler:d},Se.add(a))}function d(){r.value===!0&&(a!==void 0&&(Se.remove(a),a=void 0),i.replaceChild(l.$el,n),r.value=!1,ne=Math.max(0,ne-1),ne===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),l.$el.scrollIntoView!==void 0&&setTimeout(()=>{l.$el.scrollIntoView()})))}return ut(()=>{n=document.createElement("span")}),xe(()=>{t.fullscreen===!0&&v()}),ue(d),Object.assign(l,{toggleFullscreen:s,setFullscreen:v,exitFullscreen:d}),{inFullscreen:r,toggleFullscreen:s}}const Qt=["top","right","bottom","left"],Mt=["regular","flat","outline","push","unelevated"],zt=z({name:"QCarousel",props:{..._e,...Dt,...Lt,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>Mt.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Qt.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...Vt,...At],setup(e,{slots:t}){const{proxy:{$q:o}}=X(),l=qe(e,o);let a=null,n;const{updatePanelsList:i,getPanelContent:r,panelDirectives:s,goToPanel:v,previousPanel:d,nextPanel:h,getEnabledPanels:p,panelIndex:_}=It(),{inFullscreen:q}=Nt(),T=f(()=>q.value!==!0&&e.height!==void 0?{height:e.height}:{}),c=f(()=>e.vertical===!0?"vertical":"horizontal"),$=f(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),O=f(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(q.value===!0?" fullscreen":"")+(l.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${c.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${$.value}`:"")),j=f(()=>{const y=[e.prevIcon||o.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||o.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&o.lang.rtl===!0?y.reverse():y}),E=f(()=>e.navigationIcon||o.iconSet.carousel.navigationIcon),V=f(()=>e.navigationActiveIcon||E.value),R=f(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));M(()=>e.modelValue,()=>{e.autoplay&&N()}),M(()=>e.autoplay,y=>{y?N():a!==null&&(clearTimeout(a),a=null)});function N(){const y=ct(e.autoplay)===!0?Math.abs(e.autoplay):5e3;a!==null&&clearTimeout(a),a=setTimeout(()=>{a=null,y>=0?h():d()},y)}xe(()=>{e.autoplay&&N()}),ue(()=>{a!==null&&clearTimeout(a)});function w(y,F){return m("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${y} q-carousel__navigation--${$.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[m("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},p().map(F))])}function J(){const y=[];if(e.navigation===!0){const F=t["navigation-icon"]!==void 0?t["navigation-icon"]:x=>m(G,{key:"nav"+x.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${x.active===!0?"":"in"}active`,...x.btnProps,onClick:x.onClick}),D=n-1;y.push(w("buttons",(x,u)=>{const b=x.props.name,C=_.value===u;return F({index:u,maxIndex:D,name:b,active:C,btnProps:{icon:C===!0?V.value:E.value,size:"sm",...R.value},onClick:()=>{v(b)}})}))}else if(e.thumbnails===!0){const F=e.controlColor!==void 0?` text-${e.controlColor}`:"";y.push(w("thumbnails",D=>{const x=D.props;return m("img",{key:"tmb#"+x.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${x.name===e.modelValue?"":"in"}active`+F,src:x.imgSrc||x["img-src"],onClick:()=>{v(x.name)}})}))}return e.arrows===!0&&_.value>=0&&((e.infinite===!0||_.value>0)&&y.push(m("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${c.value} absolute flex flex-center`},[m(G,{icon:j.value[0],...R.value,onClick:d})])),(e.infinite===!0||_.value<n-1)&&y.push(m("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${c.value} absolute flex flex-center`},[m(G,{icon:j.value[1],...R.value,onClick:h})]))),kt(t.control,y)}return()=>(n=i(t),m("div",{class:O.value,style:T.value},[je("div",{class:"q-carousel__slides-container"},r(),"sl-cont",e.swipeable,()=>s.value)].concat(J())))}}),Ie=z({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const o=f(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>m(e.tag,{class:o.value},Y(t.default))}}),Ot={xs:8,sm:10,md:14,lg:20,xl:24},jt=z({name:"QChip",props:{..._e,...Ye,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:t,emit:o}){const{proxy:{$q:l}}=X(),a=qe(e,l),n=Je(e,Ot),i=f(()=>e.selected===!0||e.icon!==void 0),r=f(()=>e.selected===!0?e.iconSelected||l.iconSet.chip.selected:e.icon),s=f(()=>e.iconRemove||l.iconSet.chip.remove),v=f(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),d=f(()=>{const c=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(c?` text-${c} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(v.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(a.value===!0?" q-chip--dark q-dark":"")}),h=f(()=>{const c=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},$={...c,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||l.lang.label.remove};return{chip:c,remove:$}});function p(c){c.keyCode===13&&_(c)}function _(c){e.disable||(o("update:selected",!e.selected),o("click",c))}function q(c){(c.keyCode===void 0||c.keyCode===13)&&(re(c),e.disable===!1&&(o("update:modelValue",!1),o("remove")))}function T(){const c=[];v.value===!0&&c.push(m("div",{class:"q-focus-helper"})),i.value===!0&&c.push(m(ge,{class:"q-chip__icon q-chip__icon--left",name:r.value}));const $=e.label!==void 0?[m("div",{class:"ellipsis"},[e.label])]:void 0;return c.push(m("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},Ct(t.default,$))),e.iconRight&&c.push(m(ge,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&c.push(m(ge,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:s.value,...h.value.remove,onClick:q,onKeyup:q})),c}return()=>{if(e.modelValue===!1)return;const c={class:d.value,style:n.value};return v.value===!0&&Object.assign(c,h.value.chip,{onClick:_,onKeyup:p}),je("div",c,T(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Ze,e.ripple]])}}}),Rt=z({name:"QCardActions",props:{...et,vertical:Boolean},setup(e,{slots:t}){const o=tt(e),l=f(()=>`q-card__actions ${o.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>m("div",{class:l.value},Y(t.default))}}),Ht=z({name:"QCard",props:{..._e,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:o}}=X(),l=qe(e,o),a=f(()=>"q-card"+(l.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>m(e.tag,{class:a.value},Y(t.default))}});function Kt(){let e;const t=X();function o(){e=void 0}return dt(o),ue(o),{removeTick:o,registerTick(l){e=l,ft(()=>{e===l&&(nt(t)===!1&&e(),e=void 0)})}}}const Gt={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Ut(e,t=()=>{},o=()=>{}){return{transitionProps:f(()=>{const l=`q-transition--${e.transitionShow||t()}`,a=`q-transition--${e.transitionHide||o()}`;return{appear:!0,enterFromClass:`${l}-enter-from`,enterActiveClass:`${l}-enter-active`,enterToClass:`${l}-enter-to`,leaveFromClass:`${a}-leave-from`,leaveActiveClass:`${a}-leave-active`,leaveToClass:`${a}-leave-to`}}),transitionStyle:f(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}let Wt=1,Xt=document.body;function Yt(e,t){const o=document.createElement("div");if(o.id=`q-portal--${t}--${Wt++}`,Pe.globalNodes!==void 0){const l=Pe.globalNodes.class;l!==void 0&&(o.className=l)}return Xt.appendChild(o),o}function Jt(e){e.remove()}const se=[];function Zt(e){return se.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function en(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return ie(e)}else if(e.__qPortal===!0){const o=ie(e);return o?.$options.name==="QPopupProxy"?(e.hide(t),o):e}e=ie(e)}while(e!=null)}function tn(e,t,o){for(;o!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(o--,e.$options.name==="QMenu"){e=en(e,t);continue}e.hide(t)}e=ie(e)}}const nn=z({name:"QPortal",setup(e,{slots:t}){return()=>t.default()}});function on(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function an(e,t,o,l){const a=P(!1),n=P(!1);let i=null;const r={},s=on(e);function v(h){if(h===!0){De(r),n.value=!0;return}n.value=!1,a.value===!1&&(s===!1&&i===null&&(i=Yt(!1,l)),a.value=!0,se.push(e.proxy),wt(r))}function d(h){if(n.value=!1,h!==!0)return;De(r),a.value=!1;const p=se.indexOf(e.proxy);p!==-1&&se.splice(p,1),i!==null&&(Jt(i),i=null)}return vt(()=>{d(!0)}),e.proxy.__qPortal=!0,mt(e.proxy,"contentEl",()=>t.value),{showPortal:v,hidePortal:d,portalIsActive:a,portalIsAccessible:n,renderPortal:()=>s===!0?o():a.value===!0?[m(gt,{to:i},m(nn,o))]:void 0}}const U=[];let te;function ln(e){te=e.keyCode===27}function rn(){te===!0&&(te=!1)}function sn(e){te===!0&&(te=!1,Me(e,27)===!0&&U[U.length-1](e))}function Re(e){window[e]("keydown",ln),window[e]("blur",rn),window[e]("keyup",sn),te=!1}function un(e){H.is.desktop===!0&&(U.push(e),U.length===1&&Re("addEventListener"))}function Fe(e){const t=U.indexOf(e);t!==-1&&(U.splice(t,1),U.length===0&&Re("removeEventListener"))}const W=[];function He(e){W[W.length-1](e)}function cn(e){H.is.desktop===!0&&(W.push(e),W.length===1&&document.body.addEventListener("focusin",He))}function Le(e){const t=W.indexOf(e);t!==-1&&(W.splice(t,1),W.length===0&&document.body.removeEventListener("focusin",He))}let le=0;const dn={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},Ve={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]},fn=z({name:"QDialog",inheritAttrs:!1,props:{...yt,...Gt,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,backdropFilter:String,position:{type:String,default:"standard",validator:e=>["standard","top","bottom","left","right"].includes(e)}},emits:[...bt,"shake","click","escapeKey"],setup(e,{slots:t,emit:o,attrs:l}){const a=X(),n=P(null),i=P(!1),r=P(!1);let s=null,v=null,d,h;const p=f(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:_}=xt(),{registerTimeout:q}=Oe(),{registerTick:T,removeTick:c}=Kt(),{transitionProps:$,transitionStyle:O}=Ut(e,()=>Ve[e.position][0],()=>Ve[e.position][1]),j=f(()=>O.value+(e.backdropFilter!==void 0?`;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}`:"")),{showPortal:E,hidePortal:V,portalIsAccessible:R,renderPortal:N}=an(a,n,Ue,"dialog"),{hide:w}=_t({showing:i,hideOnRouteChange:p,handleShow:b,handleHide:C,processOnMount:!0}),{addToHistory:J,removeFromHistory:y}=qt(i,w,p),F=f(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${dn[e.position]}`+(r.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),D=f(()=>i.value===!0&&e.seamless!==!0),x=f(()=>e.autoClose===!0?{onClick:Ke}:{}),u=f(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${D.value===!0?"modal":"seamless"}`,l.class]);M(()=>e.maximized,g=>{i.value===!0&&fe(g)}),M(D,g=>{_(g),g===!0?(cn(ve),un(de)):(Le(ve),Fe(de))});function b(g){J(),v=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,fe(e.maximized),E(),r.value=!0,e.noFocus!==!0?(document.activeElement?.blur(),T(A)):c(),q(()=>{if(a.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:k,bottom:Z}=document.activeElement.getBoundingClientRect(),{innerHeight:Ce}=window,me=window.visualViewport!==void 0?window.visualViewport.height:Ce;k>0&&Z>me/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-me,Z>=Ce?1/0:Math.ceil(document.scrollingElement.scrollTop+Z-me/2))),document.activeElement.scrollIntoView()}h=!0,n.value.click(),h=!1}E(!0),r.value=!1,o("show",g)},e.transitionDuration)}function C(g){c(),y(),ke(!0),r.value=!0,V(),v!==null&&(((g?.type.indexOf("key")===0?v.closest('[tabindex]:not([tabindex^="-"])'):void 0)||v).focus(),v=null),q(()=>{V(!0),r.value=!1,o("hide",g)},e.transitionDuration)}function A(g){St(()=>{let k=n.value;if(k!==null){if(g!==void 0){const Z=k.querySelector(g);if(Z!==null){Z.focus({preventScroll:!0});return}}k.contains(document.activeElement)!==!0&&(k=k.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||k.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||k.querySelector("[autofocus], [data-autofocus]")||k,k.focus({preventScroll:!0}))}})}function ce(g){g&&typeof g.focus=="function"?g.focus({preventScroll:!0}):A(),o("shake");const k=n.value;k!==null&&(k.classList.remove("q-animate--scale"),k.classList.add("q-animate--scale"),s!==null&&clearTimeout(s),s=setTimeout(()=>{s=null,n.value!==null&&(k.classList.remove("q-animate--scale"),A())},170))}function de(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&ce():(o("escapeKey"),w()))}function ke(g){s!==null&&(clearTimeout(s),s=null),(g===!0||i.value===!0)&&(fe(!1),e.seamless!==!0&&(_(!1),Le(ve),Fe(de))),g!==!0&&(v=null)}function fe(g){g===!0?d!==!0&&(le<1&&document.body.classList.add("q-body--dialog"),le++,d=!0):d===!0&&(le<2&&document.body.classList.remove("q-body--dialog"),le--,d=!1)}function Ke(g){h!==!0&&(w(g),o("click",g))}function Ge(g){e.persistent!==!0&&e.noBackdropDismiss!==!0?w(g):e.noShake!==!0&&ce()}function ve(g){e.allowFocusOutside!==!0&&R.value===!0&&ot(n.value,g.target)!==!0&&A('[tabindex]:not([tabindex="-1"])')}Object.assign(a.proxy,{focus:A,shake:ce,__updateRefocusTarget(g){v=g||null}}),ue(ke);function Ue(){return m("div",{role:"dialog","aria-modal":D.value===!0?"true":"false",...l,class:u.value},[m(ye,{name:"q-transition--fade",appear:!0},()=>D.value===!0?m("div",{class:"q-dialog__backdrop fixed-full",style:j.value,"aria-hidden":"true",tabindex:-1,onClick:Ge}):null),m(ye,$.value,()=>i.value===!0?m("div",{ref:n,class:F.value,style:O.value,tabindex:-1,...x.value},Y(t.default)):null)])}return N}});function Ne(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}const vn=Qe({name:"close-popup",beforeMount(e,{value:t}){const o={depth:Ne(t),handler(l){o.depth!==0&&setTimeout(()=>{const a=Zt(e);a!==void 0&&tn(a,l,o.depth)})},handlerKey(l){Me(l,13)===!0&&o.handler(l)}};e.__qclosepopup=o,e.addEventListener("click",o.handler),e.addEventListener("keyup",o.handlerKey)},updated(e,{value:t,oldValue:o}){t!==o&&(e.__qclosepopup.depth=Ne(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}}),mn={class:"text-h5 q-ma-sm"},gn={class:"text-body1 q-ma-md flex justify-center"},hn={class:"row q-gutter-sm q-mt-sm justify-center"},pn={class:"text-h6"},bn={key:0},yn={key:1},_n={key:2},qn={key:3},xn=ze({__name:"CarouselComponent",props:{title:{},items:{}},setup(e){const t=e,o=P(t.items.length>0?t.items[0]?.name??"slide-0":""),l=P(!1),a=P(null);function n(i){a.value=i,l.value=!0}return(i,r)=>(S(),Q("div",null,[B(zt,{modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=s=>o.value=s),"transition-prev":"scale","transition-next":"scale",swipeable:"",animated:"",navigation:"",arrows:"",class:"text-white rounded-borders q-mt-lg",style:{"background-color":"var(--bg-dark)"}},{default:L(()=>[(S(!0),Q($e,null,Be(i.items,(s,v)=>(S(),oe(Ft,{key:v,name:s.name||`slide-${v}`,class:"flex flex-center column",style:{"background-color":"var(--q-primary)"}},{default:L(()=>[I("div",mn,ee(s.name),1),I("p",gn,ee(s.subtitle),1),I("div",hn,[B(G,{flat:"",icon:"code",href:s.github,target:"_blank",rel:"noopener",label:"GitHub","aria-label":"View code on GitHub"},null,8,["href"]),s.demo?(S(),oe(G,{key:0,flat:"",icon:"public",href:s.demo,target:"_blank",rel:"noopener",label:"Demo","aria-label":"View online demo"},null,8,["href"])):K("",!0)]),B(G,{outline:"",color:"white",label:"more",icon:"expand_more",class:"q-mt-md",style:{"max-width":"350px"},onClick:d=>n(s),"aria-label":"See more information"},null,8,["onClick"])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"]),B(fn,{modelValue:l.value,"onUpdate:modelValue":r[1]||(r[1]=s=>l.value=s)},{default:L(()=>[B(Ht,{style:{"min-width":"350px","max-width":"90%"}},{default:L(()=>[B(Ie,{class:"bg-primary text-white"},{default:L(()=>[I("div",pn,ee(a.value?.name),1)]),_:1}),B(Ie,{style:{"background-color":"var(--bg-dark)"}},{default:L(()=>[a.value?.description?(S(),Q("p",bn,[r[2]||(r[2]=I("strong",null,"Description:",-1)),be(" "+ee(a.value.description),1)])):K("",!0),a.value?.stack?(S(),Q("div",yn,[r[3]||(r[3]=I("span",null,[I("strong",null,"Stack:")],-1)),(S(!0),Q($e,null,Be(a.value.stack,(s,v)=>(S(),oe(jt,{key:v,outline:"",color:"primary",class:"q-mx-xs q-mt-xs","text-color":"white",label:s},null,8,["label"]))),128))])):K("",!0),a.value?.license?(S(),Q("p",_n,[r[4]||(r[4]=I("strong",null,"License:",-1)),be(" "+ee(a.value.license),1)])):K("",!0),a.value?.author?(S(),Q("p",qn,[r[5]||(r[5]=I("strong",null,"Author:",-1)),be(" "+ee(a.value.author),1)])):K("",!0)]),_:1}),B(Rt,{align:"right",style:{"background-color":"var(--bg-dark)",color:"var(--q-primary)"}},{default:L(()=>[ht(B(G,{flat:"",label:"close","aria-label":"close modal"},null,512),[[vn]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}}),kn={key:0,class:"q-pa-md q-mt-xl"},En=ze({__name:"ProjectsPage",setup(e){const t=P([]),o=P(!0);return xe(async()=>{const l="https://raw.githubusercontent.com/CodeByAllan/portifolio_data/refs/heads/main/projects.json";try{const a=await fetch(l);if(a.ok){const n=await a.json();t.value=Array.isArray(n)?n:[]}else console.error("Failed to load JSON file")}catch(a){console.error("Error fetching data:",a)}finally{o.value=!1}}),(l,a)=>(S(),oe(lt,{class:"flex justify-center"},{default:L(()=>[o.value?(S(),Q("div",kn,[B(at,{color:"primary",size:"40px",class:"q-mb-md"}),a[0]||(a[0]=I("div",null,"Loading Projects...",-1))])):K("",!0),o.value?K("",!0):(S(),oe(Pt,{key:1,title:"Projects"},{default:L(()=>[B(xn,{title:"projects",items:t.value},null,8,["items"])]),_:1}))]),_:1}))}});export{En as default};
