(()=>{var e={};e.id=267,e.ids=[267],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},5477:e=>{"use strict";e.exports=require("punycode")},2781:e=>{"use strict";e.exports=require("stream")},7310:e=>{"use strict";e.exports=require("url")},9796:e=>{"use strict";e.exports=require("zlib")},2814:(e,s,r)=>{"use strict";r.r(s),r.d(s,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>m,pages:()=>c,routeModule:()=>u,tree:()=>d}),r(8772),r(7260),r(4195),r(8562),r(179);var t=r(3152),a=r(5102),o=r(3041),n=r.n(o),i=r(2685),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(s,l);let d=["",{children:["react-hook-form-zod",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8772)),"/Users/sean.mcquaid/Development/scaffolding-templates/src/templates/next/src/app/react-hook-form-zod/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,7260)),"/Users/sean.mcquaid/Development/scaffolding-templates/src/templates/next/src/app/layout.tsx"],error:[()=>Promise.resolve().then(r.bind(r,4195)),"/Users/sean.mcquaid/Development/scaffolding-templates/src/templates/next/src/app/error.tsx"],loading:[()=>Promise.resolve().then(r.bind(r,8562)),"/Users/sean.mcquaid/Development/scaffolding-templates/src/templates/next/src/app/loading.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,179)),"/Users/sean.mcquaid/Development/scaffolding-templates/src/templates/next/src/app/not-found.tsx"]}],c=["/Users/sean.mcquaid/Development/scaffolding-templates/src/templates/next/src/app/react-hook-form-zod/page.tsx"],m="/react-hook-form-zod/page",p={require:r,loadChunk:()=>Promise.resolve()},u=new t.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/react-hook-form-zod/page",pathname:"/react-hook-form-zod",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},7285:(e,s,r)=>{Promise.resolve().then(r.bind(r,7107))},6585:(e,s,r)=>{"use strict";r.d(s,{Z:()=>t});/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let t=(0,r(2348).Z)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},7107:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>m});var t=r(4638),a=r(8857),o=r(220),n=r(7046),i=r(9447),l=r(8639);let d=o.z.object({username:o.z.string().email({message:"Please enter a valid email"}),password:o.z.string().min(3,{message:"Password must be between 3 and 10 characters"}).max(10,{message:"Password must be between 3 and 10 characters"}),confirmPassword:o.z.string().min(3,{message:"Password must be between 3 and 10 characters"}).max(10,{message:"Password must be between 3 and 10 characters"})}).refine(e=>e.password===e.confirmPassword,{message:"Passwords do not match",path:["confirmPassword"]}),c=(0,a.F)(d),m=()=>{let{register:e,formState:{errors:s}}=(0,n.cI)({mode:"onBlur",resolver:c});return t.jsx(l.Z,{children:(0,t.jsxs)("form",{children:[t.jsx(i.I,{className:"m-4",autoComplete:"username",label:"Username",errorMessage:s?.username?.message,...e("username")}),t.jsx(i.I,{type:"password",className:"m-4",autoComplete:"new-password",label:"Password",errorMessage:s?.password?.message,...e("password")}),t.jsx(i.I,{type:"password",className:"m-4",autoComplete:"new-password",label:"Confirm Password",errorMessage:s?.confirmPassword?.message,...e("confirmPassword")})]})})}},8639:(e,s,r)=>{"use strict";r.d(s,{Z:()=>i});var t=r(4638),a=r(3671),o=r(6585);let n=()=>t.jsx(o.Z,{className:"animate-spin"}),i=({children:e,isLoading:s,isError:r,errorText:o,errorTitleText:i})=>s?t.jsx("div",{className:"flex h-full w-full items-center justify-center",children:t.jsx(n,{})}):r?t.jsx(a.default,{errorText:o,titleText:i}):t.jsx("div",{className:"flex h-full w-full p-8 flex-col",children:e})},9447:(e,s,r)=>{"use strict";r.d(s,{I:()=>n});var t=r(4638),a=r(6659),o=r(4340);let n=a.forwardRef(({className:e,type:s,errorMessage:r,label:a,...n},i)=>(0,t.jsxs)("div",{className:e,children:[(0,t.jsxs)("label",{htmlFor:n.id,children:[a,t.jsx("input",{type:s,className:(0,o.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"),ref:i,...n})]}),!!r&&t.jsx("p",{children:r})]}));n.displayName="Input"},8772:(e,s,r)=>{"use strict";r.r(s),r.d(s,{$$typeof:()=>n,__esModule:()=>o,default:()=>i});var t=r(6325);let a=(0,t.createProxy)(String.raw`/Users/sean.mcquaid/Development/scaffolding-templates/src/templates/next/src/app/react-hook-form-zod/page.tsx`),{__esModule:o,$$typeof:n}=a;a.default;let i=(0,t.createProxy)(String.raw`/Users/sean.mcquaid/Development/scaffolding-templates/src/templates/next/src/app/react-hook-form-zod/page.tsx#default`)}};var s=require("../../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),t=s.X(0,[945,220,857,697],()=>r(2814));module.exports=t})();