(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{AMPi:function(t,n,e){"use strict";e.r(n),e.d(n,"TournamentsModule",function(){return d});var r=e("ofXK"),o=e("Wp6s"),c=e("tyNb"),i=e("fXoL"),a=e("4w6F");const s=function(t){return["../tournament",t]};function u(t,n){if(1&t&&(i.Rb(0,"div"),i.Rb(1,"mat-card",1),i.Rb(2,"mat-card-header"),i.Rb(3,"mat-card-title",2),i.tc(4),i.Qb(),i.Mb(5,"mat-card-subtitle"),i.Qb(),i.Mb(6,"mat-card-content"),i.Qb(),i.Qb()),2&t){const t=n.$implicit;i.Bb(3),i.fc("routerLink",i.hc(2,s,t.id)),i.Bb(1),i.vc("Tournament Name :",t.name,"")}}const b=[{path:"",component:(()=>{class t{constructor(t){this.tournamentService=t}ngOnInit(){this.tournamentList=this.tournamentService.getTournamentList()}}return t.\u0275fac=function(n){return new(n||t)(i.Lb(a.a))},t.\u0275cmp=i.Fb({type:t,selectors:[["app-tournaments"]],decls:3,vars:1,consts:[[4,"ngFor","ngForOf"],[1,"strategyCard"],["routerLinkActive","active",1,"strategyTitle",3,"routerLink"]],template:function(t,n){1&t&&(i.Rb(0,"p"),i.tc(1,"tournaments works!"),i.Qb(),i.sc(2,u,7,4,"div",0)),2&t&&(i.Bb(2),i.fc("ngForOf",n.tournamentList))},directives:[r.i,o.a,o.c,o.f,c.e,c.d,o.e,o.b],styles:[".strategy-list[_ngcontent-%COMP%]{width:1024px}.strategy-card[_ngcontent-%COMP%]{width:1024px;margin-bottom:20px}"]}),t})()}];let m=(()=>{class t{}return t.\u0275mod=i.Jb({type:t}),t.\u0275inj=i.Ib({factory:function(n){return new(n||t)},imports:[[c.g.forChild(b)],c.g]}),t})(),d=(()=>{class t{}return t.\u0275mod=i.Jb({type:t}),t.\u0275inj=i.Ib({factory:function(n){return new(n||t)},imports:[[r.c,o.d,m]]}),t})()}}]);