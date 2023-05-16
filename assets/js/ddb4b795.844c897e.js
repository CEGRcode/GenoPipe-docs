"use strict";(self.webpackChunkgenopipe=self.webpackChunkgenopipe||[]).push([[809],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||i;return n?o.createElement(d,r(r({ref:t},c),{},{components:n})):o.createElement(d,r({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7536:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const i={id:"custom-db",title:"",sidebar_label:"Customizing your database"},r=void 0,l={unversionedId:"EpitopeID/db/custom-db",id:"EpitopeID/db/custom-db",title:"",description:"Customizing epitopes",source:"@site/docs/EpitopeID/db/custom-db.md",sourceDirName:"EpitopeID/db",slug:"/EpitopeID/db/custom-db",permalink:"/GenoPipe-docs/docs/EpitopeID/db/custom-db",draft:!1,editUrl:"https://github.com/CEGRcode/GenoPipe-docs/docs/EpitopeID/db/custom-db.md",tags:[],version:"current",frontMatter:{id:"custom-db",title:"",sidebar_label:"Customizing your database"},sidebar:"epitopeSidebar",previous:{title:"Pregenerated database",permalink:"/GenoPipe-docs/docs/EpitopeID/db/pregenerated"},next:{title:"Output Files (-o)",permalink:"/GenoPipe-docs/docs/EpitopeID/output"}},s={},p=[{value:"Customizing epitopes",id:"customizing-epitopes",level:2},{value:"Customizing annotations",id:"customizing-annotations",level:2},{value:"Make <code>genome_annotation.gff.gz</code> with a different bin size",id:"make-genome_annotationgffgz-with-a-different-bin-size",level:4},{value:"Make <code>genome_annotation.gff.gz</code> with custom annotations",id:"make-genome_annotationgffgz-with-custom-annotations",level:4},{value:"Customizing filter",id:"customizing-filter",level:2}],c={toc:p},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"customizing-epitopes"},"Customizing epitopes"),(0,a.kt)("p",null,"If you choose to add or remove epitope tags to your database, you must add/remove the files with the sequences in FASTA format to/from ",(0,a.kt)("inlineCode",{parentName:"p"},"FASTA_tag/TagDB")," and recreate the ",(0,a.kt)("inlineCode",{parentName:"p"},"FASTA_tag/ALL_TAG.fa")," file so it includes the tag sequences you want. The following commands show you how to copy ",(0,a.kt)("inlineCode",{parentName:"p"},"my-custom-tag.fa")," into the database and remake the file using the provided scripts."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Copy or remove the FASTA files with your tag sequences into the Tag_DB directory\ncp my-custom-tag.fa /path/to/Tag_DB\ncd /name/of/epiDB/FASTA_tag/Tag_DB\nbash /path/to/GenoPipe/EpitopeID/utility_scripts/update_TagDB.sh\nmv ALL_TAG.fa* /path/to/hg19_EpiID/FASTA_tag/\n")),(0,a.kt)("h2",{id:"customizing-annotations"},"Customizing annotations"),(0,a.kt)("p",null,"GenoPipe provides the utility scripts for recreating the precomputed reference annotation files. The scripts download (yeast and human) annotations and for format gene annotation files to the EpitopeID format by tiling the genome around and including gene intervals."),(0,a.kt)("p",null,"The precomputed files should work for most (yeast and human) use cases but if you need to compute these reference files yourself, use the available ",(0,a.kt)("inlineCode",{parentName:"p"},"utility_scripts")," as follows:"),(0,a.kt)("h4",{id:"make-genome_annotationgffgz-with-a-different-bin-size"},"Make ",(0,a.kt)("inlineCode",{parentName:"h4"},"genome_annotation.gff.gz")," with a different bin size"),(0,a.kt)("p",null,"If you wish to change the bin size of the tiles from the reference files GenoPipe already provides, you can rerun our scripts with a different value in the ",(0,a.kt)("inlineCode",{parentName:"p"},"-b")," flag. The following are the specific commands you can execute to do so."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# sacCer3\ncd /path/to/GenoPipe/EpitopeID/utility_scripts/annotation_data\nbash generate_sacCer3_GenomeAnnotation.sh -g /path/to/genome/sacCer3.fa -b <BIN_SIZE>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# hg19\ncd /path/to/GenoPipe/EpitopeID/utility_scripts/annotation_data\nbash generate_hg19_GenomeAnnotation.sh -g /path/to/genome/hg19.fa -b <BIN_SIZE>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# hg38\ncd /path/to/GenoPipe/EpitopeID/utility_scripts/annotation_data\nbash generate_hg38_GenomeAnnotation.sh -g /path/to/genome/hg38.fa -b <BIN_SIZE>\n")),(0,a.kt)("h4",{id:"make-genome_annotationgffgz-with-custom-annotations"},"Make ",(0,a.kt)("inlineCode",{parentName:"h4"},"genome_annotation.gff.gz")," with custom annotations"),(0,a.kt)("p",null,"There may be a few reasons to create a custom annotation reference set:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Working with non-yeast and non-human data"),(0,a.kt)("li",{parentName:"ul"},"Inserted sequence localized to non-ORF genomic location (e.g. insertions in enhancer region)"),(0,a.kt)("li",{parentName:"ul"},"Inserted sequence/epitope localized to ORF not included in precomputed annotations (rare, for genes not included in official set at the time we created the precomputed files)")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"EpitopeID actually can still detect and localize insertions from non-ORF regions but the report will only include the nearest ORF or genomic tile and may be more difficult to read/interpret. Creating a customized annotation reference file would improve clarity in the output report but is not ",(0,a.kt)("em",{parentName:"p"},"necessary"),".")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a custom ",(0,a.kt)("inlineCode",{parentName:"li"},".gff")," file including the feature with the expected localization.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It may be a good idea to include other potential off-target annotations for better readability of the report. Otherwise off-target localizations will be reported with only the genomic coordinate information."),(0,a.kt)("li",{parentName:"ul"},"If you are working with a custom genome build, you will need the gene annotations in ",(0,a.kt)("inlineCode",{parentName:"li"},".gff")," format for the genome build. ","[Ensembl][ensembl-ftp]"," and ","[UCSC][ucsc-download]"," can be good resources for finding gene annotations associated with official genome builds across a variety of organisms. Please make sure they are in ",(0,a.kt)("inlineCode",{parentName:"li"},".gff")," file format for compatibility with the utility scripts.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Example .gff entry like an enhancer or something\n# myunicorn_annotations.gff\n\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Execute the following commands to tile the genome and merge the annotations with the tiled regions.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"MYGFF=/path/to/myunicorn_annotations.gff\nGENOME=/path/to/genome/unicorn1.fa\n# Choose a bin size (consider size of genome)\nBIN=250\n\n# Add flanking sequence to\nperl parsers/parse_Generic_GFF.pl $MYGFF $BIN temp.gff\n# Tile genome\nperl genome_bin/bin_genome.pl $GENOME $BIN unicorn1_BIN.gff\n# Intersect gene annotations\nbedtools subtract -a unicorn1_BIN.gff -b temp.gff > unicorn1_BIN_temp.gff\n# Merge annotations and bin file\nperl genome_bin/rename_BIN_GFF.pl unicorn1_BIN_temp.gff unicorn1_BIN_filter.gff\ncat unicorn1_BIN_filter.gff temp.gff > unicorn1_ALL.gff\nsort -k 1,1 -k4,4n unicorn1_ALL.gff > genome_annotation.gff\n# Compress\ngzip -f genome_annotation.gff\n# Clean-up\nrm temp.gff unicorn1_BIN.gff unicorn1_BIN_temp.gff unicorn1_BIN_filter.gff unicorn1_ALL.gff\n")),(0,a.kt)("h2",{id:"customizing-filter"},"Customizing filter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# bedtools intersect -v -abam $OUTPUT/$SAMPLE/orf.bam -b $DATABASE/blacklist_filter/blacklist.bed > $OUTPUT/$SAMPLE/orf_filter.bam\nmv /path/to/blacklist_filter.bed /path/to/EpiID-DB/blacklist_filter/blacklist.bed\n")))}f.isMDXComponent=!0}}]);