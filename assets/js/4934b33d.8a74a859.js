"use strict";(self.webpackChunkgenopipe=self.webpackChunkgenopipe||[]).push([[529],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5490:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={id:"custom-db",title:"",sidebar_label:"Customizing your database"},i="Customizing your VCFs",l={unversionedId:"StrainID/db/custom-db",id:"StrainID/db/custom-db",title:"",description:"Adding strains is straightforward. Simply add a file in standard Variant Call Format to the /name/of/strain/vcf/db/ directory.",source:"@site/docs/StrainID/db/custom-db.md",sourceDirName:"StrainID/db",slug:"/StrainID/db/custom-db",permalink:"/GenoPipe-docs/docs/StrainID/db/custom-db",draft:!1,tags:[],version:"current",lastUpdatedBy:"owlang",lastUpdatedAt:1684252962,formattedLastUpdatedAt:"May 16, 2023",frontMatter:{id:"custom-db",title:"",sidebar_label:"Customizing your database"},sidebar:"strainSidebar",previous:{title:"Pregenerated databases",permalink:"/GenoPipe-docs/docs/StrainID/db/pregenerated"},next:{title:"Output Files (-o)",permalink:"/GenoPipe-docs/docs/StrainID/output"}},s={},d=[{value:"Formatting",id:"formatting",level:2},{value:"Custom DepMap set (hg38)",id:"custom-depmap-set-hg38",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"customizing-your-vcfs"},"Customizing your VCFs"),(0,a.kt)("p",null,"Adding strains is straightforward. Simply add a file in standard ",(0,a.kt)("a",{parentName:"p",href:"https://genome.ucsc.edu/goldenPath/help/vcf.html"},"Variant Call Format")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/name/of/strain/vcf/db/")," directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/name/of/strain/vcf/db\n|--strain1.vcf\n|--strain2.vcf\n|--strain3.vcf\n|--strain4.vcf\n")),(0,a.kt)("h2",{id:"formatting"},"Formatting"),(0,a.kt)("p",null,'Make sure that at minimum, you include a header with VCF version and "contig" or chromosome info at the top. For examples, see the pregenerated ',(0,a.kt)("strong",{parentName:"p"},"hg19_VCF")," reference VCFs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"##fileformat=VCFv4.2\n##contig=<ID=chr1,length=249250621>\n##contig=<ID=chr2,length=243199373>\n##contig=<ID=chr3,length=198022430>\n##contig=<ID=chr4,length=191154276>\n...\n##contig=<ID=chrM,length=16571>\n##contig=<ID=chrUn_gl000226,length=15008>\n##contig=<ID=chr18_gl000207_random,length=4262>\n#CHROM  POS ID  REF ALT QUAL    FILTER  INFO\nchr6    117715410   .   C   A   0   PASS    .\nchr8    27690580    .   C   G   0   PASS    .\nchr11   66616566    .   G   A   0   PASS    .\nchr11   125875659   .   G   C   0   PASS    .\n...\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Genome build is important to note here. Make sure your VCF file is based on the same genome build as your BAM file and that the contig/chr names match the VCF headers.")),(0,a.kt)("h2",{id:"custom-depmap-set-hg38"},"Custom DepMap set (hg38)"),(0,a.kt)("p",null,"If you are interested in several human cell line not available in the pregenerated sets, consider using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/StrainID/db/pregenerated#hg38_depmap"},"provided scripts")," to download and formats the variants in DepMap for all cell lines in ",(0,a.kt)("inlineCode",{parentName:"p"},"Model.csv"),". To avoid downloading the full set, you could update Model.csv to only contain the rows you are interested in. Note that Model.csv was last pulled on May 14, 2023 and new cell lines may have been added to DepMap since. ",(0,a.kt)("a",{parentName:"p",href:"https://depmap.org/portal/download/all/?releasename=DepMap+Public+23Q2&filename=Model.csv"},"Redownload ",(0,a.kt)("inlineCode",{parentName:"a"},"Model.csv")," to get the latest"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"While ",(0,a.kt)("inlineCode",{parentName:"p"},"Model.csv")," might be out of date as a list of cell lines, the variants pulled are the most recent at the time of the script's execution. Only update ",(0,a.kt)("inlineCode",{parentName:"p"},"Model.csv")," if there is a newly added cell line that is missing. To update variants, simply re-execute the script.")))}u.isMDXComponent=!0}}]);