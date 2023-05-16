---
id: epitopeid
title: Usage
sidebar_label: Usage
---

<!-- ![epitopeid-icon](/genopipe-img/epitopeid-icon.png)-->

__EpitopeID identifies and determines the genomic location of epitopes or other inserted sequences relative to genomic loci.__

![Figure1A](/genopipe-img/figure1a.png)


```bash
bash identify-Epitope.sh -i /path/to/FASTQ -o /path/to/output -d /path/to/genome/database -t <Threads - Default 1>
eg: bash identify-Epitope.sh -i /input -o /output -d /sacCer3_EpiID -t 2
```


## Threading (`-t`)

This optional input is used to specify the number of threads to used for the Bowtie2 alignment commands. Defaults to 1.



[saccer3-tag-ref]:https://github.com/CEGRcode/GenoPipe/tree/master/EpitopeID/sacCer3_EpiID/FASTA_tag/Tag_DB
[hg19-tag-ref]:https://github.com/CEGRcode/GenoPipe/tree/master/EpitopeID/hg19_EpiID/FASTA_tag/Tag_DB

[customize-annotations]:/docs/epitopeid#customizing-annotations
[customize-epitopes]:/docs/epitopeid#customizing-epitopes

[download-sacCer3]:/docs/epitopeid#downloading-the-saccer3-genome
[download-hg19]:/docs/epitopeid#downloading-the-hg19-genome
