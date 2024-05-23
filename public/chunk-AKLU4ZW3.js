import{a as Y,b as ee}from"./chunk-NR6TN72Y.js";import{a as Z}from"./chunk-M4ODYTX3.js";import{l as R}from"./chunk-BLBYMOAD.js";import{a as J,b as K}from"./chunk-NGTPSM6F.js";import{a as U,b as W,c as X}from"./chunk-BX65QZJP.js";import"./chunk-IK4XLTHM.js";import{d as z,f as L,j as N,k as D,l as $,n as H}from"./chunk-VOCB5AGH.js";import{a as q}from"./chunk-RBLGMK4C.js";import"./chunk-JN7XREYN.js";import{a as Q}from"./chunk-3KZ72TDH.js";import"./chunk-PQOFM3HX.js";import{f as F,i as B,u as G}from"./chunk-UUW4ZCCK.js";import{$a as i,Ab as C,Bb as M,Cb as j,Db as P,Ja as l,Ka as y,Ta as d,Wa as S,Ya as I,Za as O,_a as e,ab as m,da as E,eb as w,ia as _,ib as u,ja as h,jb as x,ka as p,la as b,nb as k,ob as s,qb as T,vb as A,xb as V}from"./chunk-CDSXNTXE.js";function te(n,r){n&1&&(p(),e(0,"svg",48),m(1,"polyline",49),i())}function ie(n,r){n&1&&(p(),e(0,"svg",50),m(1,"polyline",51),i())}function ne(n,r){n&1&&(p(),e(0,"svg",52),m(1,"line",53),i())}function re(n,r){n&1&&(p(),e(0,"svg",48),m(1,"polyline",49),i())}function oe(n,r){n&1&&(p(),e(0,"svg",50),m(1,"polyline",51),i())}function ae(n,r){n&1&&(p(),e(0,"svg",52),m(1,"line",53),i())}function le(n,r){n&1&&(p(),e(0,"svg",48),m(1,"polyline",49),i())}function se(n,r){n&1&&(p(),e(0,"svg",50),m(1,"polyline",51),i())}function ce(n,r){n&1&&(p(),e(0,"svg",52),m(1,"line",53),i())}var pe=(n,r)=>r.id;function de(n,r){if(n&1){let c=w();e(0,"tr",54)(1,"td",55)(2,"p",56),s(3),i()(),e(4,"td",55)(5,"p",57),s(6),C(7,"fecha"),i()(),e(8,"td",55)(9,"app-pastilla-estado",58),u("click",function(){let t=_(c).$implicit,g=x(2);return h(g.actualizarEstado(t))}),i()(),e(10,"td",59)(11,"span",60)(12,"button",61),u("click",function(){let t=_(c).$implicit,g=x(2);return h(g.abrirAbm("editar",t))}),p(),e(13,"svg",7),m(14,"path",62),i()()()()()}if(n&2){let c=r.$implicit;l(3),T(" ",c.descripcion," "),l(3),T(" ",M(7,3,c.createdAt)," "),l(3),d("activo",c.activo)}}function me(n,r){n&1&&(e(0,"tr",63),s(1," a "),i(),e(2,"tr",64)(3,"td",65),s(4," No se encontraron tipos "),i()())}var ue=(n,r)=>({itemsPerPage:n,currentPage:r});function ve(n,r){if(n&1&&(e(0,"tbody"),I(1,de,15,5,"tr",66,pe,!1,me,5,0),C(4,"paginate"),C(5,"filtroTiposOrdenesServicio"),i()),n&2){let c=x();l(1),O(j(4,1,P(5,4,c.tiposService.tipos,c.filtro.parametro,c.filtro.activo),V(8,ue,c.cantidadItems,c.paginaActual)))}}function fe(n,r){if(n&1){let c=w();e(0,"div",67)(1,"pagination-controls",68),u("pageChange",function(a){_(c);let t=x();return h(t.paginaActual=a)}),i()()}}var Pe=(()=>{let r=class r{constructor(o,a,t){this.tiposService=o,this.alertService=a,this.dataService=t,this.paginaActual=1,this.cantidadItems=10,this.filtro={activo:"true",parametro:""},this.ordenar={direccion:"desc",columna:"descripcion"}}ngOnInit(){this.dataService.ubicacionActual="Dashboard - Tipos de orden",this.alertService.loading(),this.listarTipos()}abrirAbm(o,a=null){this.tiposService.abrirAbm(o,a)}nuevoTipo(o){this.tiposService.tipos=[o,...this.tiposService.tipos],this.alertService.close()}actualizarTipo(o){let a=this.tiposService.tipos.findIndex(t=>t.id===o.id);this.tiposService.tipos[a]=o,this.tiposService.tipos=[...this.tiposService.tipos],this.alertService.close()}listarTipos(){let o={direccion:this.ordenar.direccion,columna:this.ordenar.columna};this.tiposService.listarTipos(o).subscribe({next:({tipos:a})=>{this.tiposService.tipos=a,this.alertService.close()},error:({error:a})=>this.alertService.errorApi(a.message)})}actualizarEstado(o){let{id:a,activo:t}=o;this.alertService.question({msg:"\xBFQuieres actualizar el estado?",buttonText:"Actualizar"}).then(({isConfirmed:g})=>{g&&(this.alertService.loading(),this.tiposService.actualizarTipo(a,{activo:!t}).subscribe({next:()=>{this.listarTipos()},error:({error:v})=>this.alertService.errorApi(v.message)}))})}filtrarActivos(o){this.paginaActual=1,this.filtro.activo=o}filtrarParametro(o){this.paginaActual=1,this.filtro.parametro=o}ordenarPorColumna(o){this.ordenar.columna=o,this.ordenar.direccion=this.ordenar.direccion=="asc"?"desc":"asc",this.alertService.loading(),this.listarTipos()}};r.\u0275fac=function(a){return new(a||r)(y(Z),y(q),y(Q))},r.\u0275cmp=E({type:r,selectors:[["app-tipos-orden-servicio"]],standalone:!0,features:[A],decls:78,vars:13,consts:[[3,"insertEvent","updateEvent"],[1,"md:max-w-7xl","mx-auto"],[1,"container","mx-auto"],[1,"flex","items-center","justify-between","bg-gray-800","px-4","py-3","rounded-t"],[1,"ml-2","text-white"],[1,"text-xl","md:text-2xl","leading-tight"],["title","Nuevo tipo",1,"boton-nuevo-header",3,"click"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"w-5","h-5"],["stroke-linecap","round","stroke-linejoin","round","d","M12 4.5v15m7.5-7.5h-15"],[1,"md:flex","md:items-center","md:justify-between","px-4","py-2"],[1,"my-2","flex","sm:flex-row","flex-col"],[1,"flex","flex-row","mb-1","sm:mb-0"],[1,"relative","w-full","md:w-auto"],[1,"h-full","text-sm","rounded-r","border-t","border-l","rounded-l","sm:rounded-r-none","sm:border-r-0","border-r","border-b","block","appearance-none","w-full","bg-white","border-gray-400","text-gray-700","py-2","px-4","pr-8","leading-tight","focus:outline-none","focus:border-l","focus:border-r","focus:bg-white","focus:border-gray-500",3,"change"],["txtActivo",""],["value","true"],["value","false"],["value",""],[1,"pointer-events-none","absolute","inset-y-0","right-0","flex","items-center","px-2","text-gray-700"],["viewBox","0 0 20 20",1,"fill-current","h-4","w-4"],["d","M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"],[1,"block","relative"],[1,"h-full","absolute","inset-y-0","left-0","flex","items-center","pl-2"],["viewBox","0 0 24 24",1,"h-4","w-4","fill-current","text-gray-500","cursor-pointer","hover:text-secondary-500"],["d","M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"],["placeholder","Buscar",1,"appearance-none","rounded-r","rounded-l","sm:rounded-l-none","border","border-gray-400","border-b","block","pl-8","pr-6","py-2","w-full","bg-white","text-sm","placeholder-gray-400","text-gray-700","focus:bg-white","focus:placeholder-gray-600","focus:text-gray-700","focus:outline-none",3,"keyup"],["txtParametro",""],[1,"bg-white","text-sm","focus:outline-none","w-full","md:w-max","px-2","py-2","md:py-0","md:ml-2","mt-2","md:mt-0","border","text-gray-600","border-gray-400","rounded",3,"ngModel","change","ngModelChange"],["value","10"],["value","20"],["value","50"],["value","100"],[1,"px-4","py-2","overflow-x-auto"],[1,"inline-block","max-h-96","overflow-y-auto","min-w-full","pb-5"],[1,"min-w-full","leading-normal"],[1,"border"],[1,"px-5","py-2","border-b-2","border-gray-200","bg-gray-100","text-left","text-sm","font-semibold","text-gray-900","tracking-wider"],[1,"cursor-pointer","flex","items-center","focus:outline-none",3,"click"],[1,"ml-2","text-gray-600"],["width","15","height","15","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round","class","feather feather-chevron-down",4,"ngIf"],["width","15","height","15","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round","class","feather feather-chevron-up",4,"ngIf"],["width","15","height","15","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round","class","feather feather-minus",4,"ngIf"],[1,"px-5","border-b-2","border-gray-200","bg-gray-100","text-sm","font-semibold","text-gray-900","tracking-wider"],[1,"cursor-pointer","w-max","flex","items-center","justify-center","focus:outline-none",3,"click"],[1,"ml-2"],[1,"px-5","border-b-2","border-gray-200","bg-gray-100","text-center","text-sm","font-semibold","text-gray-900","tracking-wider"],[4,"ngIf"],["class","px-5 text-sm py-5 mt-4 bg-white border-t flex shadow flex-col xs:flex-row items-center xs:justify-between",4,"ngIf"],["width","15","height","15","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-chevron-down"],["points","6 9 12 15 18 9"],["width","15","height","15","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-chevron-up"],["points","18 15 12 9 6 15"],["width","15","height","15","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-minus"],["x1","5","y1","12","x2","19","y2","12"],[1,"animate__animated","animate__fadeIn"],[1,"px-5","py-2","border-b","border-gray-200","text-xs"],[1,"text-gray-900","w-max","whitespace-no-wrap"],[1,"text-gray-900","whitespace-no-wrap"],[3,"activo","click"],[1,"px-5","py-2","border-b","border-gray-200","text-xs","text-center"],[1,"flex","items-center","justify-center","text-gray-900","whitespace-no-wrap"],["title","Editar tipo",1,"boton-editar","ml-2",3,"click"],["stroke-linecap","round","stroke-linejoin","round","d","M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"],[1,"p-4","text-white"],[1,"w-full"],["colspan","4",1,"text-gray-500","text-sm","p-2","border","border-gray-300","text-center","bg-gray-50","mt-4"],["class","animate__animated animate__fadeIn"],[1,"px-5","text-sm","py-5","mt-4","bg-white","border-t","flex","shadow","flex-col","xs:flex-row","items-center","xs:justify-between"],["nextLabel","Siguiente","previousLabel","Anterior",3,"pageChange"]],template:function(a,t){if(a&1){let g=w();e(0,"app-abm-tipo-orden-servicio",0),u("insertEvent",function(f){return t.nuevoTipo(f)})("updateEvent",function(f){return t.actualizarTipo(f)}),i(),e(1,"div",1)(2,"app-tarjeta-lista")(3,"div",2)(4,"div")(5,"div",3)(6,"div",4)(7,"h2",5),s(8," Tipos de ordenes "),i(),e(9,"p"),s(10),i()(),e(11,"div")(12,"button",6),u("click",function(){return t.abrirAbm("crear")}),p(),e(13,"svg",7),m(14,"path",8),i()()()(),b(),e(15,"div",9)(16,"div",10)(17,"div",11)(18,"div",12)(19,"select",13,14),u("change",function(){_(g);let f=k(20);return h(t.filtrarActivos(f.value))}),e(21,"option",15),s(22," Activos "),i(),e(23,"option",16),s(24," Inactivos "),i(),e(25,"option",17),s(26," Todos "),i()(),e(27,"div",18),p(),e(28,"svg",19),m(29,"path",20),i()()()(),b(),e(30,"div",21)(31,"span",22),p(),e(32,"svg",23),m(33,"path",24),i()(),b(),e(34,"input",25,26),u("keyup",function(){_(g);let f=k(35);return h(t.filtrarParametro(f.value))}),i()(),e(36,"select",27),u("change",function(){return t.paginaActual=1})("ngModelChange",function(f){return t.cantidadItems=f}),e(37,"option",28),s(38," 10 elementos "),i(),e(39,"option",29),s(40," 20 elementos "),i(),e(41,"option",30),s(42," 50 elementos "),i(),e(43,"option",31),s(44," 100 elementos "),i()()()(),e(45,"div",32)(46,"div",33)(47,"table",34)(48,"thead")(49,"tr",35)(50,"th",36)(51,"div",37),u("click",function(){return t.ordenarPorColumna("descripcion")}),e(52,"span"),s(53," Descripci\xF3n "),i(),e(54,"span",38),S(55,te,2,0,"svg",39)(56,ie,2,0,"svg",40)(57,ne,2,0,"svg",41),i()()(),e(58,"th",42)(59,"div",43),u("click",function(){return t.ordenarPorColumna("createdAt")}),e(60,"span"),s(61," Fecha de creaci\xF3n "),i(),e(62,"span",44),S(63,re,2,0,"svg",39)(64,oe,2,0,"svg",40)(65,ae,2,0,"svg",41),i()()(),e(66,"th",45)(67,"div",37),u("click",function(){return t.ordenarPorColumna("activo")}),e(68,"span"),s(69," Estado "),i(),e(70,"span",44),S(71,le,2,0,"svg",39)(72,se,2,0,"svg",40)(73,ce,2,0,"svg",41),i()()(),e(74,"th",45),s(75," Acci\xF3n "),i()()(),S(76,ve,6,11,"tbody",46),i()()()(),S(77,fe,2,0,"div",47),i()()()}a&2&&(l(10),T(" Total de ordenes: ",t.tiposService.tipos.length," "),l(26),d("ngModel",t.cantidadItems),l(19),d("ngIf",t.ordenar.columna=="descripcion"&&t.ordenar.direccion=="asc"),l(1),d("ngIf",t.ordenar.columna=="descripcion"&&t.ordenar.direccion=="desc"),l(1),d("ngIf",t.ordenar.columna!="descripcion"),l(6),d("ngIf",t.ordenar.columna=="createdAt"&&t.ordenar.direccion=="asc"),l(1),d("ngIf",t.ordenar.columna=="createdAt"&&t.ordenar.direccion=="desc"),l(1),d("ngIf",t.ordenar.columna!="createdAt"),l(6),d("ngIf",t.ordenar.columna=="activo"&&t.ordenar.direccion=="asc"),l(1),d("ngIf",t.ordenar.columna=="activo"&&t.ordenar.direccion=="desc"),l(1),d("ngIf",t.ordenar.columna!="activo"),l(3),d("ngIf",t.tiposService.tipos),l(1),d("ngIf",t.tiposService.tipos.length>t.cantidadItems))},dependencies:[B,F,H,D,$,N,z,L,R,X,U,W,G,K,J,Y,ee],encapsulation:2});let n=r;return n})();export{Pe as default};
