(()=>{"use strict";var e={747:(e,t,n)=>{n.d(t,{Z:()=>d});var i=n(81),o=n.n(i),r=n(645),a=n.n(r)()(o());a.push([e.id,"/* Todo List stylesheet */\n\n* {\n    padding: 0;\n    margin: 0;\n    border: 1px solid blue;\n\n    list-style-type: none;\n}\n\n#content {\n    min-height: 100vh;\n    display: grid;\n\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: 1fr 19fr;\n}\n\ndiv #header {\n    grid-area: 1 / 1 / 2 / 3;\n}\n\ndiv #nav {\n    grid-area: 2 / 1 / 3 / 2;\n}\n\ndiv #main {\n    grid-area: 2 / 2 / 3 / 3;\n}\n\n.delete-task-btn, .edit-task-btn {\n    background: none;\n    border: none;\n    outline: none;\n    width: 1.3rem;\n    align-self: center;\n    position: relative;\n    top: 0.2rem;\n}\n\n.modal {\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.4)\n}\n\n.modal-content {\n    background-color: white;\n    margin: 15% auto;\n    padding: 10px;\n    border: 1px solid black;\n    width: 80%;\n}\n\n.modal-content textarea {\n    height: 2rem;\n    width: 100%;\n}\n\n#add-task-form-close-btn {\n    float: right;\n}",""]);const d=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(a[s]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);i&&a[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var r={},a=[],d=0;d<e.length;d++){var s=e[d],c=i.base?s[0]+i.base:s[0],l=r[c]||0,u="".concat(c," ").concat(l);r[c]=l+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,i);i.byIndex=d,t.splice(d,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var r=i(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var d=n(r[a]);t[d].references--}for(var s=i(e,o),c=0;c<r.length;c++){var l=n(r[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}r=s}}},569:e=>{var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,o&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={id:i,exports:{}};return e[i](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var o=i.length-1;o>-1&&!e;)e=i[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),i=n(795),o=n.n(i),r=n(569),a=n.n(r),d=n(565),s=n.n(d),c=n(216),l=n.n(c),u=n(589),p=n.n(u),m=n(747),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var h=new class{constructor(e,t){this.title=e,this.description=t,this.tasksList=[]}addTask(e){this.tasksList.push(e)}getTasks(){return this.tasksList}removeTask(e){const t=this.tasksList.indexOf(e);this.tasksList=this.tasksList.splice(t,1)}}("Default","");const k=[];k.push(h);class v{constructor(e,t,n,i,o,r,a){this.title=e,this.description=t,this.dueDate=n,this.priority=i,this.notes=o,this.checked=r}}const E=new v("My Birthday Party","Throw a birthday party for yourself","2023-10-25T00:00","High","","false"),g=new v("Mom's Birthday Party","Throw a birthday party for Mom","2023-10-01T00:00","High","","true");function y(){const e=document.getElementById("task-title").value,t=document.getElementById("task-description").value,n=document.getElementById("task-due-date").value,i=document.getElementById("task-priority").value,o=document.getElementById("task-notes").value;h.addTask(new v(e,t,n,i,o,"false"))}h.addTask(E),h.addTask(g);const b=n.p+"c846b91bc57c7f0f2387.svg",x=n.p+"bcf8d6ff346603c8a51a.svg",T=function(){const e=document.getElementById("nav");function t(){const e=document.getElementById("projects-list");k.forEach((t=>{const n=document.createElement("li");n.innerText=t.title,e.appendChild(n)}))}return{renderNav:function(){!function(){const t=document.createElement("div"),n=document.createElement("button");n.type="button",n.innerText="Inbox",t.appendChild(n),e.appendChild(t)}(),function(){const t=document.createElement("div"),n=document.createElement("button");n.type="button",n.innerText="Today",t.appendChild(n),e.appendChild(t)}(),function(){const t=document.createElement("div"),n=document.createElement("button");n.type="button",n.innerText="This Week",t.appendChild(n),e.appendChild(t)}(),function(){const n=document.createElement("div");n.id="projects-wrapper",n.innerText="Projects";const i=document.createElement("ul");i.id="projects-list",n.appendChild(i),e.appendChild(n),t()}()},updateNavProjects:function(){const e=document.getElementById("projects-list");for(;e.firstChild;)e.removeChild(e.firstChild);t()}}}(),C=function(e){if(e.target.children[3])e.target.removeChild(document.getElementById(`task-${e.target.id}-details-list`));else{const t=document.createElement("ul");t.id=`task-${e.target.id}-details-list`,t.addEventListener("click",(function(e){e.stopPropagation()}));const n=document.createElement("li");n.innerText=`Description:\n${h.tasksList[e.target.id].description}`,t.appendChild(n);const i=document.createElement("li");i.innerText=`Due date:\n${h.tasksList[e.target.id].dueDate}`,t.appendChild(i);const o=document.createElement("li");o.innerText=`Priority:\n${h.tasksList[e.target.id].priority}`,t.appendChild(o);const r=document.createElement("li");r.innerText=`Notes:\n${h.tasksList[e.target.id].notes}`,t.appendChild(r),e.target.appendChild(t)}},L=function(e){const t=h.tasksList[e.target.parentElement.parentElement.id];window.confirm(`Delete ${t.title} task?`)&&function(e){const t=h.tasksList.indexOf(e);console.log(t),h.tasksList.splice(t,1),console.log(h.tasksList),I.updateInboxTasks()}(t)},I=function(){const e=document.getElementById("main-content");function t(e){h.tasksList.forEach((t=>{const n=document.createElement("li");n.innerText=t.title,n.id=h.tasksList.indexOf(t);const i=document.createElement("input");i.type="checkbox","true"==t.checked&&(i.checked="checked"),n.appendChild(i);const o=document.createElement("button");o.type="button",o.classList.add("edit-task-btn");const r=document.createElement("img");r.src=b,o.appendChild(r),o.addEventListener("click",(function(e){e.stopPropagation()})),o.addEventListener("click",w.renderEditTaskForm),n.appendChild(o);const a=document.createElement("button");a.type="button",a.classList.add("delete-task-btn");const d=document.createElement("img");d.src=x,a.appendChild(d),a.addEventListener("click",(function(e){e.stopPropagation()})),a.addEventListener("click",L),a.appendChild(d),n.appendChild(a),e.appendChild(n),n.addEventListener("click",C)}))}return{renderInbox:function(){const n=document.createElement("h3");n.innerText="Inbox",e.appendChild(n);const i=document.createElement("button");i.type="button",i.id="inbox-add-task-btn",i.innerText="Add a task",i.addEventListener("click",w.renderAddTaskForm),e.appendChild(i);const o=document.createElement("ul");o.id="inbox-tasks-list",t(o),e.appendChild(o)},updateInboxTasks:function(){const e=document.getElementById("inbox-tasks-list");for(;e.firstChild;)e.removeChild(e.firstChild);t(e)}}}(),w=function(){function e(e,n,i,o,r){const a=document.createElement("div");a.id="task-form-wrapper",a.classList.add("modal");const d=document.createElement("div");d.id="task-form",d.classList.add("modal-content");const s=document.createElement("span");s.innerHTML="&times;",s.id="task-form-close-btn",d.append(s);const c=document.createElement("p");c.innerText=e,d.append(c);const l=document.createElement("label");l.setAttribute("for","task-title"),l.innerText="Title: ",d.append(l);const u=document.createElement("input");u.type="text",u.id="task-title",u.name="task-title",u.required="true",u.value=n,d.append(u),d.append(document.createElement("br"));const p=document.createElement("label");p.setAttribute("for","task-description"),p.innerText="Description (optional): ",d.append(p);const m=document.createElement("textarea");m.id="task-description",m.name="task-description",m.value=i,m.setAttribute("rows",3),m.setAttribute("cols","50"),d.append(m),d.append(document.createElement("br"));const f=document.createElement("label");f.setAttribute("for","task-due-date"),f.for="task-due-date",f.innerText="Due date: ",d.append(f);const h=document.createElement("input");h.type="datetime-local",h.id="task-due-date",h.name="task-due-date",h.value=o,h.required="true",d.append(h),d.append(document.createElement("br"));const k=document.createElement("label");k.setAttribute("for","task-priority"),k.innerText="Priority: ",d.append(k);const v=document.createElement("select");v.id="task-priority",v.name="task-priority";const E=document.createElement("option");E.value="Normal",E.innerText="Normal",E.id="task-priority-normal",v.appendChild(E);const g=document.createElement("option");g.value="Medium",g.innerText="Medium",g.id="task-priority-medium",v.appendChild(g);const y=document.createElement("option");y.value="High",y.innerText="High",y.id="task-priority-high",v.appendChild(y),d.append(v),d.append(document.createElement("br"));const b=document.createElement("label");b.setAttribute("for","task-notes"),b.innerText="Notes (optional): ",d.append(b);const x=document.createElement("textarea");x.id="task-notes",x.name="task-notes",x.value=r,x.setAttribute("rows","3"),x.setAttribute("cols","50"),d.append(x);const T=document.createElement("button");T.type="button",T.id="task-submit-btn",T.innerText="Submit",d.append(T);const C=document.createElement("button");C.type="button",C.id="new-task-cancel-btn",C.innerText="Cancel",d.append(C),s.onclick=t,C.onclick=t,a.appendChild(d),document.getElementById("main-content").append(a),window.onclick=function(e){e.target==a&&t()}}function t(){document.getElementById("task-form-wrapper").remove()}return{renderAddTaskForm:function(){e("Add a task","","","",""),document.getElementById("task-priority-normal").selected="true";const n=document.getElementById("task-submit-btn");n.addEventListener("click",y),n.addEventListener("click",I.updateInboxTasks),n.addEventListener("click",t)},renderEditTaskForm:function(n){const i=h.tasksList[n.target.parentElement.parentElement.id];switch(e("Edit task",i.title,i.description,i.dueDate,i.notes),i.priority){case"Normal":document.getElementById("task-priority-normal").selected="true";break;case"Medium":document.getElementById("task-priority-medium").selected="true";break;case"High":console.log("high"),document.getElementById("task-priority-high").selected="true"}const o=document.getElementById("task-submit-btn");o.addEventListener("click",(function(e){!function(e){const t=h.tasksList.indexOf(e),n=document.getElementById("task-title").value,i=document.getElementById("task-description").value,o=document.getElementById("task-due-date").value,r=document.getElementById("task-priority").value,a=document.getElementById("task-notes").value;h.tasksList[t].title=n,h.tasksList[t].description=i,h.tasksList[t].dueDate=o,h.tasksList[t].priority=r,h.tasksList[t].notes=a}(i)})),o.addEventListener("click",I.updateInboxTasks),o.addEventListener("click",t)}}}(),B=(document.getElementById("main-content"),I.renderInbox(),function(){document.getElementById("content");const e=document.getElementById("header");(function(){const t=document.createElement("div");t.id="header-wrapper",e.appendChild(t);const n=document.createElement("h3");n.innerText="Todo List",t.appendChild(n)})(),T.renderNav()}(),document.createElement("button"));B.type="button",B.innerText="Update Nav Projects",nav.appendChild(B),B.addEventListener("click",T.updateNavTasks)})()})();