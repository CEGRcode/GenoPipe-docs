---
id: structure
title: ''
sidebar_label: Structure (EpiDB)
---

## Structure (EpiDB)
Whether you use the provided reference files or create your own, the database should use the following directory structure to ensure that EpitopeID can find the correct reference files.
```
/name/of/epiDB
|--FASTA_tag
|  |--Tag_DB
|  |  |--tagname1.fa
|  |  |--tagname2.fa
|  |  |--tagname3.fa
|  |--ALL_TAG.fa
|  |--ALL_TAG.fa.1.bt2       # EpitopeID will automatically generate these
|  |--ALL_TAG.fa.2.bt2       # Bowtie2 index files if any are missing
|  |--ALL_TAG.fa.3.bt2       #
|  |--ALL_TAG.fa.4.bt2       #
|  |--ALL_TAG.fa.rev.1.bt2   #
|  |--ALL_TAG.fa.rev.2.bt2   #
|--FASTA_genome
|  |--genome.fa              # Not included, download separately
|--annotation
|  |--genome_annotation.gff.gz
|--blacklist_filter
|  |--blacklist.bed
```

Below describes the files that EpitopeID looks for during execution and some information on the provided yeast and human defaults.

* The `FASTA_tag/ALL_TAG.fa` is the FASTA formatted collection of all epitope sequences to search for. The [yeast tag database][saccer3-tag-ref] and the [human tag database][hg19-tag-ref] default epitopes are listed in the table above. It is easy to customize the list to add other epitopes if your epitope of interest is not included (see sections below).
* The `FASTA_genome/genome.fa` is the reference sequence used for the genomic alignments and the sequence that the below genome annotations are based on.
* The `annotation/genome_annotation.gff.gz` file defines the bin coordinates to use when localizing the epitope insertion in PE datasets. The yeast default uses SGD gene annotation coordinates to defines one bin for the length of each gene, 250bp bins flanking each set of gene coordinates, and 250bp bins breaking up the remaining intergenic regions. The human default similarly bins out the genome using 1000bp windows on the NCBI Refseq annotations.
* The `blacklist_filter/blacklist.bed` allows the user to ignore artefactual or unwanted alignments.


[saccer3-tag-ref]:https://github.com/CEGRcode/GenoPipe/tree/master/EpitopeID/sacCer3_EpiID/FASTA_tag/Tag_DB
[hg19-tag-ref]:https://github.com/CEGRcode/GenoPipe/tree/master/EpitopeID/hg19_EpiID/FASTA_tag/Tag_DB
