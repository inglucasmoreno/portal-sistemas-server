import{a as be}from"./chunk-7AIRMMC4.js";import{a as fe}from"./chunk-MTUTGAVF.js";import{a as ge,b as ve,c as he}from"./chunk-5Y3WNRAO.js";import{b as W,c as f,d as X,e as Y,f as ee,g as te,h as ie,i as re,j as ne,k as oe,l as ae,m as le,n as se,o as de}from"./chunk-XK7VQCTR.js";import{a as pe}from"./chunk-G7ILR3ZA.js";import{a as Q}from"./chunk-FLY4BXSB.js";import{a as me}from"./chunk-IZVGSZFI.js";import{d as O,e as $,f as z,i as G,j as H,o as B,q as Z,r as P,u as J,v as K}from"./chunk-ADCDB4OU.js";import{a as ue}from"./chunk-BPTFILPP.js";import{a as ce}from"./chunk-PSNAPTFY.js";import{$a as c,Ia as d,Ja as g,Sa as u,Va as p,X as j,Xa as M,Ya as L,Za as t,_a as e,a as T,aa as A,b as N,da as D,db as F,hb as v,ia as C,ib as h,ja as w,ka as _,la as S,nb as n,pb as x,qb as R,ub as V,vb as q}from"./chunk-75MKQ6H5.js";var E=K.base_url+"/usuarios-dependencias",_e=(()=>{let a=class a{get getToken(){return{Authorization:localStorage.getItem("token")}}constructor(o){this.http=o}getRelacion(o){return this.http.get(`${E}/${o}`,{headers:this.getToken})}listarRelaciones({direccion:o="asc",columna:s="descripcion",activo:i=""}){return this.http.get(E,{params:{direccion:String(o),columna:s,activo:i},headers:this.getToken})}nuevaRelacion(o){return this.http.post(E,o,{headers:this.getToken})}actualizarRelacion(o,s){return this.http.patch(`${E}/${o}`,s,{headers:this.getToken})}eliminarRelacion(o){return this.http.delete(`${E}/${o}`,{headers:this.getToken})}};a.\u0275fac=function(s){return new(s||a)(A(H))},a.\u0275prov=j({token:a,factory:a.\u0275fac,providedIn:"root"});let r=a;return r})();var we=(r,a)=>a.dependencia.id;function ye(r,a){if(r&1&&(t(0,"ng-option",54),n(1),e()),r&2){let l=a.$implicit;u("value",l.id),d(),x(" ",l.nombre," ")}}function Ie(r,a){r&1&&(t(0,"p",55),n(1," Campo obligatorio "),e())}function Ue(r,a){if(r&1&&(t(0,"p",55),n(1),e()),r&2){let l=h();d(),x(" Minimo ",l.nombre_usuario==null||l.nombre_usuario.errors==null?null:l.nombre_usuario.errors.minlength.requiredLength," caracteres ")}}function ke(r,a){r&1&&(t(0,"p",56),n(1," Campo obligatorio "),e())}function Fe(r,a){r&1&&(t(0,"p",56),n(1," Debe colocar un email "),e())}function Te(r,a){r&1&&(t(0,"p",55),n(1," Campo obligatorio "),e())}function Ne(r,a){r&1&&(t(0,"p",55),n(1," Campo obligatorio "),e())}function je(r,a){r&1&&(t(0,"p",55),n(1," Campo obligatorio "),e())}function Ae(r,a){r&1&&(t(0,"p",55),n(1," Campo obligatorio "),e())}function De(r,a){r&1&&(t(0,"div",69)(1,"p",70),n(2," A "),e()())}function Me(r,a){r&1&&(t(0,"div",71)(1,"p",72),n(2," E "),e()())}function Le(r,a){r&1&&(t(0,"div",73)(1,"p",74),n(2," T "),e()())}function Re(r,a){if(r&1&&(t(0,"p",75),n(1),e()),r&2){let l=h(2);d(),x(" ",l.usuarioForm.value.usuario," ")}}function Ve(r,a){r&1&&(t(0,"p",76),n(1," Nombre de usuario "),e())}function qe(r,a){if(r&1&&(t(0,"p"),n(1),e()),r&2){let l=h(2);d(),R(" ",l.usuarioForm.value.nombre.toLowerCase()," ",l.usuarioForm.value.apellido.toLowerCase()," ")}}function Oe(r,a){r&1&&(t(0,"p",76),n(1," Apellido y Nombre "),e())}function $e(r,a){if(r&1&&(t(0,"p"),n(1),e()),r&2){let l=h(2);d(),x(" ",l.usuarioForm.value.email.toLowerCase()," ")}}function ze(r,a){r&1&&(t(0,"p"),n(1," Correo electr\xF3nico "),e())}function Ge(r,a){if(r&1&&(t(0,"div",57),p(1,De,3,0,"div",58)(2,Me,3,0,"div",59)(3,Le,3,0,"div",60),t(4,"div",61)(5,"div",62)(6,"div",63),p(7,Re,2,1,"p",64)(8,Ve,2,0,"p",65),e(),t(9,"div",66),p(10,qe,2,2,"p",67)(11,Oe,2,0,"p",65),e(),t(12,"div",68),p(13,$e,2,1,"p",67)(14,ze,2,0,"p",67),e()()()()),r&2){let l=h();d(),u("ngIf",l.usuarioForm.value.role==="ADMIN_ROLE"),d(),u("ngIf",l.usuarioForm.value.role==="USER_ROLE"),d(),u("ngIf",l.usuarioForm.value.role==="TECHNICAL_ROLE"),d(4),u("ngIf",l.usuarioForm.value.usuario.trim()!==""),d(),u("ngIf",l.usuarioForm.value.usuario.trim()==""),d(2),u("ngIf",l.usuarioForm.value.nombre.trim()||l.usuarioForm.value.apellido.trim()),d(),u("ngIf",l.usuarioForm.value.nombre.trim()==""&&l.usuarioForm.value.apellido.trim()==""),d(2),u("ngIf",l.usuarioForm.value.email.trim()!==""),d(),u("ngIf",l.usuarioForm.value.email.trim()=="")}}var He=r=>({"bg-yellow-100 border-yellow-400":r});function Be(r,a){if(r&1){let l=F();t(0,"div",77)(1,"div",78),c(2,"img",79),t(3,"p",80),n(4),e()(),t(5,"div",78)(6,"button",81),v("click",function(){let i=C(l).$implicit,m=h();return w(m.actualizarSoloLectura(i))}),_(),t(7,"svg",3),c(8,"path",82)(9,"path",83),e()(),S(),t(10,"button",84),v("click",function(){let i=C(l).$implicit,m=h();return w(m.eliminarDependencia(i))}),_(),t(11,"svg",3),c(12,"path",4),e()()()()}if(r&2){let l=a.$implicit;d(4),x(" ",l.dependencia==null?null:l.dependencia.nombre," "),d(2),u("ngClass",q(2,He,l.soloLectura))}}function Ze(r,a){if(r&1){let l=F();t(0,"div",85)(1,"p"),n(2," No se encontraron dependencias asociadas al usuario "),e(),t(3,"button",86),v("click",function(){C(l);let s=h();return w(s.abrirDependencias())}),n(4," Asignar dependecia "),e()()}}var ut=(()=>{let a=class a{get nombre_usuario(){return this.usuarioForm.get("usuario")}get apellido(){return this.usuarioForm.get("apellido")}get nombre(){return this.usuarioForm.get("nombre")}get telefono(){return this.usuarioForm.get("telefono")}get dni(){return this.usuarioForm.get("dni")}get email(){return this.usuarioForm.get("email")}get password(){return this.usuarioForm.get("password")}get repetir(){return this.usuarioForm.get("repetir")}get role(){return this.usuarioForm.get("role")}constructor(o,s,i,m,b,y,I,U,k){this.router=o,this.fb=s,this.activatedRoute=i,this.dependenciasService=m,this.usuariosDependenciasService=b,this.usuariosService=y,this.alertService=I,this.dataService=U,this.authService=k,this.showDependencias=!1,this.dependencias=[],this.dependenciasUsuario=[],this.dependenciaSeleccionada=null}ngOnInit(){ue.from(".gsap-contenido",{y:100,opacity:0,duration:.2}),this.dataService.ubicacionActual="Portal - Editando usuario",this.usuarioForm=this.fb.group({usuario:["",[f.required,f.minLength(4)]],apellido:["",f.required],nombre:["",f.required],telefono:["",f.required],asignableSolicitud:["false"],dni:["",f.required],email:["",[f.required,f.email]],role:["USER_ROLE",[f.required,f.minLength(4)]],activo:["true",f.required]}),this.alertService.loading(),this.dependenciasService.listarDependencias({activo:"true"}).subscribe({next:({dependencias:o})=>{this.dependencias=o,this.getUsuario()},error:({error:o})=>this.alertService.errorApi(o.message)})}getUsuario(){this.alertService.loading(),this.activatedRoute.params.subscribe(({id:o})=>{this.id=o}),this.usuariosService.getUsuario(this.id).subscribe({next:o=>{this.usuario=o;let{usuario:s,apellido:i,nombre:m,telefono:b,asignableSolicitud:y,dni:I,email:U,role:k,UsuariosDependencias:xe,activo:Se}=this.usuario;this.usuarioForm.patchValue({usuario:s,apellido:i,nombre:m,dni:I,telefono:b,asignableSolicitud:y?"true":"false",email:U,role:k,activo:String(Se)}),this.dependenciasUsuario=xe,this.alertService.close()},error:({error:o})=>this.alertService.errorApi(o.message)})}editarUsuario(){if(this.usuarioForm.valid){let o=N(T({},this.usuarioForm.value),{creatorUserId:this.authService.usuario.userId});o.asignableSolicitud=o.asignableSolicitud==="true",o.activo=o.activo==="true",this.alertService.loading(),this.usuariosService.actualizarUsuario(this.id,o).subscribe({next:()=>{this.alertService.close(),this.router.navigateByUrl("dashboard/usuarios")},error:({error:s})=>this.alertService.errorApi(s.message)})}else this.usuarioForm.markAllAsTouched()}abrirDependencias(){this.alertService.loading(),this.dependenciasService.listarDependencias({activo:"true"}).subscribe({next:({dependencias:o})=>{this.showDependencias=!0,this.alertService.close()},error:()=>this.alertService.errorApi("Error al cargar dependencias")})}agregarDependencia(){if(this.dependenciaSeleccionada===""){this.alertService.info("Debe seleccionar una dependencia");return}this.alertService.loading();let o={usuarioId:Number(this.id),dependenciaId:this.dependenciaSeleccionada,creatorUserId:this.authService.usuario.userId};this.usuariosDependenciasService.nuevaRelacion(o).subscribe({next:({relacion:s})=>{this.dependenciasUsuario.push(s),this.alertService.close()},error:({error:s})=>this.alertService.errorApi(s.message)}),this.dependenciaSeleccionada=null,this.showDependencias=!1}eliminarDependencia(o){if(this.dependenciasUsuario.length===1){this.alertService.info("El usuario debe tener al menos una dependencia asignada");return}this.alertService.loading(),this.usuariosDependenciasService.eliminarRelacion(o.id).subscribe({next:({relacion:s})=>{this.dependenciasUsuario=this.dependenciasUsuario.filter(i=>i.id!==s.id),this.alertService.close()},error:({error:s})=>this.alertService.errorApi(s.message)})}actualizarSoloLectura(o){this.alertService.loading(),this.usuariosDependenciasService.actualizarRelacion(o.id,{soloLectura:!o.soloLectura}).subscribe({next:({relacion:s})=>{let i=this.dependenciasUsuario.findIndex(m=>m.id===s.id);this.dependenciasUsuario[i].soloLectura=s.soloLectura,this.alertService.close()},error:({error:s})=>this.alertService.errorApi(s.message)})}regresar(){this.router.navigateByUrl("/dashboard/usuarios")}};a.\u0275fac=function(s){return new(s||a)(g(Z),g(le),g(B),g(be),g(_e),g(pe),g(me),g(ce),g(Q))},a.\u0275cmp=D({type:a,selectors:[["app-editar-usuario"]],standalone:!0,features:[V],decls:128,vars:14,consts:[[3,"showModal"],[1,"bg-gray-800","p-2","flex","rounded-t","items-center","justify-between","text-white"],[1,"hover:text-secondaryColor",3,"click"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"w-5","h-5"],["stroke-linecap","round","stroke-linejoin","round","d","M6 18 18 6M6 6l12 12"],[1,"bg-white","p-2","text-sm"],["placeholder","Seleccionar dependencia",1,"w-full","p-2",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"boton-crear","mt-2","w-full",3,"click"],[1,"lg:flex","p-4","max-w-5xl","mx-auto","gsap-contenido"],[1,"w-full","lg:w-1/2","bg-white","mr-2","shadow","rounded","border","border-gray-400"],[1,"flex","items-center","p-2","bg-gray-800","border","border-gray-800","rounded-t"],["routerLink","/dashboard/usuarios",1,"p-2","text-white","hover:text-secondaryColor"],["stroke-linecap","round","stroke-linejoin","round","d","M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"],[1,"ml-1","text-xl","text-white"],[1,"px-5","pt-2","text-sm","pb-4",3,"formGroup","keydown.enter"],[1,"flex","flex-col","lg:flex-row"],[1,"w-full","mx-2","flex-1","svelte-1l8159u"],[1,"font-semibold","mt-3","text-gray-600","text-sm"],[1,"text-red-500"],[1,"bg-white","p-1"],["placeholder","Ej. lmoreno","formControlName","usuario",1,"input-generico","w-full"],["class","text-error mt-1",4,"ngIf"],["type","email","formControlName","email","placeholder","Ej. lucasmoreno@gmail.com",1,"input-generico","w-full"],["class","text-error mt-2",4,"ngIf"],["placeholder","Ej. Moreno","formControlName","apellido",1,"input-generico","w-full"],["placeholder","Ej. Lucas","formControlName","nombre",1,"input-generico","w-full"],[1,"w-full","mx-2","flex-1"],["placeholder","Ej. 34060398","formControlName","dni",1,"input-generico","w-full"],[1,"font-semibold","mt-2","text-gray-600","text-sm"],[1,"bg-white","flex"],["formControlName","role",1,"input-generico","w-full","mt-2"],["value","USER_ROLE"],["value","TECHNICAL_ROLE"],["value","ADMIN_ROLE"],[1,"flex","flex-col","lg:flex-row","mt-3"],[1,"font-semibold","text-gray-600","text-sm"],["placeholder","Ej. 2664869642","formControlName","telefono",1,"input-generico","w-full"],[1,"w-1/2","mx-2","flex-1"],["formControlName","asignableSolicitud",1,"input-generico","w-full","mt-1"],["value","true"],["value","false"],[1,"bg-white","flex","mt-1"],["formControlName","activo",1,"input-generico","w-full"],[1,"boton-editar","w-full","mt-4",3,"click"],[1,"mt-2","lg:mt-0","w-full","lg:w-1/2","h-full"],[1,"bg-white","shadow","p-4","rounded","border","border-gray-400"],["class","flex mb-2",4,"ngIf"],[1,"mt-2"],[1,"border","bg-gray-800","p-3","border-gray-800","flex","items-center","justify-between"],[1,"text-white","w-full"],["title","Agregar dependencia",1,"p-2","bg-white","hover:text-se","rounded","border","border-gray-400","hover:text-secondaryColor",3,"click"],["stroke-linecap","round","stroke-linejoin","round","d","M12 4.5v15m7.5-7.5h-15"],[1,"max-h-96","overflow-y-auto"],[3,"value"],[1,"text-error","mt-1"],[1,"text-error","mt-2"],[1,"flex","mb-2"],["class","bg-blue-100 flex items-center justify-center w-32 h-32 rounded-full shadow border border-blue-200",4,"ngIf"],["class","bg-orange-100 flex items-center justify-center w-32 h-32 rounded-full shadow border border-orange-200",4,"ngIf"],["class","bg-purple-100 flex items-center justify-center w-32 h-32 rounded-full shadow border border-purple-300",4,"ngIf"],[1,"ml-4","mt-2"],[1,"mt-1"],[1,"text-xl","lg:text-3xl"],["class","font-semibold",4,"ngIf"],["class","text-gray-400",4,"ngIf"],[1,"text-md","lg:text-2xl","capitalize"],[4,"ngIf"],[1,"text-xs","lg:text-lg","italic","text-gray-400"],[1,"bg-blue-100","flex","items-center","justify-center","w-32","h-32","rounded-full","shadow","border","border-blue-200"],[1,"text-6xl","font-semibold","text-blue-900"],[1,"bg-orange-100","flex","items-center","justify-center","w-32","h-32","rounded-full","shadow","border","border-orange-200"],[1,"text-6xl","font-semibold","text-orange-500"],[1,"bg-purple-100","flex","items-center","justify-center","w-32","h-32","rounded-full","shadow","border","border-purple-300"],[1,"text-6xl","font-semibold","text-purple-500"],[1,"font-semibold"],[1,"text-gray-400"],[1,"border","border-gray-400","border-t-0","p-3","text-sm","flex","items-center","justify-between"],[1,"flex","items-center"],["src","assets/svg/dependencia.svg","alt","dependencia.svg",1,"w-10"],[1,"ml-2","font-semibold"],["title","Solo lectura",1,"p-2","bg-gray-100","border","border-gray-400","rounded",3,"ngClass","click"],["stroke-linecap","round","stroke-linejoin","round","d","M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"],["stroke-linecap","round","stroke-linejoin","round","d","M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"],["title","Eliminar dependencia",1,"p-2","bg-red-100","border","border-red-400","ml-2","rounded",3,"click"],[1,"italic","text-sm","bg-gray-100","border","border-gray-300","text-center","p-2","mt-2","text-gray-600"],[1,"boton-crear","mt-2",3,"click"],["class","border border-gray-400 border-t-0 p-3 text-sm flex items-center justify-between"]],template:function(s,i){s&1&&(t(0,"app-modal",0)(1,"div")(2,"div",1)(3,"h1"),n(4," Asignando dependencia "),e(),t(5,"button",2),v("click",function(){return i.showDependencias=!1}),_(),t(6,"svg",3),c(7,"path",4),e()()(),S(),t(8,"div",5)(9,"ng-select",6),v("ngModelChange",function(b){return i.dependenciaSeleccionada=b}),p(10,ye,2,2,"ng-option",7),e(),t(11,"button",8),v("click",function(){return i.agregarDependencia()}),n(12," Asignar dependencia "),e()()()(),t(13,"div",9)(14,"div",10)(15,"div",11)(16,"button",12),_(),t(17,"svg",3),c(18,"path",13),e()(),S(),t(19,"h1",14),n(20," Actualizando usuario "),e()(),t(21,"form",15),v("keydown.enter",function(b){return b.preventDefault()}),t(22,"div",16)(23,"div",17)(24,"div",18)(25,"span",19),n(26," * "),e(),n(27," Nombre de usuario "),e(),t(28,"div",20),c(29,"input",21),p(30,Ie,2,0,"p",22)(31,Ue,2,1,"p",22),e()(),t(32,"div",17)(33,"div",18)(34,"span",19),n(35," * "),e(),n(36," Email "),e(),t(37,"div",20),c(38,"input",23),p(39,ke,2,0,"p",24)(40,Fe,2,0,"p",24),e()()(),t(41,"div",16)(42,"div",17)(43,"div",18)(44,"span",19),n(45," * "),e(),n(46," Apellido "),e(),t(47,"div",20),c(48,"input",25),p(49,Te,2,0,"p",22),e()(),t(50,"div",17)(51,"div",18)(52,"span",19),n(53," * "),e(),n(54," Nombre "),e(),t(55,"div",20),c(56,"input",26),p(57,Ne,2,0,"p",22),e()()(),t(58,"div",16)(59,"div",27)(60,"div",18)(61,"span",19),n(62," * "),e(),n(63," DNI "),e(),t(64,"div",20),c(65,"input",28),p(66,je,2,0,"p",22),e()(),t(67,"div",27)(68,"div",29)(69,"span",19),n(70," * "),e(),n(71," Rol "),e(),t(72,"div",30)(73,"select",31)(74,"option",32),n(75," Empleado "),e(),t(76,"option",33),n(77," T\xE9cnico "),e(),t(78,"option",34),n(79," Administrador "),e()()()()(),t(80,"div",35)(81,"div",27)(82,"div",36)(83,"span",19),n(84," * "),e(),n(85," Telefono "),e(),t(86,"div",20),c(87,"input",37),p(88,Ae,2,0,"p",22),e()(),t(89,"div",38)(90,"div",36)(91,"span",19),n(92," * "),e(),n(93," Asignable a solicitud "),e(),t(94,"select",39)(95,"option",40),n(96," Si "),e(),t(97,"option",41),n(98," No "),e()()()(),t(99,"div",16)(100,"div",27)(101,"div",18)(102,"span",19),n(103," * "),e(),n(104," Estado "),e(),t(105,"div",42)(106,"select",43)(107,"option",40),n(108," Activo "),e(),t(109,"option",41),n(110," Inactivo "),e()()()(),c(111,"div",27),e(),t(112,"button",44),v("click",function(){return i.editarUsuario()}),n(113," Actualizar usuario "),e()()(),t(114,"div",45)(115,"div",46),p(116,Ge,15,9,"div",47),e(),t(117,"div",48)(118,"div",49)(119,"h1",50),n(120," Dependencias asignadas "),e(),t(121,"button",51),v("click",function(){return i.abrirDependencias()}),_(),t(122,"svg",3),c(123,"path",52),e()()()(),S(),t(124,"div",53),M(125,Be,13,4,"div",87,we,!1,Ze,5,0),e()()()),s&2&&(u("showModal",i.showDependencias),d(9),u("ngModel",i.dependenciaSeleccionada),d(),u("ngForOf",i.dependencias),d(11),u("formGroup",i.usuarioForm),d(9),u("ngIf",(i.nombre_usuario==null?null:i.nombre_usuario.touched)&&(i.nombre_usuario==null||i.nombre_usuario.errors==null?null:i.nombre_usuario.errors.required)),d(),u("ngIf",(i.nombre_usuario==null?null:i.nombre_usuario.touched)&&(i.nombre_usuario==null||i.nombre_usuario.errors==null?null:i.nombre_usuario.errors.minlength)),d(8),u("ngIf",(i.email==null?null:i.email.touched)&&(i.email==null||i.email.errors==null?null:i.email.errors.required)),d(),u("ngIf",(i.email==null?null:i.email.touched)&&(i.email==null||i.email.errors==null?null:i.email.errors.email)),d(9),u("ngIf",(i.apellido==null?null:i.apellido.touched)&&(i.apellido==null||i.apellido.errors==null?null:i.apellido.errors.required)),d(8),u("ngIf",(i.nombre==null?null:i.nombre.touched)&&(i.nombre==null||i.nombre.errors==null?null:i.nombre.errors.required)),d(9),u("ngIf",(i.dni==null?null:i.dni.touched)&&(i.dni==null||i.dni.errors==null?null:i.dni.errors.required)),d(22),u("ngIf",(i.telefono==null?null:i.telefono.touched)&&(i.telefono==null||i.telefono.errors==null?null:i.telefono.errors.required)),d(28),u("ngIf",i.usuario),d(9),L(i.dependenciasUsuario))},dependencies:[J,P,se,te,oe,ae,W,ne,X,Y,ee,de,ie,re,fe,G,O,$,z,he,ve,ge],encapsulation:2});let r=a;return r})();export{ut as default};
