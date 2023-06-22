"use strict";(self.webpackChunkgenopipe=self.webpackChunkgenopipe||[]).push([[692],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function p(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?p(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)o=p[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)o=p[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,p=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(o),h=n,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||p;return o?r.createElement(m,a(a({ref:t},u),{},{components:o})):r.createElement(m,a({ref:t},u))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=o.length,a=new Array(p);a[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,a[1]=i;for(var l=2;l<p;l++)a[l]=o[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},7271:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>p,metadata:()=>i,toc:()=>l});var r=o(7462),n=(o(7294),o(3905));const p={id:"output",title:"",sidebar_label:"Output Files (-o)"},a=void 0,i={unversionedId:"EpitopeID/output",id:"EpitopeID/output",title:"",description:"Output Report (-o)",source:"@site/docs/EpitopeID/output.md",sourceDirName:"EpitopeID",slug:"/EpitopeID/output",permalink:"/GenoPipe-docs/docs/EpitopeID/output",draft:!1,tags:[],version:"current",lastUpdatedBy:"owlang",lastUpdatedAt:1684075333,formattedLastUpdatedAt:"May 14, 2023",frontMatter:{id:"output",title:"",sidebar_label:"Output Files (-o)"},sidebar:"epitopeSidebar",previous:{title:"Customizing your database",permalink:"/GenoPipe-docs/docs/EpitopeID/db/custom-db"},next:{title:"Threading (-t)",permalink:"/GenoPipe-docs/docs/EpitopeID/performance"}},s={},l=[{value:"Output Report (<code>-o</code>)",id:"output-report--o",level:2},{value:"Example 1",id:"example-1",level:3}],u={toc:l},c="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"output-report--o"},"Output Report (",(0,n.kt)("inlineCode",{parentName:"h2"},"-o"),")"),(0,n.kt)("p",null,"The output report is saved to the user-provided output directory in a file named based on the input FASTQ files (",(0,n.kt)("inlineCode",{parentName:"p"},"/path/to/output/XXXXX_R1-ID.tab"),")."),(0,n.kt)("h3",{id:"example-1"},"Example 1"),(0,n.kt)("p",null,"Below is a sample report based on the results from running EpitopeID on the ",(0,n.kt)("a",{parentName:"p",href:"https://www.encodeproject.org/files/ENCFF415CJF/"},"ENCFF415CJF")," sample from ENCODE."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"EpitopeID   EpitopeCount\nLAP-tag 435\n\nGeneID  EpitopeID   EpitopeLocation EpitopeCount    pVal\nNR4A1|chr12:52416616-52453291   LAP-tag C-term  9   3.580493355965414e-24\n")),(0,n.kt)("p",null,"The first part of the report shows which epitopes in ",(0,n.kt)("inlineCode",{parentName:"p"},"Tag_DB")," were identified in the sample (",(0,n.kt)("strong",{parentName:"p"},"EpitopeID column"),") and how many reads mapped to this epitope (",(0,n.kt)("strong",{parentName:"p"},"EpitopeCount"),") to help quantify the coverage of the epitopes which relates to the confidence of the call."),(0,n.kt)("p",null,"The second part of the report shows which epitopes localized to which regions/tiles of the genome significantly (sorted by pvalue if multiple hits). The columns specify the coordinate interval (",(0,n.kt)("strong",{parentName:"p"},"GeneID"),"), which epitope maps to this locus (",(0,n.kt)("strong",{parentName:"p"},"EpitopeID"),"), if this occurs on the N or C-terminus (",(0,n.kt)("strong",{parentName:"p"},"EpitopeLocation"),"), the number of reads mapping to this tile (",(0,n.kt)("strong",{parentName:"p"},"EpitopeCount"),"), and the poisson-calculated associated p-value to indicate confidence of the site (",(0,n.kt)("strong",{parentName:"p"},"pVal"),")."),(0,n.kt)("p",null,'In this report there were 435 reads that mapped to the LAP-tag epitope. The high read count supports "the epitope was successfully integrated into the sample.""'),(0,n.kt)("p",null,"In this report there were 9 read pairs that spanned both the LAP-tag and the NR4A1 gene(at genomic locus chr12:52416616-52453291) toward the sequence encoding the C-terminus. This entry supports that the LAP-tag epitope was integrated at the C-terminus of NF4A1."))}d.isMDXComponent=!0}}]);