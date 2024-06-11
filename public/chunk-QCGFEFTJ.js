import{l as G}from"./chunk-FRTIDM5M.js";import{b as P,c as m,d as T,e as D,g as j,h as R,i as O,m as k,o as M}from"./chunk-Y4YVEZW5.js";import{a as V}from"./chunk-GPUHOX6N.js";import{a as q}from"./chunk-4PDPG5IP.js";import{a as U}from"./chunk-BPTFILPP.js";import{a as z}from"./chunk-YSOC5NDB.js";import{a as N}from"./chunk-TZDLMB3W.js";import{d as I,e as L,f as F,i as A}from"./chunk-4IG42SO7.js";import{$a as v,Ab as C,Ia as a,Ja as f,Sa as s,Va as p,Za as t,_a as r,da as x,hb as h,ib as g,ka as b,nb as n,pb as u,qb as S,ub as E,vb as _,zb as y}from"./chunk-MXAX4ZQ5.js";function H(e,l){e&1&&(t(0,"div",31)(1,"p",32),n(2," A "),r()())}function Z(e,l){e&1&&(t(0,"div",33)(1,"p",34),n(2," E "),r()())}function $(e,l){e&1&&(t(0,"div",35)(1,"p",36),n(2," T "),r()())}var J=e=>({"text-purple-700":e}),K=e=>({"text-orange-700":e}),Q=e=>({"text-blue-700":e});function W(e,l){if(e&1&&(t(0,"div",19)(1,"div",20),p(2,H,3,0,"div",21)(3,Z,3,0,"div",22)(4,$,3,0,"div",23),t(5,"p",24),n(6),r(),t(7,"p",24),n(8),r(),t(9,"p",24),n(10),r()(),t(11,"div",25)(12,"div",26)(13,"p",27),n(14," Apellido y Nombre "),r(),t(15,"p",28),n(16),r()(),t(17,"div",29)(18,"p",27),n(19," DNI "),r(),t(20,"p",30),n(21),r()(),t(22,"div",29)(23,"p",27),n(24," Correo electr\xF3nico "),r(),t(25,"p",30),n(26),r()(),t(27,"div",29)(28,"p",27),n(29," Fecha de ingreso "),r(),t(30,"p",30),n(31),y(32,"fecha"),r()()()()),e&2){let o=g();a(2),s("ngIf",o.usuarioLogin.role==="ADMIN_ROLE"),a(),s("ngIf",o.usuarioLogin.role==="USER_ROLE"),a(),s("ngIf",o.usuarioLogin.role==="TECHNICAL_ROLE"),a(),s("ngClass",_(16,J,o.usuarioLogin.role==="TECHNICAL_ROLE")),a(),u(" ",o.usuarioLogin.role==="TECHNICAL_ROLE"?"Usuario t\xE9cnico":""," "),a(),s("ngClass",_(18,K,o.usuarioLogin.role==="USER_ROLE")),a(),u(" ",o.usuarioLogin.role==="USER_ROLE"?"Usuario":""," "),a(),s("ngClass",_(20,Q,o.usuarioLogin.role==="ADMIN_ROLE")),a(),u(" ",o.usuarioLogin.role==="ADMIN_ROLE"?"Administrador":""," "),a(6),S(" ",o.usuarioLogin.apellido.toLowerCase()," ",o.usuarioLogin.nombre.toLowerCase()," "),a(5),u(" ",o.usuarioLogin.dni," "),a(5),u(" ",o.usuarioLogin.email," "),a(5),u(" ",C(32,14,o.usuarioLogin.createdAt)," ")}}function X(e,l){e&1&&(t(0,"p",37),n(1," La contrase\xF1a es obligatoria "),r())}function Y(e,l){if(e&1&&(t(0,"p",37),n(1),r()),e&2){let o=g();a(),u(" Debe tener como minimo ",o.password_actual==null||o.password_actual.errors==null?null:o.password_actual.errors.minlength.requiredLength," caracteres ")}}function ee(e,l){e&1&&(t(0,"p",37),n(1," La contrase\xF1a es obligatoria "),r())}function te(e,l){if(e&1&&(t(0,"p",37),n(1),r()),e&2){let o=g();a(),u(" Debe tener como minimo ",o.password_nuevo==null||o.password_nuevo.errors==null?null:o.password_nuevo.errors.minlength.requiredLength," caracteres ")}}function re(e,l){e&1&&(t(0,"p",37),n(1," La contrase\xF1a es obligatoria "),r())}function ie(e,l){if(e&1&&(t(0,"p",37),n(1),r()),e&2){let o=g();a(),u(" Debe tener como minimo ",o.password_nuevo_repetir==null||o.password_nuevo_repetir.errors==null?null:o.password_nuevo_repetir.errors.minlength.requiredLength," caracteres ")}}var oe=e=>({"bg-yellow-100 border-yellow-400":e});function ne(e,l){if(e&1&&(t(0,"div",38)(1,"div",39),v(2,"img",40),t(3,"p",41),n(4),r()(),t(5,"div",42),b(),t(6,"svg",43),v(7,"path",44)(8,"path",45),r()()()),e&2){let o=l.$implicit;a(4),u(" ",o.dependencia.nombre," "),a(),s("ngClass",_(2,oe,o.soloLectura))}}var _e=(()=>{let l=class l{get password_actual(){return this.passwordForm.get("password_actual")}get password_nuevo(){return this.passwordForm.get("password_nuevo")}get password_nuevo_repetir(){return this.passwordForm.get("password_nuevo_repetir")}constructor(d,c,i,w,B){this.authService=d,this.dataService=c,this.fb=i,this.usuariosService=w,this.alertService=B}ngOnInit(){U.from(".gsap-contenido",{y:100,opacity:0,duration:.2}),this.dataService.ubicacionActual="Dashboard - Perfil",this.getUsuario(),this.passwordForm=this.fb.group({password_actual:["",[m.required,m.minLength(4)]],password_nuevo:["",[m.required,m.minLength(4)]],password_nuevo_repetir:["",[m.required,m.minLength(4)]]})}getUsuario(){this.alertService.loading(),this.usuariosService.getUsuario(this.authService.usuario.userId).subscribe({next:d=>{console.log(d),this.usuarioLogin=d,this.alertService.close()},error:({error:d})=>{this.alertService.errorApi(d.msg)}})}actualizarPassword(){this.passwordForm.valid?(this.alertService.loading(),this.usuariosService.actualizarPasswordPefil(this.authService.usuario.userId,this.passwordForm.value).subscribe({next:()=>{this.passwordForm.reset(),this.alertService.success("Contrase\xF1a actualizada")},error:({error:d})=>{this.passwordForm.reset(),this.alertService.errorApi(d.message)}})):this.passwordForm.markAllAsTouched()}};l.\u0275fac=function(c){return new(c||l)(f(N),f(z),f(k),f(V),f(q))},l.\u0275cmp=x({type:l,selectors:[["app-perfil"]],standalone:!0,features:[E],decls:35,vars:9,consts:[[1,"p-4","gsap-contenido","w-full","max-w-5xl","mx-auto","md:flex"],[1,"border","border-gray-400","w-full","h-full","md:w-1/2","shadow","rounded"],[1,"text-lg","p-2","bg-gray-800","border","border-gray-800","text-white","text-center","rounded-t"],["class","p-4",4,"ngIf"],[1,"w-full","h-full","md:mt-0","md:w-1/2","md:ml-2","mt-2"],[1,"text-sm","border","border-gray-400","shadow","rounded"],[1,"bg-gray-800","border","border-gray-800","text-white","text-center","text-lg","rounded-t","p-2"],[1,"p-2",3,"formGroup","submit"],[1,"font-semibold","ml-1"],["formControlName","password_actual","autocomplete","false","type","password","placeholder","Mi contrase\xF1a actual",1,"input-generico","w-full","mt-1"],["class","text-error mt-1",4,"ngIf"],[1,"mt-2"],["formControlName","password_nuevo","autocomplete","false","type","password","placeholder","Ingresar nueva contrase\xF1a",1,"input-generico","w-full","mt-1"],[1,"mt-2","mb-2"],["formControlName","password_nuevo_repetir","autocomplete","false","type","password","placeholder","Repite la nueva contrase\xF1a",1,"input-generico","w-full","mt-1"],[1,"boton-editar","my-2","w-full",3,"click"],[1,"w-full","border","border-gray-400","rounded-t","mt-2"],[1,"max-h-96","overflow-y-auto","text-sm"],["class","flex items-center justify-between p-2 border-b border-gray-300",4,"ngFor","ngForOf"],[1,"p-4"],[1,"mt-3","text-center"],["class","bg-blue-100 mr-auto ml-auto rounded-full flex items-center justify-center w-24 h-24 shadow border border-blue-300",4,"ngIf"],["class","bg-orange-100 mr-auto ml-auto flex items-center justify-center w-24 h-24 rounded-full shadow border border-orange-300",4,"ngIf"],["class","bg-purple-100 mr-auto ml-auto flex items-center justify-center w-24 h-24 rounded-full shadow border border-purple-300",4,"ngIf"],[1,"mt-1","text-sm","text-blue-800",3,"ngClass"],[1,"w-full","mt-2"],[1,"p-2","text-center"],[1,"font-semibold","text-xl"],[1,"capitalize","text-gray-500"],[1,"p-2","text-center","mt-1"],[1,"text-gray-500"],[1,"bg-blue-100","mr-auto","ml-auto","rounded-full","flex","items-center","justify-center","w-24","h-24","shadow","border","border-blue-300"],[1,"text-4xl","font-semibold","text-blue-900"],[1,"bg-orange-100","mr-auto","ml-auto","flex","items-center","justify-center","w-24","h-24","rounded-full","shadow","border","border-orange-300"],[1,"text-4xl","font-semibold","text-orange-500"],[1,"bg-purple-100","mr-auto","ml-auto","flex","items-center","justify-center","w-24","h-24","rounded-full","shadow","border","border-purple-300"],[1,"text-4xl","font-semibold","text-purple-500"],[1,"text-error","mt-1"],[1,"flex","items-center","justify-between","p-2","border-b","border-gray-300"],[1,"flex","items-center"],["src","assets/svg/dependencia.svg","alt","dependencia.svg",1,"w-10"],[1,"ml-2"],[1,"p-2","border","bg-gray-100","border-gray-400","rounded",3,"ngClass"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"w-5","h-5"],["stroke-linecap","round","stroke-linejoin","round","d","M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"],["stroke-linecap","round","stroke-linejoin","round","d","M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"]],template:function(c,i){c&1&&(t(0,"div",0)(1,"div",1)(2,"h1",2),n(3," Datos de usuario "),r(),p(4,W,33,22,"div",3),r(),t(5,"div",4)(6,"div",5)(7,"h1",6),n(8," Actualizar contrase\xF1a "),r(),t(9,"form",7),h("submit",function(){return i.actualizarPassword()}),t(10,"div")(11,"p",8),n(12," Contrase\xF1a actual "),r(),v(13,"input",9),p(14,X,2,0,"p",10)(15,Y,2,1,"p",10),r(),t(16,"div",11)(17,"p",8),n(18," Nueva contrase\xF1a "),r(),v(19,"input",12),p(20,ee,2,0,"p",10)(21,te,2,1,"p",10),r(),t(22,"div",13)(23,"p",8),n(24," Repetir contrase\xF1a "),r(),v(25,"input",14),p(26,re,2,0,"p",10)(27,ie,2,1,"p",10),r(),t(28,"button",15),h("click",function(){return i.actualizarPassword()}),n(29," Actualizar contrase\xF1a "),r()()(),t(30,"div",16)(31,"h1",6),n(32," Dependencias asignadas "),r(),t(33,"div",17),p(34,ne,9,4,"div",18),r()()()()),c&2&&(a(4),s("ngIf",i.usuarioLogin),a(5),s("formGroup",i.passwordForm),a(5),s("ngIf",i.password_actual.touched&&(i.password_actual==null||i.password_actual.errors==null?null:i.password_actual.errors.required)),a(),s("ngIf",i.password_actual.touched&&(i.password_actual==null||i.password_actual.errors==null?null:i.password_actual.errors.minlength)),a(5),s("ngIf",i.password_nuevo.touched&&(i.password_nuevo==null||i.password_nuevo.errors==null?null:i.password_nuevo.errors.required)),a(),s("ngIf",i.password_nuevo.touched&&(i.password_nuevo==null||i.password_nuevo.errors==null?null:i.password_nuevo.errors.minlength)),a(5),s("ngIf",i.password_nuevo_repetir.touched&&(i.password_nuevo_repetir==null||i.password_nuevo_repetir.errors==null?null:i.password_nuevo_repetir.errors.required)),a(),s("ngIf",i.password_nuevo_repetir.touched&&(i.password_nuevo_repetir==null||i.password_nuevo_repetir.errors==null?null:i.password_nuevo_repetir.errors.minlength)),a(7),s("ngForOf",i.usuarioLogin==null?null:i.usuarioLogin.UsuariosDependencias))},dependencies:[M,j,P,T,D,R,O,A,I,L,F,G],encapsulation:2});let e=l;return e})();export{_e as default};
