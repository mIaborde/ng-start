(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"6uns":function(t,e,i){"use strict";i.r(e),i.d(e,"UserEditModule",(function(){return ut}));var s=i("ofXK"),o=i("bTqV"),n=i("Wp6s"),r=i("f0Cb"),a=i("kmnG"),l=i("qFsG"),c=i("bv9b"),h=i("rDax"),d=i("u47x"),u=i("fXoL"),p=i("FKr1"),b=i("vxfF"),m=i("8LU1"),_=i("FtGj"),f=i("nLfN"),g=i("XNiG"),v=i("itXk"),y=i("GyhO"),O=i("HDdC"),w=i("IzEk"),I=i("7o/Q");class x{constructor(t){this.total=t}call(t,e){return e.subscribe(new j(t,this.total))}}class j extends I.a{constructor(t,e){super(t),this.total=e,this.count=0}_next(t){++this.count>this.total&&this.destination.next(t)}}var T=i("Kj3r"),C=i("lJxs"),D=i("JX91"),k=i("1G5W");const E=new Set;let N,P=(()=>{class t{constructor(t){this._platform=t,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):M}matchMedia(t){return this._platform.WEBKIT&&function(t){if(!E.has(t))try{N||(N=document.createElement("style"),N.setAttribute("type","text/css"),document.head.appendChild(N)),N.sheet&&(N.sheet.insertRule(`@media ${t} {.fx-query-test{ }}`,0),E.add(t))}catch(e){console.error(e)}}(t),this._matchMedia(t)}}return t.\u0275fac=function(e){return new(e||t)(u.Ub(f.a))},t.\u0275prov=Object(u.Fb)({factory:function(){return new t(Object(u.Ub)(f.a))},token:t,providedIn:"root"}),t})();function M(t){return{matches:"all"===t||""===t,media:t,addListener:()=>{},removeListener:()=>{}}}let z=(()=>{class t{constructor(t,e){this._mediaMatcher=t,this._zone=e,this._queries=new Map,this._destroySubject=new g.a}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return S(Object(m.a)(t)).some(t=>this._registerQuery(t).mql.matches)}observe(t){const e=S(Object(m.a)(t)).map(t=>this._registerQuery(t).observable);let i=Object(v.a)(e);return i=Object(y.a)(i.pipe(Object(w.a)(1)),i.pipe(t=>t.lift(new x(1)),Object(T.a)(0))),i.pipe(Object(C.a)(t=>{const e={matches:!1,breakpoints:{}};return t.forEach(t=>{e.matches=e.matches||t.matches,e.breakpoints[t.query]=t.matches}),e}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);const e=this._mediaMatcher.matchMedia(t),i={observable:new O.a(t=>{const i=e=>this._zone.run(()=>t.next(e));return e.addListener(i),()=>{e.removeListener(i)}}).pipe(Object(D.a)(e),Object(C.a)(e=>({query:t,matches:e.matches})),Object(k.a)(this._destroySubject)),mql:e};return this._queries.set(t,i),i}}return t.\u0275fac=function(e){return new(e||t)(u.Ub(P),u.Ub(u.z))},t.\u0275prov=Object(u.Fb)({factory:function(){return new t(Object(u.Ub)(P),Object(u.Ub)(u.z))},token:t,providedIn:"root"}),t})();function S(t){return t.map(t=>t.split(",")).reduce((t,e)=>t.concat(e)).map(t=>t.trim())}var R=i("+rOU"),G=i("R0Ic"),L=i("cH1L");const X={tooltipState:Object(G.m)("state",[Object(G.j)("initial, void, hidden",Object(G.k)({opacity:0,transform:"scale(0)"})),Object(G.j)("visible",Object(G.k)({transform:"scale(1)"})),Object(G.l)("* => visible",Object(G.e)("200ms cubic-bezier(0, 0, 0.2, 1)",Object(G.g)([Object(G.k)({opacity:0,transform:"scale(0)",offset:0}),Object(G.k)({opacity:.5,transform:"scale(0.99)",offset:.5}),Object(G.k)({opacity:1,transform:"scale(1)",offset:1})]))),Object(G.l)("* => hidden",Object(G.e)("100ms cubic-bezier(0, 0, 0.2, 1)",Object(G.k)({opacity:0})))])},F=Object(f.f)({passive:!0});function U(t){return Error(`Tooltip position "${t}" is invalid.`)}const J=new u.q("mat-tooltip-scroll-strategy"),Y={provide:J,deps:[h.a],useFactory:function(t){return()=>t.scrollStrategies.reposition({scrollThrottle:20})}},H=new u.q("mat-tooltip-default-options",{providedIn:"root",factory:function(){return{showDelay:0,hideDelay:0,touchendHideDelay:1500}}});let $=(()=>{class t{constructor(t,e,i,s,o,n,r,a,l,c,h){this._overlay=t,this._elementRef=e,this._scrollDispatcher=i,this._viewContainerRef=s,this._ngZone=o,this._platform=n,this._ariaDescriber=r,this._focusMonitor=a,this._dir=c,this._defaultOptions=h,this._position="below",this._disabled=!1,this._viewInitialized=!1,this._pointerExitEventsInitialized=!1,this.showDelay=this._defaultOptions.showDelay,this.hideDelay=this._defaultOptions.hideDelay,this.touchGestures="auto",this._message="",this._passiveListeners=[],this._destroyed=new g.a,this._handleKeydown=t=>{this._isTooltipVisible()&&t.keyCode===_.e&&!Object(_.o)(t)&&(t.preventDefault(),t.stopPropagation(),this._ngZone.run(()=>this.hide(0)))},this._scrollStrategy=l,h&&(h.position&&(this.position=h.position),h.touchGestures&&(this.touchGestures=h.touchGestures)),o.runOutsideAngular(()=>{e.nativeElement.addEventListener("keydown",this._handleKeydown)})}get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(),this._tooltipInstance&&this._tooltipInstance.show(0),this._overlayRef.updatePosition()))}get disabled(){return this._disabled}set disabled(t){this._disabled=Object(m.b)(t),this._disabled?this.hide(0):this._setupPointerEnterEventsIfNeeded()}get message(){return this._message}set message(t){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this._message),this._message=null!=t?(""+t).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage(),this._ngZone.runOutsideAngular(()=>{Promise.resolve().then(()=>{this._ariaDescriber.describe(this._elementRef.nativeElement,this.message)})}))}get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(Object(k.a)(this._destroyed)).subscribe(t=>{t?"keyboard"===t&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){const t=this._elementRef.nativeElement;clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),t.removeEventListener("keydown",this._handleKeydown),this._passiveListeners.forEach(([e,i])=>{t.removeEventListener(e,i,F)}),this._passiveListeners.length=0,this._destroyed.next(),this._destroyed.complete(),this._ariaDescriber.removeDescription(t,this.message),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay){if(this.disabled||!this.message||this._isTooltipVisible()&&!this._tooltipInstance._showTimeoutId&&!this._tooltipInstance._hideTimeoutId)return;const e=this._createOverlay();this._detach(),this._portal=this._portal||new R.c(q,this._viewContainerRef),this._tooltipInstance=e.attach(this._portal).instance,this._tooltipInstance.afterHidden().pipe(Object(k.a)(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),this._tooltipInstance.show(t)}hide(t=this.hideDelay){this._tooltipInstance&&this._tooltipInstance.hide(t)}toggle(){this._isTooltipVisible()?this.hide():this.show()}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(){if(this._overlayRef)return this._overlayRef;const t=this._scrollDispatcher.getAncestorScrollContainers(this._elementRef),e=this._overlay.position().flexibleConnectedTo(this._elementRef).withTransformOriginOn(".mat-tooltip").withFlexibleDimensions(!1).withViewportMargin(8).withScrollableContainers(t);return e.positionChanges.pipe(Object(k.a)(this._destroyed)).subscribe(t=>{this._tooltipInstance&&t.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=this._overlay.create({direction:this._dir,positionStrategy:e,panelClass:"mat-tooltip-panel",scrollStrategy:this._scrollStrategy()}),this._updatePosition(),this._overlayRef.detachments().pipe(Object(k.a)(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(){const t=this._overlayRef.getConfig().positionStrategy,e=this._getOrigin(),i=this._getOverlayPosition();t.withPositions([Object.assign(Object.assign({},e.main),i.main),Object.assign(Object.assign({},e.fallback),i.fallback)])}_getOrigin(){const t=!this._dir||"ltr"==this._dir.value,e=this.position;let i;if("above"==e||"below"==e)i={originX:"center",originY:"above"==e?"top":"bottom"};else if("before"==e||"left"==e&&t||"right"==e&&!t)i={originX:"start",originY:"center"};else{if(!("after"==e||"right"==e&&t||"left"==e&&!t))throw U(e);i={originX:"end",originY:"center"}}const{x:s,y:o}=this._invertPosition(i.originX,i.originY);return{main:i,fallback:{originX:s,originY:o}}}_getOverlayPosition(){const t=!this._dir||"ltr"==this._dir.value,e=this.position;let i;if("above"==e)i={overlayX:"center",overlayY:"bottom"};else if("below"==e)i={overlayX:"center",overlayY:"top"};else if("before"==e||"left"==e&&t||"right"==e&&!t)i={overlayX:"end",overlayY:"center"};else{if(!("after"==e||"right"==e&&t||"left"==e&&!t))throw U(e);i={overlayX:"start",overlayY:"center"}}const{x:s,y:o}=this._invertPosition(i.overlayX,i.overlayY);return{main:i,fallback:{overlayX:s,overlayY:o}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),this._ngZone.onMicrotaskEmpty.asObservable().pipe(Object(w.a)(1),Object(k.a)(this._destroyed)).subscribe(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t,this._tooltipInstance._markForCheck())}_invertPosition(t,e){return"above"===this.position||"below"===this.position?"top"===e?e="bottom":"bottom"===e&&(e="top"):"end"===t?t="start":"start"===t&&(t="end"),{x:t,y:e}}_setupPointerEnterEventsIfNeeded(){!this._disabled&&this.message&&this._viewInitialized&&!this._passiveListeners.length&&(this._platformSupportsMouseEvents()?this._passiveListeners.push(["mouseenter",()=>{this._setupPointerExitEventsIfNeeded(),this.show()}]):"off"!==this.touchGestures&&(this._disableNativeGesturesIfNecessary(),this._passiveListeners.push(["touchstart",()=>{this._setupPointerExitEventsIfNeeded(),clearTimeout(this._touchstartTimeout),this._touchstartTimeout=setTimeout(()=>this.show(),500)}])),this._addListeners(this._passiveListeners))}_setupPointerExitEventsIfNeeded(){if(this._pointerExitEventsInitialized)return;this._pointerExitEventsInitialized=!0;const t=[];if(this._platformSupportsMouseEvents())t.push(["mouseleave",()=>this.hide()]);else if("off"!==this.touchGestures){this._disableNativeGesturesIfNecessary();const e=()=>{clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions.touchendHideDelay)};t.push(["touchend",e],["touchcancel",e])}this._addListeners(t),this._passiveListeners.push(...t)}_addListeners(t){t.forEach(([t,e])=>{this._elementRef.nativeElement.addEventListener(t,e,F)})}_platformSupportsMouseEvents(){return!this._platform.IOS&&!this._platform.ANDROID}_disableNativeGesturesIfNecessary(){const t=this.touchGestures;if("off"!==t){const e=this._elementRef.nativeElement,i=e.style;("on"===t||"INPUT"!==e.nodeName&&"TEXTAREA"!==e.nodeName)&&(i.userSelect=i.msUserSelect=i.webkitUserSelect=i.MozUserSelect="none"),"on"!==t&&e.draggable||(i.webkitUserDrag="none"),i.touchAction="none",i.webkitTapHighlightColor="transparent"}}}return t.\u0275fac=function(e){return new(e||t)(u.Jb(h.a),u.Jb(u.l),u.Jb(b.c),u.Jb(u.P),u.Jb(u.z),u.Jb(f.a),u.Jb(d.b),u.Jb(d.d),u.Jb(J),u.Jb(L.b,8),u.Jb(H,8))},t.\u0275dir=u.Eb({type:t,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-tooltip-trigger"],inputs:{showDelay:["matTooltipShowDelay","showDelay"],hideDelay:["matTooltipHideDelay","hideDelay"],touchGestures:["matTooltipTouchGestures","touchGestures"],position:["matTooltipPosition","position"],disabled:["matTooltipDisabled","disabled"],message:["matTooltip","message"],tooltipClass:["matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]}),t})(),q=(()=>{class t{constructor(t,e){this._changeDetectorRef=t,this._breakpointObserver=e,this._visibility="initial",this._closeOnInteraction=!1,this._onHide=new g.a,this._isHandset=this._breakpointObserver.observe("(max-width: 599.99px) and (orientation: portrait), (max-width: 959.99px) and (orientation: landscape)")}show(t){this._hideTimeoutId&&(clearTimeout(this._hideTimeoutId),this._hideTimeoutId=null),this._closeOnInteraction=!0,this._showTimeoutId=setTimeout(()=>{this._visibility="visible",this._showTimeoutId=null,this._markForCheck()},t)}hide(t){this._showTimeoutId&&(clearTimeout(this._showTimeoutId),this._showTimeoutId=null),this._hideTimeoutId=setTimeout(()=>{this._visibility="hidden",this._hideTimeoutId=null,this._markForCheck()},t)}afterHidden(){return this._onHide.asObservable()}isVisible(){return"visible"===this._visibility}ngOnDestroy(){this._onHide.complete()}_animationStart(){this._closeOnInteraction=!1}_animationDone(t){const e=t.toState;"hidden"!==e||this.isVisible()||this._onHide.next(),"visible"!==e&&"hidden"!==e||(this._closeOnInteraction=!0)}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}}return t.\u0275fac=function(e){return new(e||t)(u.Jb(u.h),u.Jb(z))},t.\u0275cmp=u.Db({type:t,selectors:[["mat-tooltip-component"]],hostAttrs:["aria-hidden","true"],hostVars:2,hostBindings:function(t,e){1&t&&u.Xb("click",(function(){return e._handleBodyInteraction()}),!1,u.mc),2&t&&u.sc("zoom","visible"===e._visibility?1:null)},decls:3,vars:7,consts:[[1,"mat-tooltip",3,"ngClass"]],template:function(t,e){var i;1&t&&(u.Ob(0,"div",0),u.Xb("@state.start",(function(){return e._animationStart()}))("@state.done",(function(t){return e._animationDone(t)})),u.cc(1,"async"),u.xc(2),u.Nb()),2&t&&(u.Bb("mat-tooltip-handset",null==(i=u.dc(1,5,e._isHandset))?null:i.matches),u.gc("ngClass",e.tooltipClass)("@state",e._visibility),u.zb(2),u.yc(e.message))},directives:[s.j],pipes:[s.b],styles:[".mat-tooltip-panel{pointer-events:none !important}.mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}\n"],encapsulation:2,data:{animation:[X.tooltipState]},changeDetection:0}),t})(),A=(()=>{class t{}return t.\u0275mod=u.Hb({type:t}),t.\u0275inj=u.Gb({factory:function(e){return new(e||t)},providers:[Y],imports:[[d.a,s.c,h.d,p.c],p.c,b.b]}),t})();var V=i("tyNb"),K=i("PCNd"),B=i("mrSG"),Z=i("3Pt+"),Q=i("Y6oN"),W=i("2wDY");const tt=["matTooltip","Cliquez ou faites glisser ici votre image pour d\xE9finir votre avatar"],et=["alt","Votre avatar"];var it,st,ot,nt,rt;function at(t,e){1&t&&u.Kb(0,"mat-error")}function lt(t,e){if(1&t&&(u.Ob(0,"mat-error",15),u.xc(1),u.cc(2,"json"),u.Nb()),2&t){const t=u.bc(2);u.zb(1),u.zc(" ",u.dc(2,1,t.errorMessage)," ")}}it="Vos informations",st="Votre nom d'utilisateur",ot="Votre email",nt="Votre description",rt="\n            Confirmer\n          ";const ct=function(t){return{"anime-wobble":t}};function ht(t,e){if(1&t){const t=u.Pb();u.Ob(0,"section",1),u.Ob(1,"form",2),u.Ob(2,"button",3),u.Tb(3,tt),u.Xb("drop",(function(e){return u.nc(t),u.bc().onImportImage(e)}))("dragover",(function(){return!1}))("dragend",(function(){return!1}))("click",(function(){return u.nc(t),u.lc(5).click()})),u.Ob(4,"input",4,5),u.Xb("change",(function(e){return u.nc(t),u.bc().onImportImage(e)})),u.Nb(),u.Ob(6,"img",6),u.Tb(7,et),u.Nb(),u.Nb(),u.Ob(8,"mat-card",7),u.Ob(9,"mat-card-header"),u.Ob(10,"mat-card-title"),u.Sb(11,it),u.Nb(),u.Nb(),u.Ob(12,"mat-card-content"),u.Kb(13,"mat-divider"),u.Ob(14,"mat-form-field",8),u.Ob(15,"mat-label"),u.Sb(16,st),u.Nb(),u.Kb(17,"input",9),u.Nb(),u.Ob(18,"mat-form-field",8),u.Ob(19,"mat-label"),u.Sb(20,ot),u.Nb(),u.Kb(21,"input",9),u.Nb(),u.Ob(22,"mat-form-field",8),u.Ob(23,"mat-label"),u.Sb(24,nt),u.Nb(),u.Kb(25,"textarea",10),u.Ob(26,"mat-hint"),u.xc(27),u.Nb(),u.vc(28,at,1,0,"mat-error",11),u.Nb(),u.Kb(29,"mat-divider"),u.Ob(30,"div",12),u.Ob(31,"button",13),u.Sb(32,rt),u.Nb(),u.Nb(),u.vc(33,lt,3,3,"mat-error",14),u.Nb(),u.Nb(),u.Nb(),u.Nb()}if(2&t){const t=e.ngIf,i=u.bc();u.zb(1),u.gc("formGroup",i.formGroup),u.zb(5),u.hc("src",null==t?null:t.avatar,u.oc),u.zb(2),u.gc("ngClass",u.jc(10,ct,i.errorMessage)),u.zb(9),u.gc("value",null==t?null:t.username),u.zb(4),u.gc("value",null==t?null:t.email),u.zb(4),u.gc("value",null==t?null:t.description),u.zb(2),u.zc("",null==i.description||null==i.description.value?null:i.description.value.length," / 190"),u.zb(1),u.gc("ngIf",(null==i.description?null:i.description.touched)&&(null==i.description||null==i.description.errors?null:i.description.errors.required)),u.zb(3),u.gc("disabled",!i.formGroup.valid),u.zb(2),u.gc("ngIf",i.errorMessage)}}const dt=[{path:"",component:(()=>{class t{constructor(t,e){this.formBuilder=t,this.userService=e,this.errorMessage="",this.isDestroyed$=new g.a,this.user$=this.userService.getUser$(),this.formGroup=this.formBuilder.group({description:[null,[Z.m.maxLength(190)]]})}get description(){return this.formGroup.get("description")}onImportImage(t){return Object(B.a)(this,void 0,void 0,(function*(){const e=yield this.getFileFromEvent(t);this.userService.setUser(Object.assign(Object.assign({},this.userService.getUserFromStorage()),{avatar:e}))}))}ngOnDestroy(){this.isDestroyed$.next(!0),this.isDestroyed$.complete()}getFileFromEvent(t){var e,i;const s=t;s.preventDefault();const o=s.target,n=(null!==(e=null==o?void 0:o.files)&&void 0!==e?e:null===(i=t)||void 0===i?void 0:i.files)[0];return this.readUrl(n)}readUrl(t){return new Promise((e,i)=>{const s=new FileReader;s.onload=t=>{var i;return e(null===(i=null==t?void 0:t.target)||void 0===i?void 0:i.result)},s.onerror=i,s.readAsDataURL(t)})}}return t.\u0275fac=function(e){return new(e||t)(u.Jb(Z.b),u.Jb(Q.a))},t.\u0275cmp=u.Db({type:t,selectors:[["app-user-edit"]],decls:2,vars:3,consts:[["class","centred-layout anime-zoom-in",4,"ngIf"],[1,"centred-layout","anime-zoom-in"],["enctype","multipart/form-data",3,"formGroup"],["mat-raised-button","","matTooltipPosition","above",1,"upload-image-container",3,"drop","dragover","dragend","click",6,"matTooltip"],["type","file","accept","image/*",3,"change"],["file",""],["default","profile",3,"src",6,"alt"],[1,"card",3,"ngClass"],["appearance","outline","color","accent"],["matInput","","disabled","",3,"value"],["matInput","","formControlName","description","autofocus","",3,"value"],[4,"ngIf"],[1,"button-group"],["mat-raised-button","","color","accent","type","submit",1,"btn-submit",3,"disabled"],["class","submit-error",4,"ngIf"],[1,"submit-error"]],template:function(t,e){1&t&&(u.vc(0,ht,34,12,"section",0),u.cc(1,"async")),2&t&&u.gc("ngIf",u.dc(1,1,e.user$))},directives:[s.l,Z.n,Z.i,Z.d,o.b,$,W.a,n.a,s.j,n.c,n.e,n.b,r.a,a.b,a.f,l.a,Z.a,Z.h,Z.c,a.e,a.a],pipes:[s.b,s.f],styles:["@media only screen and (max-width:767px){.hide-on-small-screen[_ngcontent-%COMP%]{display:none}}@media only screen and (min-width:768px){.hide-on-large-screen[_ngcontent-%COMP%]{display:none}}.upload-image-container[_ngcontent-%COMP%]{border-radius:50%;margin:15px;padding:10px;position:relative;text-align:center}@media only screen and (max-width:767px){.upload-image-container[_ngcontent-%COMP%]{height:150px;width:150px}}@media only screen and (min-width:768px){.upload-image-container[_ngcontent-%COMP%]{height:200px;width:200px}}.upload-image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%;height:100%;object-fit:cover;width:100%}.upload-image-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}mat-form-field[_ngcontent-%COMP%]{width:100%}mat-form-field[_ngcontent-%COMP%]:first-of-type{margin-top:40px}mat-form-field[_ngcontent-%COMP%]:last-of-type{margin-bottom:20px}.button-group[_ngcontent-%COMP%]{align-content:center;display:flex;flex-direction:row;justify-content:right;margin-top:20px}.submit-error[_ngcontent-%COMP%]{margin:20px}"],changeDetection:0}),t})()}];let ut=(()=>{class t{}return t.\u0275mod=u.Hb({type:t}),t.\u0275inj=u.Gb({factory:function(e){return new(e||t)},imports:[[s.c,V.e.forChild(dt),K.a,n.d,r.b,c.b,a.d,l.b,o.c,A]]}),t})()}}]);