(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),i=(n(0),n(92)),r={id:"ocpeasy-config",title:"OCPeasy configuration",sidebar_label:"Configuration",slug:"/ocpeasy-config"},c={unversionedId:"ocpeasy-config",id:"ocpeasy-config",isDocsHomePage:!1,title:"OCPeasy configuration",description:"ocpeasy.yml config",source:"@site/docs/ocpeasyConfig.md",slug:"/ocpeasy-config",permalink:"website/docs/ocpeasy-config",editUrl:"https://github.com/ocpeasy/ocpeasy-website/edit/master/docs/ocpeasyConfig.md",version:"current",sidebar_label:"Configuration",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"website/docs/"},next:{title:"Introduction",permalink:"website/docs/template/introduction"}},l=[{value:"<code>ocpeasy.yml</code> config",id:"ocpeasyyml-config",children:[{value:"Sample configuration",id:"sample-configuration",children:[]}]},{value:"<code>.ocpeasy</code> folder",id:"ocpeasy-folder",children:[]}],p={toc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"ocpeasyyml-config"},Object(i.b)("inlineCode",{parentName:"h2"},"ocpeasy.yml")," config"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},Object(i.b)("inlineCode",{parentName:"p"},"ocpeasy.yml")," is a configuration file generated during scaffolding process with parameters relative to your project (documented in detail below)."))),Object(i.b)("h3",{id:"sample-configuration"},"Sample configuration"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"gitCredentialsId: gogs-repo-pw\ngitRepository: https://www.github.com/user/repo.git\nhttpProxy: http://proxy.acme.corp.net:1234\nhttpsProxy: https://proxy.acme.corp.net:5678\nprojectName: ocpeasy-flask\nstages:\n- containerId: flaskdev\n  containerRoute: flaskdev-odev.ocpcluster.net\n  dockerfile: ./Dockerfile\n  modules: []\n  ocpProject: odev\n  podReplicas: '2'\n  stageId: dev\ntemplateMeta:\n  frameworkId: python-flask\n  profile: defaultApp\n  strategy: openshift_3_4\n  technology: python3.8\n  templateUri: https://github.com/ocpeasy/ocpeasy-template-python-flask.git\n  version: master\n")),Object(i.b)("h4",{id:"gitcredentialsid"},"gitCredentialsId"),Object(i.b)("p",null,"Secret used to retrieve the source code of your project from OpenShift"),Object(i.b)("h4",{id:"gitrepository"},"gitRepository"),Object(i.b)("p",null,"Repository URI, where your source code will live"),Object(i.b)("h4",{id:"httpproxy"},"httpProxy"),Object(i.b)("p",null,"http proxy configuration (optional), to retrieve OCPeasy strategies behind a corporate proxy for instance. ",Object(i.b)("inlineCode",{parentName:"p"},"http")," proxy gateway configuration."),Object(i.b)("h4",{id:"httpsproxy"},"httpsProxy"),Object(i.b)("p",null,"https proxy configuration (optional), to retrieve OCPeasy strategies behind a corporate proxy for instance. ",Object(i.b)("inlineCode",{parentName:"p"},"https")," proxy gateway configuration."),Object(i.b)("h4",{id:"projectname"},"projectName"),Object(i.b)("p",null,"Folder name of your project."),Object(i.b)("h4",{id:"stages"},"stages"),Object(i.b)("p",null,"Contains configuration stages for the deployment of your projects."),Object(i.b)("h4",{id:"templatemeta"},"templateMeta"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"These parameters are generated during project scaffolding step and aren't supposed to be updated."))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"frameworkId"),":",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"template id being used"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"profile"),":",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"describes application profile and will generate respective"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"strategyId"),":",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"openshift version"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"technology"),":",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"technology used for the application"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"templateUri"),":",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"uri of template used to scaffold the application folder"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"version"),":",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"branch/version of the template")))),Object(i.b)("h2",{id:"ocpeasy-folder"},Object(i.b)("inlineCode",{parentName:"h2"},".ocpeasy")," folder"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},".ocpeasy")," folder will contain the stages definitions, yaml files generated during the deployment process."),Object(i.b)("p",null,"These folders will look like something below  (non-exhaustive list):"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"build config for ",Object(i.b)("inlineCode",{parentName:"li"},"STAGEID")," : ",Object(i.b)("inlineCode",{parentName:"li"},".ocpeasy/<STAGEID>/bc.yaml")),Object(i.b)("li",{parentName:"ul"},"deployment config for ",Object(i.b)("inlineCode",{parentName:"li"},"STAGEID")," : ",Object(i.b)("inlineCode",{parentName:"li"},".ocpeasy/<STAGEID>/dc.yaml")),Object(i.b)("li",{parentName:"ul"},"image config for ",Object(i.b)("inlineCode",{parentName:"li"},"STAGEID")," : ",Object(i.b)("inlineCode",{parentName:"li"},".ocpeasy/<STAGEID>/img.yaml")),Object(i.b)("li",{parentName:"ul"},"service config for ",Object(i.b)("inlineCode",{parentName:"li"},"STAGEID")," : ",Object(i.b)("inlineCode",{parentName:"li"},".ocpeasy/<STAGEID>/svc.yaml"))))}b.isMDXComponent=!0},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),b=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),m=a,u=s["".concat(r,".").concat(m)]||s[m]||d[m]||i;return n?o.a.createElement(u,c(c({ref:t},p),{},{components:n})):o.a.createElement(u,c({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var p=2;p<i;p++)r[p]=n[p];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);