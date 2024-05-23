import{b as j,c,d as T,e as R,g as M,h as P,i as k,m as N,o as z}from"./chunk-VOCB5AGH.js";import{a as U}from"./chunk-QN5ARZYM.js";import{a as q}from"./chunk-RBLGMK4C.js";import{a as D}from"./chunk-JN7XREYN.js";import{a as G}from"./chunk-3KZ72TDH.js";import{f as _,i as C,o as I,q as F,r as L,u as A}from"./chunk-UUW4ZCCK.js";import{$a as i,Ja as n,Ka as p,Ta as d,Wa as f,_a as t,ab as w,da as g,ib as S,jb as h,ka as b,la as x,ob as o,qb as m,rb as y,vb as E}from"./chunk-CDSXNTXE.js";function B(r,a){r&1&&(t(0,"p",27),o(1," Campo obligatorio "),i())}function H(r,a){if(r&1&&(t(0,"p",27),o(1),i()),r&2){let u=h();n(1),m(" Minimo ",u.password==null||u.password.errors==null?null:u.password.errors.minlength.requiredLength," caracteres ")}}function J(r,a){r&1&&(t(0,"p",27),o(1," Campo obligatorio "),i())}function K(r,a){if(r&1&&(t(0,"p",27),o(1),i()),r&2){let u=h();n(1),m(" Minimo ",u.repetir==null||u.repetir.errors==null?null:u.repetir.errors.minlength.requiredLength," caracteres ")}}function Q(r,a){r&1&&(t(0,"div",28)(1,"p",29),o(2," A "),i()())}function W(r,a){r&1&&(t(0,"div",30)(1,"p",31),o(2," E "),i()())}function X(r,a){r&1&&(t(0,"div",32)(1,"p",33),o(2," T "),i()())}var se=(()=>{let a=class a{get password(){return this.passwordForm.get("password")}get repetir(){return this.passwordForm.get("repetir")}constructor(l,s,e,v,O,V){this.router=l,this.fb=s,this.activatedRoute=e,this.usuariosService=v,this.alertService=O,this.dataService=V,this.loading=!0,this.usuario={id:"",usuario:"",apellido:"",nombre:"",email:"",role:""},this.passwordForm=this.fb.group({password:["",[c.required,c.minLength(4)]],repetir:["",[c.required,c.minLength(4)]]})}ngOnInit(){D.from(".gsap-contenido",{y:100,opacity:0,duration:.2}),this.dataService.ubicacionActual="Dashboard - Actualizando password",this.alertService.loading(),this.activatedRoute.params.subscribe({next:({id:l})=>{this.id=l,this.usuariosService.getUsuario(l).subscribe(s=>{this.usuario=s,this.alertService.close()})},error:({error:l})=>this.alertService.errorApi(l.message)})}actualizarPassword(){let{password:l}=this.passwordForm.value;if(l!==this.repetir.value){this.alertService.errorApi("Las contrase\xF1as deben coincidir");return}this.passwordForm.valid?(this.alertService.loading(),this.usuario.password=l,this.usuariosService.actualizarUsuario(this.id,this.usuario).subscribe({next:()=>{this.alertService.close(),this.router.navigateByUrl("/dashboard/usuarios")},error:({error:s})=>this.alertService.errorApi(s.message)})):this.passwordForm.markAllAsTouched()}};a.\u0275fac=function(s){return new(s||a)(p(F),p(N),p(I),p(U),p(q),p(G))},a.\u0275cmp=g({type:a,selectors:[["app-editar-password"]],standalone:!0,features:[E],decls:41,vars:12,consts:[[1,"lg:flex","p-4","max-w-5xl","mx-auto","gsap-contenido"],[1,"w-full","lg:w-1/2","bg-white","shadow","rounded","border","border-gray-400"],[1,"flex","items-center","py-2","pb-2","px-4","bg-gray-800","border","border-gray-800","rounded-t"],["routerLink","/dashboard/usuarios",1,"p-2","text-white","hover:text-secondaryColor"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"w-5","h-5"],["stroke-linecap","round","stroke-linejoin","round","d","M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"],[1,"ml-2","text-xl","text-white"],["autocomplete","off",1,"px-5","pb-5",3,"formGroup"],[1,"flex","flex-col","lg:flex-row","mt-2"],[1,"w-full","mx-2","flex-1","svelte-1l8159u"],[1,"font-semibold","mt-3","text-gray-800","text-sm"],[1,"bg-white","my-2"],["type","password","placeholder","******","formControlName","password",1,"input-generico","w-full"],["class","text-error mt-1",4,"ngIf"],["type","password","placeholder","******","formControlName","repetir",1,"input-generico","w-full"],[1,"boton-editar","w-full",3,"click"],[1,"mt-2","lg:mt-0","w-full","shadow","lg:w-1/2","lg:ml-3","border","border-gray-400","p-4","rounded","h-full","bg-white"],[1,"flex","items-center","justify-between"],[1,"flex"],["class","bg-blue-100 flex items-center justify-center w-32 h-32 rounded-full shadow border border-blue-300",4,"ngIf"],["class","bg-orange-100 flex items-center justify-center w-32 h-32 rounded-full shadow border border-orange-300",4,"ngIf"],["class","bg-purple-100 flex items-center justify-center w-32 h-32 rounded-full shadow border border-purple-300",4,"ngIf"],[1,"ml-4","mt-2"],[1,"mt-1"],[1,"font-semibold","text-xl","md:text-3xl"],[1,"text-gray-800","text-sm","md:text-2xl","capitalize"],[1,"text-gray-500","italic","text-xs","md:text-md"],[1,"text-error","mt-1"],[1,"bg-blue-100","flex","items-center","justify-center","w-32","h-32","rounded-full","shadow","border","border-blue-300"],[1,"text-6xl","font-semibold","text-blue-900"],[1,"bg-orange-100","flex","items-center","justify-center","w-32","h-32","rounded-full","shadow","border","border-orange-300"],[1,"text-6xl","font-semibold","text-orange-500"],[1,"bg-purple-100","flex","items-center","justify-center","w-32","h-32","rounded-full","shadow","border","border-purple-300"],[1,"text-6xl","font-semibold","text-purple-500"]],template:function(s,e){s&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),b(),t(4,"svg",4),w(5,"path",5),i()(),x(),t(6,"h1",6),o(7," Actualizaci\xF3n de contrase\xF1a "),i()(),t(8,"form",7)(9,"div",8)(10,"div",9)(11,"div",10),o(12," Password "),i(),t(13,"div",11),w(14,"input",12),f(15,B,2,0,"p",13)(16,H,2,1,"p",13),i()(),t(17,"div",9)(18,"div",10),o(19," Repetir password "),i(),t(20,"div",11),w(21,"input",14),f(22,J,2,0,"p",13)(23,K,2,1,"p",13),i()()(),t(24,"div",8)(25,"button",15),S("click",function(){return e.actualizarPassword()}),o(26," Actualizar contrase\xF1a "),i()()()(),t(27,"div",16)(28,"div",17)(29,"div",18),f(30,Q,3,0,"div",19)(31,W,3,0,"div",20)(32,X,3,0,"div",21),t(33,"div",22)(34,"div",23)(35,"p",24),o(36),i(),t(37,"p",25),o(38),i(),t(39,"p",26),o(40),i()()()()()()()),s&2&&(n(8),d("formGroup",e.passwordForm),n(7),d("ngIf",(e.password==null?null:e.password.touched)&&(e.password==null||e.password.errors==null?null:e.password.errors.required)),n(1),d("ngIf",(e.password==null?null:e.password.touched)&&(e.password==null||e.password.errors==null?null:e.password.errors.minlength)),n(6),d("ngIf",(e.repetir==null?null:e.repetir.touched)&&(e.repetir==null||e.repetir.errors==null?null:e.repetir.errors.required)),n(1),d("ngIf",(e.repetir==null?null:e.repetir.touched)&&(e.repetir==null||e.repetir.errors==null?null:e.repetir.errors.minlength)),n(7),d("ngIf",e.usuario.role==="ADMIN_ROLE"),n(1),d("ngIf",e.usuario.role==="USER_ROLE"),n(1),d("ngIf",e.usuario.role==="TECHNICAL_ROLE"),n(4),m("",e.usuario.usuario.toLowerCase()," "),n(2),y(" ",e.usuario.nombre.toLowerCase()," ",e.usuario.apellido.toLowerCase()," "),n(2),m(" ",e.usuario.email.toLowerCase()," "))},dependencies:[z,M,j,T,R,P,k,C,_,A,L],encapsulation:2});let r=a;return r})();export{se as default};