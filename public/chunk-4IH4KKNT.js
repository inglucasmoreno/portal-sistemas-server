import{a as C}from"./chunk-PSNAPTFY.js";import{a as H}from"./chunk-FLY4BXSB.js";import{d as T,f as A,i as b,p as I,r as V,s as N,u as j}from"./chunk-ADCDB4OU.js";import{$a as l,Ia as s,Ja as S,Sa as u,Va as v,Wa as _,Za as e,_a as n,da as h,db as y,hb as f,ia as k,ib as x,ja as E,ka as c,la as d,nb as o,pb as w,ub as g,wb as M}from"./chunk-75MKQ6H5.js";var R=(()=>{let i=class i{constructor(m){this.dataService=m}ngOnInit(){}};i.\u0275fac=function(a){return new(a||i)(S(C))},i.\u0275cmp=h({type:i,selectors:[["app-header"]],standalone:!0,features:[g],decls:12,vars:1,consts:[[1,"relative","z-0","lg:flex-grow"],[1,"bg-primaryColor","flex","p-2"],[1,"p-2","lg:hidden","focus:outline-none","focus:bg-gray-600","text-white","items-center","rounded-md",3,"click"],["fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"h-6","w-6"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M4 6h16M4 12h16M4 18h16"],[1,"flex","items-center","justify-between","w-full"],[1,"flex","items-center","text-white","p-2"],[1,"p-1"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"w-5","h-5"],["stroke-linecap","round","stroke-linejoin","round","d","M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"],[1,"ml-2"]],template:function(a,r){a&1&&(e(0,"div",0)(1,"header",1)(2,"button",2),f("click",function(){return r.dataService.showMenu=!0}),c(),e(3,"svg",3),l(4,"path",4),n()(),d(),e(5,"div",5)(6,"span",6)(7,"div",7),c(),e(8,"svg",8),l(9,"path",9),n()(),d(),e(10,"span",10),o(11),n()()()()()),a&2&&(s(11),w(" ",r.dataService.ubicacionActual," "))},encapsulation:2});let t=i;return t})();function B(t,i){t&1&&(e(0,"div",27)(1,"p",28),o(2," A "),n()())}function Z(t,i){t&1&&(e(0,"div",29)(1,"p",30),o(2," T "),n()())}function F(t,i){t&1&&(e(0,"div",31)(1,"p",32),o(2," E "),n()())}function z(t,i){t&1&&(e(0,"p",33),o(1," Administrador "),n())}function U(t,i){t&1&&(e(0,"p",33),o(1," T\xE9cnico "),n())}function q(t,i){t&1&&(e(0,"p",33),o(1," Empleado "),n())}function J(t,i){t&1&&(e(0,"li",34),c(),e(1,"svg",19),l(2,"path",35),n(),d(),e(3,"a",16),o(4," Mi bandeja "),n()())}function K(t,i){t&1&&(c(),e(0,"svg",42),l(1,"path",43),n())}function P(t,i){t&1&&(c(),e(0,"svg",42),l(1,"path",44),n())}function Q(t,i){if(t&1){let p=y();e(0,"li",36),f("click",function(){k(p);let a=x();return E(a.mostrarOcultarSeccion("configuraciones"))}),e(1,"div",37),c(),e(2,"svg",19),l(3,"path",38)(4,"path",39),n(),d(),e(5,"a",16),o(6," Configuraciones "),n()(),e(7,"div",40),v(8,K,2,0,":svg:svg",41)(9,P,2,0),n()()}if(t&2){let p=x();s(8),_(8,p.showSeccion.configuraciones?8:9)}}function W(t,i){t&1&&(e(0,"div",45)(1,"li",46)(2,"a",16),o(3," Usuarios "),n()(),e(4,"li",47)(5,"a",16),o(6," Dependencias "),n()(),e(7,"li",48)(8,"a",16),o(9," Tipos de ordenes "),n()()())}function X(t,i){t&1&&(c(),e(0,"svg",42),l(1,"path",43),n())}function Y(t,i){t&1&&(c(),e(0,"svg",42),l(1,"path",44),n())}function $(t,i){if(t&1){let p=y();e(0,"li",36),f("click",function(){k(p);let a=x();return E(a.mostrarOcultarSeccion("reportes"))}),e(1,"div",37),c(),e(2,"svg",49),l(3,"path",50),n(),d(),e(4,"a",16),o(5," Reportes "),n()(),e(6,"div",40),v(7,X,2,0,":svg:svg",41)(8,Y,2,0),n()()}if(t&2){let p=x();s(7),_(7,p.showSeccion.reportes?7:8)}}function ee(t,i){t&1&&(e(0,"li",52)(1,"a",16),o(2," Solicitudes de asistencias "),n()())}function te(t,i){if(t&1&&(e(0,"div",45),v(1,ee,3,0,"li",51),n()),t&2){let p=x();s(),u("ngIf",p.authService.usuario.role==="ADMIN_ROLE")}}var ne=(t,i)=>({"-translate-x-0 ease-in opacity-100":t,"-translate-x-full ease-out opacity-0":i}),D=(()=>{let i=class i{constructor(m,a){this.authService=m,this.dataService=a,this.usuarioLogin=null,this.showSeccion={configuraciones:!1,reportes:!1}}ngOnInit(){this.usuarioLogin=this.authService.usuario}mostrarOcultarSeccion(m="configuraciones"){this.showSeccion[m]=!this.showSeccion[m]}logout(){this.authService.logout()}};i.\u0275fac=function(a){return new(a||i)(S(H),S(C))},i.\u0275cmp=h({type:i,selectors:[["app-navbar"]],standalone:!0,features:[g],decls:41,vars:16,consts:[[1,"absolute","overflow-y-auto","inset-0","transform","duration-200","lg:transform-none","lg:opacity-100","ease-in","-translate-x-full","lg:relative","z-10","w-11/12","md:w-64","h-full","bg-primaryColor","text-white","border-r-4","border-secondaryColor","p-3",3,"ngClass"],[1,"flex","justify-between"],["title","perfil de usuario","routerLink","perfil",1,"flex","cursor-pointer","hover:text-gray-200"],["class","bg-blue-100 flex items-center justify-center w-14 h-14 rounded-full shadow border border-blue-200",4,"ngIf"],["class","bg-purple-100 flex items-center justify-center w-14 h-14 rounded-full shadow border border-purple-200",4,"ngIf"],["class","bg-orange-100 flex items-center justify-center w-14 h-14 rounded-full shadow border border-orange-200",4,"ngIf"],[1,"ml-2","mt-2"],[1,"capitalize","text-sm","font-semibold"],["class","capitalize text-sm",4,"ngIf"],[1,"p-2","lg:hidden","focus:outline-none","focus:bg-gray-600","rounded-md",3,"click"],["fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"h-6","w-6"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M15 19l-7-7 7-7"],[1,"mt-5","text-sm"],["routerLinkActive","bg-secondaryColor text-[17px] rounded","routerLink","home",1,"flex","transform","hover:translate-x-2","duration-500","items-center","outline-none","cursor-pointer","p-2"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"h-5","w-5"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"],[1,"ml-2","mt-1"],["routerLinkActive","bg-secondaryColor text-[17px] rounded","routerLink","/dashboard/miBandeja","class","flex transform hover:translate-x-2 duration-500 items-center outline-none cursor-pointer p-2",4,"ngIf"],["routerLinkActive","bg-secondaryColor text-[17px] rounded","routerLink","ordenServicio/nueva",1,"flex","transform","hover:translate-x-2","duration-500","items-center","outline-none","cursor-pointer","p-2"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"w-5","h-5"],["stroke-linecap","round","stroke-linejoin","round","d","M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"],["routerLinkActive","bg-secondaryColor text-[17px] rounded","routerLink","ordenesServicio",1,"flex","transform","hover:translate-x-2","duration-500","items-center","outline-none","cursor-pointer","p-2"],["stroke-linecap","round","stroke-linejoin","round","d","M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"],["routerLinkActive","bg-secondaryColor rounded","class","flex justify-between items-center outline-none cursor-pointer p-2",3,"click",4,"ngIf"],["class","p-1 bg-gray-500 rounded"],[1,"flex","outline-none","transform","hover:translate-x-2","duration-500","items-center","cursor-pointer","p-2",3,"click"],["stroke-linecap","round","stroke-linejoin","round","d","M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"],[1,"bg-blue-100","flex","items-center","justify-center","w-14","h-14","rounded-full","shadow","border","border-blue-200"],[1,"text-3xl","font-semibold","text-blue-900"],[1,"bg-purple-100","flex","items-center","justify-center","w-14","h-14","rounded-full","shadow","border","border-purple-200"],[1,"text-3xl","font-semibold","text-purple-500"],[1,"bg-orange-100","flex","items-center","justify-center","w-14","h-14","rounded-full","shadow","border","border-orange-200"],[1,"text-3xl","font-semibold","text-orange-500"],[1,"capitalize","text-sm"],["routerLinkActive","bg-secondaryColor text-[17px] rounded","routerLink","/dashboard/miBandeja",1,"flex","transform","hover:translate-x-2","duration-500","items-center","outline-none","cursor-pointer","p-2"],["stroke-linecap","round","stroke-linejoin","round","d","M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"],["routerLinkActive","bg-secondaryColor rounded",1,"flex","justify-between","items-center","outline-none","cursor-pointer","p-2",3,"click"],[1,"flex","items-center"],["stroke-linecap","round","stroke-linejoin","round","d","M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"],["stroke-linecap","round","stroke-linejoin","round","d","M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"],[1,"mt-2"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor","class","w-4 h-4"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"w-4","h-4"],["stroke-linecap","round","stroke-linejoin","round","d","m19.5 8.25-7.5 7.5-7.5-7.5"],["stroke-linecap","round","stroke-linejoin","round","d","m4.5 15.75 7.5-7.5 7.5 7.5"],[1,"p-1","bg-gray-500","rounded"],["routerLinkActive","bg-secondaryColor text-[17px] rounded","routerLink","usuarios",1,"flex","transform","hover:translate-x-2","duration-500","items-center","outline-none","cursor-pointer","p-2"],["routerLinkActive","bg-secondaryColor text-[17px] rounded","routerLink","dependencias",1,"flex","transform","hover:translate-x-2","duration-500","items-center","outline-none","cursor-pointer","p-2"],["routerLinkActive","bg-secondaryColor text-[17px] rounded","routerLink","tiposOrdenServicio",1,"flex","transform","hover:translate-x-2","duration-500","items-center","outline-none","cursor-pointer","p-2"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"size-5"],["stroke-linecap","round","stroke-linejoin","round","d","M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"],["routerLinkActive","bg-secondaryColor text-[17px] rounded","routerLink","reportes/solicitudes-asistencia","class","flex transform hover:translate-x-2 duration-500 items-center outline-none cursor-pointer p-2",4,"ngIf"],["routerLinkActive","bg-secondaryColor text-[17px] rounded","routerLink","reportes/solicitudes-asistencia",1,"flex","transform","hover:translate-x-2","duration-500","items-center","outline-none","cursor-pointer","p-2"]],template:function(a,r){a&1&&(e(0,"nav",0)(1,"div",1)(2,"div",2),v(3,B,3,0,"div",3)(4,Z,3,0,"div",4)(5,F,3,0,"div",5),e(6,"div",6)(7,"p",7),o(8),n(),v(9,z,2,0,"p",8)(10,U,2,0,"p",8)(11,q,2,0,"p",8),n()(),e(12,"button",9),f("click",function(){return r.dataService.showMenu=!1}),c(),e(13,"svg",10),l(14,"path",11),n()()(),d(),e(15,"ul",12)(16,"li",13),c(),e(17,"svg",14),l(18,"path",15),n(),d(),e(19,"a",16),o(20," Inicio "),n()(),v(21,J,5,0,"li",17),e(22,"li",18),c(),e(23,"svg",19),l(24,"path",20),n(),d(),e(25,"a",16),o(26," Solicitar asistencia "),n()(),e(27,"li",21),c(),e(28,"svg",19),l(29,"path",22),n(),d(),e(30,"a",16),o(31," Listado de solicitudes "),n()(),v(32,Q,10,1,"li",23)(33,W,10,0,"div",24)(34,$,9,1,"li",23)(35,te,2,1,"div",24),e(36,"li",25),f("click",function(){return r.logout()}),c(),e(37,"svg",19),l(38,"path",26),n(),d(),e(39,"a",16),o(40," Cerrar sesion "),n()()()()),a&2&&(u("ngClass",M(13,ne,r.dataService.showMenu===!0,r.dataService.showMenu===!1)),s(3),u("ngIf",r.authService.usuario.role==="ADMIN_ROLE"),s(),u("ngIf",r.authService.usuario.role==="TECHNICAL_ROLE"),s(),u("ngIf",r.authService.usuario.role==="USER_ROLE"),s(3),w(" ",r.authService.usuario.apellido.toLowerCase()+" "+r.authService.usuario.nombre.toLowerCase()," "),s(),u("ngIf",r.authService.usuario.role==="ADMIN_ROLE"),s(),u("ngIf",r.authService.usuario.role==="TECHNICAL_ROLE"),s(),u("ngIf",r.authService.usuario.role==="USER_ROLE"),s(10),u("ngIf",r.authService.usuario.role!=="USER_ROLE"),s(11),u("ngIf",r.authService.usuario.role==="ADMIN_ROLE"),s(),_(33,r.showSeccion.configuraciones?33:-1),s(),u("ngIf",r.authService.usuario.role==="ADMIN_ROLE"),s(),_(35,r.showSeccion.reportes?35:-1))},dependencies:[b,T,A,j,V,N],encapsulation:2});let t=i;return t})();var ve=(()=>{let i=class i{constructor(){}ngOnInit(){}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=h({type:i,selectors:[["app-pages"]],standalone:!0,features:[g],decls:5,vars:0,consts:[[1,"antialiased","min-h-screen","relative","font-display","lg:flex"],[1,"w-full"]],template:function(a,r){a&1&&(e(0,"div",0),l(1,"app-navbar"),e(2,"div",1),l(3,"app-header")(4,"router-outlet"),n()())},dependencies:[b,I,R,D],encapsulation:2});let t=i;return t})();export{ve as default};
