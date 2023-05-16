"use strict";(self.webpackChunkgenopipe=self.webpackChunkgenopipe||[]).push([[503],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6358:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={id:"structure",title:"",sidebar_label:"Structure (EpiDB)"},i=void 0,s={unversionedId:"EpitopeID/db/structure",id:"EpitopeID/db/structure",title:"",description:"Structure (EpiDB)",source:"@site/docs/EpitopeID/db/structure.md",sourceDirName:"EpitopeID/db",slug:"/EpitopeID/db/structure",permalink:"/GenoPipe-docs/docs/EpitopeID/db/structure",draft:!1,editUrl:"https://github.com/CEGRcode/GenoPipe-docs/docs/EpitopeID/db/structure.md",tags:[],version:"current",frontMatter:{id:"structure",title:"",sidebar_label:"Structure (EpiDB)"},sidebar:"epitopeSidebar",previous:{title:"Input Files (-i)",permalink:"/GenoPipe-docs/docs/EpitopeID/input"},next:{title:"Pregenerated database",permalink:"/GenoPipe-docs/docs/EpitopeID/db/pregenerated"}},l={},p=[{value:"Structure (EpiDB)",id:"structure-epidb",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"structure-epidb"},"Structure (EpiDB)"),(0,a.kt)("p",null,"Whether you use the provided reference files or create your own, the database should use the following directory structure to ensure that EpitopeID can find the correct reference files."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/name/of/epiDB\n|--FASTA_tag\n|  |--Tag_DB\n|  |  |--tagname1.fa\n|  |  |--tagname2.fa\n|  |  |--tagname3.fa\n|  |--ALL_TAG.fa\n|  |--ALL_TAG.fa.1.bt2       # EpitopeID will automatically generate these\n|  |--ALL_TAG.fa.2.bt2       # Bowtie2 index files if any are missing\n|  |--ALL_TAG.fa.3.bt2       #\n|  |--ALL_TAG.fa.4.bt2       #\n|  |--ALL_TAG.fa.rev.1.bt2   #\n|  |--ALL_TAG.fa.rev.2.bt2   #\n|--FASTA_genome\n|  |--genome.fa              # Not included, download separately\n|--annotation\n|  |--genome_annotation.gff.gz\n|--blacklist_filter\n|  |--blacklist.bed\n")),(0,a.kt)("p",null,"Below describes the files that EpitopeID looks for during execution and some information on the provided yeast and human defaults."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"FASTA_tag/ALL_TAG.fa")," is the FASTA formatted collection of all epitope sequences to search for. The ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/CEGRcode/GenoPipe/tree/master/EpitopeID/sacCer3_EpiID/FASTA_tag/Tag_DB"},"yeast tag database")," and the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/CEGRcode/GenoPipe/tree/master/EpitopeID/hg19_EpiID/FASTA_tag/Tag_DB"},"human tag database")," default epitopes are listed in the table above. It is easy to customize the list to add other epitopes if your epitope of interest is not included (see sections below)."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"FASTA_genome/genome.fa")," is the reference sequence used for the genomic alignments and the sequence that the below genome annotations are based on."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"annotation/genome_annotation.gff.gz")," file defines the bin coordinates to use when localizing the epitope insertion in PE datasets. The yeast default uses SGD gene annotation coordinates to defines one bin for the length of each gene, 250bp bins flanking each set of gene coordinates, and 250bp bins breaking up the remaining intergenic regions. The human default similarly bins out the genome using 1000bp windows on the NCBI Refseq annotations."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"blacklist_filter/blacklist.bed")," allows the user to ignore artefactual or unwanted alignments.")))}d.isMDXComponent=!0}}]);