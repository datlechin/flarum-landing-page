(()=>{var t={n:o=>{var n=o&&o.__esModule?()=>o.default:()=>o;return t.d(n,{a:n}),n},d:(o,n)=>{for(var e in n)t.o(n,e)&&!t.o(o,e)&&Object.defineProperty(o,e,{enumerable:!0,get:n[e]})},o:(t,o)=>Object.prototype.hasOwnProperty.call(t,o)};(()=>{"use strict";const o=flarum.core.compat["forum/app"];var n=t.n(o);const e=flarum.core.compat["common/extend"],r=flarum.core.compat["forum/components/IndexPage"];var a=t.n(r);const c=flarum.core.compat["forum/components/DiscussionPage"];var i=t.n(c);const u=flarum.core.compat["forum/components/PostsUserPage"];var s=t.n(u);const p=flarum.core.compat["forum/components/DiscussionsUserPage"];var l=t.n(p);function f(t,o){return f=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t},f(t,o)}const d=flarum.core.compat["common/Component"];var g=function(t){var o,e;function r(){return t.apply(this,arguments)||this}e=t,(o=r).prototype=Object.create(e.prototype),o.prototype.constructor=o,f(o,e);var a=r.prototype;return a.oninit=function(o){t.prototype.oninit.call(this,o)},a.oncreate=function(o){t.prototype.oncreate.call(this,o)},a.onupdate=function(o){t.prototype.onupdate.call(this,o)},a.view=function(){return m("div",{className:"LandingPage"},m("div",{className:"LandingPage header"},m.trust(n().forum.attribute("datlechin-landing-page.headerHTML"))),m("div",{className:"LandingPage content"},m.trust(n().forum.attribute("datlechin-landing-page.bodyHTML"))))},r}(t.n(d)());n().initializers.add("datlechin/flarum-landing-page",(function(){[a(),i(),s(),l()].forEach((function(t){(0,e.extend)(t.prototype,"view",(function(t){n().session.user||(t.children=[],t.children.unshift(g.component()))}))}))}))})(),module.exports={}})();
//# sourceMappingURL=forum.js.map