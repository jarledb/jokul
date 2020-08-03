(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{UR4m:function(e,t,r){"use strict";r.r(t),r.d(t,"_frontmatter",(function(){return h})),r.d(t,"default",(function(){return D}));var n=r("+I+c"),l=r("mXGw"),a=r.n(l),o=r("/FXl"),s=r("7XvJ"),i=r("mK0O"),c=r("8Jek"),m=r.n(c);function d(e){switch(e.messageType){case"error":return a.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("circle",{cx:"12",cy:"12",r:"11.5",stroke:"currentColor"}),a.a.createElement("rect",{x:"4",y:"4.22168",width:"1",height:"22",transform:"rotate(-45 4 4.22168)",fill:"currentColor"}));case"info":return a.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("circle",{cx:"12",cy:"12",r:"11.5",stroke:"currentColor"}),a.a.createElement("path",{d:"M11.952 7.328C12.384 7.328 12.688 7.072 12.688 6.624C12.688 6.192 12.384 5.92 11.952 5.92C11.536 5.92 11.248 6.192 11.248 6.624C11.248 7.072 11.536 7.328 11.952 7.328ZM11.504 18H12.512V9.408H11.504V18Z",fill:"currentColor"}));case"success":return a.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("circle",{cx:"12",cy:"12",r:"11.5",stroke:"currentColor"}),a.a.createElement("path",{d:"M7 13.5L10 16.5L19.5 7",stroke:"currentColor"}));case"warning":return a.a.createElement("svg",{width:"24",height:"25",viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("circle",{cx:"12",cy:"12",r:"11.5",stroke:"currentColor"}),a.a.createElement("path",{className:"jkl-icon-exclamation",d:"M11.112 14.624H11.688L11.896 11.36V6H10.904V11.36L11.112 14.624ZM11.4 18.24C11.784 18.24 12.136 17.952 12.136 17.504C12.136 17.072 11.784 16.784 11.4 16.784C11.016 16.784 10.664 17.072 10.664 17.504C10.664 17.952 11.016 18.24 11.4 18.24Z",fill:"currentColor"}));default:return null}}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e){return function(t){var r=t.className,n=void 0===r?"":r,l=t.inverted,o=t.maxContentWidth,s=t.paddingLeft,i=t.role,c=void 0===i?"status":i,g=t.children,p=m()("jkl-alert-message","jkl-alert-message--"+e,n,{"jkl-alert-message--dark":l}),b={maxWidth:o,paddingLeft:s};return a.a.createElement("div",{className:p,role:c},a.a.createElement("div",{className:"jkl-alert-message__content","data-testid":"alert-message-content",style:u({},b)},a.a.createElement("div",{className:"jkl-alert-message__icon"},a.a.createElement(d,{messageType:e})),a.a.createElement("p",{className:"jkl-alert-message__message jkl-body"},g)))}}var b=p("info"),f=p("error"),v=p("warning"),k=p("success"),j=function(e){var t=e.boolValues,r=e.choiceValues,n=function(e){switch(e){case"Infomelding":return b;case"Suksessmelding":return k;case"Advarselsmelding":return v;case"Feilmelding":return f;default:return b}}(r?r.Type:"");return a.a.createElement(n,{inverted:t&&t.Invertert},"Hei, jeg er en varslingsmelding av typen ",r?r.Type:"ᕙ(⇀‸↼‶)ᕗ")},h={},w=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},O=w("Ingress"),y=w("ComponentExample"),E=w("DoDontExample"),x={_frontmatter:h},C=s.a;function D(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)(C,Object.assign({},x,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)(O,{mdxType:"Ingress"},"En varsel melding er en beskjed til brukeren. Det kan være et varsel om at noe er feil, global informasjon eller lignende. En melding består av en beskrivende tekst."),Object(o.b)(y,{component:j,knobs:{boolProps:["Invertert"],choiceProps:[{name:"Type",values:["Infomelding","Suksessmelding","Advarselmelding","Feilmelding"],defaultValue:0}]},mdxType:"ComponentExample"}),Object(o.b)("h2",null,"Bruk"),Object(o.b)(E,{fullWidth:!0,type:"do",description:"En global melding plassert øverst på siden",image:"/assets/do-donts/alert-message-do-1.png",mdxType:"DoDontExample"}),Object(o.b)(E,{fullWidth:!0,type:"dont",description:"En lokal melding relatert til en komponent. I slike tilfeller skal man bruke Message Box",image:"/assets/do-donts/alert-message-dont-1.png",mdxType:"DoDontExample"}),Object(o.b)("h2",null,"Alvorlighetsgrad"),Object(o.b)("p",null,"Vi har fire ulike meldinger, med fargene blå, rød, gul og grønn."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Blå:")," gir informasjon til brukeren."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Gul:")," gir brukeren en advarsel, for eksempel at en funksjonalitet er i beta og derfor er ustabil."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Rød:")," gir brukeren en feilmelding, for eksempel hvis det oppstår en systemfeil eller brukeren avbryter en handling."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Grønn:")," forteller at en handling var vellykket."),Object(o.b)("h3",null,"Tilgjengelighet"),Object(o.b)("p",null,"Når vi bruker meldinger med farge, må vi alltid huske å ha en god og beskrivende tekst, siden farge ikke er et godt nok kjennetegn for alle brukere. Skriv en presis meldingstekst, der du sier det viktigste først."))}D.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-alert-message-react-documentation-alert-message-mdx-3fdf174fb21b7815c2a9.js.map