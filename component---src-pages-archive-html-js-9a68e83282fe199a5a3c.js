webpackJsonp([0x736d4677d461],{165:function(e,t,a){(function(e){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var l=a(13),r=(s(l),a(10)),n=s(r),c=a(30),i=(s(c),a(31)),o=(s(i),a(3)),d=(s(o),a(32),a(5),a(44)),m=(s(d),a(33)),u=(s(m),function(t){var a,s=t.data,l={},r=s.allMarkdownRemark.edges;return r.forEach(function(e){var t={},a=e.node.fields.date.split(",")[1];t.categories=e.node.frontmatter.categories,t.date=e.node.fields.date,t.title=e.node.frontmatter.title,t.slug=e.node.fields.slug,l[a]?l[a].push(t):(l[a]=[],l[a].push(t))}),a=Object.keys(l),e.createElement(n.default,{css:{position:"relative"}},e.createElement("div",{className:"timeline"},a.map(function(t){return e.createElement("div",{key:t,className:"title"},e.createElement("h2",{className:"year",id:t},t),e.createElement("ul",{className:"posts-ul"},l[t].map(function(t){return e.createElement("li",{key:t.title,className:"post-li"},e.createElement("p",{className:"post-date"},t.date.substr(0,3)+" "+t.date.split(",")[0].split(" ")[1]),e.createElement("p",{css:{display:"none"},className:"post-categories"},"[",e.createElement("a",{href:"/categories.html#"+t.categories,className:"post-categorie"},t.categories),"]"),e.createElement("a",{className:"post-title",href:t.slug},t.title))})))})))});t.pageQuery="** extracted graphql fragment **";t.default=u}).call(t,a(4))}});