(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{AMPi:function(t,n,e){"use strict";e.r(n),e.d(n,"TournamentsModule",function(){return b});var r=e("ofXK"),o=e("tyNb"),c=e("fXoL"),i=e("4w6F");const s=function(t){return["../tournament",t]};function u(t,n){if(1&t&&(c.Mb(0,"ul"),c.Mb(1,"li"),c.Mb(2,"h3"),c.Mb(3,"a",1),c.mc(4),c.Lb(),c.Lb(),c.Lb(),c.Lb()),2&t){const t=n.$implicit;c.zb(3),c.ac("routerLink",c.cc(2,s,t.id)),c.zb(1),c.nc("Tournament Name :",t.name,"")}}const a=[{path:"",component:(()=>{class t{constructor(t){this.tournamentService=t}ngOnInit(){this.tournamentList=this.tournamentService.getTournamentList()}}return t.\u0275fac=function(n){return new(n||t)(c.Jb(i.a))},t.\u0275cmp=c.Db({type:t,selectors:[["app-tournaments"]],decls:3,vars:1,consts:[[4,"ngFor","ngForOf"],["mat-list-item","","routerLinkActive","active",3,"routerLink"]],template:function(t,n){1&t&&(c.Mb(0,"p"),c.mc(1,"tournaments works!"),c.Lb(),c.lc(2,u,5,4,"ul",0)),2&t&&(c.zb(2),c.ac("ngForOf",n.tournamentList))},directives:[r.i,o.c,o.b],styles:[""]}),t})()}];let m=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(n){return new(n||t)},imports:[[o.d.forChild(a)],o.d]}),t})(),b=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(n){return new(n||t)},imports:[[r.c,m]]}),t})()}}]);