(this["webpackJsonpcat-boss-website"]=this["webpackJsonpcat-boss-website"]||[]).push([[0],{18:function(e,t,s){},19:function(e,t,s){},32:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s(12),n=s.n(c),r=(s(18),s(2)),i=s(3),l=s(5),o=s(4),j=s(13),b=s.n(j),d=(s(19),s(6)),h=s.n(d),m=s(0),O=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,t=this.props.data;return Object(m.jsxs)("header",{id:"home",className:"cat-astronaut",children:[Object(m.jsxs)("nav",{id:"nav-wrap",children:[Object(m.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(m.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(m.jsxs)("ul",{id:"nav",className:"nav",children:[Object(m.jsx)("li",{className:"current",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#team",children:"Team"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#networks",children:"Networks"})})]})]}),Object(m.jsx)("div",{className:"row banner",children:Object(m.jsxs)("div",{className:"banner-text",children:[Object(m.jsx)(h.a,{bottom:!0,children:Object(m.jsx)("h1",{className:"responsive-headline",children:e})}),Object(m.jsx)(h.a,{bottom:!0,duration:1500,children:Object(m.jsx)("p",{className:"banner-text-trust-me",children:t.description_moon})}),Object(m.jsx)("hr",{})]})}),Object(m.jsx)("p",{className:"scrolldown",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(m.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(a.Component),u=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.social.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:"medium"===e.name?Object(m.jsx)("img",{src:e.icon,alt:e.name,className:"medium-icon"}):Object(m.jsx)("i",{className:e.className})})},e.name)}));return Object(m.jsx)("section",{id:"contact",children:Object(m.jsx)("footer",{children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)(h.a,{bottom:!0,children:Object(m.jsxs)("div",{className:"twelve columns",children:[Object(m.jsx)("ul",{className:"social-links",children:e}),Object(m.jsx)("ul",{className:"copyright",children:Object(m.jsx)("li",{children:"\xa9 2021 Cat Boss."})})]})}),Object(m.jsx)("div",{id:"go-top",children:Object(m.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(m.jsx)("i",{className:"icon-up-open"})})})]})})})}}]),s}(a.Component),x=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data,t=this.props.data.social;return Object(m.jsx)("section",{id:"about",className:"section-padding",children:Object(m.jsx)(h.a,{duration:1e3,children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"cat-pics",children:Object(m.jsx)("img",{src:"/images/catboss.png",className:"catboss-logo",alt:"catboss-logo"})}),Object(m.jsx)("h1",{children:"About"}),Object(m.jsxs)("div",{className:"twelve columns main-col",children:[Object(m.jsx)("p",{className:"about-text text-center no-margin-bottom",children:e.bio_intro}),Object(m.jsx)("p",{className:"about-text text-center",children:e.bio_intro_1}),Object(m.jsx)("p",{className:"about-text",children:e.bio_mission_intro}),Object(m.jsx)("p",{className:"about-text",children:e.bio_mission_description_intro}),Object(m.jsx)("p",{className:"about-text",children:"Our goal?"}),Object(m.jsx)("p",{className:"about-text",children:e.bio_mission_description}),Object(m.jsx)("p",{className:"about-text",children:Object(m.jsx)("b",{children:e.bio_mission_no_cat_litter})}),Object(m.jsx)("div",{className:"socials",children:t.map((function(e,s){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("p",{className:"social",children:Object(m.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.name},e.url)}),s!==t.length-1&&Object(m.jsx)("p",{className:"spacer",children:"|"})]})}))})]})]})})})}}]),s}(a.Component),p=0,N=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.projects.map((function(e){var t=e.image;return Object(m.jsx)("div",{className:"networks-item",children:Object(m.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(m.jsxs)("div",{className:"item-wrap",children:[Object(m.jsx)("img",{src:t,alt:e.title,className:"networks-image"}),Object(m.jsx)("div",{className:"networks-link",children:e.title})]})})},p++)}));return Object(m.jsx)("section",{id:"networks",children:Object(m.jsx)(h.a,{left:!0,duration:1e3,distance:"40px",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"twelve columns collapsed",style:{textAlign:"center"},children:[Object(m.jsx)("h1",{children:this.props.data.title}),Object(m.jsx)("h6",{children:this.props.data.description}),Object(m.jsx)("div",{children:Object(m.jsx)("div",{id:"networks-wrapper",className:"networks-list",children:e})})]})})})})}}]),s}(a.Component),v=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.team;return Object(m.jsx)("section",{id:"team",className:"section-padding",children:Object(m.jsx)(h.a,{duration:1e3,children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"cat-pics"}),Object(m.jsx)("h1",{className:"title",children:"MY PAWMATES"}),Object(m.jsx)("p",{className:"text-center",children:e.description}),Object(m.jsx)("div",{className:"twelve columns main-col cat-profiles",children:e.members.map((function(e){return Object(m.jsxs)("div",{className:"cat-profile",children:[Object(m.jsx)("img",{className:"cat-pic",src:e.img,alt:"Meow"}),Object(m.jsx)("h3",{className:"name",children:e.name}),Object(m.jsx)("p",{className:"text-center",children:e.bio})]},e.name)}))})]})})})}}]),s}(a.Component),f=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).state={foo:"bar",networksData:{}},a}return Object(i.a)(s,[{key:"getNetworksData",value:function(){b.a.ajax({url:"./networksData.json",dataType:"json",cache:!1,success:function(e){this.setState({networksData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getNetworksData()}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(O,{data:this.state.networksData.main}),Object(m.jsx)(x,{data:this.state.networksData.main}),Object(m.jsx)(v,{data:this.state.networksData.main}),Object(m.jsx)(N,{data:this.state.networksData.networks}),Object(m.jsx)(u,{data:this.state.networksData.main})]})}}]),s}(a.Component);n.a.render(Object(m.jsx)(f,{}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.665177d8.chunk.js.map