"use strict";(self.webpackChunkgenopipe=self.webpackChunkgenopipe||[]).push([[172],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=l(a),g=r,u=m["".concat(p,".").concat(g)]||m[g]||s[g]||o;return a?n.createElement(u,i(i({ref:t},c),{},{components:a})):n.createElement(u,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=g;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[m]="string"==typeof e?e:r,i[1]=d;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},8205:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const o={id:"pregenerated",title:"",sidebar_label:"Pregenerated databases"},i=void 0,d={unversionedId:"EpitopeID/db/pregenerated",id:"EpitopeID/db/pregenerated",title:"",description:"Pregenerated databases",source:"@site/docs/EpitopeID/db/pregenerated.md",sourceDirName:"EpitopeID/db",slug:"/EpitopeID/db/pregenerated",permalink:"/GenoPipe-docs/docs/EpitopeID/db/pregenerated",draft:!1,tags:[],version:"current",lastUpdatedBy:"owlang",lastUpdatedAt:1689796021,formattedLastUpdatedAt:"Jul 19, 2023",frontMatter:{id:"pregenerated",title:"",sidebar_label:"Pregenerated databases"},sidebar:"epitopeSidebar",previous:{title:"Reference Database (-d)",permalink:"/GenoPipe-docs/docs/EpitopeID/db/structure"},next:{title:"Customizing your database",permalink:"/GenoPipe-docs/docs/EpitopeID/db/custom-db"}},p={},l=[{value:"Pregenerated databases",id:"pregenerated-databases",level:2},{value:"sacCer3_EpiID",id:"saccer3_epiid",level:3},{value:"hg19_EpiID",id:"hg19_epiid",level:3},{value:"hg19_EpiID_v2",id:"hg19_epiid_v2",level:3},{value:"Downloading genome reference",id:"downloading-genome-reference",level:2},{value:"Downloading yeast <code>genome.fa</code>",id:"downloading-yeast-genomefa",level:3},{value:"Downloading human <code>genome.fa</code>",id:"downloading-human-genomefa",level:3}],c={toc:l},m="wrapper";function s(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"pregenerated-databases"},"Pregenerated databases"),(0,r.kt)("p",null,'For EpitopeID, this is the "database" or directory with four types of reference files used by ',(0,r.kt)("inlineCode",{parentName:"p"},"identify-Epitope.sh"),". You will notice that EpitopeID provides reference files for both yeast (",(0,r.kt)("inlineCode",{parentName:"p"},"sacCer3_EpiID"),") and human (",(0,r.kt)("inlineCode",{parentName:"p"},"hg19_EpiID"),") so you can quickly get started without building up the database from scratch. However, you are free to customize and build your own set of files (e.g. add different epitope tags to check for, use a different genome build)."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The provided database files are missing the genomic reference file for storage reasons. You will need to follow the directions below to download ",(0,r.kt)("inlineCode",{parentName:"p"},"genome.fa")," before running EpitopeID if you are planning to use the provided defaults.")),(0,r.kt)("h3",{id:"saccer3_epiid"},"sacCer3_EpiID"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Epitope"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"AID"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"CBP"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Extended-Tap"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Used by Rossi et al. (2021)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"FLAG-3x"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"FRB"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"GFP"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"HA_v1"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"HA_v2"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"HA_v3"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"HaloTag"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"MNase_v2"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Myc-3x"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ProteinA"),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("h3",{id:"hg19_epiid"},"hg19_EpiID"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Epitope"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"LAP-tag"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Communication with Dr. Kevin White",(0,r.kt)("br",null),"(UChicago, ENCODE)")))),(0,r.kt)("h3",{id:"hg19_epiid_v2"},"hg19_EpiID_v2"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Epitope"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"LAP-tag"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Communication with Dr. Kevin White",(0,r.kt)("br",null),"(UChicago, ENCODE)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"FKBP12-V"),(0,r.kt)("td",{parentName:"tr",align:"center"},"dTAG from Nabet et al (2018)",(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"https://www.addgene.org/browse/sequence/197293/"},"AddGene-91797"),", start to stop codon")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"3xFLAG"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Communication with the lab of Dr. Richard Myers",(0,r.kt)("br",null),"(Hudson Alpha, ENCODE)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"HaloTag"),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("h2",{id:"downloading-genome-reference"},"Downloading genome reference"),(0,r.kt)("p",null,"If you already have the genome, you may use that. The scripts below are provided for convenience. Just note the chromosomes use in the annotations for the blacklist files match with your genome build if you opt to use your own."),(0,r.kt)("h3",{id:"downloading-yeast-genomefa"},"Downloading yeast ",(0,r.kt)("inlineCode",{parentName:"h3"},"genome.fa")),(0,r.kt)("p",null,'Use the utility scripts by following the commands below to download the sacCer3 genome and format the chromosome names. The reference files are based on the arabic numeral chromosome naming system (i.e. "chr1", "chr2",..."chr16","chrM","2-micron").'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd /path/to/GenoPipe/EpitopeID/utility_scripts/genome_data\nbash download_sacCer3_Genome.sh\nmv genome.fa /path/to/sacCer3_EpiID/FASTA_genome/\n")),(0,r.kt)("h3",{id:"downloading-human-genomefa"},"Downloading human ",(0,r.kt)("inlineCode",{parentName:"h3"},"genome.fa")),(0,r.kt)("p",null,"Use the utility scripts by following the commands below to download the hg19 genome and move it to the appropriate directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd /path/to/GenoPipe/EpitopeID/utility_scripts/genome_data\nbash download_hg19_Genome.sh\nmv genome.fa /path/to/hg19_EpiID/FASTA_genome/genome.fa\n")))}s.isMDXComponent=!0}}]);