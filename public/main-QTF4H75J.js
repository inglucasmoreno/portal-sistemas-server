import{c as N}from"./chunk-BX65QZJP.js";import{m as j,n as k,o as D}from"./chunk-VOCB5AGH.js";import{a as T}from"./chunk-3KZ72TDH.js";import{a as F}from"./chunk-PQOFM3HX.js";import{f as M,i as r,k as w,l as x,m as S,n as b,p as y,q as m,t as I}from"./chunk-UUW4ZCCK.js";import{$a as C,Ka as l,T as c,Ta as h,Wa as v,X as u,_a as g,aa as d,ab as p,da as a,ra as f,vb as s}from"./chunk-CDSXNTXE.js";var P=(()=>{let t=class t{constructor(i,e){this.authService=i,this.router=e}canActivate(i,e){return this.authService.validarToken().pipe(c(n=>{n||this.router.navigateByUrl("/login")}))}};t.\u0275fac=function(e){return new(e||t)(d(F),d(m))},t.\u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"});let o=t;return o})();var A=[{path:"",pathMatch:"full",redirectTo:"login"},{path:"login",title:"Login",loadComponent:()=>import("./chunk-UH6AHZUJ.js")},{path:"init",title:"Inicializacion",loadComponent:()=>import("./chunk-2CDX3VV6.js")},{path:"dashboard",loadComponent:()=>import("./chunk-DHHRW3ON.js"),canActivate:[P],children:[{path:"home",title:"Inicio",loadComponent:()=>import("./chunk-LHV7A6ER.js")},{path:"perfil",title:"Perfil",loadComponent:()=>import("./chunk-2BMUYIIG.js")},{path:"usuarios",title:"Usuarios",loadComponent:()=>import("./chunk-6NZ3VTCU.js")},{path:"usuarios/nuevo",title:"Nuevo usuario",loadComponent:()=>import("./chunk-X2MEPJJA.js")},{path:"usuarios/editar/:id",title:"Editar usuario",loadComponent:()=>import("./chunk-QJE3442F.js")},{path:"usuarios/password/:id",title:"Editar password",loadComponent:()=>import("./chunk-2NXU2FVK.js")},{path:"miBandeja",title:"Mi bandeja",loadComponent:()=>import("./chunk-7Q6O72UH.js")},{path:"dependencias",title:"Dependencias",loadComponent:()=>import("./chunk-Q4WZT5IO.js")},{path:"tiposOrdenServicio",title:"Tipos de ordenes",loadComponent:()=>import("./chunk-AKLU4ZW3.js")},{path:"ordenesServicio",title:"Solicitudes de asistencia",loadComponent:()=>import("./chunk-RDEXAGHK.js")},{path:"ordenServicio/nueva",title:"Nueva solicitud",loadComponent:()=>import("./chunk-Q3IO5YZX.js")},{path:"ordenServicio/detalles/:id",title:"Detalles de solicitud",loadComponent:()=>import("./chunk-BQX7XMUS.js")}]},{path:"**",title:"Error",loadComponent:()=>import("./chunk-TS724N2U.js")}];var E={providers:[I(A),f(k,w,j,D,r,N)]};function L(o,t){o&1&&(g(0,"div",1),p(1,"div",2),C())}var R=(()=>{let t=class t{constructor(i,e){this.router=i,this.dataService=e,this.show=!1,this.showBar=!1}ngOnInit(){this.router.events.subscribe({next:i=>{i instanceof S?this.show=!0:i instanceof b&&(window.scrollTo(0,0),this.show=!1,this.dataService.showMenu=!1)}})}};t.\u0275fac=function(e){return new(e||t)(l(m),l(T))},t.\u0275cmp=a({type:t,selectors:[["app-loader"]],standalone:!0,features:[s],decls:1,vars:1,consts:[["class","container-loader",4,"ngIf"],[1,"container-loader"],[1,"loader"]],template:function(e,n){e&1&&v(0,L,2,0,"div",0),e&2&&h("ngIf",n.show)},dependencies:[r,M],styles:["[_nghost-%COMP%]{display:block}.container-loader[_ngcontent-%COMP%]{position:fixed;z-index:1;top:0;left:0;width:100%;height:100%;background-color:#0006}.loader[_ngcontent-%COMP%]{z-index:2;position:fixed;inset:0;margin:auto;width:150px;height:150px;background-image:url(/assets/svg/loader.svg);background-size:contain;background-repeat:no-repeat;background-position:center}"]});let o=t;return o})();var z=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a({type:t,selectors:[["app-root"]],standalone:!0,features:[s],decls:2,vars:0,template:function(e,n){e&1&&p(0,"router-outlet")(1,"app-loader")},dependencies:[r,y,R]});let o=t;return o})();x(z,E).catch(o=>console.error(o));