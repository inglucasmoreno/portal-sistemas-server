import{a as ue}from"./chunk-7AIRMMC4.js";import{a as re}from"./chunk-MTUTGAVF.js";import{a as oe,b as le,c as ae}from"./chunk-5Y3WNRAO.js";import{b as G,c as f,d as H,e as $,f as B,g as z,h as Z,i as P,j as J,k as K,l as Q,m as W,n as X,o as Y}from"./chunk-XK7VQCTR.js";import{a as ne}from"./chunk-G7ILR3ZA.js";import{a as O}from"./chunk-FLY4BXSB.js";import{a as te}from"./chunk-IZVGSZFI.js";import{d as M,e as D,f as j,i as A,q as R,r as q,u as V}from"./chunk-ADCDB4OU.js";import{a as ee}from"./chunk-BPTFILPP.js";import{a as ie}from"./chunk-PSNAPTFY.js";import{$a as p,Ia as o,Ja as _,Sa as u,Va as c,Xa as F,Ya as U,Za as i,_a as t,a as E,b as y,da as I,db as N,hb as v,ia as w,ib as h,ja as C,ka as S,la as x,nb as r,pb as b,qb as T,ub as k,vb as L}from"./chunk-75MKQ6H5.js";var me=(n,l)=>l.id;function pe(n,l){if(n&1&&(i(0,"ng-option",69),r(1),t()),n&2){let a=l.$implicit;u("value",a.id),o(),b(" ",a.nombre," ")}}function ce(n,l){n&1&&(i(0,"p",70),r(1," Campo obligatorio "),t())}function fe(n,l){if(n&1&&(i(0,"p",70),r(1),t()),n&2){let a=h();o(),b(" Minimo ",a.usuario==null||a.usuario.errors==null?null:a.usuario.errors.minlength.requiredLength," caracteres ")}}function ve(n,l){n&1&&(i(0,"p",71),r(1," Campo obligatorio "),t())}function ge(n,l){n&1&&(i(0,"p",71),r(1," Debe colocar un email "),t())}function he(n,l){n&1&&(i(0,"p",70),r(1," Campo obligatorio "),t())}function _e(n,l){n&1&&(i(0,"p",70),r(1," Campo obligatorio "),t())}function be(n,l){n&1&&(i(0,"p",70),r(1," Campo obligatorio "),t())}function Se(n,l){n&1&&(i(0,"p",70),r(1," Campo obligatorio "),t())}function xe(n,l){n&1&&(i(0,"p",70),r(1," Campo obligatorio "),t())}function we(n,l){if(n&1&&(i(0,"p",70),r(1),t()),n&2){let a=h();o(),b(" Minimo ",a.password==null||a.password.errors==null?null:a.password.errors.minlength.requiredLength," caracteres ")}}function Ce(n,l){n&1&&(i(0,"p",70),r(1," Campo obligatorio "),t())}function Ee(n,l){if(n&1&&(i(0,"p",70),r(1),t()),n&2){let a=h();o(),b(" Minimo ",a.repetir==null||a.repetir.errors==null?null:a.repetir.errors.minlength.requiredLength," caracteres ")}}function ye(n,l){n&1&&(i(0,"div",72)(1,"p",73),r(2," A "),t()())}function Ne(n,l){n&1&&(i(0,"div",74)(1,"p",75),r(2," E "),t()())}function Ie(n,l){n&1&&(i(0,"div",76)(1,"p",77),r(2," T "),t()())}function Fe(n,l){if(n&1&&(i(0,"p",78),r(1),t()),n&2){let a=h();o(),b(" ",a.usuarioForm.value.usuario," ")}}function Ue(n,l){n&1&&(i(0,"p",79),r(1," Nombre de usuario "),t())}function Te(n,l){if(n&1&&(i(0,"p",80),r(1),t()),n&2){let a=h();o(),T(" ",a.usuarioForm.value.nombre.toLowerCase()," ",a.usuarioForm.value.apellido.toLowerCase()," ")}}function ke(n,l){n&1&&(i(0,"p",79),r(1," Apellido y Nombre "),t())}function Le(n,l){if(n&1&&(i(0,"p"),r(1),t()),n&2){let a=h();o(),b(" ",a.usuarioForm.value.email.toLowerCase()," ")}}function Me(n,l){n&1&&(i(0,"p"),r(1," Correo electr\xF3nico "),t())}var De=n=>({"bg-yellow-100 border-yellow-400":n});function je(n,l){if(n&1){let a=N();i(0,"div",81)(1,"div",82),p(2,"img",83),i(3,"p",84),r(4),t()(),i(5,"div",82)(6,"button",85),v("click",function(){let e=w(a).$implicit,m=h();return C(m.soloLectura(e))}),S(),i(7,"svg",3),p(8,"path",86)(9,"path",87),t()(),x(),i(10,"button",88),v("click",function(){let e=w(a).$implicit,m=h();return C(m.eliminarDependencia(e))}),S(),i(11,"svg",3),p(12,"path",4),t()()()()}if(n&2){let a=l.$implicit;o(4),b(" ",a==null?null:a.nombre," "),o(2),u("ngClass",L(2,De,a.soloLectura))}}function Ae(n,l){if(n&1){let a=N();i(0,"div",89)(1,"p"),r(2," No se encontraron dependencias asociadas al usuario "),t(),i(3,"button",90),v("click",function(){w(a);let d=h();return C(d.abrirDependencias())}),r(4," Asignar dependecia "),t()()}}var Ye=(()=>{let l=class l{get usuario(){return this.usuarioForm.get("usuario")}get apellido(){return this.usuarioForm.get("apellido")}get nombre(){return this.usuarioForm.get("nombre")}get telefono(){return this.usuarioForm.get("telefono")}get dni(){return this.usuarioForm.get("dni")}get email(){return this.usuarioForm.get("email")}get password(){return this.usuarioForm.get("password")}get repetir(){return this.usuarioForm.get("repetir")}get role(){return this.usuarioForm.get("role")}constructor(s,d,e,m,g,se,de){this.fb=s,this.router=d,this.usuariosService=e,this.authService=m,this.dependenciasService=g,this.alertService=se,this.dataService=de,this.showDependencias=!1,this.dependenciasUsuario=[],this.dependencias=[],this.dependenciaSeleccionada=null}ngOnInit(){ee.from(".gsap-contenido",{y:100,opacity:0,duration:.2}),this.dataService.ubicacionActual="Portal - Creando usuario",this.usuarioForm=this.fb.group({usuario:["",[f.required,f.minLength(4)]],apellido:["",f.required],nombre:["",f.required],telefono:["",f.required],asignableSolicitud:["false"],dni:["",f.required],email:["",[f.required,f.email]],password:["",[f.required,f.minLength(4)]],repetir:["",[f.required,f.minLength(4)]],role:["ADMIN_ROLE",f.required]}),this.alertService.loading(),this.dependenciasService.listarDependencias({activo:"true"}).subscribe({next:({dependencias:s})=>{this.dependencias=s,this.alertService.close()},error:({error:s})=>this.alertService.errorApi(s.message)})}nuevoUsuario(){let{password:s,repetir:d}=this.usuarioForm.value;if(s!==d){this.alertService.info("Las contrase\xF1as deben coincidir");return}if(this.dependenciasUsuario.length===0){this.alertService.info("Debe seleccionar una dependencia");return}let e=[];this.dependenciasUsuario.forEach(g=>{e.push({id:g.id,soloLectura:g.soloLectura})});let m=y(E({},this.usuarioForm.value),{dependencias:this.usuarioForm.value!=="ADMIN_ROLE"?e:[],creatorUserId:this.authService.usuario.userId});m.asignableSolicitud=m.asignableSolicitud==="true",delete m.repetir,this.usuarioForm.valid?(this.alertService.loading(),this.usuariosService.nuevoUsuario(m).subscribe({next:()=>{this.router.navigateByUrl("dashboard/usuarios"),this.alertService.close()},error:({error:g})=>{this.alertService.errorApi(g.message)}})):this.usuarioForm.markAllAsTouched()}abrirDependencias(){this.alertService.loading(),this.dependenciasService.listarDependencias({activo:"true"}).subscribe({next:()=>{this.dependenciaSeleccionada=null,this.showDependencias=!0,this.alertService.close()},error:()=>this.alertService.errorApi("Error al cargar dependencias")})}agregarDependencia(){if(!this.dependenciaSeleccionada){this.alertService.info("Debe seleccionar una dependencia");return}if(this.dependenciasUsuario.find(e=>e.id==this.dependenciaSeleccionada)){this.alertService.info("La dependencia ya fue asignada");return}let d=this.dependencias.find(e=>e.id==this.dependenciaSeleccionada);this.dependenciasUsuario.push(y(E({},d),{soloLectura:!1})),this.dependenciaSeleccionada=null,this.dependencias=this.dependencias.filter(e=>e.id!=d.id),this.dependenciasUsuario.sort((e,m)=>e.nombre>m.nombre?1:-1)}soloLectura(s){s.soloLectura=!s.soloLectura}eliminarDependencia(s){this.dependencias.push(s),this.dependenciasUsuario=this.dependenciasUsuario.filter(d=>d.id!=s.id),this.dependencias.sort((d,e)=>d.nombre>e.nombre?1:-1)}cambiarRole(){this.usuarioForm.value.role==="TECHNICAL_ROLE"?this.usuarioForm.patchValue({asignableSolicitud:"true"}):this.usuarioForm.patchValue({asignableSolicitud:"false"})}};l.\u0275fac=function(d){return new(d||l)(_(W),_(R),_(ne),_(O),_(ue),_(te),_(ie))},l.\u0275cmp=I({type:l,selectors:[["app-nuevo-usuario"]],standalone:!0,features:[k],decls:149,vars:26,consts:[[3,"showModal"],[1,"bg-gray-800","p-2","flex","rounded-t","items-center","justify-between","text-white"],[1,"hover:text-secondaryColor",3,"click"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"w-5","h-5"],["stroke-linecap","round","stroke-linejoin","round","d","M6 18 18 6M6 6l12 12"],[1,"bg-white","p-2","text-sm"],["placeholder","Seleccionar una dependencia",1,"w-full","p-2",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"boton-crear","mt-2","w-full",3,"click"],[1,"lg:flex","p-4","gsap-contenido","max-w-5xl","mx-auto"],[1,"w-full","lg:w-1/2","bg-white","mr-2","shadow","rounded","border","border-gray-400"],[1,"pb-2",3,"formGroup","keydown.enter"],[1,"flex","items-center","p-2","bg-gray-800","border","border-gray-800","rounded-t"],["routerLink","/dashboard/usuarios",1,"p-2","text-white","hover:text-secondaryColor"],["stroke-linecap","round","stroke-linejoin","round","d","M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"],[1,"ml-1","text-xl","text-white"],[1,"px-4","p-2","text-sm"],[1,"flex","flex-col","lg:flex-row"],[1,"w-full","mx-2","flex-1","svelte-1l8159u"],[1,"font-semibold","bold","mt-3","text-gray-600","text-sm"],[1,"text-red-500"],[1,"bg-white","p-1"],["placeholder","Ej. lmoreno","formControlName","usuario",1,"input-generico","w-full"],["class","text-error mt-1",4,"ngIf"],[1,"font-semibold","mt-3","text-gray-600","text-sm"],["type","email","formControlName","email","placeholder","Ej. lucasmoreno@gmail.com",1,"input-generico","w-full"],["class","text-error",4,"ngIf"],["placeholder","Ej. Moreno","formControlName","apellido",1,"input-generico","w-full"],["placeholder","Ej. Lucas","formControlName","nombre",1,"input-generico","w-full"],[1,"w-full","mx-2","flex-1"],["placeholder","Ej. 34060398","formControlName","dni",1,"input-generico","w-full"],[1,"bg-white","mb-1","mt-1","flex"],["formControlName","role",1,"input-generico","w-full",3,"change"],["value","USER_ROLE"],["value","TECHNICAL_ROLE"],["value","ADMIN_ROLE"],[1,"flex","flex-col","lg:flex-row","mt-3"],[1,"w-1/2","mx-2","flex-1"],[1,"font-semibold","text-gray-600","text-sm"],["placeholder","Ej. 2664869642","formControlName","telefono",1,"input-generico","w-full"],["formControlName","asignableSolicitud",1,"input-generico","w-full","mt-1"],["value","true"],["value","false"],[1,"flex","flex-col","lg:flex-row","mt-2"],[1,"font-semibold","mt-2","text-gray-600","text-sm"],["type","password","formControlName","password","autocomplete","false","placeholder","******",1,"input-generico","w-full"],["type","password","formControlName","repetir","autocomplete","false","placeholder","******",1,"input-generico","w-full"],[1,"boton-crear","w-full","mt-4",3,"click"],[1,"w-full","lg:w-1/2","mt-2","lg:mt-0","h-full"],[1,"bg-white","border","shadow","border-gray-400","p-4","rounded"],[1,"flex","mb-2"],["class","bg-blue-100 flex items-center justify-center w-32 h-32 rounded-full shadow border border-blue-300",4,"ngIf"],["class","bg-orange-100 flex items-center justify-center w-32 h-32 rounded-full shadow border border-orange-300",4,"ngIf"],["class","bg-purple-100 flex items-center justify-center w-32 h-32 rounded-full shadow border border-purple-300",4,"ngIf"],[1,"ml-4","mt-2"],[1,"mt-1"],[1,"text-xl","lg:text-3xl"],["class","font-semibold",4,"ngIf"],["class","text-gray-400",4,"ngIf"],[1,"text-md","lg:text-2xl"],["class","capitalize",4,"ngIf"],[1,"text-xs","lg:text-lg","text-gray-400"],[4,"ngIf"],[1,"mt-2"],[1,"border","bg-gray-800","border-gray-800","flex","p-2","items-center","justify-between"],[1,"text-white","w-full"],["title","Agregar dependencia",1,"bg-white","hover:text-se","rounded","border","p-2","border-gray-400","hover:text-secondaryColor",3,"click"],["stroke-linecap","round","stroke-linejoin","round","d","M12 4.5v15m7.5-7.5h-15"],[1,"max-h-96","overflow-y-auto"],[3,"value"],[1,"text-error","mt-1"],[1,"text-error"],[1,"bg-blue-100","flex","items-center","justify-center","w-32","h-32","rounded-full","shadow","border","border-blue-300"],[1,"text-6xl","font-semibold","text-blue-900"],[1,"bg-orange-100","flex","items-center","justify-center","w-32","h-32","rounded-full","shadow","border","border-orange-300"],[1,"text-6xl","font-semibold","text-orange-500"],[1,"bg-purple-100","flex","items-center","justify-center","w-32","h-32","rounded-full","shadow","border","border-purple-300"],[1,"text-6xl","font-semibold","text-purple-500"],[1,"font-semibold"],[1,"text-gray-400"],[1,"capitalize"],[1,"border","border-gray-400","border-t-0","p-2","text-sm","flex","items-center","justify-between"],[1,"flex","items-center"],["src","assets/svg/dependencia.svg","alt","dependencia.svg",1,"w-10"],[1,"ml-2","font-semibold"],["title","Solo lectura",1,"p-2","bg-gray-100","border","border-gray-400","rounded",3,"ngClass","click"],["stroke-linecap","round","stroke-linejoin","round","d","M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"],["stroke-linecap","round","stroke-linejoin","round","d","M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"],["title","Eliminar dependencia",1,"p-2","bg-red-100","border","ml-2","border-red-400","rounded",3,"click"],[1,"italic","text-sm","bg-gray-100","border","border-gray-300","text-center","p-2","mt-2","text-gray-600"],[1,"boton-crear","mt-2",3,"click"],["class","border border-gray-400 border-t-0 p-2 text-sm flex items-center justify-between"]],template:function(d,e){d&1&&(i(0,"app-modal",0)(1,"div")(2,"div",1)(3,"h1"),r(4," Asignando dependencia "),t(),i(5,"button",2),v("click",function(){return e.showDependencias=!1}),S(),i(6,"svg",3),p(7,"path",4),t()()(),x(),i(8,"div",5)(9,"ng-select",6),v("ngModelChange",function(g){return e.dependenciaSeleccionada=g}),c(10,pe,2,2,"ng-option",7),t(),i(11,"button",8),v("click",function(){return e.agregarDependencia()}),r(12," Asignar dependencia "),t()()()(),i(13,"div",9)(14,"div",10)(15,"form",11),v("keydown.enter",function(g){return g.preventDefault()}),i(16,"div",12)(17,"button",13),S(),i(18,"svg",3),p(19,"path",14),t()(),x(),i(20,"h1",15),r(21," Nuevo usuario "),t()(),i(22,"div",16)(23,"div",17)(24,"div",18)(25,"div",19)(26,"span",20),r(27," * "),t(),r(28," Nombre de usuario "),t(),i(29,"div",21),p(30,"input",22),c(31,ce,2,0,"p",23)(32,fe,2,1,"p",23),t()(),i(33,"div",18)(34,"div",24)(35,"span",20),r(36," * "),t(),r(37," Email "),t(),i(38,"div",21),p(39,"input",25),t(),c(40,ve,2,0,"p",26)(41,ge,2,0,"p",26),t()(),i(42,"div",17)(43,"div",18)(44,"div",24)(45,"span",20),r(46," * "),t(),r(47," Apellido "),t(),i(48,"div",21),p(49,"input",27),c(50,he,2,0,"p",23),t()(),i(51,"div",18)(52,"div",24)(53,"span",20),r(54," * "),t(),r(55," Nombre "),t(),i(56,"div",21),p(57,"input",28),c(58,_e,2,0,"p",23),t()()(),i(59,"div",17)(60,"div",29)(61,"div",24)(62,"span",20),r(63," * "),t(),r(64," DNI "),t(),i(65,"div",21),p(66,"input",30),c(67,be,2,0,"p",23),t()(),i(68,"div",29)(69,"div",24)(70,"span",20),r(71," * "),t(),r(72," Rol "),t(),i(73,"div",31)(74,"select",32),v("change",function(){return e.cambiarRole()}),i(75,"option",33),r(76," Empleado "),t(),i(77,"option",34),r(78," T\xE9cnico "),t(),i(79,"option",35),r(80," Administrador "),t()()()()(),i(81,"div",36)(82,"div",37)(83,"div",38)(84,"span",20),r(85," * "),t(),r(86," Telefono "),t(),i(87,"div",21),p(88,"input",39),c(89,Se,2,0,"p",23),t()(),i(90,"div",37)(91,"div",38)(92,"span",20),r(93," * "),t(),r(94," Asignable a solicitud "),t(),i(95,"select",40)(96,"option",41),r(97," Si "),t(),i(98,"option",42),r(99," No "),t()()()(),i(100,"div",43)(101,"div",29)(102,"div",44)(103,"span",20),r(104," * "),t(),r(105," Contrase\xF1a "),t(),i(106,"div",21),p(107,"input",45),c(108,xe,2,0,"p",23)(109,we,2,1,"p",23),t()(),i(110,"div",29)(111,"div",44)(112,"span",20),r(113," * "),t(),r(114," Repetir contrase\xF1a "),t(),i(115,"div",21),p(116,"input",46),c(117,Ce,2,0,"p",23)(118,Ee,2,1,"p",23),t()()(),i(119,"button",47),v("click",function(){return e.nuevoUsuario()}),r(120," Crear usuario "),t()()()(),i(121,"div",48)(122,"div",49)(123,"div",50),c(124,ye,3,0,"div",51)(125,Ne,3,0,"div",52)(126,Ie,3,0,"div",53),i(127,"div",54)(128,"div",55)(129,"div",56),c(130,Fe,2,1,"p",57)(131,Ue,2,0,"p",58),t(),i(132,"div",59),c(133,Te,2,2,"p",60)(134,ke,2,0,"p",58),t(),i(135,"div",61),c(136,Le,2,1,"p",62)(137,Me,2,0,"p",62),t()()()()(),i(138,"div",63)(139,"div",64)(140,"h1",65),r(141," Dependencias asignadas "),t(),i(142,"button",66),v("click",function(){return e.abrirDependencias()}),S(),i(143,"svg",3),p(144,"path",67),t()()()(),x(),i(145,"div",68),F(146,je,13,4,"div",91,me,!1,Ae,5,0),t()()()),d&2&&(u("showModal",e.showDependencias),o(9),u("ngModel",e.dependenciaSeleccionada),o(),u("ngForOf",e.dependencias),o(5),u("formGroup",e.usuarioForm),o(16),u("ngIf",(e.usuario==null?null:e.usuario.touched)&&(e.usuario==null||e.usuario.errors==null?null:e.usuario.errors.required)),o(),u("ngIf",(e.usuario==null?null:e.usuario.touched)&&(e.usuario==null||e.usuario.errors==null?null:e.usuario.errors.minlength)),o(8),u("ngIf",(e.email==null?null:e.email.touched)&&(e.email==null||e.email.errors==null?null:e.email.errors.required)),o(),u("ngIf",(e.email==null?null:e.email.touched)&&(e.email==null||e.email.errors==null?null:e.email.errors.email)),o(9),u("ngIf",(e.apellido==null?null:e.apellido.touched)&&(e.apellido==null||e.apellido.errors==null?null:e.apellido.errors.required)),o(8),u("ngIf",(e.nombre==null?null:e.nombre.touched)&&(e.nombre==null||e.nombre.errors==null?null:e.nombre.errors.required)),o(9),u("ngIf",(e.dni==null?null:e.dni.touched)&&(e.dni==null||e.dni.errors==null?null:e.dni.errors.required)),o(22),u("ngIf",(e.telefono==null?null:e.telefono.touched)&&(e.telefono==null||e.telefono.errors==null?null:e.telefono.errors.required)),o(19),u("ngIf",(e.password==null?null:e.password.touched)&&(e.password==null||e.password.errors==null?null:e.password.errors.required)),o(),u("ngIf",(e.password==null?null:e.password.touched)&&(e.password==null||e.password.errors==null?null:e.password.errors.minlength)),o(8),u("ngIf",(e.repetir==null?null:e.repetir.touched)&&(e.repetir==null||e.repetir.errors==null?null:e.repetir.errors.required)),o(),u("ngIf",(e.repetir==null?null:e.repetir.touched)&&(e.repetir==null||e.repetir.errors==null?null:e.repetir.errors.minlength)),o(6),u("ngIf",e.usuarioForm.value.role==="ADMIN_ROLE"),o(),u("ngIf",e.usuarioForm.value.role==="USER_ROLE"),o(),u("ngIf",e.usuarioForm.value.role==="TECHNICAL_ROLE"),o(4),u("ngIf",e.usuarioForm.value.usuario.trim()!==""),o(),u("ngIf",e.usuarioForm.value.usuario.trim()==""),o(2),u("ngIf",e.usuarioForm.value.nombre.trim()||e.usuarioForm.value.apellido.trim()),o(),u("ngIf",e.usuarioForm.value.nombre.trim()==""&&e.usuarioForm.value.apellido.trim()==""),o(2),u("ngIf",e.usuarioForm.value.email.trim()!==""),o(),u("ngIf",e.usuarioForm.value.email.trim()==""),o(9),U(e.dependenciasUsuario))},dependencies:[V,q,X,z,K,Q,G,J,H,$,B,Y,Z,P,ae,le,oe,re,A,M,D,j],encapsulation:2});let n=l;return n})();export{Ye as default};