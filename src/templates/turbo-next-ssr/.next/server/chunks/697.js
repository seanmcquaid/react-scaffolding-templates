exports.id=697,exports.ids=[697],exports.modules={8348:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,1087,23)),Promise.resolve().then(r.t.bind(r,8984,23)),Promise.resolve().then(r.t.bind(r,7597,23)),Promise.resolve().then(r.t.bind(r,4896,23)),Promise.resolve().then(r.t.bind(r,6350,23)),Promise.resolve().then(r.t.bind(r,5354,23))},6688:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2559,23)),Promise.resolve().then(r.bind(r,3671))},8552:(e,t,r)=>{Promise.resolve().then(r.bind(r,3560))},5315:(e,t,r)=>{Promise.resolve().then(r.bind(r,3653))},3017:()=>{},3560:(e,t,r)=>{"use strict";r.d(t,{default:()=>N});var s=r(4638),a=r(4555),o=r(1682),i=r(6659),n=r(1980),l=r(4983),d=r(9613),c=r(4340);let u=n.zt,f=i.forwardRef(({className:e,...t},r)=>s.jsx(n.l_,{ref:r,className:(0,c.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));f.displayName=n.l_.displayName;let m=(0,l.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),p=i.forwardRef(({className:e,variant:t,...r},a)=>s.jsx(n.fC,{ref:a,className:(0,c.cn)(m({variant:t}),e),...r}));p.displayName=n.fC.displayName,i.forwardRef(({className:e,...t},r)=>s.jsx(n.aU,{ref:r,className:(0,c.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...t})).displayName=n.aU.displayName;let g=i.forwardRef(({className:e,...t},r)=>s.jsx(n.x8,{ref:r,className:(0,c.cn)("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:s.jsx(d.Z,{className:"h-4 w-4"})}));g.displayName=n.x8.displayName;let x=i.forwardRef(({className:e,...t},r)=>s.jsx(n.Dx,{ref:r,className:(0,c.cn)("text-sm font-semibold",e),...t}));x.displayName=n.Dx.displayName;let h=i.forwardRef(({className:e,...t},r)=>s.jsx(n.dk,{ref:r,className:(0,c.cn)("text-sm opacity-90",e),...t}));h.displayName=n.dk.displayName;var v=r(2405);function y(){let{toasts:e}=(0,v.pm)();return(0,s.jsxs)(u,{children:[e.map(function({id:e,title:t,description:r,action:a,...o}){return(0,s.jsxs)(p,{...o,children:[(0,s.jsxs)("div",{className:"grid gap-1",children:[t&&s.jsx(x,{children:t}),r&&s.jsx(h,{children:r})]}),a,s.jsx(g,{})]},e)}),s.jsx(f,{})]})}let b=new(r(6626)).S({defaultOptions:{queries:{staleTime:6e4}}});var w=r(3357),j=r(9813),k=r(5101),S=r(2562);w.ZP.use(S.Db).use(j.Z).use(k.Z).init({fallbackLng:"en-US",supportedLngs:["en-US","en-CA"],load:"currentOnly",keySeparator:".",saveMissing:!0,resources:{"en-US":{translation:{Dialog:{close:"Close"},HomePage:{kitchenSink:"Kitchen Sink",reactQuery:"Querying and Mutating Data with React Query",remix:"Remix",remixHookFormZod:"Remix Hook Form with Zod",subTitle:"Below you will find a list of example routes with commonly used patterns for React projects",title:"Welcome to a scaffolded project with the @mcquaid-stacks/cli!"},KitchenSinkPage:{submit:"Submit"},Modal:{close:"Close"},NotFoundPage:{home:"Home",notFound:"Not Found",pleaseTryADifferentRoute:"Please try a different route"},PageError:{goBack:"Go Back",refresh:"Refresh",title:"We're sorry, there was a problem loading this page"},ReactQueryPage:{delete:"Delete",title:"Querying and Mutating Data with React Query",view:"View"},Routes:{home:"/",kitchenSink:"/kitchen-sink",reactQuery:"/react-query",remix:"/remix",remixHookFormZod:"/remix-hook-form-zod"}}}},missingKeyHandler:(e,t,r,s)=>{console.warn("Missing Translation Key",e,t,r,s)},missingInterpolationHandler:(e,t)=>{console.warn("Missing Interpolation",e,t)},react:{useSuspense:!1},backend:{loadPath:"./locales/{{lng}}.ts"},detection:{order:["htmlTag"]}});let P=e=>{let{i18n:t}=(0,S.$G)();(0,i.useEffect)(()=>{t.changeLanguage(e)},[t,e])},N=({children:e,lang:t})=>(P(t),(0,s.jsxs)(o.aH,{client:b,children:[e,s.jsx(a.t,{initialIsOpen:!1,buttonPosition:"top-right"}),s.jsx(y,{})]}))},3653:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(4638),a=r(3671);let o=()=>s.jsx(a.default,{errorText:"There was an app crash!"})},3671:(e,t,r)=>{"use strict";r.d(t,{default:()=>n});var s=r(4638),a=r(4214),o=r(1188),i=r(4940);let n=({errorText:e,titleText:t})=>{let{t:r}=(0,i.Z)(),n=(0,a.useRouter)();return(0,s.jsxs)("div",{className:"flex h-full w-full p-8 flex-col",children:[s.jsx("h1",{children:t||r("PageError.title")}),!!e&&s.jsx("p",{children:e}),s.jsx(o.z,{onClick:()=>{n.back()},children:r("PageError.goBack")})]})}},1188:(e,t,r)=>{"use strict";r.d(t,{d:()=>l,z:()=>d});var s=r(4638),a=r(6659),o=r(1126),i=r(4983),n=r(4340);let l=(0,i.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef(({className:e,variant:t,size:r,asChild:a=!1,...i},d)=>{let c=a?o.g7:"button";return s.jsx(c,{className:(0,n.cn)(l({variant:t,size:r,className:e})),ref:d,...i})});d.displayName="Button"},4940:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(2562);let a=()=>{let{t:e,i18n:t}=(0,s.$G)();return{t:(t,r)=>e(t,r??{}),i18n:t}}},2405:(e,t,r)=>{"use strict";r.d(t,{pm:()=>f});var s=r(6659);let a=0,o=new Map,i=e=>{if(o.has(e))return;let t=setTimeout(()=>{o.delete(e),c({type:"REMOVE_TOAST",toastId:e})},1e6);o.set(e,t)},n=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?i(r):e.toasts.forEach(({id:e})=>{i(e)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},l=[],d={toasts:[]};function c(e){d=n(d,e),l.forEach(e=>{e(d)})}function u({...e}){let t=(a=(a+1)%Number.MAX_SAFE_INTEGER).toString(),r=()=>c({type:"DISMISS_TOAST",toastId:t});return c({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:e=>{e||r()}}}),{id:t,dismiss:r,update:e=>c({type:"UPDATE_TOAST",toast:{...e,id:t}})}}function f(){let[e,t]=s.useState(d);return s.useEffect(()=>(l.push(t),()=>{let e=l.indexOf(t);e>-1&&l.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>c({type:"DISMISS_TOAST",toastId:e})}}},4340:(e,t,r)=>{"use strict";r.d(t,{cn:()=>o});var s=r(805),a=r(9390);function o(...e){return(0,a.m6)((0,s.W)(e))}},4195:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>o,default:()=>n});var s=r(6325);let a=(0,s.createProxy)(String.raw`/Users/sean.mcquaid/Development/scaffolding-templates/src/templates/next/src/app/error.tsx`),{__esModule:o,$$typeof:i}=a;a.default;let n=(0,s.createProxy)(String.raw`/Users/sean.mcquaid/Development/scaffolding-templates/src/templates/next/src/app/error.tsx#default`)},7260:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var s=r(1445);r(8832);var a=r(6325);let o=(0,a.createProxy)(String.raw`/Users/sean.mcquaid/Development/scaffolding-templates/src/templates/next/src/app/Providers.tsx`),{__esModule:i,$$typeof:n}=o;o.default;let l=(0,a.createProxy)(String.raw`/Users/sean.mcquaid/Development/scaffolding-templates/src/templates/next/src/app/Providers.tsx#default`);var d=r(343);function c({children:e}){let t=(0,d.Z)();return s.jsx("html",{lang:t,children:s.jsx("body",{children:s.jsx(l,{lang:t,children:e})})})}},8562:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(1445),a=r(4003);let o=({isLoading:e,...t})=>s.jsx("div",{className:e?"fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white opacity-75 flex flex-col items-center justify-center":"hidden",...t,"data-testid":"loading-overlay",children:s.jsx(a.Z,{})}),i=()=>s.jsx(o,{isLoading:!0})},179:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(1445),a=r(7403),o=r(9236),i=r(4452);let n=async()=>{let{t:e}=await (0,i.Z)();return(0,s.jsxs)(a.Z,{children:[s.jsx("h1",{children:e("NotFoundPage.notFound")}),s.jsx("p",{children:e("NotFoundPage.pleaseTryADifferentRoute")}),s.jsx(o.Z,{href:e("Routes.home"),children:e("NotFoundPage.home")})]})}},7403:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var s=r(1445),a=r(6325);let o=(0,a.createProxy)(String.raw`/Users/sean.mcquaid/Development/scaffolding-templates/src/templates/next/src/components/app/PageError.tsx`),{__esModule:i,$$typeof:n}=o;o.default;let l=(0,a.createProxy)(String.raw`/Users/sean.mcquaid/Development/scaffolding-templates/src/templates/next/src/components/app/PageError.tsx#default`);var d=r(4003);let c=({children:e,isLoading:t,isError:r,errorText:a,errorTitleText:o})=>t?s.jsx("div",{className:"flex h-full w-full items-center justify-center",children:s.jsx(d.Z,{})}):r?s.jsx(l,{errorText:a,titleText:o}):s.jsx("div",{className:"flex h-full w-full p-8 flex-col",children:e})},9236:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var s=r(1445),a=r(1225),o=r(8321),i=r(8088),n=r(5702),l=r(3784),d=r(3301);function c(...e){return(0,d.m6)((0,l.W)(e))}let u=(0,n.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}});o.forwardRef(({className:e,variant:t,size:r,asChild:a=!1,...o},n)=>{let l=a?i.g7:"button";return s.jsx(l,{className:c(u({variant:t,size:r,className:e})),ref:n,...o})}).displayName="Button";let f=e=>s.jsx(a.default,{...e,className:c(u({variant:e.variant,size:e.size,className:e.className})),children:e.children})},4003:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var s=r(1445),a=r(6140);let o=()=>s.jsx(a.Z,{className:"animate-spin"})},4452:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var s=r(9999),a=r(7984);let o={fallbackLng:"en-US",supportedLngs:["en-US","en-CA"],load:"currentOnly",keySeparator:".",saveMissing:!0,resources:{"en-US":{translation:{Dialog:{close:"Close"},HomePage:{kitchenSink:"Kitchen Sink",reactQuery:"Querying and Mutating Data with React Query",remix:"Remix",remixHookFormZod:"Remix Hook Form with Zod",subTitle:"Below you will find a list of example routes with commonly used patterns for React projects",title:"Welcome to a scaffolded project with the @mcquaid-stacks/cli!"},KitchenSinkPage:{submit:"Submit"},Modal:{close:"Close"},NotFoundPage:{home:"Home",notFound:"Not Found",pleaseTryADifferentRoute:"Please try a different route"},PageError:{goBack:"Go Back",refresh:"Refresh",title:"We're sorry, there was a problem loading this page"},ReactQueryPage:{delete:"Delete",title:"Querying and Mutating Data with React Query",view:"View"},Routes:{home:"/",kitchenSink:"/kitchen-sink",reactQuery:"/react-query",remix:"/remix",remixHookFormZod:"/remix-hook-form-zod"}}}},missingKeyHandler:(e,t,r,s)=>{console.warn("Missing Translation Key",e,t,r,s)},missingInterpolationHandler:(e,t)=>{console.warn("Missing Interpolation",e,t)},react:{useSuspense:!1}};var i=r(343);let n=async()=>{let e=(0,s.Fs)();return await e.use(a.Z).init({...o,backend:{loadPath:"./locales/{{lng}}.ts"}}),e},l=async()=>{let e=await n(),t=(0,i.Z)(),r=e.getFixedT(t);return{t:(e,t)=>r(e,t??{}),i18n:e}}},343:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(1177);let a=()=>{let e=(0,s.headers)().get("referer")??"",t="en-US";return e.includes(".ca")&&(t="en-CA"),t}},8832:()=>{}};