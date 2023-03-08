"use strict";(self.webpackChunkgenopipe=self.webpackChunkgenopipe||[]).push([[472],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=l(n),u=o,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:o,r[1]=p;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const i={id:"epitopeid",title:"EpitopeID",sidebar_label:"EpitopeID"},r=void 0,p={unversionedId:"epitopeid",id:"epitopeid",title:"EpitopeID",description:"EpitopeID identifies and determines the genomic location of epitopes or other inserted sequences relative to genomic loci.",source:"@site/docs/epitopeid.md",sourceDirName:".",slug:"/epitopeid",permalink:"/GenoPipe-docs/docs/epitopeid",draft:!1,editUrl:"https://github.com/CEGRcode/GenoPipe-docs/docs/epitopeid.md",tags:[],version:"current",frontMatter:{id:"epitopeid",title:"EpitopeID",sidebar_label:"EpitopeID"}},s={},l=[{value:"Usage",id:"usage",level:2},{value:"Input (<code>-i</code>)",id:"input--i",level:2},{value:"Using published data downloaded from SRA",id:"using-published-data-downloaded-from-sra",level:3},{value:"Reference Files (<code>-d</code>)",id:"reference-files--d",level:2},{value:"Database structure",id:"database-structure",level:3},{value:"Downloading the sacCer3 genome",id:"downloading-the-saccer3-genome",level:3},{value:"Downloading the hg19 genome",id:"downloading-the-hg19-genome",level:3},{value:"Customizing epitopes",id:"customizing-epitopes",level:3},{value:"Customizing annotations",id:"customizing-annotations",level:3},{value:"Make <code>genome_annotation.gff.gz</code> with a different bin size",id:"make-genome_annotationgffgz-with-a-different-bin-size",level:4},{value:"Make <code>genome_annotation.gff.gz</code> with custom annotations",id:"make-genome_annotationgffgz-with-custom-annotations",level:4},{value:"Customizing filter",id:"customizing-filter",level:3},{value:"Output Report (<code>-o</code>)",id:"output-report--o",level:2},{value:"Threading (<code>-t</code>)",id:"threading--t",level:2},{value:"Example: Set-up EpitopeID and run on yeast example",id:"example-set-up-epitopeid-and-run-on-yeast-example",level:2},{value:"FAQs",id:"faqs",level:2}],d={toc:l},m="wrapper";function c(e){let{components:t,...i}=e;return(0,o.kt)(m,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"EpitopeID identifies and determines the genomic location of epitopes or other inserted sequences relative to genomic loci.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Figure1A",src:n(429).Z,width:"1894",height:"459"})),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bash identify-Epitope.sh -i /path/to/FASTQ -o /path/to/output -d /path/to/genome/database -t <Threads - Default 1>\neg: bash identify-Epitope.sh -i /input -o /output -d /sacCer3_EpiID -t 2\n")),(0,o.kt)("h2",{id:"input--i"},"Input (",(0,o.kt)("inlineCode",{parentName:"h2"},"-i"),")"),(0,o.kt)("p",null,"EpitopeID takes ",(0,o.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/gzip/manual/gzip.html"},"gzipped")," FASTQ files from single-end(SE) or paired-end(PE) datasets to run. If your FASTQ files are not already compressed, you can zip them yourself if gzip is installed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gzip XXXXX_R1.fastq\n")),(0,o.kt)("p",null,"It is expected that at least one file for each sample (even for single-end data) follows the naming convention of ",(0,o.kt)("inlineCode",{parentName:"p"},"XXXXX_R1*.fastq.gz")," and a second file if the data is paired-end following ",(0,o.kt)("inlineCode",{parentName:"p"},"XXXXX_R2*.fastq.gz"),". This is based on the Illumina naming standard."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Make sure none of the sample names used in the filenames have an occurrence of ",(0,o.kt)("inlineCode",{parentName:"p"},"_R1")," outside of the read-specifying term to avoid confusion for EpitopeID when it is determining which samples have a read2 file."),(0,o.kt)("p",{parentName:"admonition"},"For example, samples named like this will cause confusion:",(0,o.kt)("br",null),"\n\u274c ",(0,o.kt)("inlineCode",{parentName:"p"},"Sample_R13A_R1.fastq.gz")),(0,o.kt)("p",{parentName:"admonition"},"Alternatively try:",(0,o.kt)("br",null),"\n\u2705 ",(0,o.kt)("inlineCode",{parentName:"p"},"Sample-R13A_R1.fastq.gz"),(0,o.kt)("br",null),"\n\u2705 ",(0,o.kt)("inlineCode",{parentName:"p"},"SampleR13A_R1.fastq.gz"))),(0,o.kt)("h3",{id:"using-published-data-downloaded-from-sra"},"Using published data downloaded from SRA"),(0,o.kt)("p",null,"If you obtained data from SRA using sra-tools, the FASTQ files may have the read id printed in the FASTQ header like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"")),(0,o.kt)("p",null,"Currently EpitopeID does not support this format so you will need to reformat the FASTQ files. Below is an example of how to reformat each R1/R2 file for EpitopeID using ",(0,o.kt)("inlineCode",{parentName:"p"},"SRR10054430")," as an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Reformat quality score header and strip SRA read id to use raw read id to original sequencer-determined id\n# unzip | reformat with sed | zip > output\ngunzip -dc SRR10054430_1.fastq.gz | sed 's/+.*/+/g; s/\\@SRR[0-9]\\{7\\}\\.[0-9]\\+ /\\@/g' | gzip -c > SRR10054430_R1.fastq.gz\ngunzip -dc SRR10054430_2.fastq.gz | sed 's/+.*/+/g; s/\\@SRR[0-9]\\{7\\}\\.[0-9]\\+ /\\@/g' | gzip -c > SRR10054430_R2.fastq.gz\n")),(0,o.kt)("h2",{id:"reference-files--d"},"Reference Files (",(0,o.kt)("inlineCode",{parentName:"h2"},"-d"),")"),(0,o.kt)("p",null,'For EpitopeID, this is the "database" or directory with four types of reference files used by ',(0,o.kt)("inlineCode",{parentName:"p"},"identify-Epitope.sh"),". You will notice that EpitopeID provides reference files for both yeast (",(0,o.kt)("inlineCode",{parentName:"p"},"sacCer3_EpiID"),") and human (",(0,o.kt)("inlineCode",{parentName:"p"},"hg19_EpiID"),") so you can quickly get started without building up the database from scratch. However, you are free to customize and build your own set of files (e.g. add different epitope tags to check for, use a different genome build)."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"sacCer3(yeast)"),(0,o.kt)("th",{parentName:"tr",align:"center"},"hg19(human)"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"AID"),(0,o.kt)("td",{parentName:"tr",align:"center"},"LAP-tag")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"CBP"),(0,o.kt)("td",{parentName:"tr",align:"center"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Extended-Tap"),(0,o.kt)("td",{parentName:"tr",align:"center"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"FLAG-3x"),(0,o.kt)("td",{parentName:"tr",align:"center"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"FRB"),(0,o.kt)("td",{parentName:"tr",align:"center"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"GFP"),(0,o.kt)("td",{parentName:"tr",align:"center"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"HA_v1"),(0,o.kt)("td",{parentName:"tr",align:"center"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"HA_v2"),(0,o.kt)("td",{parentName:"tr",align:"center"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"HA_v3"),(0,o.kt)("td",{parentName:"tr",align:"center"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"HaloTag"),(0,o.kt)("td",{parentName:"tr",align:"center"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"MNase_v2"),(0,o.kt)("td",{parentName:"tr",align:"center"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Myc-3x"),(0,o.kt)("td",{parentName:"tr",align:"center"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"ProteinA"),(0,o.kt)("td",{parentName:"tr",align:"center"})))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The provided database files are missing the genomic reference file for storage reasons. You will need to follow the directions below to download ",(0,o.kt)("inlineCode",{parentName:"p"},"genome.fa")," before running EpitopeID if you are planning to use the provided defaults.")),(0,o.kt)("h3",{id:"database-structure"},"Database structure"),(0,o.kt)("p",null,"Whether you use the provided reference files or create your own, the database should use the following directory structure for the sake of organization, clarity, and consistency, and ensuring that EpitopeID can find the correct reference files."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/name/of/epiDB\n|--FASTA_tag\n|  |--Tag_DB\n|  |  |--tagname1.fa\n|  |  |--tagname2.fa\n|  |  |--tagname3.fa\n|  |--ALL_TAG.fa\n|  |--ALL_TAG.fa.1.bt2       # EpitopeID will automatically generate these\n|  |--ALL_TAG.fa.2.bt2       # Bowtie2 index files if any are missing\n|  |--ALL_TAG.fa.3.bt2       #\n|  |--ALL_TAG.fa.4.bt2       #\n|  |--ALL_TAG.fa.rev.1.bt2   #\n|  |--ALL_TAG.fa.rev.2.bt2   #\n|--FASTA_genome\n|  |--genome.fa              # Not included, download separately\n|--annotation\n|  |--genome_annotation.gff.gz\n|--blacklist_filter\n|  |--blacklist.bed\n")),(0,o.kt)("p",null,"Below is a list of the the filenames that EpitopeID looks for during execution and some information on the provided yeast and human defaults."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"FASTA_tag/ALL_TAG.fa")," is the FASTA formatted collection of all epitope sequences to search for. The ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/CEGRcode/GenoPipe/tree/master/EpitopeID/sacCer3_EpiID/FASTA_tag/Tag_DB"},"yeast tag database")," and the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/CEGRcode/GenoPipe/tree/master/EpitopeID/hg19_EpiID/FASTA_tag/Tag_DB"},"human tag database")," default epitopes are listed in the table above. It is easy to customize the list to add other epitopes if your epitope of interest is not included (see sections below)."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"FASTA_genome/genome.fa")," is the reference sequence used for the genomic alignments and the sequence that the below genome annotations are based on."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"annotation/genome_annotation.gff.gz")," file defines the bin coordinates to use when localizing the epitope insertion in PE datasets. The yeast default uses SGD gene annotation coordinates to defines one bin for the length of each gene, 250bp bins flanking each set of gene coordinates, and 250bp bins breaking up the remaining intergenic regions. The human default similarly bins out the genome using 1000bp windows on the NCBI Refseq annotations."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"blacklist_filter/blacklist.bed")," allows the user to ignore artefactual or unwanted alignments.")),(0,o.kt)("p",null,"Below is more information on how to use the utility scripts to download and customize your reference files."),(0,o.kt)("h3",{id:"downloading-the-saccer3-genome"},"Downloading the sacCer3 genome"),(0,o.kt)("p",null,'Use the utility scripts by following the commands below to download the sacCer3 genome and format the chromosome names. The reference files are based on the arabic numeral chromosome naming system (i.e. "chr1", "chr2",..."chr16","chrM","2-micron").'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd /path/to/GenoPipe/EpitopeID/utility_scripts/genome_data\nbash download_sacCer3_Genome.sh\nmv genome.fa /path/to/sacCer3_EpiID/FASTA_genome/\n")),(0,o.kt)("h3",{id:"downloading-the-hg19-genome"},"Downloading the hg19 genome"),(0,o.kt)("p",null,"Use the utility scripts by following the commands below to download the hg19 genome and move it to the appropriate directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd /path/to/GenoPipe/EpitopeID/utility_scripts/genome_data\nbash download_hg19_Genome.sh\nmv genome.fa /path/to/hg19_EpiID/FASTA_genome/genome.fa\n")),(0,o.kt)("h3",{id:"customizing-epitopes"},"Customizing epitopes"),(0,o.kt)("p",null,"If you choose to add or remove epitope tags to your database, you must add/remove the files with the sequences in FASTA format to/from ",(0,o.kt)("inlineCode",{parentName:"p"},"FASTA_tag/TagDB")," and recreate the ",(0,o.kt)("inlineCode",{parentName:"p"},"FASTA_tag/ALL_TAG.fa")," file so it includes the tag sequences you want. The following commands show you how to copy ",(0,o.kt)("inlineCode",{parentName:"p"},"my-custom-tag.fa")," into the database and remake the file using the provided scripts."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Copy or remove the FASTA files with your tag sequences into the Tag_DB directory\ncp my-custom-tag.fa /path/to/Tag_DB\ncd /name/of/epiDB/FASTA_tag/Tag_DB\nbash /path/to/GenoPipe/EpitopeID/utility_scripts/update_TagDB.sh\nmv ALL_TAG.fa* /path/to/hg19_EpiID/FASTA_tag/\n")),(0,o.kt)("h3",{id:"customizing-annotations"},"Customizing annotations"),(0,o.kt)("p",null,"GenoPipe provides the utility scripts for recreating the precomputed reference annotation files. The scripts download (yeast and human) annotations and for format gene annotation files to the EpitopeID format by tiling the genome around and including gene intervals."),(0,o.kt)("p",null,"The precomputed files should work for most (yeast and human) use cases but if you need to compute these reference files yourself, use the available ",(0,o.kt)("inlineCode",{parentName:"p"},"utility_scripts")," as follows:"),(0,o.kt)("h4",{id:"make-genome_annotationgffgz-with-a-different-bin-size"},"Make ",(0,o.kt)("inlineCode",{parentName:"h4"},"genome_annotation.gff.gz")," with a different bin size"),(0,o.kt)("p",null,"If you wish to change the bin size of the tiles from the reference files GenoPipe already provides, you can rerun our scripts with a different value in the ",(0,o.kt)("inlineCode",{parentName:"p"},"-b")," flag. The following are the specific commands you can execute to do so."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# sacCer3\ncd /path/to/GenoPipe/EpitopeID/utility_scripts/annotation_data\nbash generate_sacCer3_GenomeAnnotation.sh -g /path/to/genome/sacCer3.fa -b <BIN_SIZE>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# hg19\ncd /path/to/GenoPipe/EpitopeID/utility_scripts/annotation_data\nbash generate_hg19_GenomeAnnotation.sh -g /path/to/genome/hg19.fa -b <BIN_SIZE>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# hg38\ncd /path/to/GenoPipe/EpitopeID/utility_scripts/annotation_data\nbash generate_hg38_GenomeAnnotation.sh -g /path/to/genome/hg38.fa -b <BIN_SIZE>\n")),(0,o.kt)("h4",{id:"make-genome_annotationgffgz-with-custom-annotations"},"Make ",(0,o.kt)("inlineCode",{parentName:"h4"},"genome_annotation.gff.gz")," with custom annotations"),(0,o.kt)("p",null,"There may be a few reasons to create a custom annotation reference set:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Working with non-yeast and non-human data"),(0,o.kt)("li",{parentName:"ul"},"Inserted sequence localized to non-ORF genomic location (e.g. insertions in enhancer region)"),(0,o.kt)("li",{parentName:"ul"},"Inserted sequence/epitope localized to ORF not included in precomputed annotations (rare, for genes not included in official set at the time we created the precomputed files)")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"EpitopeID actually can still detect and localize insertions from non-ORF regions but the report will only include the nearest ORF or genomic tile and may be more difficult to read/interpret. Creating a customized annotation reference file would improve clarity in the output report but is not ",(0,o.kt)("em",{parentName:"p"},"necessary"),".")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a custom ",(0,o.kt)("inlineCode",{parentName:"li"},".gff")," file including the feature with the expected localization.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It may be a good idea to include other potential off-target annotations for better readability of the report. Otherwise off-target localizations will be reported with only the genomic coordinate information."),(0,o.kt)("li",{parentName:"ul"},"If you are working with a custom genome build, you will need the gene annotations in ",(0,o.kt)("inlineCode",{parentName:"li"},".gff")," format for the genome build. ",(0,o.kt)("a",{parentName:"li",href:"https://useast.ensembl.org/info/data/ftp/index.html"},"Ensembl")," and ",(0,o.kt)("a",{parentName:"li",href:"https://hgdownload.soe.ucsc.edu/downloads.html"},"UCSC")," can be good resources for finding gene annotations associated with official genome builds across a variety of organisms. Please make sure they are in ",(0,o.kt)("inlineCode",{parentName:"li"},".gff")," file format for compatibility with the utility scripts.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Example .gff entry like an enhancer or something\n# myunicorn_annotations.gff\n\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Execute the following commands to tile the genome and merge the annotations with the tiled regions.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"MYGFF=/path/to/myunicorn_annotations.gff\nGENOME=/path/to/genome/unicorn1.fa\n# Choose a bin size (consider size of genome)\nBIN=250\n\n# Add flanking sequence to\nperl parsers/parse_Generic_GFF.pl $MYGFF $BIN temp.gff\n# Tile genome\nperl genome_bin/bin_genome.pl $GENOME $BIN unicorn1_BIN.gff\n# Intersect gene annotations\nbedtools subtract -a unicorn1_BIN.gff -b temp.gff > unicorn1_BIN_temp.gff\n# Merge annotations and bin file\nperl genome_bin/rename_BIN_GFF.pl unicorn1_BIN_temp.gff unicorn1_BIN_filter.gff\ncat unicorn1_BIN_filter.gff temp.gff > unicorn1_ALL.gff\nsort -k 1,1 -k4,4n unicorn1_ALL.gff > genome_annotation.gff\n# Compress\ngzip -f genome_annotation.gff\n# Clean-up\nrm temp.gff unicorn1_BIN.gff unicorn1_BIN_temp.gff unicorn1_BIN_filter.gff unicorn1_ALL.gff\n")),(0,o.kt)("h3",{id:"customizing-filter"},"Customizing filter"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# bedtools intersect -v -abam $OUTPUT/$SAMPLE/orf.bam -b $DATABASE/blacklist_filter/blacklist.bed > $OUTPUT/$SAMPLE/orf_filter.bam\nmv /path/to/blacklist_filter.bed /path/to/EpiID-DB/blacklist_filter/blacklist.bed\n")),(0,o.kt)("h2",{id:"output-report--o"},"Output Report (",(0,o.kt)("inlineCode",{parentName:"h2"},"-o"),")"),(0,o.kt)("p",null,"The output report is saved to the user-provided output directory in a file named based on the input FASTQ files (",(0,o.kt)("inlineCode",{parentName:"p"},"/path/to/output/XXXXX_R1-ID.tab"),"). Below is a sample report based on the results from running EpitopeID on the ENCODE ",(0,o.kt)("a",{parentName:"p",href:"https://www.encodeproject.org/files/ENCFF415CJF/"},"ENCFF415CJF")," sample."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"EpitopeID   EpitopeCount\nLAP-tag 435\n\nGeneID  EpitopeID   EpitopeLocation EpitopeCount    pVal\nNR4A1|chr12:52416616-52453291   LAP-tag C-term  9   3.580493355965414e-24\n")),(0,o.kt)("p",null,"The first part of the report shows which epitopes in ",(0,o.kt)("inlineCode",{parentName:"p"},"Tag_DB")," were identified in the sample (",(0,o.kt)("strong",{parentName:"p"},"EpitopeID column"),") and how many reads mapped to this epitope (",(0,o.kt)("strong",{parentName:"p"},"EpitopeCount"),") to help quantify the coverage of the epitopes which relates to the confidence of the call."),(0,o.kt)("p",null,"The second part of the report shows which epitopes localized to which regions/tiles of the genome significantly (sorted by pvalue if multiple hits). The columns specify the coordinate interval (",(0,o.kt)("strong",{parentName:"p"},"GeneID"),"), which epitope maps to this locus (",(0,o.kt)("strong",{parentName:"p"},"EpitopeID"),"), if this occurs on the N or C-terminus (",(0,o.kt)("strong",{parentName:"p"},"EpitopeLocation"),"), the number of reads mapping to this tile (",(0,o.kt)("strong",{parentName:"p"},"EpitopeCount"),"), and the poisson-calculated associated p-value to indicate confidence of the site (",(0,o.kt)("strong",{parentName:"p"},"pVal"),")."),(0,o.kt)("p",null,'In this report there were 435 reads that mapped to the LAP-tag epitope. The high read count supports "the epitope was successfully integrated into the sample.""'),(0,o.kt)("p",null,"In this report there were 9 read pairs that spanned both the LAP-tag and the NR4A1 gene(at genomic locus chr12:52416616-52453291) toward the sequence encoding the C-terminus. This entry supports that the LAP-tag epitope was integrated at the C-terminus of NF4A1."),(0,o.kt)("h2",{id:"threading--t"},"Threading (",(0,o.kt)("inlineCode",{parentName:"h2"},"-t"),")"),(0,o.kt)("p",null,"This optional input is used to specify the number of threads to used for the Bowtie2 alignment commands. Defaults to 1."),(0,o.kt)("h2",{id:"example-set-up-epitopeid-and-run-on-yeast-example"},"Example: Set-up EpitopeID and run on yeast example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone www.github/CEGRcode/GenoPipe\ncd GenoPipe/EpitopeID/\n\n# remake the epitope Tags file and index it (if custom sequences are added)\ncd sacCer3_EpiID/FASTA_tag/Tag_DB\n  ## add custom sequences here ##\nbash ../../../utility_scripts/update_TagDB.sh\nmv ALL_TAG.fa* ../\n# download the genome\ncd ../../../utility_scripts/genome_data/\nbash download_sacCer3_Genome.sh\nmv genome.fa ../../sacCer3_EpiID/FASTA_genome/\n# download annotations\n# cd ../annotation_data/\n# bash generate_sacCer3_GenomeAnnotation.sh -g ../../sacCer3_EpiID/FASTA_genome/genome.fa -b 250\n# mv genome_annotation.gff.gz ../../sacCer3_EpiID/annotation/\ncd ../../\n# run EpitopeID on FASTQs in the `sample` directory below\nmkdir ../output\nbash identify_Epitope.sh -i ../samples/ -o ../output/ -d sacCer3_EpiID -t 4\n")),(0,o.kt)("h2",{id:"faqs"},"FAQs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Q: My epitope sequence isn't part of the sequences in the default provided reference files (either ",(0,o.kt)("inlineCode",{parentName:"li"},"sacCer3_EpiID")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"hg19_EpiID"),"). Can I still use EpitopeID for checking my samples?",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Yes! Please scroll up to the ",(0,o.kt)("a",{parentName:"li",href:"/docs/epitopeid#customizing-annotations"},(0,o.kt)("strong",{parentName:"a"},"Customizing annotations"))," section for directions on how to add your epitope sequence to the database."))),(0,o.kt)("li",{parentName:"ul"},"Q: I added my own custom tag sequences to the ",(0,o.kt)("inlineCode",{parentName:"li"},"TagDB")," directory but when I run EpitopeID, none of my samples are getting significant hits to the new tags.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"There are a few things you should check before concluding that the epitope is not present in your sample:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Did you recreate the ",(0,o.kt)("inlineCode",{parentName:"li"},"ALL_TAG.fa")," file? Open it up to make sure your sequences are there. If they aren't there, follow the commands in the ","[",(0,o.kt)("strong",{parentName:"li"},"Customizing epitopes"),"][customizing-epitopes]"," section above."),(0,o.kt)("li",{parentName:"ol"},"Did you recreate the Bowtie2 index files for ",(0,o.kt)("inlineCode",{parentName:"li"},"ALL_TAG.fa"),"? Remove at least one of the Bowtie2 index files (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"ALL_TAG.1.bt2"),") and run EpitopeID. EpitopeID automatically recreates the index if any files are missing but it does not check that the index files match the FASTA sequence. If you modify the ",(0,o.kt)("inlineCode",{parentName:"li"},"ALL_TAG.fa")," without recreating the BWA index files, EpitopeID will run on the old set of tag sequences."))))),(0,o.kt)("li",{parentName:"ul"},"Q: What does the N-term or C-term mean in the output?",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For each gene, three bins are created for (1) the ORF interval, (2) a bin upstream of the start codon, (3) a bin downstream of the stop codon, each of which correspond to the gene, N-terminus, or C-terminus of the peptide chain gene product. If EpitopeID is mapping more strongly to the N or C-terminus, it is likely that the epitope is tagged to that side of the endogenous peptide chain."),(0,o.kt)("li",{parentName:"ul"},"Note: if the epitope sequence provided is not the protein-coding sense strand, then you should invert your interpretation of the report for which side of the endogenous peptide chain is tagged."))),(0,o.kt)("li",{parentName:"ul"},"Q: I tried running EpitopeID on my samples using ",(0,o.kt)("inlineCode",{parentName:"li"},"sacCer3_EpiID"),"/",(0,o.kt)("inlineCode",{parentName:"li"},"hg19_EpiID")," and it is telling me that I am missing the ",(0,o.kt)("inlineCode",{parentName:"li"},"genomic.fa")," file. Where can I find it?",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'Due to storage reasons, we do not include the genomic reference in the Github download for GenoPipe. However, we do provide scripts that will help you to download and format the reference genomes that we used. See "Downloading the sacCer3/hg19 genome".'),(0,o.kt)("li",{parentName:"ul"},"Otherwise you can use your own genomic sequence. If you do, then remember to rename it to ",(0,o.kt)("inlineCode",{parentName:"li"},"genome.fa")," and move it to the appropriate directory. Also make sure that the annotations you use are based on the same reference build."))),(0,o.kt)("li",{parentName:"ul"},"Q: I ran EpitopeID on some samples I downloaded from SRA. Why is EpitopeID throwing an error?",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"EpitopeID currently does not support samples with read IDs in the FASTQ quality score header section. Please read more about ",(0,o.kt)("a",{parentName:"li",href:"/docs/epitopeid#using-published-data-downloaded-from-sra"},"running EpitopeID on data from public repositories"))))))}c.isMDXComponent=!0},429:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/figure1a-f28316ada6378d6d3299c663bfe961eb.png"}}]);