(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);for(var n=a(0),r=a.n(n),o=a(9),l=a.n(o),i=a(2),s=a(3),c=a(5),m=a(4),u=a(6),d=a(7),h=a(1),f=(a(15),function(e){var t=e.person,a=e.tdNameClassName;return r.a.createElement("td",{className:a(t)},t.name)}),b=function(e){var t=e.person,a=e.isSelected,n=e.selectPerson;return r.a.createElement("tr",{className:function(e){var t="person";return t+=" person--lived-in-".concat(e.century),t+=a?" person--selected":""}(t),onClick:n},r.a.createElement("td",null,t.id),r.a.createElement(f,{person:t,tdNameClassName:function(e){var t="";return e.born<1650&&(t+="person--born-before-1650"),e.died>1800&&(t+="person--died-after-1800"),t+="m"===e.sex?" person--man":" person--woman"}}),r.a.createElement("td",null,t.sex),r.a.createElement("td",null,t.born),r.a.createElement("td",null,t.died<1/0?t.died:""),r.a.createElement("td",{className:t.age>=65?"person--old":""},t.age),r.a.createElement("td",null,t.century),r.a.createElement("td",null,t.mother),r.a.createElement("td",null,t.father),r.a.createElement("td",null,t.children))},p=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={selectedPersonId:0},a.selectPerson=function(e){e===a.state.selectedPersonId?a.setState(function(e){return{selectedPersonId:0}}):a.setState(function(t){return{selectedPersonId:e}})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.people,n=t.setSortBy,o=t.sortingTitle,l=this.state.selectedPersonId;return r.a.createElement("table",{className:"people-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,["id","name","sex","born","died","age","century"].map(function(e){return r.a.createElement("th",{className:e===o?"title--with-sorting title--sorting":"title--with-sorting",onClick:function(){return n(e)}},e.toUpperCase())}),r.a.createElement("th",{className:"title--without-sorting"},"MOTHER"),r.a.createElement("th",{className:"title--without-sorting"},"FATHER"),r.a.createElement("th",{className:"title--without-sorting"},"CHILDREN"))),r.a.createElement("tbody",null,a.map(function(t){return r.a.createElement(b,{key:t.id,person:t,isSelected:t.id===l,selectPerson:function(){return e.selectPerson(t.id)}})})))}}]),t}(r.a.Component),v=new Date,k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",sex:"",born:"",died:"",mother:"",father:""},a.handleNameChange=function(e){var t=e.target.value;a.setState(function(e){return{name:t.replace(/^ |[^a-zA-Z|\s]+/g,"")}})},a.handleSelectSex=function(e){var t=e.target.value;a.setState(function(e){return{sex:t}})},a.handleSelectBorn=function(e){var t=e.target.value;a.setState(function(e){return{born:t}})},a.handleSelectDied=function(e){var t=e.target.value;a.setState(function(e){return{died:t}})},a.handleSelectMother=function(e){var t=e.target.value;a.setState(function(e){return{mother:t}})},a.handleSelectFather=function(e){var t=e.target.value;a.setState(function(e){return{father:t}})},a.handleSubmit=function(e){e.preventDefault();var t=a.props,n=t.addPerson,r=t.updateChildren,o=t.updateSortedPeople,l=a.state,i=l.name,s=l.sex,c=l.born,m=l.died,u=l.mother,d=l.father;n(i.trim(),s,c,m,u,d),r(),o(),a.setState(function(e){return{name:"",sex:e.sex,born:"",died:"",mother:"",father:""}})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.sex,o=t.born,l=t.died,i=t.mother,s=t.father,c=this.props,m=c.peopleList,u=c.years;return r.a.createElement("form",{className:"new-person",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",value:a,placeholder:"Enter name",onChange:this.handleNameChange,className:"new-person__name",required:!0}),r.a.createElement("input",{type:"radio",name:"sex",value:"m",required:""===n,id:"male",onChange:function(t){return e.handleSelectSex(t)}}),r.a.createElement("label",{htmlFor:"male",className:"new-person__".concat(n)},"male"),r.a.createElement("input",{type:"radio",name:"sex",value:"f",required:""===n,id:"female",onChange:function(t){return e.handleSelectSex(t)}}),r.a.createElement("label",{htmlFor:"female",className:"new-person__".concat(n)},"female"),r.a.createElement("br",null),r.a.createElement("select",{value:o,onChange:function(t){return e.handleSelectBorn(t)},className:"new-person__year",required:!0},r.a.createElement("option",{value:""},"born"),Object(h.a)(u).map(function(e){return r.a.createElement("option",{value:e,key:e},e)})),r.a.createElement("select",{value:l,onChange:function(t){return e.handleSelectDied(t)},className:"new-person__year",required:!0},r.a.createElement("option",{value:""},"died"),o&&u.filter(function(e){return e>=Number(o)&&e<=Number(o)+149}).map(function(e){return r.a.createElement("option",{value:e,key:e},e)}),v.getFullYear()-o<150&&r.a.createElement("option",{value:1/0},"alive")),r.a.createElement("br",null),r.a.createElement("select",{value:i,onChange:function(t){return e.handleSelectMother(t)},className:"new-person__parent",required:!0},r.a.createElement("option",{value:""},"Choose mother"),o&&m.filter(function(e){return"f"===e.sex&&e.died>=o&&e.born<=o-16}).map(function(e){return e.name}).map(function(e){return r.a.createElement("option",{value:e,key:e},e)})),r.a.createElement("select",{value:s,onChange:function(t){return e.handleSelectFather(t)},className:"new-person__parent",required:!0},r.a.createElement("option",{value:""},"Choose father"),o&&m.filter(function(e){return"m"===e.sex&&e.died>=o&&e.born<=o-16}).map(function(e){return e.name}).map(function(e){return r.a.createElement("option",{value:e,key:e},e)})),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"new-person__submit"},"Add Person"))}}]),t}(r.a.Component),S=[{name:"Carolus Haverbeke",sex:"m",born:1832,died:1905,father:"Carel Haverbeke",mother:"Maria van Brussel"},{name:"Emma de Milliano",sex:"f",born:1876,died:1956,father:"Petrus de Milliano",mother:"Sophia van Damme"},{name:"Maria de Rycke",sex:"f",born:1683,died:1724,father:"Frederik de Rycke",mother:"Laurentia van Vlaenderen"},{name:"Jan van Brussel",sex:"m",born:1714,died:1748,father:"Jacobus van Brussel",mother:"Joanna van Rooten"},{name:"Philibert Haverbeke",sex:"m",born:1907,died:1997,father:"Emile Haverbeke",mother:"Emma de Milliano"},{name:"Jan Frans van Brussel",sex:"m",born:1761,died:1833,father:"Jacobus Bernardus van Brussel",mother:null},{name:"Pauwels van Haverbeke",sex:"m",born:1535,died:1582,father:"N. van Haverbeke",mother:null},{name:"Clara Aernoudts",sex:"f",born:1918,died:2012,father:"Henry Aernoudts",mother:"Sidonie Coene"},{name:"Emile Haverbeke",sex:"m",born:1877,died:1968,father:"Carolus Haverbeke",mother:"Maria Sturm"},{name:"Lieven de Causmaecker",sex:"m",born:1696,died:1724,father:"Carel de Causmaecker",mother:"Joanna Claes"},{name:"Pieter Haverbeke",sex:"m",born:1602,died:1642,father:"Lieven van Haverbeke",mother:null},{name:"Livina Haverbeke",sex:"f",born:1692,died:1743,father:"Daniel Haverbeke",mother:"Joanna de Pape"},{name:"Pieter Bernard Haverbeke",sex:"m",born:1695,died:1762,father:"Willem Haverbeke",mother:"Petronella Wauters"},{name:"Lieven van Haverbeke",sex:"m",born:1570,died:1636,father:"Pauwels van Haverbeke",mother:"Lievijne Jans"},{name:"Joanna de Causmaecker",sex:"f",born:1762,died:1807,father:"Bernardus de Causmaecker",mother:null},{name:"Willem Haverbeke",sex:"m",born:1668,died:1731,father:"Lieven Haverbeke",mother:"Elisabeth Hercke"},{name:"Pieter Antone Haverbeke",sex:"m",born:1753,died:1798,father:"Jan Francies Haverbeke",mother:"Petronella de Decker"},{name:"Maria van Brussel",sex:"f",born:1801,died:1834,father:"Jan Frans van Brussel",mother:"Joanna de Causmaecker"},{name:"Angela Haverbeke",sex:"f",born:1728,died:1734,father:"Pieter Bernard Haverbeke",mother:"Livina de Vrieze"},{name:"Elisabeth Haverbeke",sex:"f",born:1711,died:1754,father:"Jan Haverbeke",mother:"Maria de Rycke"},{name:"Lievijne Jans",sex:"f",born:1542,died:1582,father:null,mother:null},{name:"Bernardus de Causmaecker",sex:"m",born:1721,died:1789,father:"Lieven de Causmaecker",mother:"Livina Haverbeke"},{name:"Jacoba Lammens",sex:"f",born:1699,died:1740,father:"Lieven Lammens",mother:"Livina de Vrieze"},{name:"Pieter de Decker",sex:"m",born:1705,died:1780,father:"Joos de Decker",mother:"Petronella van de Steene"},{name:"Joanna de Pape",sex:"f",born:1654,died:1723,father:"Vincent de Pape",mother:"Petronella Wauters"},{name:"Daniel Haverbeke",sex:"m",born:1652,died:1723,father:"Lieven Haverbeke",mother:"Elisabeth Hercke"},{name:"Lieven Haverbeke",sex:"m",born:1631,died:1676,father:"Pieter Haverbeke",mother:"Anna van Hecke"},{name:"Martina de Pape",sex:"f",born:1666,died:1727,father:"Vincent de Pape",mother:"Petronella Wauters"},{name:"Jan Francies Haverbeke",sex:"m",born:1725,died:1779,father:"Pieter Bernard Haverbeke",mother:"Livina de Vrieze"},{name:"Maria Haverbeke",sex:"m",born:1905,died:1997,father:"Emile Haverbeke",mother:"Emma de Milliano"},{name:"Petronella de Decker",sex:"f",born:1731,died:1781,father:"Pieter de Decker",mother:"Livina Haverbeke"},{name:"Livina Sierens",sex:"f",born:1761,died:1826,father:"Jan Sierens",mother:"Maria van Waes"},{name:"Laurentia Haverbeke",sex:"f",born:1710,died:1786,father:"Jan Haverbeke",mother:"Maria de Rycke"},{name:"Carel Haverbeke",sex:"m",born:1796,died:1837,father:"Pieter Antone Haverbeke",mother:"Livina Sierens"},{name:"Elisabeth Hercke",sex:"f",born:1632,died:1674,father:"Willem Hercke",mother:"Margriet de Brabander"},{name:"Jan Haverbeke",sex:"m",born:1671,died:1731,father:"Lieven Haverbeke",mother:"Elisabeth Hercke"},{name:"Anna van Hecke",sex:"f",born:1607,died:1670,father:"Paschasius van Hecke",mother:"Martijntken Beelaert"},{name:"Maria Sturm",sex:"f",born:1835,died:1917,father:"Charles Sturm",mother:"Seraphina Spelier"},{name:"Jacobus Bernardus van Brussel",sex:"m",born:1736,died:1809,father:"Jan van Brussel",mother:"Elisabeth Haverbeke"}],E=new Date,x=[],P=Math.min.apply(Math,Object(h.a)(S.filter(function(e){return"f"===e.sex}).map(function(e){return e.born}))),g=Math.min.apply(Math,Object(h.a)(S.filter(function(e){return"m"===e.sex}).map(function(e){return e.born}))),H=Math.max(P,g)+16;H<=E.getFullYear();H+=1)x.push(H);var C=function(e){return e.map(function(t,a){return Object(d.a)({},t,{children:e.filter(function(e){return e.father===t.name||e.mother===t.name}).map(function(e){return e.name}).join(", "),age:t.died-t.born,century:Math.ceil(t.died/100),id:a+1})})},y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={allPeople:C(S),currentSortingTitle:"",searchingItem:"",reversed:!1},a.addPerson=function(e,t,n,r,o,l){a.setState(function(a){return{allPeople:[].concat(Object(h.a)(a.allPeople),[{name:e,sex:t,born:n,died:r,mother:o,father:l,children:a.allPeople.filter(function(t){return t.father===e||t.mother===e}).map(function(e){return e.name}).join(", "),age:r===1/0?E.getFullYear()-n:r-n,century:r===1/0?Math.ceil(E.getFullYear()/100):Math.ceil(r/100),id:Math.max.apply(Math,Object(h.a)(Object(h.a)(a.allPeople).map(function(e){return e.id})))+1}])}})},a.updateChildren=function(){a.setState(function(e){return{allPeople:e.allPeople.map(function(t){return Object(d.a)({},t,{children:e.allPeople.filter(function(e){return e.father===t.name||e.mother===t.name}).map(function(e){return e.name}).join(", ")})})}})},a.updateSortedPeople=function(){a.setState(function(e){return{allPeople:e.reversed?a.getSortedPeople(e.allPeople,e.currentSortingTitle).reverse():a.getSortedPeople(e.allPeople,e.currentSortingTitle)}})},a.handleSearchingInputChange=function(e){var t=e.target.value;a.setState(function(e){return{searchingItem:t}})},a.getSearchedPeople=function(e,t){return e.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())||(e.father||"").toLowerCase().includes(t.toLowerCase())||(e.mother||"").toLowerCase().includes(t.toLowerCase())})},a.getSortedPeople=function(e,t){return e.sort(function(e,a){return"string"===typeof e[t]?e[t].localeCompare(a[t]):e[t]-a[t]})},a.setSortBy=function(e){a.setState(function(t){var n=t.allPeople,r=t.currentSortingTitle;return{allPeople:r===e?Object(h.a)(n).reverse():a.getSortedPeople(n,e),reversed:r===e,currentSortingTitle:e}})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.currentSortingTitle,a=e.searchingItem,n=e.allPeople,o=a?Object(h.a)(this.getSearchedPeople(n,a)):Object(h.a)(n);return r.a.createElement("div",{className:"people"},r.a.createElement(k,{addPerson:this.addPerson,updateChildren:this.updateChildren,updateSortedPeople:this.updateSortedPeople,peopleList:n,years:x}),r.a.createElement("input",{onChange:this.handleSearchingInputChange,className:"people__search",type:"text",placeholder:"Search"}),r.a.createElement(p,{people:o,setSortBy:this.setSortBy,sortingTitle:t}))}}]),t}(r.a.Component);l.a.render(r.a.createElement(y,{test:123}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.ba99677b.chunk.js.map