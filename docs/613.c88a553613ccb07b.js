"use strict";(self.webpackChunkngTodo=self.webpackChunkngTodo||[]).push([[613],{3613:(E,b,i)=>{i.r(b),i.d(b,{UsersModule:()=>T});var m=i(6895),u=i(7487),t=i(8256),d=i(2340),l=i(4004),p=i(529);let f=(()=>{class e{constructor(o){this.http=o}getUsers(o=1){return this.http.get(`${d.N.baseNetworkURL}/users?page=${o}`).pipe((0,l.U)(n=>n.items))}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(p.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var s=i(2327),h=i(235);const g=["mat-button",""],v=["*"],y=["mat-button","mat-flat-button","mat-icon-button","mat-raised-button","mat-stroked-button","mat-mini-fab","mat-fab"],k=(0,s.pj)((0,s.Id)((0,s.Kr)(class{constructor(e){this._elementRef=e}})));let w=(()=>{class e extends k{constructor(o,n,r){super(o),this._focusMonitor=n,this._animationMode=r,this.isRoundButton=this._hasHostAttributes("mat-fab","mat-mini-fab"),this.isIconButton=this._hasHostAttributes("mat-icon-button");for(const c of y)this._hasHostAttributes(c)&&this._getHostElement().classList.add(c);o.nativeElement.classList.add("mat-button-base"),this.isRoundButton&&(this.color="accent")}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}focus(o,n){o?this._focusMonitor.focusVia(this._getHostElement(),o,n):this._getHostElement().focus(n)}_getHostElement(){return this._elementRef.nativeElement}_isRippleDisabled(){return this.disableRipple||this.disabled}_hasHostAttributes(...o){return o.some(n=>this._getHostElement().hasAttribute(n))}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(t.SBq),t.Y36(h.tE),t.Y36(t.QbO,8))},e.\u0275cmp=t.Xpm({type:e,selectors:[["button","mat-button",""],["button","mat-raised-button",""],["button","mat-icon-button",""],["button","mat-fab",""],["button","mat-mini-fab",""],["button","mat-stroked-button",""],["button","mat-flat-button",""]],viewQuery:function(o,n){if(1&o&&t.Gf(s.wG,5),2&o){let r;t.iGM(r=t.CRH())&&(n.ripple=r.first)}},hostAttrs:[1,"mat-focus-indicator"],hostVars:5,hostBindings:function(o,n){2&o&&(t.uIk("disabled",n.disabled||null),t.ekj("_mat-animation-noopable","NoopAnimations"===n._animationMode)("mat-button-disabled",n.disabled))},inputs:{disabled:"disabled",disableRipple:"disableRipple",color:"color"},exportAs:["matButton"],features:[t.qOj],attrs:g,ngContentSelectors:v,decls:4,vars:5,consts:[[1,"mat-button-wrapper"],["matRipple","",1,"mat-button-ripple",3,"matRippleDisabled","matRippleCentered","matRippleTrigger"],[1,"mat-button-focus-overlay"]],template:function(o,n){1&o&&(t.F$t(),t.TgZ(0,"span",0),t.Hsn(1),t.qZA(),t._UZ(2,"span",1)(3,"span",2)),2&o&&(t.xp6(2),t.ekj("mat-button-ripple-round",n.isRoundButton||n.isIconButton),t.Q6J("matRippleDisabled",n._isRippleDisabled())("matRippleCentered",n.isIconButton)("matRippleTrigger",n._getHostElement()))},dependencies:[s.wG],styles:[".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}.mat-fab._mat-animation-noopable{transition:none !important;animation:none !important}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:inline-flex;justify-content:center;align-items:center;font-size:inherit;width:2.5em;height:2.5em}.mat-flat-button::before,.mat-raised-button::before,.mat-fab::before,.mat-mini-fab::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1)}.mat-stroked-button::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1)}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}"],encapsulation:2,changeDetection:0}),e})(),z=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[s.si,s.BQ,s.BQ]}),e})();const M=function(e){return["/profile",e]};function _(e,a){if(1&e&&(t.TgZ(0,"div")(1,"span",3),t._uU(2),t.qZA(),t._uU(3),t.qZA()),2&e){const o=a.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(3,M,o.id)),t.xp6(1),t.Oqu(o.name),t.xp6(1),t.hij(" - ",o.id,"\n")}}const R=function(){return{page:1}},U=[{path:"",component:(()=>{class e{constructor(o,n,r){this.usersService=o,this.route=n,this.router=r}nextUsersPageHandler(){const o=this.route.snapshot.queryParamMap.get("page"),n=o?Number(o)+1:2;this.router.navigate(["/users"],{queryParams:{page:n}})}getUsers(o){this.users$=this.usersService.getUsers(o)}ngOnInit(){const o=Number(this.route.snapshot.queryParamMap.get("page"));this.getUsers(o||1),this.route.queryParams.subscribe(r=>{this.getUsers(r.page?r.page:1)})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(f),t.Y36(u.gz),t.Y36(u.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["tdl-users"]],decls:8,vars:5,consts:[[4,"ngFor","ngForOf"],["mat-raised-button","","color","primary","routerLink","/users",3,"click"],["mat-raised-button","","color","warn","routerLink","/users",3,"queryParams"],[3,"routerLink"]],template:function(o,n){1&o&&(t.TgZ(0,"p"),t._uU(1,"users works!"),t.qZA(),t.YNc(2,_,4,5,"div",0),t.ALo(3,"async"),t.TgZ(4,"button",1),t.NdJ("click",function(){return n.nextUsersPageHandler()}),t._uU(5,"next"),t.qZA(),t.TgZ(6,"button",2),t._uU(7,"go to 1"),t.qZA()),2&o&&(t.xp6(2),t.Q6J("ngForOf",t.lcZ(3,2,n.users$)),t.xp6(4),t.Q6J("queryParams",t.DdM(4,R)))},dependencies:[m.sg,u.rH,w,m.Ov]}),e})(),canActivate:[i(7574).a]}];let D=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.Bz.forChild(U),u.Bz]}),e})(),T=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.ez,D,z]}),e})()}}]);