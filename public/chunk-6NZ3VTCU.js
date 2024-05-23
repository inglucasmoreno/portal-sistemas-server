import{a as H,b as $}from"./chunk-NGTPSM6F.js";import{a as q,b as Q,c as J}from"./chunk-BX65QZJP.js";import{a as R}from"./chunk-QN5ARZYM.js";import{a as O}from"./chunk-RBLGMK4C.js";import"./chunk-JN7XREYN.js";import{a as N}from"./chunk-3KZ72TDH.js";import{a as D}from"./chunk-PQOFM3HX.js";import{d as G,e as P,f as M,i as F,r as B,u as z}from"./chunk-UUW4ZCCK.js";import{$a as n,Ab as k,Cb as L,Db as A,Ja as o,Ka as y,Ta as l,Wa as v,_a as e,ab as p,da as I,eb as C,ga as T,ia as f,ib as x,ja as g,jb as u,ka as c,la as w,nb as j,ob as d,qb as b,vb as U,wb as E,xb as V}from"./chunk-CDSXNTXE.js";var K=(()=>{let r=class r{transform(s,a,m){let _,h;return m==="true"?_=!0:m==="false"?_=!1:_=null,_!==null?h=s.filter(S=>S.activo==_):_===null&&(h=s),a=a.toLocaleLowerCase(),a.length!==0?h.filter(S=>S.apellido.toLocaleLowerCase().includes(a)||S.nombre.toLocaleLowerCase().includes(a)||S.usuario.toLocaleLowerCase().includes(a)):h}};r.\u0275fac=function(a){return new(a||r)},r.\u0275pipe=T({name:"filtroUsuarios",type:r,pure:!0,standalone:!0});let t=r;return t})();function X(t,r){t&1&&(c(),e(0,"svg",45),p(1,"polyline",46),n())}function Y(t,r){t&1&&(c(),e(0,"svg",47),p(1,"polyline",48),n())}function Z(t,r){t&1&&(c(),e(0,"svg",49),p(1,"line",50),n())}function ee(t,r){t&1&&(c(),e(0,"svg",45),p(1,"polyline",46),n())}function te(t,r){t&1&&(c(),e(0,"svg",47),p(1,"polyline",48),n())}function ie(t,r){t&1&&(c(),e(0,"svg",49),p(1,"line",50),n())}function ne(t,r){t&1&&(c(),e(0,"svg",45),p(1,"polyline",46),n())}function re(t,r){t&1&&(c(),e(0,"svg",47),p(1,"polyline",48),n())}function ae(t,r){t&1&&(c(),e(0,"svg",49),p(1,"line",50),n())}function oe(t,r){t&1&&(c(),e(0,"svg",45),p(1,"polyline",46),n())}function se(t,r){t&1&&(c(),e(0,"svg",47),p(1,"polyline",48),n())}function le(t,r){t&1&&(c(),e(0,"svg",49),p(1,"line",50),n())}function ce(t,r){t&1&&(c(),e(0,"svg",45),p(1,"polyline",46),n())}function pe(t,r){t&1&&(c(),e(0,"svg",47),p(1,"polyline",48),n())}function de(t,r){t&1&&(c(),e(0,"svg",49),p(1,"line",50),n())}function me(t,r){t&1&&(c(),e(0,"svg",45),p(1,"polyline",46),n())}function ue(t,r){t&1&&(c(),e(0,"svg",47),p(1,"polyline",48),n())}function _e(t,r){t&1&&(c(),e(0,"svg",49),p(1,"line",50),n())}function fe(t,r){t&1&&(e(0,"div",65),d(1," E "),n())}function ge(t,r){t&1&&(e(0,"div",66),d(1," A "),n())}function ve(t,r){t&1&&(e(0,"div",67),d(1," T "),n())}var xe=t=>({"bg-indigo-50":t}),he=t=>["/dashboard/usuarios/editar",t],be=t=>["/dashboard/usuarios/password",t];function Se(t,r){if(t&1){let i=C();e(0,"tr",51)(1,"td",52)(2,"div",53),v(3,fe,2,0,"div",54)(4,ge,2,0,"div",55)(5,ve,2,0,"div",56),n()(),e(6,"td",52)(7,"p",57),d(8),n()(),e(9,"td",52)(10,"p",57),d(11),n()(),e(12,"td",52)(13,"p",53),d(14),n()(),e(15,"td",52)(16,"p",53),d(17),n()(),e(18,"td",52)(19,"app-pastilla-estado",58),x("click",function(){let m=f(i).$implicit,_=u(2);return g(_.actualizarEstado(m))}),n()(),e(20,"td",59)(21,"p",60)(22,"button",61),c(),e(23,"svg",6),p(24,"path",62),n()(),w(),e(25,"button",63),c(),e(26,"svg",6),p(27,"path",64),n()()()()()}if(t&2){let i=r.$implicit,s=u(2);l("ngClass",E(11,xe,s.authService.usuario.userId===i.id)),o(3),l("ngIf",i.role=="USER_ROLE"),o(1),l("ngIf",i.role=="ADMIN_ROLE"),o(1),l("ngIf",i.role=="TECHNICAL_ROLE"),o(3),b(" ",i.apellido.toLowerCase()," "),o(3),b(" ",i.nombre.toLowerCase()," "),o(3),b(" ",i.dni," "),o(3),b(" ",i.usuario," "),o(2),l("activo",i.activo),o(3),l("routerLink",E(13,he,i.id)),o(3),l("routerLink",E(15,be,i.id))}}function we(t,r){if(t&1){let i=C();e(0,"div",68)(1,"pagination-controls",69),x("pageChange",function(a){f(i);let m=u(2);return g(m.paginaActual=a)}),n()()}}var ye=(t,r)=>({itemsPerPage:t,currentPage:r});function Ce(t,r){if(t&1){let i=C();e(0,"app-tarjeta-lista")(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2",4),d(5," Listado de usuarios "),n(),e(6,"p"),d(7),n()(),e(8,"div")(9,"button",5),c(),e(10,"svg",6),p(11,"path",7),n()()()(),w(),e(12,"div",8)(13,"div",9)(14,"div",10)(15,"div",11)(16,"div",12)(17,"select",13,14),x("change",function(){f(i);let a=j(18),m=u();return g(m.filtrarActivos(a.value))}),e(19,"option",15),d(20," Activos "),n(),e(21,"option",16),d(22," Inactivos "),n(),e(23,"option",17),d(24," Todos "),n()(),e(25,"div",18),c(),e(26,"svg",19),p(27,"path",20),n()()()(),w(),e(28,"div",21)(29,"span",22),c(),e(30,"svg",23),p(31,"path",24),n()(),w(),e(32,"input",25,26),x("keyup",function(){f(i);let a=j(33),m=u();return g(m.filtrarParametro(a.value))}),n()(),e(34,"select",27)(35,"option",28),d(36," 10 elementos "),n(),e(37,"option",29),d(38," 20 elementos "),n(),e(39,"option",30),d(40," 50 elementos "),n(),e(41,"option",31),d(42," 100 elementos "),n()()()(),e(43,"div",32)(44,"div",33)(45,"table",34)(46,"thead")(47,"tr")(48,"th",35)(49,"div",36),x("click",function(){f(i);let a=u();return g(a.ordenarPorColumna("role"))}),e(50,"span"),d(51," Tipo "),n(),e(52,"span",37),v(53,X,2,0,"svg",38)(54,Y,2,0,"svg",39)(55,Z,2,0,"svg",40),n()()(),e(56,"th",35)(57,"div",36),x("click",function(){f(i);let a=u();return g(a.ordenarPorColumna("apellido"))}),e(58,"span"),d(59," Apellido "),n(),e(60,"span",37),v(61,ee,2,0,"svg",38)(62,te,2,0,"svg",39)(63,ie,2,0,"svg",40),n()()(),e(64,"th",35)(65,"div",36),x("click",function(){f(i);let a=u();return g(a.ordenarPorColumna("nombre"))}),e(66,"span"),d(67," Nombre "),n(),e(68,"span",3),v(69,ne,2,0,"svg",38)(70,re,2,0,"svg",39)(71,ae,2,0,"svg",40),n()()(),e(72,"th",41)(73,"div",36),x("click",function(){f(i);let a=u();return g(a.ordenarPorColumna("dni"))}),e(74,"span"),d(75," DNI "),n(),e(76,"span",3),v(77,oe,2,0,"svg",38)(78,se,2,0,"svg",39)(79,le,2,0,"svg",40),n()()(),e(80,"th",35)(81,"div",36),x("click",function(){f(i);let a=u();return g(a.ordenarPorColumna("usuario"))}),e(82,"span"),d(83," Usuario "),n(),e(84,"span",3),v(85,ce,2,0,"svg",38)(86,pe,2,0,"svg",39)(87,de,2,0,"svg",40),n()()(),e(88,"th",42)(89,"div",36),x("click",function(){f(i);let a=u();return g(a.ordenarPorColumna("activo"))}),e(90,"span"),d(91," Estado "),n(),e(92,"span",3),v(93,me,2,0,"svg",38)(94,ue,2,0,"svg",39)(95,_e,2,0,"svg",40),n()()(),e(96,"th",42),d(97," Acci\xF3n "),n()()(),e(98,"tbody"),v(99,Se,28,17,"tr",43),k(100,"paginate"),k(101,"filtroUsuarios"),n()()()()(),v(102,we,2,0,"div",44),n()()}if(t&2){let i=u();o(7),b(" Total de usuarios: ",i.usuarios.length," "),o(46),l("ngIf",i.ordenar.columna=="role"&&i.ordenar.direccion==1),o(1),l("ngIf",i.ordenar.columna=="role"&&i.ordenar.direccion==-1),o(1),l("ngIf",i.ordenar.columna!="role"),o(6),l("ngIf",i.ordenar.columna=="apellido"&&i.ordenar.direccion==1),o(1),l("ngIf",i.ordenar.columna=="apellido"&&i.ordenar.direccion==-1),o(1),l("ngIf",i.ordenar.columna!="apellido"),o(6),l("ngIf",i.ordenar.columna=="nombre"&&i.ordenar.direccion==1),o(1),l("ngIf",i.ordenar.columna=="nombre"&&i.ordenar.direccion==-1),o(1),l("ngIf",i.ordenar.columna!="nombre"),o(6),l("ngIf",i.ordenar.columna=="dni"&&i.ordenar.direccion==1),o(1),l("ngIf",i.ordenar.columna=="dni"&&i.ordenar.direccion==-1),o(1),l("ngIf",i.ordenar.columna!="dni"),o(6),l("ngIf",i.ordenar.columna=="usuario"&&i.ordenar.direccion==1),o(1),l("ngIf",i.ordenar.columna=="usuario"&&i.ordenar.direccion==-1),o(1),l("ngIf",i.ordenar.columna!="usuario"),o(6),l("ngIf",i.ordenar.columna=="activo"&&i.ordenar.direccion==1),o(1),l("ngIf",i.ordenar.columna=="activo"&&i.ordenar.direccion==-1),o(1),l("ngIf",i.ordenar.columna!="activo"),o(4),l("ngForOf",L(100,21,A(101,24,i.usuarios,i.filtro.parametro,i.filtro.activo),V(28,ye,i.cantidadItems,i.paginaActual))),o(3),l("ngIf",i.usuarios.length>i.cantidadItems)}}var $e=(()=>{let r=class r{constructor(s,a,m,_){this.usuariosService=s,this.alertService=a,this.dataService=m,this.authService=_,this.permiso_escritura=["USUARIOS_ALL"],this.total=0,this.paginaActual=1,this.cantidadItems=10,this.filtro={activo:"true",parametro:""},this.ordenar={direccion:1,columna:"apellido"}}ngOnInit(){this.dataService.ubicacionActual="Dashboard - Usuarios",this.alertService.loading(),this.listarUsuarios()}listarUsuarios(){this.usuariosService.listarUsuarios(this.ordenar.direccion,this.ordenar.columna).subscribe({next:s=>{let{usuarios:a,total:m}=s;this.usuarios=a,this.total=m,this.alertService.close()},error:({error:s})=>this.alertService.errorApi(s.message)})}actualizarEstado(s){let{id:a,activo:m}=s;this.alertService.question({msg:"\xBFQuieres actualizar el estado?",buttonText:"Actualizar"}).then(({isConfirmed:_})=>{_&&(this.alertService.loading(),this.usuariosService.actualizarUsuario(a,{activo:!m}).subscribe(()=>{this.alertService.loading(),this.listarUsuarios()},({error:h})=>{this.alertService.close(),this.alertService.errorApi(h.message)}))})}filtrarActivos(s){this.paginaActual=1,this.filtro.activo=s}filtrarParametro(s){this.paginaActual=1,this.filtro.parametro=s}ordenarPorColumna(s){this.ordenar.columna=s,this.ordenar.direccion=this.ordenar.direccion==1?-1:1,this.alertService.loading(),this.listarUsuarios()}};r.\u0275fac=function(a){return new(a||r)(y(R),y(O),y(N),y(D))},r.\u0275cmp=I({type:r,selectors:[["app-usuarios"]],standalone:!0,features:[U],decls:1,vars:1,consts:[[4,"ngIf"],[1,"max-w-full","mx-auto"],[1,"flex","items-center","w-full","justify-between","bg-gray-800","text-white","px-4","py-3","rounded-t"],[1,"ml-2"],[1,"text-xl","md:text-2xl","leading-tight"],["title","Nuevo usuario","routerLink","/dashboard/usuarios/nuevo",1,"boton-nuevo-header","mr-1"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"w-5","h-5"],["stroke-linecap","round","stroke-linejoin","round","d","M12 4.5v15m7.5-7.5h-15"],[1,"py-4","px-4","text-sm"],[1,"md:flex","md:items-center","md:justify-between"],[1,"my-2","flex","sm:flex-row","flex-col"],[1,"flex","flex-row","mb-1","sm:mb-0"],[1,"relative"],[1,"h-full","rounded-r","border-t","border-l","rounded-l","sm:rounded-r-none","sm:border-r-0","border-r","border-b","block","appearance-none","w-full","bg-white","border-gray-400","text-gray-700","py-2","px-4","pr-8","leading-tight","focus:outline-none","focus:border-l","focus:border-r","focus:bg-white","focus:border-gray-500",3,"change"],["txtActivo",""],["value","true"],["value","false"],["value",""],[1,"pointer-events-none","absolute","inset-y-0","right-0","flex","items-center","px-2","text-gray-700"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20",1,"fill-current","h-4","w-4"],["d","M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"],[1,"block","relative","mt-1","md:mt-0"],[1,"h-full","absolute","inset-y-0","left-0","flex","items-center","pl-2"],["viewBox","0 0 24 24",1,"h-4","w-4","fill-current","text-gray-500","cursor-pointer","hover:text-secondaryColor"],["d","M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"],["placeholder","Buscar",1,"appearance-none","rounded-r","rounded-l","sm:rounded-l-none","border","border-gray-400","border-b","block","pl-8","pr-6","py-2","w-full","bg-white","text-sm","placeholder-gray-400","text-gray-700","focus:bg-white","focus:placeholder-gray-600","focus:text-gray-700","focus:outline-none",3,"keyup"],["txtParametro",""],[1,"md:ml-2","mt-2","md:mt-0","w-max","outline-none","p-2","md:p-1","bg-white","border","border-gray-400","rounded"],["value","10"],["value","20"],["value","50"],["value","100"],[1,"-mx-4","sm:-mx-8","px-4","sm:px-8","py-4","overflow-x-auto"],[1,"inline-block","max-h-96","overflow-y-auto","border","border-gray-200","min-w-full","shadow","rounded-lg"],[1,"min-w-full","leading-normal"],[1,"px-5","py-3","border-b-2","border-gray-200","bg-gray-100","text-left","text-sm","font-semibold","text-gray-600","tracking-wider"],[1,"cursor-pointer","flex","items-center","focus:outline-none",3,"click"],[1,"ml-2","text-gray-600"],["width","15","height","15","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round","class","feather feather-chevron-down",4,"ngIf"],["width","15","height","15","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round","class","feather feather-chevron-up",4,"ngIf"],["width","15","height","15","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round","class","feather feather-minus",4,"ngIf"],[1,"px-5","py-3","border-b-2","border-gray-200","bg-gray-100","text-left","text-xs","font-semibold","text-gray-600","uppercase","tracking-wider"],[1,"px-5","py-3","border-b-2","border-gray-200","bg-gray-100","text-center","text-sm","font-semibold","text-gray-600","tracking-wider"],["class","animate__animated animate__fadeIn",3,"ngClass",4,"ngFor","ngForOf"],["class","px-5 py-5 bg-white border-t text-sm flex shadow flex-col xs:flex-row items-center xs:justify-between",4,"ngIf"],["width","15","height","15","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-chevron-down"],["points","6 9 12 15 18 9"],["width","15","height","15","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-chevron-up"],["points","18 15 12 9 6 15"],["width","15","height","15","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-minus"],["x1","5","y1","12","x2","19","y2","12"],[1,"animate__animated","animate__fadeIn",3,"ngClass"],[1,"px-5","py-2","border-b","border-gray-200","text-xs"],[1,"text-gray-900","whitespace-no-wrap"],["class","bg-orange-100 flex items-center font-semibold text-orange-500 text-2xl justify-center w-10 h-10 rounded-full shadow border border-orange-300","src","assets/img/usuarios/usuario_estandar.png","alt","Avatar",4,"ngIf"],["class","bg-blue-100 flex items-center font-semibold text-blue-900 text-2xl justify-center w-10 h-10 rounded-full shadow border border-blue-300","src","assets/img/usuarios/usuario_estandar.png","alt","Avatar",4,"ngIf"],["class","bg-purple-100 flex items-center font-semibold text-purple-900 text-2xl justify-center w-10 h-10 rounded-full shadow border border-purple-300","src","assets/img/usuarios/usuario_estandar.png","alt","Avatar",4,"ngIf"],[1,"text-gray-900","whitespace-no-wrap","capitalize"],[3,"activo","click"],[1,"px-5","py-2","border-b","border-gray-200","text-xs","text-center"],[1,"flex","items-center","justify-center","text-gray-900","whitespace-no-wrap"],["title","Editar usuario",1,"boton-editar","ml-2",3,"routerLink"],["stroke-linecap","round","stroke-linejoin","round","d","M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"],["title","Actualizar contrase\xF1a",1,"p-2","rounded","shadow","focus:outline-none","bg-fuchsia-600","hover:opacity-90","text-white","ml-2",3,"routerLink"],["stroke-linecap","round","stroke-linejoin","round","d","M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"],["src","assets/img/usuarios/usuario_estandar.png","alt","Avatar",1,"bg-orange-100","flex","items-center","font-semibold","text-orange-500","text-2xl","justify-center","w-10","h-10","rounded-full","shadow","border","border-orange-300"],["src","assets/img/usuarios/usuario_estandar.png","alt","Avatar",1,"bg-blue-100","flex","items-center","font-semibold","text-blue-900","text-2xl","justify-center","w-10","h-10","rounded-full","shadow","border","border-blue-300"],["src","assets/img/usuarios/usuario_estandar.png","alt","Avatar",1,"bg-purple-100","flex","items-center","font-semibold","text-purple-900","text-2xl","justify-center","w-10","h-10","rounded-full","shadow","border","border-purple-300"],[1,"px-5","py-5","bg-white","border-t","text-sm","flex","shadow","flex-col","xs:flex-row","items-center","xs:justify-between"],["nextLabel","Siguiente","previousLabel","Anterior",3,"pageChange"]],template:function(a,m){a&1&&v(0,Ce,103,31,"app-tarjeta-lista",0),a&2&&l("ngIf",m.usuarios)},dependencies:[F,G,P,M,H,z,B,$,K,J,q,Q],encapsulation:2});let t=r;return t})();export{$e as default};
